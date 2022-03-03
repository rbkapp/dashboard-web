import styled from "styled-components";
import { Input as FormInput } from "antd";
import { Colors } from "constants/Colors";

export const Input = styled(FormInput)`
  width: 100%;
  height: 36px;
  border-radius: 0px;
  border: none;
  border-bottom: 2px solid ${Colors.gray10};
  color: ${Colors.gray30};

  font: 400 1.2rem Poppins, sans-serif;

  input {
    color: ${Colors.gray30};

    ::placeholder {
      color: ${Colors.gray10};
    }
  }

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
  /* @media screen and (max-width: 425px) {
    width: auto;
  } */
`;

export const TextArea = styled(FormInput.TextArea)`
  &.ant-input-textarea {
    width: 100%;
    height: 36px;
    resize: none;
    color: ${Colors.gray30};
    font: 400 1.2rem Poppins, sans-serif;

    ::placeholder {
      color: ${Colors.gray10};
    }

    :disabled {
      cursor: not-allowed;
      color: ${Colors.gray30} !important;
      background-color: ${Colors.gray60} !important;
    }
    .ant-input[disabled]{
      font: 400 1.2rem Poppins, sans-serif;

      color: ${Colors.gray10} !important;
      background-color: ${Colors.gray60} !important;
    }
  }

  textarea {
    color: ${Colors.gray30};
    font: 400 1.4rem Poppins, sans-serif;

    border-radius: 8px !important;
    border: 2px solid ${Colors.gray10} !important;
    :hover {
      border-color: ${Colors.primary100} !important;
      border: 2px solid ${Colors.primary100} !important;
      box-shadow: none;
    }

    :focus {
      border-color: ${Colors.tertiary100} !important;
      box-shadow: none;
    }
  }

  &.ant-input-textarea-show-count::after {
    color: ${Colors.gray50};
    margin-bottom: -12px;
    margin-top: 7px;
    float: left;
    content: attr(data-count) " Caracteres";
    font: 400 0.8rem Open Sans, sans-serif;
  }
`;

export const MaskedInputItem = styled.div`
  input {
    width: 100%;
    height: 36px;
    border-radius: 6px;
    border: 2px solid ${Colors.gray30};
    color: ${Colors.gray10};
    font: 400 1.2rem Poppins, sans-serif;

    ::placeholder {
      color: ${Colors.gray60};
    }
    :focus {
      box-shadow: none;
    }

    :disabled {
      cursor: not-allowed;
      color: ${Colors.gray30};
      background-color: ${Colors.gray60};
    }
  }
`;
