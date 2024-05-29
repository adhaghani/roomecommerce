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

const AdminCat = (props) => {
  return (
    <tr>
      <div className="CategoryContainer">
        <div className="CategoryID">{props.CategoryID}</div>
        <div className="Name">{props.Name}</div>
        <div className="Button">
          {" "}
          <Button
            title="Delete"
            Name="CategoryID"
            type="delete"
            className="outline gray product cancel"
            onClick={() => deleteCategory(props.CategoryID)}
          />
        </div>
      </div>
    </tr>
  );
};

export default AdminCat;
