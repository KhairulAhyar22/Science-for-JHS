import drawer from "../../utils/drawer";
const Aboutus = {
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
    <div class="description-app box-color-dark">
      <div class="inner-description-app">
        <h2 class="title">Information</h2>
        <p class="detail-description">Aplikasi ini adalah aplikasi untuk capstone project yang dibangun oleh 4 orang dari universitas yang berbeda, dalam pembuatanya banyak lika liku. Berikut biodata tim kami:</p>
      </div>
    </div>

    <div class="list-bio-tim">
      <div class="inner-bio-tim">
        <div class="picture">
          <img class="image-tim"src="./images/tim/bayu.png" alt="bayu">
          <div class="sosmed">
            <!--<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="ig">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721" alt="wa">-->
          </div>
        </div>
        
        <div class="detail-biodata">
          <h3>Detail</h3>
          <hr>
          <table>
            <tr>
              <td><strong>Nama</strong></td>
              <td>:</td>
              <td>Bayu Prasetyo</td>
            </tr>
            <tr>
              <td><strong>Tgl</strong></td>
              <td>:</td>
              <td>14 mei 2012</td>
            </tr>
            <tr>
              <td><strong>Alamat</strong></td>
              <td>:</td>
              <td>Irian</td>
            </tr>
            <tr>
              <td><strong>Agama</strong></td>
              <td>:</td>
              <td>Islam</td>
            </tr>
            <tr>
              <td><strong>Hp</strong></td>
              <td>:</td>
              <td>08123456789</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="list-bio-tim">
      <div class="inner-bio-tim box-color-dark">
        <div class="picture">
          <img class="image-tim"src="./images/tim/bayu.png" alt="bayu">
          <div class="sosmed">
            <!--<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="ig">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721" alt="wa">-->
          </div>
        </div>
        
        <div class="detail-biodata">
          <h3>Detail</h3>
          <hr>
          <table>
            <tr>
              <td><strong>Nama</strong></td>
              <td>:</td>
              <td>Bayu Prasetyo</td>
            </tr>
            <tr>
              <td><strong>Tgl</strong></td>
              <td>:</td>
              <td>14 mei 2012</td>
            </tr>
            <tr>
              <td><strong>Alamat</strong></td>
              <td>:</td>
              <td>Irian</td>
            </tr>
            <tr>
              <td><strong>Agama</strong></td>
              <td>:</td>
              <td>Islam</td>
            </tr>
            <tr>
              <td><strong>Hp</strong></td>
              <td>:</td>
              <td>08123456789</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="list-bio-tim">
      <div class="inner-bio-tim">
        <div class="picture">
          <img class="image-tim"src="./images/tim/khairul.png" alt="bayu">
          <div class="sosmed">
            <!--<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="ig">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721" alt="wa">-->
          </div>
        </div>
        
        <div class="detail-biodata">
          <h3>Detail</h3>
          <hr>
          <table>
            <tr>
              <td><strong>Nama</strong></td>
              <td>:</td>
              <td>Bayu Prasetyo</td>
            </tr>
            <tr>
              <td><strong>Tgl</strong></td>
              <td>:</td>
              <td>14 mei 2012</td>
            </tr>
            <tr>
              <td><strong>Alamat</strong></td>
              <td>:</td>
              <td>Irian</td>
            </tr>
            <tr>
              <td><strong>Agama</strong></td>
              <td>:</td>
              <td>Islam</td>
            </tr>
            <tr>
              <td><strong>Hp</strong></td>
              <td>:</td>
              <td>08123456789</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="list-bio-tim">
      <div class="inner-bio-tim box-color-dark">
        <div class="picture">
          <img class="image-tim"src="./images/tim/mustika.png" alt="bayu">
          <div class="sosmed">
            <!--<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="ig">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721" alt="wa">-->
          </div>
        </div>
        
        <div class="detail-biodata">
          <h3>Detail</h3>
          <hr>
          <table>
            <tr>
              <td><strong>Nama</strong></td>
              <td>:</td>
              <td>Bayu Prasetyo</td>
            </tr>
            <tr>
              <td><strong>Tgl</strong></td>
              <td>:</td>
              <td>14 mei 2012</td>
            </tr>
            <tr>
              <td><strong>Alamat</strong></td>
              <td>:</td>
              <td>Irian</td>
            </tr>
            <tr>
              <td><strong>Agama</strong></td>
              <td>:</td>
              <td>Islam</td>
            </tr>
            <tr>
              <td><strong>Hp</strong></td>
              <td>:</td>
              <td>08123456789</td>
            </tr>
          </table>
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
  
export default Aboutus;