import styled from "styled-components";
import { Select as AntdSelect } from "antd";
import { Colors } from "constants/Colors";

export const Select = styled(AntdSelect)`
  .ant-select-focused > .ant-select-selector {
    box-shadow: none;
  }
  & > .ant-select-selector {
    min-width: 81px;
    width: 191px;
    height: 36px !important;
    font: 400 1.2rem Poppins, sans-serif;
    color: ${Colors.gray30} !important;
    border-radius: 8px !important;
    border: 2px solid ${Colors.gray10} !important;
    align-items: center;

    :hover {
      border-color: ${Colors.primary100} !important;
    }

    :focus {
      box-shadow: none;
    }
  }

  &.ant-select-disabled > .ant-select-selector {
    cursor: not-allowed;
    color: ${Colors.gray10} !important;
    background-color: ${Colors.gray60} !important;
  }
  & > .ant-select-selector::placeholder {
    color: ${Colors.gray10} !important;
    font: 400 0.8rem Poppins, sans-serif !important;
  }
  &
    > .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    box-shadow: none !important;
    border: 1px solid ${Colors.gray10} !important;
  }
  .ant-select-arrow {
    color: ${Colors.gray20} !important;
  }

  .ant-select-item.ant-select-item-option.ant-select-item-option-active {
    background-color: ${Colors.gray40} !important;
  }
`;
