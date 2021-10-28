
import { useSelector } from "react-redux";
import styles from "./ProductList.module.css";
import BasicCard from "../componets/Card";

const ProductList = () => {
  const productList = useSelector((store) => store.productList);
  console.log('Productlist', productList)
  return (
    <div className={styles.container}>
      {productList && productList.map((el) => (
        <BasicCard props={el} key={el.id}/>
      ))}
    </div>
  );
};

export default ProductList;
