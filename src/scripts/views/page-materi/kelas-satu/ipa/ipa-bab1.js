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
          <a class="go-materi" href="">Lihat Materi</a>
          <button class="tandai-materi" href="">Tandai Dipelajari</button>
        </div>
        <div class="container-materi-bab">
          <h2 class="title-materi-bab">Keadaan Alam dan Aktivitas Penduduk Indonesia</h2>
          <h3 class="title-smb">A. Letak Wilayah dan Pengaruhnya Bagi Keadaan Alam Indonesia</h3>
          <p class="text-materi-bab">Letak suatu tempat di permukaan bumi tidak hanya sekadar posisi suatu objek di permukaan bumi, tetapi juga karakteristik yang ada pada tempat tersebut. Setiap tempat akan menunjukkan perbedaan dengan tempat lainnya di permukaan bumi.</p>
          <div class="box-subsub">
            <h4 class="title-smb2">1. Letak Astronomis</h4>
            <p class="text-materi-bab">Letak astronomis adalah letak suatu tempat berdasarkan garis lintang dan garis bujurnya. Garis lintang adalah garis khayal yang melintang melingkari bumi. Garis bujur adalah garis khayal yang menghubungkan Kutub Utara dan Kutub Selatan.
              Keadaan suhu di daerah tropis berbeda dengan suhu di negara-negara yang terletak pada lintang sedang dengan empat musim, yaitu musim dingin, semi, panas, dan gugur. Pada musim dingin, udara sangat dingin sampai mencapai puluhan derajat di bawah nol celsius, sehingga diperlukan penghangat ruangan.
              </p>

            <h4 class="title-smb2">2.	Letak Geografis</h4>
            <p class="text-materi-bab">Letak geografis adalah letak suatu negara di permukaan bumi. Secara geografis, Indonesia terletak di antara dua benua dan dua samudra. Benua yang mengapit Indonesia adalah Benua Asia yang terletak di sebelah utara Indonesia dan Benua Australia yang terletak di sebelah selatan Indonesia. Samudra yang mengapit Indonesia adalah Samudra Pasifik di sebelah timur Indonesia dan Samudra Hindia di sebelah barat Indonesia.
            </p>
          </div>

          <h3 class="title-smb">B.	Keadaan Alam Indonesia</h3>
          <p class="text-materi-bab">Alam Indonesia dikenal sangat indah dan kaya akan berbagai sumber daya alam. Tidak heran jika banyak wisatawan dari berbagai Negara tertarik dan datang ke Indonesia. Kegiatan pariwisata pun berkembang di sejumah wilayah seperti Bali, Yogyakarta, Lombok, dan lain-lain sehingga mendatangkan keuntungan ekonomi yang tidak sedikit. Keadaan alam Indonesia dapat dikelompokkan menjadi dua bagian, yaitu keadaan fisik wilayah serta keadaan flora dan fauna. Keadaan fisik wilayah terdiri atas keadaan iklim dan keadaan bentuk permukaan bumi (kondisi fisografis) yang kemudian akan menentukan jenis tanahnya. Sementara keadaan flora dan fauna menyangkut jenis keragaman dan sebarannya.
          </p>
          <div class="box-subsub">
            <h4 class="title-smb2">1.	Keadaan Iklim Indonesia</h4>
            <p class="text-materi-bab">Letak astronomis Indonesia yang berada di wilayah tropis membuat Indonesia beriklim tropis. Ciri iklim tropis adalah suhu udara yang tinggi sepanjang tahun, dengan rata-rata tidak kurang dari 18<sup>o</sup> C, yaitu sekitar 27<sup>o</sup> C. Di daerah tropis, tidak ada perbedaan yang jauh atau berarti antara suhu pada musim hujan dan suhu pada musim kemarau.            Secara umum, keadaan iklim di Indonesia dipengaruhi oleh tiga jenis iklim, yaitu iklim musim, iklim laut, dan iklim panas.</p>

            <h4 class="title-smb2">2.	Bentuk Muka Bumi dan Aktivitas Penduduk Indonesia</h4>
            <p class="text-materi-bab">Pada peta fisiografi, tampak sebaran bentuk muka bumi Indonesia mulai dataran rendah sampai pegunungan. Untuk membaca peta tersebut, perhatikanlah legenda atau keterangan peta. Simbol berwarna kuning menunjukkan dataran rendah, warna hijau menunjukkan daerah perbukitan, warna cokelat menunjukkan pegunungan. Secara umum, setiap bentuk muka bumi menunjukkan pola aktivitas penduduk yang berbeda antara satu daerah dan daerah lainnya.</p>

            <h4 class="title-smb2">3.	Keragaman Flora dan Fauna di Indonesia</h4>
            <p class="text-materi-bab">Indonesia memiliki keragaman flora dan fauna (keanekaragaman hayati) yang sangat besar. Bahkan, keanekaragaman hayati Indonesia termasuk tiga besar di dunia bersama-sama dengan Brazil di Amerika Selatan dan Zaire di Afrika. Berdasarkan data dari Departemen Kehutanan dan Perkebunan, pada tahun 1999 jumlah spesies tumbuhan di Indonesia mencapai 8.000 spesies yang sudah teridentifikasi dan jumlah spesies hewan mencapai 2.215 spesies. Spesies hewan terdiri atas 515 mamalia, 60 reptil, 1.519 burung, dan 121 kupu-kupu.</p>
            <p class="text-materi-bab">Besarnya keanekaragaman hayati di Indonesia berkaitan erat dengan kondisi iklim dan kondisi fisik wilayah. Suhu dan curah hujan yang besar memungkinkan tumbuhnya beragam jenis tumbuhan. Mengapa demikian? Tumbuhan memerlukan air dan suhu yang sesuai. Makin banyak air tersedia makin banyak tumbuhan yang dapat tumbuh dan karena itu makin banyak hewan yang dapat hidup di daerah tersebut.</p>

            <h5 class="title-smb3">a.	Persebaran Flora Indonesia</h5>
            <p class="text-materi-bab">Flora di Indonesia ternyata dapat dibedakan menjadi dua kelompok besar, yaitu Indo-Malayan dan Indo-Australian. Kelompok Indo-Malayan meliputi kawasan Indonesia Barat. Pulau-pulau yang masuk ke dalam kelompok ini adalah Sumatra, Kalimantan, Jawa, dan Bali. Kelompok Indo-Australian meliputi tumbuhan yang ada kawasan Indonesia Timur. Pulau-pulau yang termasuk dalam Nusa Tenggara, Maluku, dan Papua.</p>
            <h5 class="title-smb3">b.	Persebaran Fauna Indonesia</h5>
            <p class="text-materi-bab">Fauna Indonesia dapat dikelompokkan menjadi tiga corak yang berbeda, yaitu fauna bagian barat, tengah, dan timur. Garis yang memisahkan fauna Indonesia bagian Barat dan Tengah dinamakan garis Wallace, sedangkan garis yang memisahkan fauna Indonesia bagian Tengah dan Timur dinamakan Garis Weber.</p>
          </div>

          <h3 class="title-smb">C.	Kehidupan Sosial Masyarakat Indonesia pada Masa Praaksara, Hindu-Buddha dan Islam</h3>
          <p class="text-materi-bab">Iklim dan bentuk muka bumi mempengaruhi kehidupan social masyarakat Indonesia. Hal ini dapat diketahui dari corak kehidupan masyarakat Indonesia pada masa praaksara, Hindu-Buddha, dan Islam.</p>
          <div class="box-subsub">
            <h4 class="title-smb2">1.	Kehidupan Masyarakat Praaksara</h4>
            <p class="text-materi-bab">Kehidupan masyarakat Indonesia pada masa Praaksara dapat dibagi ke dalam tiga masa, yaitu masa berburu dan mengumpulkan makanan, masa bercocok tanam, dan masa perundagian.</p>
            <p class="text-materi-bab">Sebelum masuknya kebudayaan Hindu-Buddha, masyarakat telah memiliki kebudayaan yang cukup maju. Unsur-unsur kebudayaan asli Indonesia telah tumbuh dan berkembang dalam kehidupan masyarakat Indonesia.</p>
            <p class="text-materi-bab">Bangsa Indonesia yang sebelumnya memiliki kebudayaan asli tidak begitu saja menerima budaya-budaya baru tersebut. Proses masuknya pengaruh budaya Indonesia terjadi karena adanya hubungan dagang antara Indonesia dan India. Kebudayaan yang dating dari India mengalami proses penyesuaian dengan kebudayaan asli Indonesia. Pengaruh kebudayaan Hindu-Buddha di Indonesia ini dapat dilihat dari peninggalan-peninggalan sejarah dalam berbagai bidang</p>

            <h4 class="title-smb2">2.	Kehidupan Masyarakat Masa Hindu dan Buddha</h4>
            <p class="text-materi-bab">Sebelum masuknya kebudayaan Hindu-Buddha, masyarakat telah memiliki kebudayaan yang cukup maju. Unsur-unsur kebudayaan asli Indonesia telah tumbuh dan berkembang dalam kehidupan masyarakat Indonesia.</p>
            <p class="text-materi-bab">Proses masuknya pengaruh budaya Indonesia terjadi karena adanya hubungan dagang antara Indonesia dan India. Kebudayaan yang dating dari India mengalami proses penyesuaian dengan kebudayaan asli Indonesia. Pengaruh kebudayaan Hindu-Buddha di Indonesia ini dapat dilihat dari peninggalan-peninggalan sejarah dalam berbagai bidang diantaranya: bidang keagamaan, bidang politik, bidang social, bidang pendidikan, bidang sastra dan bahasa, bidang arsitektur.</p>

            <h4 class="title-smb2">3.	Kehidupan Masyarakat Indonesia Masa Islam</h4>
            <p class="text-materi-bab">Masuknya Islam berpengaruh besar pada masyarakat Indonesia. Kebudayaan Islam terus berkembang sampai sekarang. Pengaruh kebudayaan Islam dalam kehidupan masyarakat Indonesia antara lain pada bidang-bidang berikut: bidang politik, bidang social, bidang pendidikan, bidang sastra dan bahasa, bidang arsitektur dan kesenian.</p>
          </div>
          <h3 class="title-smb">D.	Konektivitas Antar Ruang dan Waktu</h3>
          <div class="box-subsub">
            <h4 class="title-smb2">1.	Aspek Ruang</h4>
            <p class="text-materi-bab">Menurut (Sumaatmadja, 1981), ruang adalah tempat di permukaan bumi, baik secara keseluruhan maupun hanya sebagian. Bayangkan jika kamu berada di sebuah ruang, misalnya ruang kelas. Ruang kelas tersebut tidak hanya lantai, tetapi juga ada udara, langit-langit/plafon ruangan, dan lain-lain. Demikian halnya dengan ruang permukaan bumi, yang tidak hanya sebatas tanah yang kita injak, tetapi ada udara, air, batuan, tumbuhan, hewan, dan lain-lain.</p>
            <p class="text-materi-bab">Setiap ruang di permukaan bumi memiliki karakteristik yang berbeda antara satu dengan lainnya. Tidak ada satu ruang atau satu tempat pun yang persis sama dengan tempat lainnya. Perbedaan karakteristik ruang biasanya juga diikuti oleh perbedaan sumber daya yang dihasilkannya. Karena itu, tidak ada satu ruang pun yang mampu memenuhi seluruh kebutuhannya sendiri.</p>

            <h4 class="title-smb2">2.	Aspek Waktu</h4>
            <p class="text-materi-bab">Waktu dapat dipahami sebagai kesatuan waktu seperti, detik, menit, jam, hari, minggu, bulan, abad, dan seterusnya. Waktu terus bergerak maju yaitu dari masa lalu ke masa depan. Kita tidak dapat mengendalikan waktu karena tidak ada manusia yang dapat melangkah mundur ke masa lalu atau melompat maju ke masa depan. Hal-hal yang sudah terjadi di masa lalu tidak dapat diubah kembali karena kita tidak bisa pergi ke masa lalu untuk mengubahnya. Demikian pula hal-hal yang akan terjadi di masa mendatang, tidak dapat diketahui dengan pasti karena kita tidak dapat melompat kemasa depan.</p>
          </div>
    
        </div>
        <div class="box-btn-move-pagebab">
          <a class="btn-move-pagebab" href="">Sebelumnya</a>
          <a class="btn-move-pagebab" href="">Selanjutnya</a>
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