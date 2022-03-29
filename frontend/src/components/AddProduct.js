import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@mui/material";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/products", {
      title: title,
      price: price,
    });
    history("/");
  };

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field" style={{ marginBottom: 10 }}>
          <Input
            className="input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="field" style={{ marginBottom: 10 }}>
          <Input
            className="input"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="field">
          <Button variant="contained">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
