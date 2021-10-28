import styles from "./ProductList.module.css";
import { useSelector } from "react-redux";
import BasicCard from "../componets/Card";
import Sum from "../componets/Sum";

const BasketPage = () => {
  const basketList = useSelector((store) => store.basketList);
  
  return (
    <>
      <Sum basketList={basketList} />
      <div className={styles.container}>
        {basketList.map((el, i) => (
          <BasicCard props={el} indx={i} key={i} />
        ))}
      </div>
    </>
  );
};

export default BasketPage;
