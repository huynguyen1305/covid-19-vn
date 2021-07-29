import React, { useState } from "react";
import { Table, Statistic, Card, Select, Typography } from "antd";
import { CovidDataTableResponse } from "../../services/covidDataApi";
import styled from "styled-components";

const SectionTableWrapper = styled.section``;

interface SectionTableProps {
  tableData: CovidDataTableResponse;
}

const WorldTable: React.FC<SectionTableProps> = ({ tableData }) => {
  const [data, setData] = useState(tableData);
  const columns = [
    {
      title: "Nước",
      dataIndex: "country",
      key: "country",
      fixed: true,
      sorter: {
        compare: (a: any, b: any) =>
          a.country > b.country ? 1 : b.country > a.country ? -1 : 0,
      },
    },

    {
      title: "Ca nhiễm trong ngày",
      dataIndex: "todayCases",
      key: "todayCases",
      ellipsis: true,
      sorter: {
        compare: (a: any, b: any) => a.todayCases - b.todayCases,
      },
      render: (todayCases: any) => {
        return {
          props: {
            style: {
              backgroundColor: "var(--color-today-case)",
            },
          },
          children: (
            <Statistic
              valueStyle={{ fontSize: "14px", color: "black" }}
              value={`+${todayCases}`}
            ></Statistic>
          ),
        };
      },
    },
    {
      title: "Tổng ca nhiễm",
      dataIndex: "cases",
      key: "cases",
      ellipsis: true,
      sorter: {
        compare: (a: any, b: any) => a.cases - b.cases,
      },
      render: (cases: any) => {
        return {
          props: {
            style: { backgroundColor: "var(--color-total-case)" },
          },
          children: (
            <Statistic
              valueStyle={{ fontSize: "14px", color: "#FFF" }}
              value={cases}
            ></Statistic>
          ),
        };
      },
    },

    {
      title: "Ca khỏi trong ngày",
      dataIndex: "todayRecovered",
      key: "todayRecovered",
      ellipsis: true,
      sorter: {
        compare: (a: any, b: any) => a.todayRecovered - b.todayRecovered,
      },
      render: (todayRecovered: any) => {
        return {
          props: {
            style: {
              backgroundColor: "var(--color-today-recovered)",
            },
          },
          children: (
            <Statistic
              valueStyle={{ fontSize: "14px", color: "black" }}
              value={`+${todayRecovered}`}
            ></Statistic>
          ),
        };
      },
    },
    {
      title: "Tổng ca khỏi",
      dataIndex: "recovered",
      key: "recovered",
      ellipsis: true,
      sorter: {
        compare: (a: any, b: any) => a.recovered - b.recovered,
      },
      render: (recovered: any) => {
        return {
          props: {
            style: { backgroundColor: "var(--color-total-recovered)" },
          },
          children: (
            <Statistic
              valueStyle={{ fontSize: "14px", color: "#FFF" }}
              value={recovered}
            ></Statistic>
          ),
        };
      },
    },

    {
      title: "Ca tử vong trong ngày",
      dataIndex: "todayDeaths",
      key: "todayDeaths",
      ellipsis: true,
      sorter: {
        compare: (a: any, b: any) => a.todayDeaths - b.todayDeaths,
      },
      render: (todayDeaths: any) => {
        return {
          props: {
            style: {
              backgroundColor: "var(--color-today-death)",
            },
          },
          children: (
            <Statistic
              valueStyle={{ fontSize: "14px", color: "black" }}
              value={`+${todayDeaths}`}
            ></Statistic>
          ),
        };
      },
    },
    {
      title: "Tổng ca tử vong",
      dataIndex: "deaths",
      key: "deaths",
      ellipsis: true,
      sorter: {
        compare: (a: any, b: any) => a.deaths - b.deaths,
      },
      render: (deaths: any) => {
        return {
          props: {
            style: { backgroundColor: "var(--color-total-death)" },
          },
          children: (
            <Statistic
              valueStyle={{ fontSize: "14px", color: "#FFF" }}
              value={deaths}
            ></Statistic>
          ),
        };
      },
    },
  ];
  const handleSelected = (value: string) => {
    const filteredData = tableData.filter((data) => data.country === value);
    setData(filteredData);
  };

  return (
    <SectionTableWrapper>
      <Card style={{ width: "100%" }}>
        <Typography.Title level={4}>CHI TIẾT CÁC NƯỚC</Typography.Title>
        <Select
          showArrow={false}
          showSearch
          notFoundContent={null}
          style={{ width: "100%", margin: "1rem 0" }}
          allowClear={true}
          placeholder="Nhập tên nước cần tìm VD: Vietnam"
          optionFilterProp="country"
          onSelect={handleSelected}
          autoClearSearchValue={false}
          onClear={() => setData(tableData)}
          filterOption={(input, option: any) => {
            return (
              option.children
                .toLowerCase()
                .indexOf(input.toLowerCase().trim()) >= 0
            );
          }}
        >
          {tableData.map((data) => {
            return (
              <Select.Option key={data.country} value={data.country}>
                {data.country}
              </Select.Option>
            );
          })}
        </Select>

        <Table
          dataSource={data}
          columns={columns}
          size="small"
          pagination={{
            pageSize: 10,
          }}
          scroll={{ x: 900 }}
          rowKey="country"
          bordered
        />
      </Card>
    </SectionTableWrapper>
  );
};

export default WorldTable;
