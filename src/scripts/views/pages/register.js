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
    const username = document.getElementById('username');
    const userEmail = document.getElementById('email');
    const userPassword = document.getElementById('password');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', async() => {
      const dataRegis = {
        userName: username.value,
        email: userEmail.value,
        password: userPassword.value,
      };

      const response = await fetch('http://localhost:5000/regis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataRegis),
      });
      const responsejson = await response.json();
      console.log(responsejson);
    });

  },
};
  
export default Register;