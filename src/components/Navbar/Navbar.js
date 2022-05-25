import {
  LogoContainer,
  Nav,
  SearchContainer,
  SearchIconContainer,
  SearchInput,
} from "./styledNavbar";

export const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <h1>Fake Store</h1>
      </LogoContainer>
      <SearchContainer>
        <SearchIconContainer>
          <i className="bx bx-search-alt-2" />
        </SearchIconContainer>
        <SearchInput type="text" placeholder="Search by Product Name" />
      </SearchContainer>
    </Nav>
  );
};
