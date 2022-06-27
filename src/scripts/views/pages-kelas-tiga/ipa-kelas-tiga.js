import drawer from "../../utils/drawer";
const Kelastigaipa = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/1IPA9.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3ipabab1">Sistem Reproduksi pada Manusia</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/2IPA9.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3ipabab2">Reproduksi pada Tumbuhan dan Hewan</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/3IPA9.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3ipabab3">Kependudukan dan Lingkungan</a>                                                         
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/4IPA9.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3ipabab4">Partikel Penyusun Benda Mati dan Makhluk Hidup</a>                                                         
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelastiga">Kembali</a>
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
  
export default Kelastigaipa;