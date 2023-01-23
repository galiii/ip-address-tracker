import styled from "styled-components";

export namespace styles {
  export const AppHeader = styled.header<{ imgUrl: string }>`
    min-height: 250px;//70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    /*justify-content: center;*/
    /*font-size: calc(10px + 2vmin);*/
    /*color: white;*/
    background: red url(${(props) => props.imgUrl}) no-repeat fixed center top;
  `;

  export const AppTitle = styled.h2`
    margin: 0;
    padding-top: 40px;
    color: white;
  `;
}

export default styles;
