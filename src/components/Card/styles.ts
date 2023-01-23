import styled, { css } from "styled-components";

export namespace styles {
  export const Item = styled.li`
    padding: 0;
    margin: 0;
    font-weight: 700;
    background-color: #fff;
    width: 300px;
    height: 140px;
    text-align: start;
    padding-left: 10px;
    //border-left: black 2px inset;
    display: grid;
    gap: 5px;
    grid-template-columns: 0fr 2fr 2fr; //repeat(1, 1fr);
    grid-auto-rows: minmax(41px, auto) minmax(max-content, 5fr)
      minmax(50%, 80vmax);

    &:first-child {
      border: none;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    @media (max-width: 1293px) {
      background-color: pink;
      padding-left: 4px;
      width: 285px;
    }

    @media (max-width: 1178px) {
      background-color: orange;
      width: 270px;
    }

    @media (max-width: 694) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 694px) {
      //grid-template-columns:  1fr 5fr 6fr ;
      grid-auto-rows: minmax(40px, auto) minmax(10px, 40px);
      
     width: 300px;//calc(100% + 20px);
      //max-width: max-content;
      background-color: blueviolet;
      height: max-content;
      margin: 0 calc(50% - 9em);
      //width: min-content;
      &:first-child {
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0;
      }
      &:last-child {
        border-top-right-radius: 0;
        border-bottom-left-radius: 10px;
      }
    }
  `;

  export const Line = styled.div<{ index?: number }>`
    grid-column: 1;
    grid-row: 1 / 3;
    width: 2px;
    height: 60%;
    font-size: 1.125em;
    margin: 0;
    margin-top: 20px;
    margin-right: 10px;
    background-color: hsl(0, 0%, 17%);
    opacity: 0.1;
    display: ${(props) => (props.index === 0 ? "none" : "inline")};

    @media (max-width: 646px) {
      display: none;
    }
  `;

  export const CardTitle = styled.h4`
    margin: 0;
    padding-top: 15px;
    padding-bottom: 12px;
    color: hsl(0, 0%, 59%);
    font-size: 0.785em;

    grid-column: 2;
    grid-row: 1;
    @media (max-width: 694px) {
      grid-column: 2 / 4;
      text-align: center;
      padding-bottom: 0;
    }
  `;

  export const CardText = styled.p`
    font-size: 1.125em;
    line-height: 1.5em;
    margin: 0;
    grid-column: 2 / 4;
    grid-row: 2;

    @media (max-width: 928px) {
      font-size: 1em;
      line-height: 1em;
    }

    @media (max-width: 694px) {
      grid-column: 2 / 4;
      text-align: center;
      
    }
  `;
}

export default styles;
