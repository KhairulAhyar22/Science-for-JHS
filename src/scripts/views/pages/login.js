const Login = {
  async render() {
    return `
    <div class="form">
      <form class="login-form">
        <div class="inner-form">
          <h2 class="form-title">LOGIN</h2>
          <input type="email" id="emaill" placeholder="Email" required>
          <input type="password" id="passwordl" placeholder="Password" required>
          <input type="button" id="btnl"name="button" value="SUBMIT"> 
          <hr>
          <p class="form-text">Belum Punya Akun?</p>
          <p ><a class="show-register" href="#/register"> Registrasi/Buat Akun</a></p>
        </div>
      </form>
    </div>
    `
    ;  
  },
  
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const btnl = document.getElementById('btnl');

    btnl.addEventListener('click', async () => {
      const emaill = document.getElementById('emaill').value;
      const userPassword = document.getElementById('passwordl').value;

      const response = await fetch('http://localhost:5000/regis');
      const responsejson = await response.json();
    
      const arrayLogin = responsejson.data.regis;
      const dataRegis = arrayLogin.filter((user) => user.email === emaill && user.password === userPassword);
      const objectTarget = dataRegis.filter((user) => user.email)[0];
      console.log(objectTarget);

      if(dataRegis.length == 0){
        alert('Email atau Password Anda Salah');
      }
      if(objectTarget.email === emaill && objectTarget.password === userPassword) {
        alert('Login Berhasil');  
      }    
    });
  },
};
  
export default Login;