import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import ToggleModeTheme from "../../features/toggleModeTheme/ToggleModeTheme";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppFooter = () => {
  return (
    <FooterWrapper>
      <div></div>
      <div style={{ textAlign: "center" }}>
        <Typography.Text italic>
          Dữ liệu được cung cấp bởi{" "}
          <a
            href="https://disease.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            disease.sh
          </a>{" "}
          &{" "}
          <a
            href="https://vnexpress.net/covid-19/covid-19-viet-nam"
            target="_blank"
            rel="noopener noreferrer"
          >
            vnexpress.net
          </a>{" "}
          &{" "}
          <a href="ncov.moh.gov.vn" target="_blank" rel="noopener noreferrer">
            Sở Y tế nvov
          </a>
        </Typography.Text>

        <br></br>
        <Typography.Text>
          Thực hiện bởi{" "}
          <a
            href="https://github.com/huynguyen1305/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Huy Nguyen
          </a>{" "}
        </Typography.Text>
      </div>
      <ToggleModeTheme></ToggleModeTheme>
    </FooterWrapper>
  );
};

export default AppFooter;
