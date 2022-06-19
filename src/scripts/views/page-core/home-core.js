import drawer from "../../utils/drawer";
const HomeCore = {
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
    <!--Hero-->
    <div class="hero">
      <div class="box-hero-image">
        <img class="hero-image" src="./images/belajar.jpg" alt="hero">
      </div>
      <div class="detil-hero">
        <h2 class="description-hero">Belajar dan Perdalam Pengetahuan Anda dengan Mengulas Materi Sekolah Anda</h2>
        <a href="#/academy" class="button-login">Belajar Sekarang</a>
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
            <img class="article-image"src="./images/article/article1.jpg" alt="article 1">
            <div class="article-detail">
              <h3 class="article-title">Manfaat Ilmu Pengetahuan Bagi Kehidupan Manusia</h3>
              <p class="article-description">Ilmu pengetahuan merupakan suatu pemahaman yang didapatkan manusia melalui penelitian atau penemuan yang tersusun secara sistematis dan dapat diuji melalui metode-metode tertentu.</p>
              <a class="read-more" target="blank" href="https://www.websitependidikan.com/2017/07/manfaat-ilmu-pengetahuan-bagi-kehidupan-manusia.html">Baca Selengkapnya-></a>
            </div>
          </article>

          <article>
            <img class="article-image"src="./images/article/article2.jpg" alt="article 1">
            <div class="article-detail">
              <h3 class="article-title">10 Cara Memotivasi Diri Sendiri untuk Rajin Belajar</h3>
              <p class="article-description">Bagi beberapa orang, belajar merupakan salah satu momok yang tidak mudah ditaklukkan. Ada berbagai macam alasan mengapa hal tersebut bisa terjadi.</p>
              <a class="read-more" target="blank" href="https://www.tipspengembangandiri.com/cara-memotivasi-diri-sendiri-untuk-belajar/">Baca Selengkapnya-></a>
            </div>
          </article>

          <article>
            <img class="article-image"src="./images/article/article3.png" alt="article 1">
            <div class="article-detail">
              <h3 class="article-title">8 Dampak Negatif Malas Belajar Bagi Diri Sendiri</h3>
              <p class="article-description">Meskipun manfaat belajar sudah terpampang jelas masih ada saja orang yang masih malas dan mengabaikan akibat malas belajar bagi diri sendiri. Lalu apakah akibat bagi orang yang malas belajar? Berikut beberapa dampak negatif jika malas belajar bagi diri sendiri maupun orang lain.</p>
              <a class="read-more" target="blank" href="https://www.rijal09.com/2019/08/dampak-negatif-malas-belajar-bagi-diri-sendiri.html">Baca Selengkapnya-></a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </main>
    `;
  },
  
  async afterRender() {
    drawer();
  },
};
  
export default HomeCore;