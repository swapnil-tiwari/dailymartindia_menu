import React from "react";
import styles from "./category.module.css";
import { useState } from "react";

function CategoryBar(props) {
  //   const [color, setColor] = useState("orange");

  //   let currentCategory = "spices";
  //   let category_colors = { spices: "red" };

  //   setColor("red");
  return (
    <div>
      <div className={styles.categorybar}>
        <span>
          <strong>Category: Spices</strong>
        </span>
      </div>
    </div>
  );
}
CategoryBar.propTypes = {};

export default CategoryBar;
