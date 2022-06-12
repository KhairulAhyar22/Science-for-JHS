import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import HomeCore from '../views/page-core/home-core';
import Listclass from '../views/page-core/list-class';

const routes = {
    '/': Home,
    '/home': Home,
    '/login': Login,
    '/register': Register,
    '/homecore': HomeCore,
    '/academy': Listclass,
};

export default routes;