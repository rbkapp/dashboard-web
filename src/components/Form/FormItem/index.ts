import styled from "styled-components";
import { Form } from "antd";
import { Colors } from "constants/Colors";

export const FormItem = styled(Form.Item)`
  margin: 12px 0;
  .ant-form-item-label {
    padding: 0;
  }
  .ant-form-item-label > label {
    font: 500 1.2rem/2.2rem Poppins, sans-serif;
    color: #a79fbc;
    svg {
      margin-right: 12px;
    }
    &.ant-form-item-required::before {
      display: none;
    }
  }
  .ant-form-item-explain {
    margin-top: 4px;
    font: 400 1.8rem Cairo, sans-serif;
  }
  .masked-input {

    height: 36px;
    border-radius: 0;
    border: 0;
    border-bottom: 2px solid ${Colors.gray10};
    color: ${Colors.gray30};
    font: 400 1.2rem Poppins, sans-serif;
    :hover {
      border-color: ${Colors.primary100};
      box-shadow: none;
    }

    :focus {
      border-color: ${Colors.secondary100};
      box-shadow: none;
    }

    .ant-input-clear-icon {
      color: ${Colors.gray30};
    }

    ::placeholder {
      color: ${Colors.gray10};
    }

    :disabled {
      cursor: not-allowed;
      color: ${Colors.gray10};
      background-color: ${Colors.gray60};
    }
  }
`;
