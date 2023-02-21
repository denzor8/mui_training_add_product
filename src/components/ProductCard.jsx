import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { productContext } from "../ProductContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { deleteProduct, editProduct } = React.useContext(productContext);
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: "30%", m: 3 }}>
      <CardMedia
        component="img"
        alt="Product image"
        height="160"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            editProduct(product.id);
            navigate("/edit");
          }}
        >
          Edit
        </Button>
        <Button size="small" onClick={() => deleteProduct(product.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
