// tools
import { useState } from "react";
import { useSelector } from "react-redux";
// icons
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
// style
import {
  ContainerIcons,
  Header,
  Menu,
  Nav,
  NavLinks,
  NavLinksShop,
  ShopNumber,
  Title,
} from "./view";



const Navbar = () => {
  // use state for button mobile screen
  const [click, setClick] = useState(false);
  // functions for change mood
  const handelClick = () => {
    setClick(!click);
  };


  // 
  const card = useSelector(state=>state.card)
  const {cardItems} = card
  const getCardCount = ()=>{
    return cardItems.reduce((qty, item) => qty + Number(item.qty), 0);
  }
  return (
    <Header>
      <Title to="/">BrandShop</Title>
      <Nav click={click}>
        <Menu>
          <li className={{ backgroundColor: "red", height: "100px" }}>
            <NavLinksShop to="/shop">
             
              shop
              <ShopNumber>{getCardCount()}</ShopNumber>
            </NavLinksShop>
          </li>
          <li>
            <NavLinks to="/products">Product</NavLinks>
          </li>
        </Menu>
      </Nav>
      <ContainerIcons onClick={handelClick} click={click}>
        {click ? <FaTimes /> : <FaBars />}
      </ContainerIcons>
    </Header>
  );
};

export default Navbar;
