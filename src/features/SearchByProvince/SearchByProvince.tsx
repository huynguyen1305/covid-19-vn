import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Typography,
  Col,
  Row,
  Avatar,
  Divider,
  Statistic,
  Select,
  Card,
} from "antd";

import ProvinceTable from "../../components/ProvinceTable/ProvinceTable";

const TimeLineChart = dynamic(
  () => import("../../components/TimelineChart/TimeLineChart"),
  { ssr: false }
);

interface ISearchByProvince {
  timelineVN: any;
  serverResponse: any;
}

const flatenObj = (obj: any) => {
  let flatened = [];
  for (const [key, value] of Object.entries(obj)) {
    flatened.push({
      day: new Date(key).toLocaleDateString("en-GB"),
      value: value,
    });
  }
  return {
    province: "Toàn quốc",
    data: flatened,
  };
};

const SearchByProvince: React.FC<ISearchByProvince> = ({
  timelineVN,
  serverResponse,
}) => {
  const [select, setSelect] = useState("Toàn quốc");
  const timelineTQ = flatenObj(timelineVN);
  const timelineProvince = [timelineTQ, ...serverResponse.timelineProvince];
  const tableProvince = [
    {
      province: "Toàn quốc",
      today: Number(serverResponse.totalCasesToday),
      total: Number(serverResponse.totalCases),
    },
    ...serverResponse.tableDataProvince,
  ];
  const dataTimeline = timelineProvince.filter(
    (data) => data.province === select
  );
  const dataTableFN = () => {
    if (select === "Toàn quốc") {
      return tableProvince;
    } else return tableProvince.filter((data) => data.province === select);
  };
  const dataTable = dataTableFN();

  const handleSelected = (value: string) => {
    setSelect(value);
  };
  return (
    <Card title="CHI TIẾT CÁC TỈNH THÀNH">
      <Select
        showArrow={false}
        showSearch
        notFoundContent={null}
        style={{ width: "100%", marginBottom: "1rem" }}
        allowClear={true}
        placeholder="Nhập tên tỉnh thành VD: TP HCM, ...."
        optionFilterProp="province"
        onSelect={handleSelected}
        autoClearSearchValue={false}
        onClear={() => setSelect("Toàn quốc")}
        filterOption={(input: any, option: any) => {
          return (
            option.children.toLowerCase().indexOf(
              input
                .toLowerCase()
                .trim()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D")
            ) >= 0
          );
        }}
      >
        {timelineProvince.map((data) => {
          return (
            <Select.Option key={data.province} value={data.province}>
              {data.province
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D")}
            </Select.Option>
          );
        })}
      </Select>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={16} lg={16}>
          {dataTimeline && (
            <TimeLineChart
              timelineDataByProvince={dataTimeline}
            ></TimeLineChart>
          )}
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          {dataTable && (
            <ProvinceTable provinceTable={dataTable}></ProvinceTable>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default SearchByProvince;
