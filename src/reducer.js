export const reducer = state => {
  return {
    //Only curry functions:::::
    setFavorite: data => ({favorite: data}),
    setShopingList: data => ({shopingList: data}),
    set: (key, value) => ({[key]: value}),
  };
};

export const initialState = () => {
  return {
    favorite: [],
    shopingList: [],
  };
};
