export const getStore = async () => {
  const API = "https://gradistore-spi.herokuapp.com/products/all"

  const response = await fetch(API);
  const data = await response.json();

  return data
}
