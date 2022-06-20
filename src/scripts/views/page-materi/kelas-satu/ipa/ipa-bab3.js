import drawer from "../../../../utils/drawer";
const Kelas1IpaBab3 = {
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
          <h2 class="title-materi-bab">Klasifikasi Makhluk Hidup</h2>
          <p class="text-smb">Klasifikasi makhluk hidup adalah suatu cara mengelompokkan makhluk hidup berdasarkan kesamaan ciri yang dimiliki. Tujuan umum klasifikasi makhluk hidup adalah mempermudah mengenali, membandingkan, dan mempelajari makhluk hidup. Tujuan khusus/lain dari klasifikasi makhluk hidup adalah seperti berikut: </p>
          <div class="box-sub">
            <p class="text-smb">1.	Mengelompokkan makhluk hidup berdasarkan persamaan dan perbedaan ciri-ciri yang dimiliki<br>2.	Mendeskripsikan ciri-ciri suatu jenis makhluk hidup untuk membedakannya dengan makhluk hidup dari jenis yang lain<br>3.	Mengetahui hubungan kekerabatan antar - makhluk hidup<br>
              4.	Memberi nama makhluk hidup yang belum diketahui namanya</p>
          </div>
          <p class="text-smb">Berikut ini adalah dasar-dasar klasifikasi makhluk hidup. </p>
          <div class="box-sub">
            <p class="text-smb">1.	Klasifikasi makhluk hidup berdasarkan persamaan dan perbedaan yang dimilikinya.<br>2.	Klasifikasi makhluk hidup berdasarkan ciri bentuk tubuh (morfologi) dan alat dalam tubuh (anatomi).<br>3.	Klasifikasi makhluk hidup berdasarkan manfaat, ukuran, tempat hidup, dan cara hidupnya</p>  
          </div>      

          <h3 class="title-smb1">A.	Klasifikasi Dikotom dan Kunci Determinasi</h3>
          <img class="img-smb"src="./images/kelassatu/IPA/img/dicotom.png" alt="dicotom">
          <p class="text-smb">Urutan ini didasarkan atas persamaan ciri yang paling umum, kemudian makin ke bawah persamaan ciri makin khusus serta perbedaan ciri makin kecil. Orang yang pertama melakukan pengelompokan ini adalah Linnaeus (1707-1778) berdasarkan kategori yang digunakan pada waktu itu.</p>

          <div class="box-sub">
            <h4 class="title-smb2">1.	Kriteria Klasifikasi Tumbuhan</h4>
            <p class="text-smb">Para ahli melakukan pengklasifikasian tumbuhan dengan memperhatikan beberapa kriteria yang menjadi penentu dan selalu diperhatikan. Berikut contohnya.<br>a. Organ perkembangbiakannya: apakah dengan spora atau dengan bunga.<br>b. Habitus/perawakan tumbuhan waktu hidup: apakah tegak, menjalar atau merambat.<br>c. Bentuk dan ukuran daun.<br>d. Cara berkembang biak: seksual (generatif) atau aseksual (vegetatif)</p>

            <h4 class="title-smb2">2.	Kriteria Klasifikasi Hewan</h4>
            <p class="text-smb">Para ahli mengklasifikasi dengan melihat kriteria berikut ini:<br>a. Saluran pencernaan makanan.<br>b. Kerangka (skeleton).<br>c. Anggota gerak.</p>

            <h4 class="title-smb2">3.	Kunci Determinasi</h4>
            <p class="text-smb">Kunci determinasi merupakan suatu kunci yang dipergunakan untuk menentukan filum atau divisi, kelas, ordo, famili, genus, atau spesies. Dasar yang dipergunakan kunci determinasi ini adalah identifikasi dari makhluk hidup dengan menggunakan kunci dikotom. Kunci dikotom berisi keterangan yang disusun berpasangan dan menunjukkan ciri yang berlawanan</p>
          </div>
          <h3 class="title-smb1">B.	Kelompok Makhluk Hidup yang Berukuran Kecil (Mikroskopis)</h3>
          <p class="text-smb">Pada pengamatan makhluk hidup yang berukuran kecil, kamu memerlukan alat bantu yang disebut mikroskop. </p>
          <img class="img-smb"src="./images/kelassatu/IPA/img/mikroskop.png" alt="mikroskop">
          <p class="text-smb">Bagian-bagian microskop dan fungsinya:</p>
          
          <div class="box-sub">
            <div class="box-sub1">
              <ol type="1">
                <li class="text-smb">ensa okuler, Lensa yang berhubungan dengan mata langsung pengintai atau pengamat yang berfungsi untuk memperbesar bayangan objek. Ada 3 buah lensa, yaitu dengan perbesaran 5 x, 10 x, dan 15 x</li>
                <li class="text-smb">Lensa objektif, Lensa yang berada di dekat objek/ benda berfungsi untuk memperbesar bayangan benda. Susunan lensa biasanya terdiri atas 3 atau 4 buah dengan perbesaran masing-masing 4 x, 10 x, 45 x dan 100 x.</li>
                <li class="text-smb">Diafragma, untuk mengatur intensitas cahaya yang masuk ke lensa objektif.</li>
                <li class="text-smb">Cermin ada dua, yaitu cermin datar dan cekung, Cermin berfungsi untuk mengarahkan cahaya pada objek. Cermin datar digunakan ketika cahaya yang dibutuhkan terpenuhi, sedangkan cermin cekung digunakan untuk mengumpulkan cahaya.</li>
                <li class="text-smb">Tabung mikroskop (Tubus), untuk menghubungkan lensa okuler dan lensa objektif.</li>
                <li class="text-smb">Meja sediaan (meja preparat), Sebagai tempat meletakkan objek atau preparat yang diamati. Bagian tengan meja terdapat lubang untuk melewatkan sinar.</li>
                <li class="text-smb">Klip (penjepit objek), Untuk menjepit preparat agar kedudukannya tidak bergeser ketika sedang diamati.</li>
                <li class="text-smb">Lengan mikroskop, Untuk pegangan pada saat memindahkan atau membawa mikroskop</li>
                <li class="text-smb">Pemutar halus (mikrometer, Untuk menggerakkan (menjauhkan/ mendekatkan) lensa objektif terhadap preparat secara pelan/halus.</li>
                <li class="text-smb">Pemutar kasar (makrometer), Untuk menggerakkan tubus ke atas dan ke bawah secara cepat.</li>
                <li class="text-smb">Kondensor, Untuk mengumpulkan cahaya yang masuk, alat ini dapat diputar dan dinaikturunkan.</li>
                <li class="text-smb">Sekrup (engsel inklinasi), Untuk mengatur sudut atau tegaknya mikroskop.</li>
                <li class="text-smb">Kaki mikroskop, Untuk menyangga atau menopang mikroskop.</li>
              </ol>
            </div>
          </div>

          <h3 class="title-smb1">C.	Kelompok Monera dan Protista</h3>
          <div class="box-sub">
            <h4 class="title-smb2">1.	Protista</h4>
            <p class="text-smb">kelompok Protista. Merupakan makhluk hidup yang mempunyai ciri-ciri sebagai berikut:<br>-	selnya memiliki membran inti (eukariotik)<br>-	bersel tunggal yang mampu berkembang biak.<br>-	contoh kelompok Protista: Amoeba, Euglena, Paramecium, Saprolegnia.</p>
            <img class="img-smb"src="./images/kelassatu/IPA/img/bakteri.png" alt="bakteri">
            <p class="text-smb">Protista juga ada yang menyerupai hewan. Kelompok Protista ini disebut protozoa. Kelompok protozoa di antaranya adalah Paramecium, Entamoeba coli yang terdapat pada usus besar dan dapat mengakibatkan penyakit diare, dan Plasmodium malariae yang terdapat pada sel darah merah dan mengakibatkan penyakit malaria</p>
            <h4 class="title-smb2">2.	Monera</h4>
            <p class="text-smb">Mempunyai ciri-ciri: <br>-	selnya tidak memiliki membran inti (prokariotik), <br>-	bersel satu yang mampu untuk berkembang biak dengan membelah diri. <br>-	Contoh kelompok Monera ialah bakteri dan alga biru.</p>
          </div>

          <h3 class="title-smb1">D.	Kelompok Jamur (Fungi)</h3>
          <p class="text-smb">Kelompok jamur (fungi), merupakan kelompok makhluk hidup yang memperoleh makanan dengan cara menguraikan sisa makhluk hidup lain, tidak berklorofil, berspora, tidak mempunyai akar, batang, dan daun, hidupnya di tempat yang lembab, bersifat saprofit (organisme yang hidup dan makan dari bahan organik yang sudah mati atau yang sudah busuk) dan parasit (organisme yang hidup dan mengisap makanan dari organisme lain yang ditempelinya).</p>
          <p class="text-smb">Tubuh jamur terdiri atas benang-benang halus yang disebut hifa. Hifa saling bersambungan membentuk miselium. Pada umumnya, jamur berkembang biak dengan spora yang dihasilkan oleh sporangium. Contoh jamur: jamur roti, ragi tape, jamur tiram putih, dan jamur kayu.</p>
          <p class="text-smb">Jamur dibagi menjadi 6 divisi, yaitu Myxomycotina (jamur lendir), Oomycotina, Zygomycotina, Ascomycotina, Basidiomycotina, dan Deuteromycotina.</p>

          <h3 class="title-smb1">E.	Kelompok Tumbuh-tumbuhan</h3>
          <p class="text-smb">Kingdom Plantae (tumbuhan) dibagi ke dalam beberapa filum, yakni Lumut (Bryophyta), Paku-pakuan (Pteridophyta), serta tumbuhan berbiji (Spermatophyta). Berdasarkan morfologi atau susunan tubuh tumbuhan bisa dibedakan lagi atas dua jenis kelompok besar yaitu tumbuhan tidak berpembuluh (Thallophyta) dan tumbuhan berpembuluh (Tracheophyta).</p>
          <div class="box-sub">
            <h4 class="title-smb2">1.	Tumbuhan Lumut dan Tumbuhan Paku</h4>
            <p class="text-smb">Tumbuhan lumut dan paku adalah tumbuhan yang memiliki spora, berkembang biak dengan cara vegetatif dan generative, memiliki klorofil dan berfotosintesis, habitatnya di tempat lembab.berspora tidak mempunyai bunga, misalnya tumbuhan paku (Pteridophyta).</p>
            <div class="box-sub1">
              <h5 class="title-smb3">a.	Tumbuhan tidak berpembuluh (Thallophyta) </h5>
              <p class="text-smb">Tumbuhan tidak berpembuluh adalah tumbuhan yang tidak memiliki berkas pengangkut. Kelompok tumbuhan ini belum dapat dibedakan antara akar, batang, dan daun, contohnya lumut (Bryophyta).</p>
              <h5 class="title-smb3">b.	Tumbuhan berpembuluh (Tracheophyta) </h5>
              <p class="text-smb">Tumbuhan berpembuluh adalah tumbuhan yang memiliki berkas pengangkut dan sudah dapat dibedakan antara akar, batang, dan daun. Tumbuhan berpembuluh disebut tumbuhan berkormus. Tumbuhan berkormus terdiri atas dua kelompok, yaitu kelompok kormofita berspora dan kormofita berbiji. Kormofita berbiji mempunyai bunga dan biji. Kormofita</p>
            </div>
            <h4 class="title-smb2">2.	Tumbuhan Berbiji (Spermatophyta)</h4>
            <p class="text-smb">Tumbuhan berbiji (Spermatophyta) dikelompokkan menjadi tumbuhan biji terbuka (Gymnospermae) dan tumbuhan biji tertutup (Angiospermae).</p>
            <div class="box-sub1">
              <h5 class="title-smb3">a.	Gymnospermae (Tumbuhan berbiji terbuka), mempunyai ciri-ciri sebagai berikut. </h5>
              <p class="text-smb">1)	Berbiji telanjang karena bijinya tidak dibungkus oleh daun buah.<br>2)	Alat reproduksi berupa strobilus. Ada dua strobilus yaitu strobilus jantan dan betina.<br>3)	Batang besar dan berkambium.<br>4)	Berakar tunggang dan serabut.<br>5)	Daun selalu hijau, sempit, tebal, dan kaku.<br>6)	Contoh tumbuhan berbiji terbuka adalah: juniper, cemara, damar, pinus, belinjo, pakis haji.</p>

              <h5 class="title-smb3">b.	Angiospermae (Tumbuhan berbiji tertutup), mempunyai ciri-ciri:</h5>
              <p class="text-smb">1)	memiliki bakal biji atau biji berada di dalam struktur yang tertutup oleh daun buah (carpels).<br>2)	Daun buah dikelilingi oleh daun bunga.<br>3)	Contoh tumbuhan berbiji tertutup adalah mangga, jambu, avokad, anggur, dan nangka.</p>
            </div>
          </div>

          <h3 class="title-smb1">F.	Kelompok Hewan</h3>
          <p class="text-smb">Dunia hewan dikelompokkan menjadi dua, yaitu hewan tidak bertulang belakang (avertebrata) dan hewan bertulang belakang (vertebrata).</p>
          <div class="box-sub">
            <h4 class="title-smb2">1.	Hewan tidak bertulang belakang (Avertebrata)</h4>
            <p class="text-smb">Dikelompokkan menjadi delapan kelompok, yaitu hewan berpori (Porifera), hewan berongga (Coelenterata), cacing pipih (Platyheminthes), cacing gilig (Nemathelminthes), cacing berbukubuku (Annelida), hewan lunak (Mollusca), hewan berkulit duri (Echinodermata), dan hewan dengan kaki beruas-ruas (Arthropoda).</p>
            <h4 class="title-smb2">2.	Hewan Bertulang Belakang (Vertebrata)</h4>
            <p class="text-smb">Hewan vertebrata ada lima kelompok yaitu pisces, amphibia, reptilia, aves, dan mamalia. Tingkatan klasifikasi yang digunakan oleh Linnaeus adalah Kingdom/regnum (dunia/kerajaan), Filum/divisio (bagian/keluarga besar) filum untuk hewan dan divisio untuk tumbuhan, Classis (kelas), Ordo (bangsa), Familia (suku), Genus (marga), kemudian Species (Jenis)..</p>
          </div>
        </div>
        <div class="box-btn-move-pagebab">
          <a class="btn-move-pagebab" href="#/kelas1ipabab2">Sebelumnya</a>
          <a class="btn-move-pagebab" href="#/kelas1ipabab4">Selanjutnya</a>
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
  
export default Kelas1IpaBab3;