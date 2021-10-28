import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Icon from "./../img/cart.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { BasketList } from "../store/action";
import { useLocation } from "react-router";
const Header = () => {
  const location = useLocation();
  const [num, setNum] = useState("0");
  const basketList = useSelector((store) => store.basketList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (basketList.length !== 0) {
      setNum(basketList.length)
    }else{
      setNum(0)
    }
  }, [basketList]);

  useEffect(() => {
    const list = localStorage.getItem("list");
    if(list !== null){
      dispatch(BasketList());
    }
   
  }, []);

  const nameOfPage = () => {
    if (location.pathname === "/") {
      return "Shop";
    } else if (location.pathname === "/baskat") {
      return "Basket";
    }
  };
  return (
    <div className={styles.header}>
      <NavLink to="/" exact>
      
        <div className={styles.home}>
          <p>Home</p>
        </div>
      </NavLink>
      <div>
        <h1>{nameOfPage()}</h1>
      </div>
      <NavLink to="/baskat" exact>
        <div className={styles.basket}>
          <img src={Icon} alt="basket" />
          <p className={styles.number}>{num}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Header;
