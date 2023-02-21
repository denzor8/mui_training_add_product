import React, { createContext, useReducer } from "react";
import axios from "axios";

export const productContext = createContext();

const INIT_STATE = {
  products: [],
  productToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "EDIT_PRODUCT":
      return { ...state, productToEdit: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const API = "http://localhost:8000/products";
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    getProducts();
  };

  const getProducts = async () => {
    let { data } = await axios(API);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const editProduct = async (id) => {
    let { data } = await axios(`${API}/${id}`);

    let action = {
      type: "EDIT_PRODUCT",
      payload: data,
    };
    dispatch(action);
  };

  const saveProduct = async (newProduct) => {
    await axios.patch(`${API}/${newProduct.id}`, newProduct);
    getProducts();
  };

  // const handleTop = () => {
  //   if (top) {
  //     setTop("-100%");
  //   } else {
  //     setTop("0");
  //   }
  // };

  // const [top, setTop] = useState("-100%");

  return (
    <productContext.Provider
      value={{
        addProduct: addProduct,
        getProducts: getProducts,
        deleteProduct: deleteProduct,
        editProduct: editProduct,
        saveProduct: saveProduct,
        // handleTop: handleTop,
        productToEdit: state.productToEdit,
        products: state.products,
        // top: top,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
