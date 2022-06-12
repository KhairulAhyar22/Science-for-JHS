import drawer from "../../utils/drawer";
const Listclass = {
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
      <div class="container-class">

        <div class="inner-class">
          <h3 class="title-class">Pilih Kelas Sesuai Tingkatan Anda</h3>
          <div class="list-class">
            <div class="box-class">
              <img class="image-class"src="./images/Kelas 1 smp.jpg" alt="1">
              <div class="box-detail-class">
                <div class="box-center">
                  <a class="more-detail-class"href="#/kelassatu">Lihat Kelas</a>
                </div>
              </div>
            </div>

            <div class="box-class">
              <img class="image-class" src="./images/Kelas 2 smp.png" alt="1">
              <div class="box-detail-class">
                <div class="box-center">
                  <a class="more-detail-class"href="#/kelasdua">Lihat Kelas</a>
                </div>
              </div>
            </div>

            <div class="box-class">
              <img class="image-class" src="./images/Kelas 3 smp.png" alt="1">
              <div class="box-detail-class">
                <div class="box-center">
                  <a class="more-detail-class"href="#/kelastiga">Lihat Kelas</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-reading-class">
      <h4>Kelas Yang di Pelajari</h4>
      <div class="hr"></div>
      <div class="list-class-reading">
        <div class="class-reading"></div>
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
  
export default Listclass;