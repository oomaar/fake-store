import { Nav, SearchContainer, SearchIcon, SearchInput } from "./styledNavbar";

export const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Nav>
      <div>
        <h1>Fake Store</h1>
      </div>
      <SearchContainer>
        <SearchIcon>
          <i className="bx bx-search-alt-2" />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search by Product Name"
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
        />
      </SearchContainer>
    </Nav>
  );
};
