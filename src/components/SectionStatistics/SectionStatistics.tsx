import React from "react";
import {
  Row,
  Col,
  Statistic,
  Card,
  Tag,
  StatisticProps,
  Typography,
} from "antd";
import styled from "styled-components";
import { CovidData } from "../../services/covidDataApi";

interface StatisticPropsCustom extends StatisticProps {
  bgColor?: string;
  txtColor?: string;
}
interface SectionStatisticsProps {
  worldData: CovidData;
  vnData: CovidData;
}

const StatisticCustom: React.FC<StatisticPropsCustom> = styled(Statistic)`
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 1rem;
  background-color: ${(props: StatisticPropsCustom) => props.bgColor};
  color: ${(props: StatisticPropsCustom) => props.txtColor};
  .ant-statistic-title {
    color: currentColor;
    opacity: 0.9;
  }
  .ant-statistic-content {
    color: currentColor;
  }
`;

const tabList = [
  {
    key: "key1",
    tab: "Việt Nam",
  },
  {
    key: "key2",
    tab: "Thế Giới",
  },
];

const SectionStatistics: React.FC<SectionStatisticsProps> = ({
  worldData,
  vnData,
}) => {
  const [key, setKey] = React.useState<keyof typeof contentList>("key1");
  const contentList = {
    key1: (
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <StatisticCustom
            value={vnData.cases}
            title="Nhiễm Bệnh"
            bgColor="var(--color-total-case)"
            txtColor="#FFF"
          ></StatisticCustom>
        </Col>
        <Col span={24}>
          <StatisticCustom
            value={vnData.active}
            title="Đang điều trị"
            bgColor="var(--color-total-recovering)"
            txtColor="#FFF"
          ></StatisticCustom>
        </Col>
        <Col span={24}>
          <StatisticCustom
            value={vnData.recovered}
            title="Khỏi bệnh"
            bgColor="var(--color-total-recovered)"
            txtColor="#FFF"
          ></StatisticCustom>
        </Col>
        <Col span={24}>
          <StatisticCustom
            value={vnData.deaths}
            title="Tử vong"
            bgColor="var(--color-total-death)"
            txtColor="#FFF"
          ></StatisticCustom>
        </Col>
      </Row>
    ),
    key2: (
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <StatisticCustom
            value={worldData.cases}
            title="Nhiễm Bệnh"
            bgColor="var(--color-total-case)"
            txtColor="#FFF"
          ></StatisticCustom>
        </Col>
        <Col span={24}>
          <StatisticCustom
            value={worldData.active}
            title="Đang điều trị"
            bgColor="var(--color-total-recovering)"
            txtColor="#FFF"
          ></StatisticCustom>
        </Col>
        <Col span={24}>
          <StatisticCustom
            value={worldData.recovered}
            title="Khỏi bệnh"
            bgColor="var(--color-total-recovered)"
            txtColor="#FFF"
          ></StatisticCustom>
        </Col>
        <Col span={24}>
          <StatisticCustom
            value={worldData.deaths}
            title="Tử vong"
            bgColor="var(--color-total-death)"
            txtColor="#FFF"
          ></StatisticCustom>
        </Col>
      </Row>
    ),
  };

  return (
    <>
      <Card
        style={{ width: "100%" }}
        tabList={tabList}
        activeTabKey={key}
        onTabChange={(key) => {
          if (key === "key1") return setKey("key1");
          if (key === "key2") return setKey("key2");
        }}
      >
        {contentList[key]}
      </Card>
    </>
  );
};

export default SectionStatistics;
