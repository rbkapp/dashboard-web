import styled from "styled-components";

export const MenuLateral = styled.div`
  box-sizing: border-box;
  width: 300px;
  padding: 21px;
  height:98%;
  position: absolute;
  padding-top: 68px;
  padding-right: 0;

  font-family: 'Kumbh Sans', sans-serif;

  @media(max-width:800px){
    width: calc(88% - 20px);
    z-index: 99999;
    background-color: #663590;
    //display: none;
    border-radius: 20px;

    padding-top: 25px;
    height: calc(100% - 100px);
  }

  .rebimboka{
    width: 100%;
    text-align:center;
    margin-bottom: 35px;

    .logo {
      max-width: 60%;
    }
    @media(max-width:800px){
        display: none;
      }
  }

  nav{
    position: relative;
  }

  ul{
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.6em;
  }

  li a{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: 200ms;
    border-radius: 30px 0 0 30px;
    padding: 12px 7px;

    .icone{
      background-color: #ffffff;
      color: #241058;
      border-radius: 50%;
      width: 24px;
      height:24px;
      padding: 4px;
      justify-content: center;
      margin-right: 15px;
      display: flex;
      align-items: center;
      transition: 200ms;
    }
  }

  li {
    .top_bg {
      position: absolute;
      width: 100%;
      margin-top: -25px;
      text-align: right;
    }

    .bg {
        max-width: 25px;
      }
    
    .bottom_bg {
      position: absolute;
      width: 100%;
      text-align: right;
    }
  }

  li a:hover {
    color:#241058 ;
    background-color: rgba(255,255,255, 0.80);
  }

  li .menu-opend {
        color:#241058 ;
        background-color: #ffffff;
  }
  li .menu-opend .icone{
    margin-left: 15px;
  }

  li a:hover .icone{
    margin-left: 15px;
  }
  
  .usuario-card {
    box-sizing: border-box;
    width: calc(100% - 42px);
    height:auto;
    position:absolute;
    margin-bottom: 25px;
    bottom:0;
    background: #663590;
    border-radius: 22px;
    padding: 20px 20px;
    display: flex;
    gap: 15px;

    @media(max-width:800px){
      bottom: 30px;

      position: initial;
      margin-top: 35px;
      background-color: #933e97;
    }

      .avatar img{
        border-radius: 50%;
        max-width: 40px;
      }

      .status-normal{
        border:2px solid #ffffff;
      }

      .infos{
        color: #ffffff;
        font-size: 12px;
        line-height: 18px;

        .email{
          font-weight: 700;
        }

        .botoes{
          display:flex;
          align-items:center;
          gap: 20px;
          margin-top: 4px;

          a{
            display: inline-flex;
            align-items: center;
            text-decoration: none;
            font-size: 14px;
            color: #E980A7;
            font-weight: 700;
            line-height: 0;
          }
        }
      }
  }
`;