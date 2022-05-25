import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #73777b3f;
  margin-bottom: 1rem;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  border: 1px solid #73777b3f;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 30px;
  width: 300px;
  border-radius: 1rem;
  padding: 0 1rem;

  :focus-within {
    border-color: #000;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  font-size: 1.5rem;
  color: #73777b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  padding-left: 0.5rem;
  border: 0;
  outline: 0;
`;
