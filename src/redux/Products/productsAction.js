import productsTypes from "./productsTypes";

export const addProductStart = (productData) => ({
  type: productsTypes.ADD_NEW_PRODUCT_START, 
  payload: productData,
})

export const fetchProductsStart = () => ({
  type: productsTypes.FETCH_PRODUCTS_START,
});

export const setProducts = (products) => ({
  type: productsTypes.SET_PRODUCT,
  payload: products,
});
