const Register = {
  async render() {
    return `
    <div class="form">
      <form class="login-form">
        <div class="inner-form">
          <h2 class="form-title">REGISTRASI</h2>
          <input type="text" id="username" placeholder="Username" required>
          <input type="email" id="email" placeholder="Email" required>
          <input type="password" id="password" placeholder="Password" required>
          <input type="button" id="btn"name="button" value="SUBMIT"> 
        </div>
      </form>
    </div>
    `;
  },
  
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
  
export default Register;