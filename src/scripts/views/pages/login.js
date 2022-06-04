const Login = {
  async render() {
    return `
    <div class="form">
      <form class="login-form">
        <div class="inner-form">
          <h2 class="form-title">LOGIN</h2>
          <input type="text" id="username" placeholder="Username" required>
          <input type="password" id="password" placeholder="Password" required>
          <input type="button" id="btn"name="button" value="SUBMIT"> 
          <hr>
          <p class="form-text">Belum Punya Akun?</p>
          <p ><a class="show-register" href="#/register"> Registrasi/Buat Akun</a></p>
        </div>
      </form>
    </div>
    `;
  },
  
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
  
export default Login;