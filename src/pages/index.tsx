import React from "react";
import SectionStatistics from "../components/SectionStatistics/SectionStatistics";
import WorldTable from "../components/WorldTable/WorldTable";
import { Typography, Col, Row, Avatar, Divider, Statistic, Card } from "antd";
import { NextSeo } from "next-seo";
import {
  useGetWorldDataQuery,
  useGetVnDataQuery,
  useGetDataTableQuery,
  useGetHistoricalDataQuery,
} from "../services/covidDataApi";
import { useGetDataCovidQuery } from "../services/serverDataApi";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import SearchByProvince from "../features/SearchByProvince/SearchByProvince";

const HomePage: React.FC = () => {
  const { data, isLoading } = useGetWorldDataQuery();
  const vnData = useGetVnDataQuery();
  const tableData = useGetDataTableQuery();
  const timelineData = useGetHistoricalDataQuery();
  const serverResponse = useGetDataCovidQuery();

  if (
    isLoading ||
    vnData.isLoading ||
    tableData.isLoading ||
    timelineData.isLoading ||
    serverResponse.isLoading
  ) {
    return <LoadingScreen></LoadingScreen>;
  } else {
    return (
      <>
        <NextSeo
          title="Số liệu Covid-19 tại Việt Nam | Thực hiện bởi Huy Nguyen"
          titleTemplate="Số liệu Covid-19 tại Việt Nam | Thực hiện bởi Huy Nguyen"
          description="Số liệu Covid-19 tại Việt Nam"
        ></NextSeo>
        <div style={{ maxWidth: "1200px", padding: "1rem", margin: "auto" }}>
          <div style={{ textAlign: "center" }}>
            <Typography.Title level={1} style={{ marginBottom: "0.5rem" }}>
              Số liệu Covid-19 tại Việt Nam{" "}
              <Avatar
                shape="square"
                src="/images/vietnam.png"
                alt="vietnam Icon"
              />
            </Typography.Title>
            <Typography.Text>
              {serverResponse.data?.updatedTime.split(".")[1]}
            </Typography.Text>
          </div>
          <Divider />
          <div style={{ maxWidth: "345px", margin: "1rem auto" }}>
            <Typography.Title level={3} style={{ textAlign: "center" }}>
              SỐ CA NHIỄM
            </Typography.Title>
            <Row gutter={[8, 8]}>
              <Col span={12}>
                <Statistic
                  title="Hôm nay"
                  value={serverResponse.data?.totalCasesToday}
                  style={{
                    backgroundColor: "var(--color-today-case)",
                    color: "black",
                    textAlign: "center",
                    padding: "0.5rem 0",
                    borderRadius: "1rem",
                  }}
                ></Statistic>
              </Col>
              <Col span={12}>
                <Statistic
                  title="Toàn quốc"
                  value={serverResponse.data?.totalCases}
                  style={{
                    backgroundColor: "var(--color-total-case)",
                    color: "white",
                    textAlign: "center",
                    padding: "0.5rem 0",
                    borderRadius: "1rem",
                  }}
                ></Statistic>
              </Col>
            </Row>
          </div>

          <section>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={24} md={16} lg={16}>
                <Card>
                  <Typography.Text strong style={{ fontSize: 16 }}>
                    {serverResponse.data?.timeLastestNews}
                  </Typography.Text>
                  <p
                    style={{
                      whiteSpace: "pre-line",
                      fontSize: "16px",
                    }}
                  >
                    {serverResponse.data?.lastestNews}
                  </p>
                  <div>
                    <Typography.Text strong>Nguồn: </Typography.Text>{" "}
                    <a
                      href="https://ncov.moh.gov.vn/dong-thoi-gian"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://ncov.moh.gov.vn/dong-thoi-gian
                    </a>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                {data && vnData.data && (
                  <SectionStatistics
                    worldData={data}
                    vnData={vnData.data}
                  ></SectionStatistics>
                )}
              </Col>
            </Row>
          </section>

          <Divider />
          <section>
            {timelineData.data && serverResponse.data && (
              <SearchByProvince
                timelineVN={timelineData.data?.timeline.cases}
                serverResponse={serverResponse.data}
              ></SearchByProvince>
            )}
          </section>
          <Divider></Divider>
          {tableData.data && (
            <WorldTable tableData={tableData.data}></WorldTable>
          )}
        </div>
      </>
    );
  }
};

export default HomePage;
