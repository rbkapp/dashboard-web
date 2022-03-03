import styled from "styled-components";
import { Radio as AntRadio } from "antd";
import { Colors } from "constants/Colors";

export const Radio = styled(AntRadio)`
  margin: 10px 0;
  &>span.ant-radio + span{
    font: 600 1rem Poppins, sans-serif;
    color: #A79FBC;
  }
  &>span.ant-radio.ant-radio-checked  + span{
    font: 600 1rem Poppins, sans-serif;
    color: #66588A;
  }
  .ant-radio .ant-radio-inner{
    background-color: #fff;
    border: 1px solid #9187AB;
    border-radius: 50%;
  }
  .ant-radio.ant-radio-checked .ant-radio-inner{
    background-color: ${Colors.primary100};
    border: 1px solid  ${Colors.primary100};
    border-radius: 50%;
    &::after{
      width: 6px;
      height: 6px;
      top: 4px;
      left: 4px;
      background-color: ${Colors.white};
    }
  }
  .ant-radio.ant-radio-checked::after{
    border: 1px solid  ${Colors.primary100};
    border-radius: 50%;
  }
`
