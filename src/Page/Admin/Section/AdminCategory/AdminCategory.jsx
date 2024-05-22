import React, { useEffect, useState } from "react";

import UserNav from "../../../User/UserNavigation/UserNav";
import AdminCat from "../List/AdminCat";
import Input from "../../../../Component/Input/Input";
import Select from "../../../../Component/Select/Select";
import Button from "../../../../Component/Button/Button";

import "../AdminSection.css";
import Admin from "../../Admin";
import axios from "axios";
const AdminCategory = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const handleSubNavClick = (item) => {
    setCurrentPage(item);
  };

  // Category
  const [Category, setCategory] = useState({
    Name: ""
  });

  // Handle INPUT CHANGE
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCategory((values) => ({ ...values, [name]: value }));
    console.log(Category);
  };

  // ADD CATEGORY

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost/CSC264/RoomAPI/PostCategory.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Category)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  // UPDATE CATEGORY

  const [UpdateCategory, setUpdateCategory] = useState({
    CategoryID: 0,
    Name: ""
  });

  const handleUpdateChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "CategoryID") {
      setUpdateCategory((prevCategory) => ({
        ...prevCategory,
        CategoryID: value
      }));
    } else if (name === "Name") {
      setUpdateCategory((prevCategory) => ({
        ...prevCategory,
        Name: value
      }));
    }

    console.log(UpdateCategory);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    fetch("http://localhost/CSC264/RoomAPI/UpdateCategory.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(UpdateCategory)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  // GET CATEGORY
  const [CategoryList, setCategoryList] = useState([]);

  // get from server
  useEffect(() => {
    getCategory();
  }, []);
  function getCategory() {
    axios
      .get("http://localhost/CSC264/RoomAPI/GetCategory.php")
      .then((response) => {
        console.log(response.data);
        setCategoryList(response.data);
      });
  }

  return (
    <div className="AdminCategory" id="AdminCategory">
      <UserNav category="AdminCategory" onClick={handleSubNavClick} />
      <div className="admin-Container Category">
        {CurrentPage == 1 && (
          <div className="Page">
            <form method="POST" onSubmit={handleSubmit}>
              <div className="Page-Container">
                <div className="title-container">
                  <div className="title">
                    <h1>Add Category</h1>
                  </div>
                  <div className="title-detail">
                    <p>
                      add Category, Adding category may increase variety of
                      products.
                    </p>
                  </div>
                </div>
                <Input
                  formSize="full"
                  inputProps={{
                    type: "text",
                    name: "Name",
                    id: "Name",
                    label: "Category Name",
                    placeholder: "Category Name",
                    className: "input",
                    value: Category.Name,
                    onChange: handleChange,
                    required: true
                  }}
                />
                <div className="button-container end">
                  <Button
                    type="formsubmit"
                    value="Add Category"
                    className="fill primary"
                  />
                </div>
              </div>
            </form>
          </div>
        )}
        {CurrentPage == 2 && (
          <div className="Page">
            <form method="POST" onSubmit={handleUpdate}>
              <div className="Page-Container">
                <div className="title-container">
                  <div className="title">
                    <h1>Add Category</h1>
                  </div>
                  <div className="title-detail">
                    <p>
                      add Category, Adding category may increase variety of
                      products.
                    </p>
                  </div>
                </div>
                <Select
                  defaultValue="Choose a Category"
                  name="CategoryID"
                  id="CategoryID"
                  Category={CategoryList}
                  onChange={handleUpdateChange}
                  selectAdmin="Category"
                />
                <Input
                  formSize="full"
                  inputProps={{
                    type: "text",
                    name: "Name",
                    id: "Name",
                    label: "New Category Name",
                    placeholder: "New Category Name",
                    className: "input",
                    value: UpdateCategory.Name,
                    onChange: handleUpdateChange
                  }}
                />

                <div className="button-container end">
                  <Button
                    type="Update Category"
                    className="fill primary"
                    value="Update"
                  />
                </div>
              </div>
            </form>
          </div>
        )}
        {CurrentPage == 3 && (
          <div className="Page">
            <div className="Page-Container List">
              {CategoryList.map((item) => {
                return (
                  <AdminCat
                    key={item.CategoryID}
                    Name={item.Name}
                    CategoryID={item.CategoryID}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCategory;
