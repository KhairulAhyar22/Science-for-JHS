const Home = {
  async render() {
    return `
      <h2 style="text-align: center;">This is page home</h2>
    `;
  },
  
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
  
export default Home;