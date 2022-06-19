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
import Kelas1IpaBab1 from '../views/page-materi/kelas-satu/ipa/ipa-bab1';
import Kelas1IpsBab1 from '../views/page-materi/kelas-satu/ips/ips-bab1';

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

    '/kelas1ipabab1': Kelas1IpaBab1,
    '/kelas1ipsbab1': Kelas1IpsBab1
};

export default routes;