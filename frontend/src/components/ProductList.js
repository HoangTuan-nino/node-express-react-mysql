import { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    const filterProduct = products.filter((s) => s.id !== id);
    setProduct(filterProduct);
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProducts();
  };

  return (
    <div>
      <Button href="/add" variant="contained">
        Add New
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table-head">
            <TableRow className="table-row">
              <TableCell style={{ color: "#95aac9" }}>No</TableCell>
              <TableCell style={{ color: "#95aac9" }}>Title</TableCell>
              <TableCell style={{ color: "#95aac9" }}>Price</TableCell>
              <TableCell style={{ color: "#95aac9" }} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="tb-rows"
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell align="center">
                  <Button href={`/edit/${product.id}`} variant="contained">
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteProduct(product.id)}
                    className="icon"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductList;
