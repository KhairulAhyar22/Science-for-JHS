import drawer from "../../../../utils/drawer";
const Kelas1IpaBab1 = {
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
      <div class="inner-container-bab">
        <div class="btn-detail-bab">
          <a class="go-materi" href="#/kelassatuipa">Lihat Materi</a>
          <button class="tandai-materi" href="">Tandai Dipelajari</button>
        </div>
        <div class="container-materi-bab">
          <h2 class="title-materi-bab">Object IPA dan Pengamatannya</h2>
          <h3 class="title-smb1">A.	Penyelidikan IPA</h3>
          <p class="text-smb">Penyelidikan ilmiah IPA melibatkan sejumlah proses, antara lain: mengamati, membuat inferensi, dan mengomunikasikan. Keterampilan melakukan pengamatan dan mencoba menemukan hubungan-hubungan yang diamati secara sistematis sangatlah penting. Dengan keterampilan ini, kita dapat mengetahui bagaimana mengumpulkan fakta dan menghubungkan fakta-fakta untuk membuat suatu penafsiran atau kesimpulan. Keterampilan ini juga merupakan keterampilan belajar sepanjang hayat yang dapat digunakan bukan saja untuk mempelajari berbagai macam ilmu, tetapi juga dapat digunakan dalam kehidupan sehari-hari.</p>
          <p class="text-smb">Objek yang dipelajari dalam IPA meliputi seluruh benda di alam dengan segala interaksinya untuk dipelajari pola-pola keteraturannya. Objek tersebut dapat berupa benda yang sangat kecil, misalnya bakteri, virus, bahkan partikel - partikel penyusun atom. Objek yang diamati juga bisa benda-benda yang berukuran sangat besar, misalnya lautan, bumi, matahari, hingga jagat raya ini, berbagai benda hidup dan lingkungan juga dapat dapat dijadikan objek pengamatan di dalam IPA.</p>
          <p class="text-smb">Pada saat ini, penyelidikan tentang alam telah menghasilkan kumpulan pengetahuan yang demikian kompleks. Untuk memudahkan, pengetahuan-pengetahuan tersebut digolongkan sebagai berikut:</p>
          <div class="box-sub">
            <p class="text-smb">1. Fisika, mempelajari tentang aspek mendasar alam, misalnya materi, energi, gaya, gerak, panas, cahaya, dan berbagai gejala alam fisik lainnya. 
            <br>2.  Kimia, meliputi penyelidikan tentang penyusun dan perubahan zat. 
            <br>3. Biologi, mempelajari tentang sistem kehidupan mulai dari ukuran renik sampai dengan lingkungan yang sangat luas. 
            <br>4 Ilmu Bumi dan Antariksa, mempelajari asal mula bumi, perkembangan dan keadaan saat ini, bintang-bintang, planet-planet, dan berbagai benda langit lainnya</p>
          </div>

          <h3 class="title-smb1">B.	Pengukuran sebagai Bagian dari Pengamatan</h3>
          <p class="text-smb">Pengamatan objek dengan menggunakan indra merupakan kegiatan penting untuk menghasilkan deskripsi suatu benda. Akan tetapi, seringkali pengamatan seperti itu tidak cukup. Kita memerlukan pengamatan yang memberikan hasil yang pasti ketika dikomunikasikan dengan orang lain yaitu dengan cara mengukur.</p>
          <div class="box-sub">
            <h4 class="title-smb2">1.	Pengukuran</h4>
            <p class="text-smb">Mengukur merupakan kegiatan penting dalam kehidupan dan kegiatan utama di dalam IPA. mengukur merupakan kegiatan membandingkan suatu besaran yang diukur dengan besaran sejenis yang dipakai sebagai satuan. Dalam satuan SI (Sistem Internasional), setiap jenis ukuran memiliki satuan dasar, contohnya panjang memiliki satuan dasar meter. Sistem Internasional lebih mudah digunakan karena disusun berdasarkan kelipatan bilangan 10, pengukuran yang baik memerlukan alat ukur yang sesuai. Besaran yang terdiri dari besaran pokok dan besaran turunan.</p>

            <h4 class="title-smb2">2.	Besaran Pokok</h4>
            <p class="text-smb">Satuan besaran pokok adalah besaran yang satuannya didefinisikan, Berikut merupakan jenis-jenis besaran pokok: </p>
            <h5 class="title-smb3">a.	Panjang</h5>
            <p class="text-smb">panjang menyatakan jarak antara dua titik. Misalnya, panjang papan tulis adalah jarak antara titik pada ujung-ujung papan tulis, panjang bayi yang baru lahir adalah jarak dari ujung kaki sampai ujung kepala bayi itu panjang menggunakan satuan dasar SI meter (m).alat pengukur panjang misalnya pita ukur atau metlin, penggaris atau mistar, jangka sorong, dan meteran gulung, Dalam melakukan pengukuran, perhatikan posisi nol alat ukur. Untuk pengukuran panjang, ujung awal benda berimpit dengan angka nol pada alat ukur. Selain itu, posisi mata harus tegak lurus dengan skala yang ditunjuk, untuk menghindari kesalahan hasil pembacaan pengukuran.</p>

            <h5 class="title-smb3">b.	Massa </h5>
            <p class="text-smb">Jumlah materi yang terkandung dalam suatu benda disebut massa benda, dalam kehidupan sehari-hari, orang menggunakan istilah “berat” untuk massa. Namun, sesungguhnya massa tidak sama dengan berat. alam SI, massa menggunakan satuan dasar kilogram (kg), sedangkan berat menggunakan satuan newton (N). Massa suatu benda dapat diukur dengan neraca lengan, sedangkan berat diukur dengan neraca pegas. Selain kilogram (kg), massa benda juga dinyatakan dalam satuan-satuan lain. Misalnya, gram (g) dan miligram (mg) untuk massa-massa yang kecil; ton (t) dan kuintal (kw) untuk massa-massa yang besar.</p>

            <h5 class="title-smb3">c.	Waktu </h5>
            <p class="text-smb">Waktu adalah selang antara  dua kejadian atau dua peristiwa. Misalnya, waktu hidup seseorang dimulai sejak ia dilahirkan hingga meninggal, waktu perjalanan diukur sejak    mulai bergerak sampai dengan akhir gerak. Waktu dapat diukur dengan jam tangan atau stopwatch. Satuan SI untuk waktu adalah detik atau sekon (s).</p>
            <img class="img-smb"src="./images/kelassatu/IPA/img/bp.jpg" alt="besaran pokok">

            <h4 class="title-smb2">3.	Besaran Turunan</h4>
            <p class="text-smb">Besaran turunan merupakan satuan besaran yang diturunkan dari besaran pokok. Besaran-besaran yang dapat diukur selain 7 (tujuh) besaran pokok di atas tergolong sebagai besaran turunan contoh besaran turunan yaitu luas, volume, konsentrasi larutan, dan laju pertumbuhan. Besaran turunan akan dijelaskan lebih lanjut pada materi-materi selanjutnya.              </p>
          </div>

        </div>
        <div class="box-btn-move-pagebab">
          <a class="btn-move-pagebab" href="#/kelassatuipa">Sebelumnya</a>
          <a class="btn-move-pagebab" href="#/kelas1ipabab2">Selanjutnya</a>
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
  
export default Kelas1IpaBab1;