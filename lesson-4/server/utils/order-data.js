module.exports = array => {
  const orderData = array.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1);
  
  return orderData;
}
