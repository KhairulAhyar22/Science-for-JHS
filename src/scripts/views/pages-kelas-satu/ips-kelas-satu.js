import drawer from "../../utils/drawer";
const Kelassatuips = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/ips/ipsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipsbab1">Keadaan Alam dan Aktivitas Penduduk Indonesia</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ips/ipsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipsbab2">Keadaan Penduduk Indonesia</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ips/ipsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipsbab3">Potensi dan Pemanfaatan Sumber Daya Alam</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ips/ipsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipsbab4">Dinamika Interaksi Manusia</a>                                                          
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
  
export default Kelassatuips;