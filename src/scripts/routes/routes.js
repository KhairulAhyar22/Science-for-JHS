import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import HomeCore from '../views/page-core/home-core';
import Listclass from '../views/page-core/list-class';
import Kelassatu from '../views/page-core/kelas-satu';
import Kelasdua from '../views/page-core/kelas-dua';
import Kelastiga from '../views/page-core/kelas-tiga';
import Aboutus from '../views/page-core/about-us';

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
};

export default routes;