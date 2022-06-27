import drawer from "../../utils/drawer";
const Kelassatubahasa = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1bahasabab1">Cinta Lingkungan Hidup</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1bahasabab2">Pengenalan Budaya Indonesia</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1bahasabab3">Remaja dan Pendidikan Karakter</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1bahasabab4">Teknologi Tepat Guna</a>                                                          
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
  
export default Kelassatubahasa;