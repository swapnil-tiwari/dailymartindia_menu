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
        <div className={styles.categorybarTabs}>
          <span>
            <strong>Category: </strong>
          </span>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              props.categoryChanger("spices");
            }}
          >
            Spices
          </button>
          <button
            type="button"
            class="btn btn-info"
            onClick={() => {
              props.categoryChanger("lentils");
            }}
          >
            Lentils
          </button>
          <button
            type="button"
            class="btn btn-info"
            onClick={() => {
              props.categoryChanger("Pickle");
            }}
          >
            Pickle
          </button>
        </div>
      </div>
    </div>
  );
}
CategoryBar.propTypes = {};

export default CategoryBar;
