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
        <div class="bio-tim">
          <div class="inner-bio-tim">
            <div class="picture">
              <img class="image-tim" src="./images/tim/bayu.png" alt="bayu">
            </div>
            
            <div class="detail-biodata">
              <h3 class="title-desc-tim">Detail</h3>
              <hr>
              <table>
                <tr>
                  <td><strong>Nama</strong></td>
                  <td>: Bayu Prasetiyo</td>
                </tr>
                <tr>
                  <td><strong>Tgl</strong></td>
                  <td>: 1 Februari 2001</td>
                </tr>
                <tr>
                  <td><strong>Alamat</strong></td>
                  <td>: Jl. Banjarmasin, Papua</td>
                </tr>
                <tr>
                  <td><strong>Agama</strong></td>
                  <td>: Hindu</td>
                </tr>
                <tr>
                  <td><strong>Hp</strong></td>
                  <td>: 085354179749</td>
                </tr>
                <tr>
                  <td><strong>IG</strong></td>
                  <td>: bayyuprsty_12</td>
                </tr>
              </table>

              <h3 class="title-desc-tim">Motto</h3>
              <hr>
              <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolorem a, animi architecto fuga voluptates corporis quibusdam hic sequi temporibus delectus sint recusandae itaque doloribus nesciunt debitis voluptatem magni nobis."</p>
            </div> 
          </div>
        </div>

        <div class="bio-tim box-color-dark">
          <div class="inner-bio-tim">
            <div class="picture">
              <img class="image-tim" src="./images/tim/khairul.png" alt="bayu">
            </div>
            
            <div class="detail-biodata">
              <h3 class="title-desc-tim">Detail</h3>
              <hr>
              <table>
                <tr>
                  <td><strong>Nama</strong></td>
                  <td>: Bayu Prasetyo</td>
                </tr>
                <tr>
                  <td><strong>Tgl</strong></td>
                  <td>: 14 mei 2012</td>
                </tr>
                <tr>
                  <td><strong>Alamat</strong></td>
                  <td>: Irian</td>
                </tr>
                <tr>
                  <td><strong>Agama</strong></td>
                  <td>: Islam</td>
                </tr>
                <tr>
                  <td><strong>Hp</strong></td>
                  <td>: 08123456789</td>
                </tr>
                <tr>
                  <td><strong>IG</strong></td>
                  <td>: bayu_prsty</td>
                </tr>
              </table>

              <h3 class="title-desc-tim">Motto</h3>
              <hr>
              <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolorem a, animi architecto fuga voluptates corporis quibusdam hic sequi temporibus delectus sint recusandae itaque doloribus nesciunt debitis voluptatem magni nobis."</p>
            </div> 
          </div>
        </div>

        <div class="bio-tim">
          <div class="inner-bio-tim">
            <div class="picture">
              <img class="image-tim" src="./images/tim/mustika.png" alt="bayu">
            </div>
            
            <div class="detail-biodata">
              <h3 class="title-desc-tim">Detail</h3>
              <hr>
              <table>
                <tr>
                  <td><strong>Nama</strong></td>
                  <td>: Bayu Prasetyo</td>
                </tr>
                <tr>
                  <td><strong>Tgl</strong></td>
                  <td>: 14 mei 2012</td>
                </tr>
                <tr>
                  <td><strong>Alamat</strong></td>
                  <td>: Irian</td>
                </tr>
                <tr>
                  <td><strong>Agama</strong></td>
                  <td>: Islam</td>
                </tr>
                <tr>
                  <td><strong>Hp</strong></td>
                  <td>: 08123456789</td>
                </tr>
                <tr>
                  <td><strong>IG</strong></td>
                  <td>: bayu_prsty</td>
                </tr>
              </table>

              <h3 class="title-desc-tim">Motto</h3>
              <hr>
              <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolorem a, animi architecto fuga voluptates corporis quibusdam hic sequi temporibus delectus sint recusandae itaque doloribus nesciunt debitis voluptatem magni nobis."</p>
            </div> 
          </div>
        </div>

        <div class="bio-tim box-color-dark">
          <div class="inner-bio-tim">
            <div class="picture">
              <img class="image-tim" src="./images/tim/nurfian.png" alt="bayu">
            </div>
            
            <div class="detail-biodata">
              <h3 class="title-desc-tim">Detail</h3>
              <hr>
              <table>
                <tr>
                  <td><strong>Nama</strong></td>
                  <td>: Bayu Prasetyo</td>
                </tr>
                <tr>
                  <td><strong>Tgl</strong></td>
                  <td>: 14 mei 2012</td>
                </tr>
                <tr>
                  <td><strong>Alamat</strong></td>
                  <td>: Irian</td>
                </tr>
                <tr>
                  <td><strong>Agama</strong></td>
                  <td>: Islam</td>
                </tr>
                <tr>
                  <td><strong>Hp</strong></td>
                  <td>: 08123456789</td>
                </tr>
                <tr>
                  <td><strong>IG</strong></td>
                  <td>: bayu_prsty</td>
                </tr>
              </table>

              <h3 class="title-desc-tim">Motto</h3>
              <hr>
              <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolorem a, animi architecto fuga voluptates corporis quibusdam hic sequi temporibus delectus sint recusandae itaque doloribus nesciunt debitis voluptatem magni nobis."</p>
            </div> 
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