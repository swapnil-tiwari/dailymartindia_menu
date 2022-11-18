import { render } from "@testing-library/react";
import React from "react";
import styles from "./menuview.module.css";
console.log(styles);
function MenuLoader(props) {
  return (
    <div className="container">
      <table className={`table ${styles.tableCont}`}>
        <thead>
          <tr>
            <th scope="col">Serial No.</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

MenuLoader.propTypes = {};

export default MenuLoader;
