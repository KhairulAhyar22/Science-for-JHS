import drawer from "../../utils/drawer";
const Kelassatuipa = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/1IPA7.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipabab1">Object IPA dan Pengamatannya</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/2IPA7.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipabab2">Klasifikasi Benda</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/3IPA7.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipabab3">Klasifikasi Makhluk Hidup</a>                                                         
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/4IPA7.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipabab4">Klasifikasi Makhluk Hidup</a>                                                         
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelassatu">Kembali</a>
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
  
export default Kelassatuipa;