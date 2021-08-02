import React from "react";
import { Line } from "@ant-design/charts";
import { Card, Typography } from "antd";

interface TimelineChartProps {
  timelineDataByProvince: { province: string; data: [] }[];
}

const config = {
  xField: "day",
  yField: "value",
  smooth: true,
  color: "#ff4d4f",
  point: {
    size: 4,
    shape: "dot",
  },
};

const TimeLineChart: React.FC<TimelineChartProps> = ({
  timelineDataByProvince,
}) => {
  return (
    <Card
      title={
        <Typography.Title level={4} style={{ textTransform: "uppercase" }}>
          {timelineDataByProvince[0].province}
        </Typography.Title>
      }
    >
      <Line
        {...config}
        data={timelineDataByProvince[0].data}
        tooltip={{
          formatter: (datum: any) => {
            return {
              name: `Số ca mắc`,
              value: `${datum.value}`,
            };
          },
        }}
      ></Line>
    </Card>
  );
};

export default TimeLineChart;
