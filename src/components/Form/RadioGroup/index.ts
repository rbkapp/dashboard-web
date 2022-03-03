import styled from "styled-components";
import { Radio } from "antd";

export const StyledRadioGroup = styled(Radio.Group)`
  width: 100%;
  flex-wrap: wrap;
  /* text-align: center; */
`;

export const RadioButton = styled(Radio.Button)`
  margin: 5px;

  :hover {
    color: ${(p) => p.theme.colors.pink} !important;
  }

  &.ant-radio-button-wrapper {
    height: fit-content;
  }

  &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: ${(p) => p.theme.colors.pink} !important;
    border-color: ${(p) => p.theme.colors.pink} !important;

    :focus,
    :focus-within {
      box-shadow: none;
    }

    ::before,
    ::after {
      background-color: ${(p) => p.theme.colors.pink} !important;
    }
  }
`;
