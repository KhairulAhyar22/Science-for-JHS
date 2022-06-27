import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import HomeCore from '../views/page-core/home-core';
import Listclass from '../views/page-core/list-class';
import Kelassatu from '../views/page-core/kelas-satu';
import Kelasdua from '../views/page-core/kelas-dua';
import Kelastiga from '../views/page-core/kelas-tiga';
import Aboutus from '../views/page-core/about-us';

/*mata-pelajaran*/
import Kelassatuipa from '../views/pages-kelas-satu/ipa-kelas-satu';
import Kelassatubahasa from '../views/pages-kelas-satu/bahasa-kelas-satu';
import Kelassatuips from '../views/pages-kelas-satu/ips-kelas-satu';
import Kelassatupkn from '../views/pages-kelas-satu/pkn-kelas-satu';

/*import materi kelas satu*/
import Kelas1BahasaBab1 from '../views/page-materi/kelas-satu/bahasa/bahasa-bab1';/*bahasa*/
import Kelas1BahasaBab2 from '../views/page-materi/kelas-satu/bahasa/bahasa-bab2';
import Kelas1BahasaBab3 from '../views/page-materi/kelas-satu/bahasa/bahasa-bab3';
import Kelas1BahasaBab4 from '../views/page-materi/kelas-satu/bahasa/bahasa-bab4';
import Kelas1IpaBab1 from '../views/page-materi/kelas-satu/ipa/ipa-bab1';/*ipa*/
import Kelas1IpaBab2 from '../views/page-materi/kelas-satu/ipa/ipa-bab2';
import Kelas1IpaBab3 from '../views/page-materi/kelas-satu/ipa/ipa-bab3';
import Kelas1IpaBab4 from '../views/page-materi/kelas-satu/ipa/ipa-bab4';
import Kelas1IpsBab1 from '../views/page-materi/kelas-satu/ips/ips-bab1';/*ips*/
import Kelas1IpsBab2 from '../views/page-materi/kelas-satu/ips/ips-bab2';
import Kelas1IpsBab3 from '../views/page-materi/kelas-satu/ips/ips-bab3';
import Kelas1IpsBab4 from '../views/page-materi/kelas-satu/ips/ips-bab4';
import Kelas1PknBab1 from '../views/page-materi/kelas-satu/pkn/pkn-bab1';/*pkn*/
import Kelas1PknBab2 from '../views/page-materi/kelas-satu/pkn/pkn-bab2';
import Kelas1PknBab3 from '../views/page-materi/kelas-satu/pkn/pkn-bab3';
import Kelas1PknBab4 from '../views/page-materi/kelas-satu/pkn/pkn-bab4';

const routes = {
    '/': Home,
    '/home': Home,
    '/login': Login,
    '/register': Register,
    '/homecore': HomeCore,
    '/academy': Listclass,
    '/kelassatu': Kelassatu,
    '/kelasdua': Kelasdua,
    '/kelastiga': Kelastiga,
    '/aboutus': Aboutus,
    
    '/kelassatuipa': Kelassatuipa,
    '/kelassatubahasa': Kelassatubahasa,
    '/kelassatuips': Kelassatuips,
    '/kelassatupkn': Kelassatupkn,

    /*route kelas satu*/
    '/kelas1bahasabab1': Kelas1BahasaBab1,
    '/kelas1bahasabab2': Kelas1BahasaBab2,
    '/kelas1bahasabab3': Kelas1BahasaBab3,
    '/kelas1bahasabab4': Kelas1BahasaBab4,
    '/kelas1ipabab1': Kelas1IpaBab1,
    '/kelas1ipabab2': Kelas1IpaBab2,
    '/kelas1ipabab3': Kelas1IpaBab3,
    '/kelas1ipabab4': Kelas1IpaBab4,
    '/kelas1ipsbab1': Kelas1IpsBab1,
    '/kelas1ipsbab2': Kelas1IpsBab2,
    '/kelas1ipsbab3': Kelas1IpsBab3,
    '/kelas1ipsbab4': Kelas1IpsBab4,
    '/kelas1pknbab1': Kelas1PknBab1,
    '/kelas1pknbab2': Kelas1PknBab2,
    '/kelas1pknbab3': Kelas1PknBab3,
    '/kelas1pknbab4': Kelas1PknBab4,
};

export default routes;