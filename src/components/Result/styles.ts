import styled from "styled-components";

export namespace styles {
  export const SectionResult = styled.section`
    position: relative;
  `;

  export const ListItems = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    list-style-type: none;
    position: absolute;
    right: 70px;
    z-index: 500;
    top: -71px;
    padding: 0;

    @media (max-width: 1303px) {
      left: 36px;
    }

    @media (max-width: 694px) {
      left: 0;
      margin: 0 calc(50% - 1em);
      flex-direction: column;
    }
  `;
}

export default styles;
