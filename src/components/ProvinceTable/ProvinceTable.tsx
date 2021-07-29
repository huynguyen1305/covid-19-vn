import React from "react";
import { Table, Statistic } from "antd";

import { ServerDataResponse } from "../../services/serverDataApi";

interface IProvinceTable {
  provinceTable: ServerDataResponse[];
}

const ProvinceTable: React.FC<IProvinceTable> = ({ provinceTable }) => {
  const columns = [
    {
      title: "Tỉnh thành",
      dataIndex: "province",
      key: "province",
      sorter: {
        compare: (a: any, b: any) =>
          a.country > b.country ? 1 : b.country > a.country ? -1 : 0,
      },
    },
    {
      title: "Ca nhiễm mới",
      dataIndex: "today",
      key: "today",
      sorter: {
        compare: (a: any, b: any) => a.today - b.today,
      },
      render: (today: any) => {
        return {
          props: {
            style: { backgroundColor: "var(--color-today-case)" },
          },
          children: (
            <Statistic
              valueStyle={{ fontSize: "14px", color: "#000" }}
              value={`+${today}`}
            ></Statistic>
          ),
        };
      },
    },
    {
      title: "Tổng ca nhiễm",
      dataIndex: "total",
      key: "total",
      sorter: {
        compare: (a: any, b: any) => a.total - b.total,
      },
      render: (total: any) => {
        return {
          props: {
            style: { backgroundColor: "#f5222d" },
          },
          children: (
            <Statistic
              valueStyle={{ fontSize: "14px", color: "#FFF" }}
              value={total}
            ></Statistic>
          ),
        };
      },
    },
  ];

  return (
    <>
      <Table
        dataSource={provinceTable}
        columns={columns}
        size="small"
        pagination={{
          pageSize: 30,
        }}
        scroll={{ y: 432 }}
        rowKey="province"
        bordered
      />
    </>
  );
};

export default ProvinceTable;
