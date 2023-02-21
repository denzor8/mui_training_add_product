import { Alert, Box, Button, TextField } from "@mui/material";
import React from "react";
import { green, red } from "@mui/material/colors";
import { useContext } from "react";
import { productContext } from "../ProductContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTheme } from '@mui/material/styles';



const AddProduct = () => {
  const navigate = useNavigate();
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  const { top, addProduct } = useContext(productContext);

  const [product, setProduct] = useState({
    name: "",
    desc: "",
    image: "",
  });

  const handleInput = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
    setAlert(false);
  };

  let [alert, setAlert] = useState(false);

  const handleSave = (newProduct) => {
    if (!newProduct.name || !newProduct.desc || !newProduct.image) {
      setAlert(true);
      return;
    }
    addProduct(newProduct);
    setProduct({
      name: "",
      desc: "",
      image: "",
    });
  };

  const alertStyle = {
    mx: 2,
    position: "absolute",
    width: "50%",
    bottom: "-120%",
    left: 0,
  };

  const inpsStyles = {
    display: "flex",
    margin: "15vmin auto",
    justifyContent: "center",
  };
  return (
    <Box>
      <Box sx={inpsStyles}>
        <TextField
          name="name"
          onChange={handleInput}
          sx={{ mx: 2 }}
          value={product.name}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          name="desc"
          onChange={handleInput}
          sx={{ mx: 2 }}
          value={product.desc}
          id="outlined-basic"
          label="Description"
          variant="outlined"
        />
        <TextField
          name="image"
          onChange={handleInput}
          sx={{ mx: 2 }}
          value={product.image}
          id="outlined-basic"
          label="Image"
          variant="outlined"
        />
        <Button
          variant="contained"
          theme={theme}
          sx={{ mx: 2 }}
          onClick={() => {
            handleSave(product);
            navigate("/");
          }}
        >
          Create
        </Button>
        {alert ? (
          <Alert severity="warning" sx={alertStyle}>
            Input some values
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default AddProduct;
