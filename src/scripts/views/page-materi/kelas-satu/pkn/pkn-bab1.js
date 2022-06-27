import drawer from "../../../../utils/drawer";
const Kelas1PknBab1 = {
  async render() {
    const response = await fetch('http://localhost:5000/materi');
    const responsejson = await response.json();
    const materi = responsejson.materi;

    const nav = materi.filter((m) => m.id === "navMateri")[0];
    const objectTarget = materi.filter((m) => m.id === "pkn1b101");
    const pages = objectTarget.filter((m) => m.id === "pkn1b101")[0];
    
    return `
    ${nav.page}
    <main>
    <div class="container">
      <div class="inner-container-bab">
        <div class="btn-detail-bab">
          <a class="go-materi" href="#/kelassatupkn">Lihat Materi</a>
          <button class="tandai-materi" href="">Tandai Dipelajari</button>
        </div>
        ${pages.page}
        <div class="box-btn-move-pagebab">
          <a class="btn-move-pagebab" href="#/kelas1pknbab1">Sebelumnya</a>
          <a class="btn-move-pagebab" href="#/kelas1pknbab3">Selanjutnya</a>
        </div>
      </div>
    </div>
    </main>
    `;
  },
  
  async afterRender() {
    drawer();
  },
};
  
export default Kelas1PknBab1;