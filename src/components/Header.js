import {Link} from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
// import {useCartContext} from "../context/CartContext";
// import logo1 from "../../public/images/logo1.jpg";

const Header = () => {
  // const {state} = useCartContext();
  // const {total_item} = state;
  // // console.log(total_item);
  return (
    <MainHeader className="main">
      <Link to={"/"}>
        <img
          src="/images/logo1.png"
          style={{
            height: "6rem",
            width: "16rem",
          }}
          alt="logo"
        ></img>
      </Link>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  height: 10rem;
  background-color: ${({theme}) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 4.8rem;
  .logo {
    height: 5rem;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
  }
`;

export default Header;
