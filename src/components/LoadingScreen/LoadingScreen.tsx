import React from "react";
import { Spin, Typography } from "antd";

const LoadingScreen: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        flexDirection: "column",
        background: "var(--color-background)",
      }}
    >
      <Spin size="large"></Spin>
      <br></br>
      <Typography.Title level={3}>Đang update dữ liệu ...</Typography.Title>
    </div>
  );
};

export default LoadingScreen;
