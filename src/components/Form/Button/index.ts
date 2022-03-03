import styled from "styled-components";
import { Button } from "antd";
import { Colors } from "constants/Colors";

export const PrimaryButton = styled(Button)`
  width: 100%;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  background-color: ${Colors.primary100};
  box-shadow: 0px 15px 30px rgba(212, 0, 80, 0.15);
  border-color: ${Colors.primary100};

  border-radius: 14px;

  font: 700 1.4rem Cairo, sans-serif;

  margin-top: 20px;
  padding: 25px;

  &.vertical {
    display: flex !important;
    padding: 0 10px;
    margin-right: 0;

    svg {
      margin-right: 6px;
    }
  }

  :hover,
  :active,
  :focus {
    background-color: ${Colors.primary100};
    font: 700 1.4rem Cairo, sans-serif;
    color: #fff;
  }
  svg {
    margin-right: 12px;
  }
`;
