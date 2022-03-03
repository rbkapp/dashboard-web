import styled from "styled-components";
import { Checkbox as AntCheckbox } from "antd";
import { Colors } from "constants/Colors";

export const Checkbox = styled(AntCheckbox)`
  margin: 10px 0;
  width: 30px !important;
  height: 30px;
  &>span.ant-checkbox + span{
    font: 400 1.2rem/1.2rem Poppins, sans-serif;
    color: #A79FBC;
  }
  &>span.ant-checkbox.ant-checkbox-checked  + span{
    font: 400 1.2rem/1.2rem Poppins, sans-serif;
    color: #66588A;
  }
  .ant-checkbox .ant-checkbox-inner{
    background-color: #fff;
    border: 1px solid #9187AB;
    border-radius: 3px;
  }
  .ant-checkbox.ant-checkbox-checked .ant-checkbox-inner{
    background-color: ${Colors.primary100};
    border: 1px solid  ${Colors.primary100};
    border-radius: 3px;
  }
  .ant-checkbox.ant-checkbox-checked::after{
    border: 1px solid  ${Colors.primary100};
    border-radius: 3px;
  }
`
export const CheckboxGroup = styled(AntCheckbox.Group)`
  margin: 10px 0;
  &>span.ant-checkbox + span{
    font: 400 1.2rem/1.2rem Poppins, sans-serif;
    color: #A79FBC;
  }
  &>span.ant-checkbox.ant-checkbox-checked  + span{
    font: 400 1.2rem/1.2rem Poppins, sans-serif;
    color: #66588A;
  }
  .ant-checkbox .ant-checkbox-inner{
    background-color: #fff;
    border: 1px solid #9187AB;
    border-radius: 3px;
  }
  .ant-checkbox.ant-checkbox-checked .ant-checkbox-inner{
    background-color: ${Colors.primary100};
    border: 1px solid  ${Colors.primary100};
    border-radius: 3px;
  }
  .ant-checkbox.ant-checkbox-checked::after{
    border: 1px solid  ${Colors.primary100};
    border-radius: 3px;
  }
`
