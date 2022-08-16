import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>RecipeApp</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
  @font-face {
    font-family: "nordeco_regular";
    src: url("nordeco-regular-webfont.woff2") format("woff2"),
      url("nordeco-regular-webfont.woff") format("woff");
    font-style: normal;
  }
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Nordeco";
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;

export default App;
