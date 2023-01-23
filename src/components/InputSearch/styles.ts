import styled from "styled-components";

export namespace styles {
  export const SearchForm = styled.form`
    display: flex;
    width: 40%;
    justify-content: center;
  `;

  export const SearchInput = styled.input`
    border: none;
    text-align: start;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding: 15px 35px 15px 15px;
    width: 400px;
  `;

  export const SearchButton = styled.button`
    padding: 20px;
    border: none;
    background-color: black;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    display: inline-flex;
    align-self: stretch;
    border-width: 1px;
  `;
}

export default styles;
