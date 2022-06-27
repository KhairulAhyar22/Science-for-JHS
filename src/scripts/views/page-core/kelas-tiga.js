import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelastiga = {
  async render() {
    const response = await fetch(apiMateri);
    const responsejson = await response.json();
    const nav = responsejson.materi.filter((m) => m.id === "navMateri")[0];
    return `
    ${nav.page}
    <main>
      <div class="container">
        <div class="box-list-study">
          <div class="box-image-teacher">
            <img class="image-teacher"src="./images/hero-kelas3.png" alt="hero kelas 3">
          </div>
          <div class="detail-list-study">
            <h4 class="tl-mp">Mata Pelajaran <span style="color: red;">Kelas IX</span></h4>
            <div class="hr"></div>
            <div class="list-study">
              <ul>
                <li class="item-study"><a href="#/kelastigabahasa">Bahasa Indonesia</a></li>
                <li class="item-study"><a href="#/kelastigaipa">IPA</a></li>
                <li class="item-study"><a href="#/kelastigapkn">PKN</a></li>
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
  
export default Kelastiga;