const { nanoid } = require('nanoid');
const regis = require('./regis');

const addDataRegisHandler = (request, h) => {
  const { userName, email, password } = request.payload;
  const id = nanoid(16);  
  const createdAt = new Date().toISOString();

  const newRegis = {
    userName, email, password, id, createdAt,
  }
  regis.push(newRegis);
  const isSuccess = regis.filter((regis) => regis.id === id).length > 0;

  if(isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Data Registrasi Berhasil Ditambahkan',
      data: {
        regisId: id,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Data Registrasi Gagal Ditambahkan',
  });
  response.code(500);
  return response;
};

const getAllDataRegisHandler = () => ({
  status: 'success',
  data: {
    regis,
  },
});

module.exports = {
  addDataRegisHandler,
  getAllDataRegisHandler,
}