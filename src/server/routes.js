const {
    addDataRegisHandler,
    getAllDataRegisHandler,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/regis',
        handler: addDataRegisHandler,
    },
    {
        method: 'GET',
        path: '/regis',
        handler: getAllDataRegisHandler,
    }
];

module.exports = routes;