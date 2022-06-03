const Home = {
  async render() {
    return `
    <div class="container">
    <!--Hero-->
    <div class="hero">
      <div class="box-hero-image">
        <img class="hero-image" src="./images/belajar.jpg" alt="hero">
      </div>
      <div class="detil-hero">
        <h2 class="description-hero">Belajar dan Perdalam Pengetahuan Anda dengan Mengulas Materi Sekolah Anda</h2>
        <a href="#" class="button-login">Belajar Sekarang</a>
      </div>
    </div>

    <!--Latar Belakang-->
    <div class="description-app">
      <div class="inner-description-app">
        <h2 class="title">Latar Belakang App</h2>
        <p class="detail-description">&emsp;&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quia nesciunt, libero voluptatibus dolorem id accusamus repudiandae aperiam ad perspiciatis culpa fugit similique obcaecati itaque ea ex asperiores cumque possimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates alias voluptatibus incidunt maiores, sint esse assumenda maxime sequi, quam ut molestias. Quo quidem sit, non voluptatibus nam repellat tenetur ipsa?</p>
        <p class="detail-description"> &emsp;&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quia nesciunt, libero voluptatibus dolorem id accusamus repudiandae aperiam ad perspiciatis culpa fugit similique obcaecati itaque ea ex asperiores cumque possimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates alias voluptatibus incidunt maiores, sint esse assumenda maxime sequi, quam ut molestias. Quo quidem sit, non voluptatibus nam repellat tenetur ipsa?</p>
      </div>
    </div>

    <!--reverensi belajar-->
    <div class="container-article">
      <div class="inner-article">
        <h2 class="title">Artikel Motivasi Belajar</h2>
        <div class="list-article">
          <article>
            <img class="article-image"src="./images/profil/article1.jpg" alt="article 1">
            <div class="article-detail">
              <h3 class="article-title">Manfaat Ilmu Pengetahuan Bagi Kehidupan Manusia</h3>
              <p class="article-description">Ilmu pengetahuan merupakan suatu pemahaman yang didapatkan manusia melalui penelitian atau penemuan yang tersusun secara sistematis dan dapat diuji melalui metode-metode tertentu.</p>
              <a class="read-more" target="blank" href="https://www.websitependidikan.com/2017/07/manfaat-ilmu-pengetahuan-bagi-kehidupan-manusia.html">Baca Selengkapnya-></a>
            </div>
          </article>

          <article>
            <img class="article-image"src="./images/profil/article2.jpg" alt="article 1">
            <div class="article-detail">
              <h3 class="article-title">10 Cara Memotivasi Diri Sendiri untuk Rajin Belajar</h3>
              <p class="article-description">Bagi beberapa orang, belajar merupakan salah satu momok yang tidak mudah ditaklukkan. Ada berbagai macam alasan mengapa hal tersebut bisa terjadi.</p>
              <a class="read-more" target="blank" href="https://www.tipspengembangandiri.com/cara-memotivasi-diri-sendiri-untuk-belajar/">Baca Selengkapnya-></a>
            </div>
          </article>

          <article>
            <img class="article-image"src="./images/profil/article3.png" alt="article 1">
            <div class="article-detail">
              <h3 class="article-title">8 Dampak Negatif Malas Belajar Bagi Diri Sendiri</h3>
              <p class="article-description">Meskipun manfaat belajar sudah terpampang jelas masih ada saja orang yang masih malas dan mengabaikan akibat malas belajar bagi diri sendiri. Lalu apakah akibat bagi orang yang malas belajar? Berikut beberapa dampak negatif jika malas belajar bagi diri sendiri maupun orang lain.</p>
              <a class="read-more" target="blank" href="https://www.rijal09.com/2019/08/dampak-negatif-malas-belajar-bagi-diri-sendiri.html">Baca Selengkapnya-></a>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!--Tim Develop-->
    <div class="container-develop">
      <div class="box-title">
        <h2 class="develop-title">Tim Pengembang</h2>
      </div>
      <div class="list-develop">
        <div class="develop">
          <div class="box-profil">
            <div class="profil">
              <div class="profil-photo">
                <img src="../public/images/heros/hero-image_4.jpg" alt="">
              </div>
              <h3 class="profil-name">Nurfian</h3>
            </div>
            <div class="object-vertical"></div>
          </div>

          <div class="motto">
            <table>
              <tr>
                <td>Universitas</td>
                <td>: Udayana</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td>: 9999</td>
              </tr>
              <tr>
                <td>Keahlian</td>
                <td>: Front End Web Development</td>
              </tr>
            </table>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, culpa? Porro atque illo ullam earum iure neque hic pariatur soluta quidem harum tenetur aspernatur, explicabo laboriosam modi sit voluptatem labore!"</p>
          </div>
        </div>

        <div class="develop">
          <div class="box-profil">
            <div class="profil">
              <div class="profil-photo">
                <img src="../public/images/heros/hero-image_4.jpg" alt="">
              </div>
              <h3 class="profil-name">Nurfian</h3>
            </div>
            <div class="object-vertical"></div>
          </div>

          <div class="motto">
            <table>
              <tr>
                <td>Universitas</td>
                <td>: Udayana</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td>: 9999</td>
              </tr>
              <tr>
                <td>Pengalaman</td>
                <td>: Front End Development</td>
              </tr>
            </table>

            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, culpa? Porro atque illo ullam earum iure neque hic pariatur soluta quidem harum tenetur aspernatur, explicabo laboriosam modi sit voluptatem labore!"</p>
          </div>
        </div>

        <div class="develop">
          <div class="box-profil">
            <div class="profil">
              <div class="profil-photo">
                <img src="../public/images/heros/hero-image_4.jpg" alt="">
              </div>
              <h3 class="profil-name">Nurfian</h3>
            </div>
            <div class="object-vertical"></div>
          </div>

          <div class="motto">
            <table>
              <tr>
                <td>Universitas</td>
                <td>: Udayana</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td>: 9999</td>
              </tr>
              <tr>
                <td>Pengalaman</td>
                <td>: Front End Development</td>
              </tr>
            </table>

            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, culpa? Porro atque illo ullam earum iure neque hic pariatur soluta quidem harum tenetur aspernatur, explicabo laboriosam modi sit voluptatem labore!"</p>
          </div>
        </div>

        <div class="develop">
          <div class="box-profil">
            <div class="profil">
              <div class="profil-photo">
                <img src="../public/images/heros/hero-image_4.jpg" alt="">
              </div>
              <h3 class="profil-name">Nurfian</h3>
            </div>
            <div class="object-vertical"></div>
          </div>

          <div class="motto">
            <table>
              <tr>
                <td>Universitas</td>
                <td>: Udayana</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td>: 9999</td>
              </tr>
              <tr>
                <td>Pengalaman</td>
                <td>: Front End Development</td>
              </tr>
            </table>
            
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, culpa? Porro atque illo ullam earum iure neque hic pariatur soluta quidem harum tenetur aspernatur, explicabo laboriosam modi sit voluptatem labore!"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  },
  
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
  
export default Home;