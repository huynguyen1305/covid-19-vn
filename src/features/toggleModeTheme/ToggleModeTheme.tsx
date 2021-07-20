import React from "react";
import { Button, Tooltip } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleTheme } from "./toggleModeThemeSlice";
import { FiSun, FiMoon } from "react-icons/fi";

function SwitchDarkmode() {
  const dispatch = useAppDispatch();
  const { typeTheme } = useAppSelector((state) => state.toggleModeTheme);

  return (
    <>
      <Tooltip title="Change Theme">
        <Button
          shape="circle"
          icon={typeTheme === "light" ? <FiSun /> : <FiMoon />}
          onClick={() => dispatch(toggleTheme())}
        />
      </Tooltip>
    </>
  );
}

export default SwitchDarkmode;
