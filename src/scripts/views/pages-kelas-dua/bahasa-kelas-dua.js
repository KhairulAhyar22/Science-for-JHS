import drawer from "../../utils/drawer";
const Kelasduabahasa = {
  async render() {
    return `
    <header>
      <div class="navigation">
        <div class="nav-inner">
          <div class="humberger-menu">
            <button id="hamburgerButton">☰</button>
          </div>
          <!--Object satu-->
          <div class="logo">
            <h1>Eazy Learn</h1>
          </div>
          <!--Object dua-->
          <div class="menu">
            <ul id="drawer" class="nav_list">
              <li><a href="#/homecore">Home</a></li>
              <li><a href="#/academy">Academy</a></li>
              <li><a href="#/aboutus">About Us</a></li>
              <li><a href="#/home">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    
    <main>
      <div class="container">
        <section class="list-bab">
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2bahasabab1">Belajar Pada Kehidupan Fauna</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2bahasabab2">Menepis Lupa Jasa Inspirator Bangsa</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2bahasabab3">Menggapai Cita Melalui Kreatifitas</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2bahasabab4">Memecahkan Permasalahan Dampak Teknologi Lewat Diskusi</a>                                                          
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelasdua">Kembali</a>
          <a class="btn-menu-bab" href="">Kunjungi buku</a>
        </div>
      </div>
    </main>
    `
    ;  
  },
  
  async afterRender() {
    drawer();
  },
};
  
export default Kelasduabahasa;