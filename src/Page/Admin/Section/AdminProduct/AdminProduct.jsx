import React, { useEffect, useState } from "react";
import axios from "axios";

import UserNav from "../../../User/UserNavigation/UserNav";
import AdminProd from "../List/AdminProd";
import "../AdminSection.css";
import "../List/List.css";
import Input from "../../../../Component/Input/Input";
import Button from "../../../../Component/Button/Button";
import Select from "../../../../Component/Select/Select";

const AdminProduct = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const handleSubNavClick = (item) => {
    setCurrentPage(item);
  };

  // Add Product State
  const [products, setProducts] = useState({
    Name: "",
    Description: "",
    Price: 0,
    ProductStock: 0,
    CategoryID: "",
    PicturePath: ""
  });
  // Input Change
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProducts((values) => ({ ...values, [name]: value }));
    console.log(products);
  };

  // Category Choosing Handler
  const handleSelectChange = (event) => {
    const name = event.target.name;
    const selectedOption = event.target.value;
    if (name == "CategoryID") {
      setProducts((values) => ({
        ...values,
        CategoryID: selectedOption
      }));
      console.log(products);
    }
  };

  // Change Image
  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    try {
      const formData = new FormData();
      formData.append("productImage", file);

      const response = await axios.post(
        "http://localhost/CSC264/RoomAPI/UploadImage.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      const filePath = response.data.filePath;

      // Get the file path from the server response
      console.log(filePath);
      const serverpath = "http://localhost/CSC264/RoomAPI/ProductImage";
      let imagepath = serverpath + filePath;

      setProducts((values) => ({ ...values, PicturePath: imagepath }));
      console.log(products);
    } catch (error) {
      console.error(error);
    }
  };

  // Add Product Handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const { Name, Description, Price, ProductStock, CategoryID, PicturePath } =
      products;
    const data = {
      Name,
      Description,
      Price,
      ProductStock,
      CategoryID,
      PicturePath
    };
    fetch("http://localhost/CSC264/RoomAPI/PostProduct.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  // Update Product State
  const [UpdateProduct, setUpdateProduct] = useState({
    ProductID: "",
    Name: "",
    Description: "",
    Price: 0,
    ProductStock: 0,
    CategoryID: "",
    PicturePath: ""
  });

  // Input Update Change
  const handleUpdate = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdateProduct((values) => ({ ...values, [name]: value }));
    console.log(UpdateProduct);
  };

  // Product Update Select Handler
  const handleSelectUpdate = (event) => {
    const name = event.target.name;
    const selectedOption = event.target.value;
    if (name === "ProductID") {
      const selectedProduct = ProductList.find(
        (product) => product.ProductID === selectedOption
      );
      if (selectedProduct) {
        setUpdateProduct({
          ProductID: selectedProduct.ProductID,
          Name: selectedProduct.Name,
          Description: selectedProduct.Description,
          Price: selectedProduct.Price,
          ProductStock: selectedProduct.ProductStock,
          CategoryID: selectedProduct.CategoryID,
          PicturePath: selectedProduct.PicturePath
        });
      }
    }
    console.log(UpdateProduct);
  };
  // Change Image
  const handleImageUpdate = async (event) => {
    const file = event.target.files[0];

    try {
      const formData = new FormData();
      formData.append("productImage", file);

      const response = await axios.post(
        "http://localhost/CSC264/RoomAPI/UploadImage.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      const filePath = response.data.filePath;

      // Get the file path from the server response
      console.log(filePath);
      const serverpath = "http://localhost/CSC264/RoomAPI/ProductImage";
      let imagepath = serverpath + filePath;

      setProducts((values) => ({ ...values, PicturePath: imagepath }));
      console.log(products);
    } catch (error) {
      console.error(error);
    }
  };

  // UPDATE PRODUCT TO SERVER
  const handleProductUpdate = (event) => {
    event.preventDefault();
    const {
      ProductID,
      Name,
      Description,
      Price,
      ProductStock,
      CategoryID,
      PicturePath
    } = UpdateProduct;
    const data = {
      ProductID,
      Name,
      Description,
      Price,
      ProductStock,
      CategoryID,
      PicturePath
    };
    fetch("http://localhost/CSC264/RoomAPI/UpdateProduct.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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

  // GET Product
  const [ProductList, setProductList] = useState([]);

  // get from server
  useEffect(() => {
    getProduct();
  }, []);
  function getProduct() {
    axios
      .get("http://localhost/CSC264/RoomAPI/GetProduct.php")
      .then((response) => {
        console.log(response.data);
        setProductList(response.data);
      });
  }

  return (
    <div className="AdminProduct" id="AdminProduct">
      <UserNav category="AdminProduct" onClick={handleSubNavClick} />
      <div className="admin-Container Product">
        {/* ADD PRODUCT */}
        {CurrentPage == 1 && (
          <div className="Page">
            <div className="Page-Container">
              <form method="POST" onSubmit={handleSubmit}>
                <div className="Image-Container">
                  <label
                    htmlFor="PicturePath"
                    className={
                      products.PicturePath ? "Add-Image" : "Add-Image "
                    }
                  >
                    {!products.PicturePath && (
                      <svg
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M18.22 19.9628C17.8703 20 17.4213 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.12583 18.7271 4.07264 18.5226 4.04193 18.2622M18.22 19.9628C18.5007 19.9329 18.7175 19.8791 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V13M11 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M18 9V6M18 6V3M18 6H21M18 6H15"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                    {products.PicturePath && (
                      <img src={products.PicturePath} alt="Product Image" />
                    )}
                  </label>
                  <input
                    type="file"
                    name="PicturePath"
                    id="PicturePath"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <Input
                  formSize="full"
                  inputProps={{
                    type: "text",
                    name: "Name",
                    id: "Name",
                    label: "Product Name",
                    placeholder: "Product Name",
                    className: "input",
                    value: products.Name,
                    onChange: handleChange
                  }}
                />
                <Select
                  defaultValue="Choose a Category"
                  name="CategoryID"
                  id="CategoryID"
                  Category={CategoryList}
                  onChange={handleSelectChange}
                  selectAdmin="Category"
                />

                <Input
                  formSize="full"
                  inputProps={{
                    type: "text",
                    name: "Description",
                    id: "Description",
                    label: "Product Descriotion",
                    placeholder: "Product Descriotion",
                    className: "input",
                    value: products.Description,
                    onChange: handleChange
                  }}
                />
                <Input
                  formSize="half"
                  inputProps={{
                    type: "number",
                    name: "ProductStock",
                    id: "ProductStock",
                    label: "Stock Quantity",
                    placeholder: "S10,20,30,40",
                    className: "input",
                    value: products.ProductStock,
                    onChange: handleChange
                  }}
                  inputProps2={{
                    type: "number",
                    name: "Price",
                    id: "Price",
                    label: "Product Price",
                    placeholder: "60.00",
                    className: "input",
                    value: products.Price,
                    onChange: handleChange
                  }}
                />
                <div className="button-container end">
                  <Button type="Add Product" className="fill primary" />
                </div>
              </form>
            </div>
          </div>
        )}
        {/* UPDATE PRODUCT */}
        {CurrentPage == 2 && (
          <div className="Page">
            <div className="Page-Container">
              <form method="POST" onSubmit={handleProductUpdate}>
                <Select
                  defaultValue="Choose a Product"
                  name="ProductID"
                  id="ProductID"
                  Category={ProductList}
                  onChange={handleSelectUpdate}
                  selectAdmin="Product"
                />
                {UpdateProduct.PicturePath && (
                  <div className="Update">
                    <div className="Image-Container">
                      <label
                        htmlFor="PicturePath"
                        className={
                          UpdateProduct.PicturePath ? "Add-Image" : "Add-Image "
                        }
                      >
                        {!UpdateProduct.PicturePath && (
                          <svg
                            width="40px"
                            height="40px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M18.22 19.9628C17.8703 20 17.4213 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.12583 18.7271 4.07264 18.5226 4.04193 18.2622M18.22 19.9628C18.5007 19.9329 18.7175 19.8791 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V13M11 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M18 9V6M18 6V3M18 6H21M18 6H15"
                              stroke="#000000"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        )}
                        {UpdateProduct.PicturePath && (
                          <img
                            src={UpdateProduct.PicturePath}
                            alt="Product Image"
                          />
                        )}
                      </label>
                      <input
                        type="file"
                        name="PicturePath"
                        id="PicturePath"
                        accept="image/*"
                        onChange={handleImageUpdate}
                        disabled
                      />
                    </div>
                    <Input
                      formSize="full"
                      inputProps={{
                        type: "text",
                        name: "Name",
                        id: "Name",
                        label: "New Product Name",
                        placeholder: "New Product Name",
                        className: "input",
                        value: UpdateProduct.Name,
                        onChange: handleUpdate
                      }}
                    />
                    <Select
                      defaultValue="Choose a Category"
                      name="CategoryID"
                      id="CategoryID"
                      Category={CategoryList}
                      onChange={handleSelectChange}
                      selectAdmin="Category"
                    />
                    <Input
                      formSize="full"
                      inputProps={{
                        type: "text",
                        name: "Description",
                        id: "Description",
                        label: "New Product Descriotion",
                        placeholder: "New Product Descriotion",
                        className: "input",
                        value: UpdateProduct.Description,
                        onChange: handleUpdate
                      }}
                    />
                    <Input
                      formSize="half"
                      inputProps={{
                        type: "number",
                        name: "ProductStock",
                        id: "ProductStock",
                        label: "New Stock Quantity",
                        placeholder: "10,20,30,40",
                        className: "input",
                        value: UpdateProduct.ProductStock,
                        onChange: handleUpdate
                      }}
                      inputProps2={{
                        type: "number",
                        name: "Price",
                        id: "Price",
                        label: "New Product Price",
                        placeholder: "60.00",
                        className: "input",
                        value: UpdateProduct.Price,
                        onChange: handleUpdate
                      }}
                    />
                    <div className="button-container end">
                      <Button type="Update Product" className="fill primary" />
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
        {/* LIST PRODUCT & REMOVE PROUDCT */}
        {CurrentPage == 3 && (
          <div className="Page">
            <div className="Page-Container List">
              <div className="productList" id="productList">
                {ProductList.map((product) => {
                  return (
                    <AdminProd
                      AdminPage={true}
                      key={product.ProductID}
                      {...product}
                      
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProduct;
