import React from "react";
import styles from "./category.module.css";

function CategoryBar(props) {
  return (
    <div className="container">
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