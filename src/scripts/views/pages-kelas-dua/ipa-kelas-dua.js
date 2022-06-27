import drawer from "../../utils/drawer";
const Kelasduaipa = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/1IPA8.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2ipabab1">Gerak pada Makhluk Hidup dan Benda</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/2IPA8.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2ipabab2">Rangka, Otot dan Pesawat Sederhana</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/3IPA8.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2ipabab3">Struktur dan Fungsi Jaringan Tumbuhan serta Pemanfaatannya dalam Teknologi</a>                                                         
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/4IPA8.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2ipabab4">Sifat Bahan dan Pemanfaatannya dalam Kehidupan Sehari-hari</a>                                                         
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
  
export default Kelasduaipa;