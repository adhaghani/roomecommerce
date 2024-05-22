import React from "react";

import "./List.css";

import Button from "../../../../Component/Button/Button";
import axios from "axios";

// Delete Category

function deleteCategory(CategoryID) {
  if (confirm("Are you sure you want to delete this category?")) {
    axios
      .delete("http://localhost/CSC264/RoomAPI/DeleteCategory.php", {
        params: {
          CategoryID
        }
      })
      .then((response) => {
        window.location.reload();
        console.log(response.data);
      });
  }
}
// function deleteCategory(CategoryID) {
//   if (confirm("Are you sure you want to delete this category?")) {
//     fetch("http://localhost/CSC264/RoomAPI/UpdateCategory.php", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: CategoryID
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       });
//   }
// }

const AdminCat = (props) => {
  return (
    <div className="categoryList" id="categoryList">
      <div className="Category-Details">
        <div className="Category-ID">
          <span className="title">Category ID:</span>
          <span>{props.CategoryID}</span>
          <span>| {props.Name}</span>
        </div>
        <div className="Category-Button">
          <Button
            title="Delete"
            value={props.CategoryID}
            Name="CategoryID"
            type="delete"
            className="outline gray product cancel"
            onClick={() => deleteCategory(props.CategoryID)}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminCat;
