const dataPages = {
  async render() {
    const response = await fetch('http://localhost:5000/materi');
    const responsejson = await response.json();
    const materi = responsejson.materi;

    return materi;
  },
  
  async afterRender() {
    drawer();
  },
};
  
export default dataPages;