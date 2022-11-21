import { render } from "@testing-library/react";
import React from "react";
import styles from "./menuview.module.css";
import { products as productList } from "../../assets/productsData.js";
import CategoryBar from "../Category/CategoryBar";
// console.log(productList);
let productsCounter = 0;
let productsView = productList.map((product) => {
  productsCounter += 1;
  let productTabs = (
    <tr key={productsCounter}>
      <th scope="row">{productsCounter}</th>
      <td>{product.product_name}</td>
      <td>{product.qty}</td>
      <td>{product.price}</td>
    </tr>
  );
  return productTabs;
});
console.log(productsView);
function MenuLoader(props) {
  return (
    <div className={`container ${styles.tableCont}`}>
      <CategoryBar />
      <table className={`table`}>
        <thead>
          <tr>
            <th scope="col">Serial No.</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>{productsView}</tbody>
      </table>
    </div>
  );
}

MenuLoader.propTypes = {};

export default MenuLoader;
