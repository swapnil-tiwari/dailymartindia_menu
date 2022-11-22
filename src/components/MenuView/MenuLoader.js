import { render } from "@testing-library/react";
import React from "react";
import styles from "./menuview.module.css";
import { products as productList } from "../../assets/dm_liveData.js";
import CategoryBar from "../Category/CategoryBar";
import { useState } from "react";

// console.log(productList);

// console.log(productsView);
function MenuLoader(props) {
  const [category, setCategory] = useState("spices");
  function categoryLoader() {
    let productsCounter = 0;
    let filteredList = productList.filter((item) => {
      return item.category.toLowerCase() == category.toLowerCase();
    });
    let productsMapped = filteredList.map((product) => {
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
    return productsMapped;
  }
  let productsView = categoryLoader();
  console.log(productsView);
  return (
    <div className={`container ${styles.tableCont}`}>
      <CategoryBar categoryChanger={setCategory} />
      <table className={`table table-hover`}>
        <thead style={{ background: "#05668D", color: "white" }}>
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
