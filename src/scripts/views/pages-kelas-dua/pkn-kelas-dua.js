import drawer from "../../utils/drawer";
const Kelasduapkn = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/pkn/pknk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2pknbab1">Merajut Manusia dan Masyarakat berdasarkan Pancasila</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/pkn/pknk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2pknbab2">Menyemai Kesadaran Konstitusional dalam Kehidupan Bernegara</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/pkn/pknk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2pknbab3">Disiplin itu Indah</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/pkn/pknk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2pknbab4">Menjelajah Masyarakat Indonesia</a>                                                          
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
  
export default Kelasduapkn;