self.onmessage = async (e) => {
  console.log(e.data);
  self.close();
};
