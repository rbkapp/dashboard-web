import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html{
    font-size: 95%;
    @media screen and (max-width: 767px){
      font-size: 80%;
    }
    @media screen and (max-width: 450px){
      font-size: 70%;
    }
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *::-webkit-scrollbar-track
  {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
  border-radius: 12px;
  }

  *::-webkit-scrollbar
  {
	width: 6px;
	background-color: #F5F5F5;
  }

  *::-webkit-scrollbar-thumb
  {
	background-color: ${(props) => props.theme.colors.magenta};
  border-radius: 12px;
  }
  
  body{
    overflow-x: hidden;
    margin: 0;
  }
  p{
    margin: 0;
  }
  .no-scroll{
    overflow: hidden;
  }
  .ant-scrolling-effect{
    width: 100% !important;
  }
  .ant-empty-description{
    color: #fff;
  }
  .ant-notification .ant-notification-notice{
    padding: 8px;
    background-color: ${(props) => props.theme.colors.purple} !important;
    z-index: 9999;
    position: absolute;
    right: 0;
    .ant-notification-notice-close{
      color: ${(props) => props.theme.colors.white};
      font-weight: 900;
    }
    .ant-notification-notice-with-icon{
      box-shadow: 8px 0px 0px #000 inset;
      padding-left: 12px;
      .ant-notification-notice-icon{
        margin: 8px;
      }
      .ant-notification-notice-message{
        font: ${(props) => props.theme.text.text_semilarge_bold};
        color: ${(props) => props.theme.colors.white};
      }
      .ant-notification-notice-description{
        font: ${(props) => props.theme.text.text_semilarge_regular};
        color: ${(props) => props.theme.colors.white} !important;
      }
    }
  }

    .ant-notification .ant-notification-notice.ant-notification-notice-success{
    .ant-notification-notice-with-icon{
      box-shadow: 4px 0px 0px #58C86A inset;
      .ant-notification-notice-icon svg{
        background-color: #58C86A;
        border-radius: 50%;
        color: white;
      }
    }
  }
  .ant-notification .ant-notification-notice.ant-notification-notice-warning{
    .ant-notification-notice-with-icon{
      box-shadow: 4px 0px 0px #D6C52E inset;
       .ant-notification-notice-icon svg{
        background-color: #D6C52E;
        border-radius: 50%;
        color: white;
      }
    }
  }
  .ant-notification .ant-notification-notice.ant-notification-notice-info{
    .ant-notification-notice-with-icon{
      box-shadow: 4px 0px 0px #428BC1 inset;
       .ant-notification-notice-icon svg{
        background-color: #428BC1;
        border-radius: 50%;
        color: white;
      }
    }
  }
  .ant-notification .ant-notification-notice.ant-notification-notice-error{
    .ant-notification-notice-with-icon{
      box-shadow: 4px 0px 0px #FF7070 inset;
      .ant-notification-notice-icon svg{
        background-color: #FF7070;
        border-radius: 50%;
        color: white;
      }
    }
  }
  .ant-modal-mask{
    background-color: rgba(36, 16,88 , .25);
  }
`;
