export const reducer = state => {
  return {
    //Only curry functions:::::
    setUser: data => ({user: data}),
    set: (key, value) => ({[key]: value}),
  };
};

export const initialState = () => {
  return {
    user: false,
  };
};
