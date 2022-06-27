import drawer from "../../utils/drawer";
const Kelasdua = {
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
        <div class="box-list-study">
          <div class="box-image-teacher">
            <img class="image-teacher"src="./images/hero-kelas2.webp" alt="hero kelas 2">
          </div>
          <div class="detail-list-study">
            <h4>Mata Pelajaran  <span style="color: red;">Kelas VIII</span></h4>
            <div class="hr"></div>
            <div class="list-study">
              <ul>
                <li class="item-study"><a href="#/kelasduabahasa">Bahasa Indonesia</a></li>
                <li class="item-study"><a href="#/kelasduaipa">IPA</a></li>
                <li class="item-study"><a href="#/kelasduaips">IPS</a></li>
                <li class="item-study"><a href="#/kelasduapkn">PKN</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="list-book">
          <div class="book">
            <h4>Title Book Reference</h4>
            <img src="./images/guru.jpg" alt="buku">
            <div class="detail-book">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet perspiciatis, beatae consectetur quisquam est delectus mollitia labore nihil eligendi aliquid ad impedit ex unde deserunt nam molestiae dignissimos tempora.</p>
              <a href="see-more-buku">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>Title Book Reference</h4>
            <img src="./images/guru.jpg" alt="buku">
            <div class="detail-book">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet perspiciatis, beatae consectetur quisquam est delectus mollitia labore nihil eligendi aliquid ad impedit ex unde deserunt nam molestiae dignissimos tempora.</p>
              <a href="see-more-buku">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>Title Book Reference</h4>
            <img src="./images/guru.jpg" alt="buku">
            <div class="detail-book">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet perspiciatis, beatae consectetur quisquam est delectus mollitia labore nihil eligendi aliquid ad impedit ex unde deserunt nam molestiae dignissimos tempora.</p>
              <a href="see-more-buku">Lihat Buku-></a>
            </div>
          
          </div>
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
  
export default Kelasdua;