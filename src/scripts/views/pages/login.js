const Login = {
  async render() {
    return `
      <h2 style="text-align: center;">This is page login</h2>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login Page</title>
            <link rel="stylesheet" href="login.css">
        </head>
        <body>
            <script type="text/javascript">
            function login(){
              var user=(document.login_validasi.username.value); 
              var pass=(document.login_validasi.password.value);

            if(user =="" && pass ==""){ 
              alert("Username & Password Masih Kosong"); 
              } 
            else if(user !="" && pass !=""){
              alert("Selamat Anda Berhasil Login"); 
              }
            else if(user ==""){
              alert("Username Masih Kosong"); 
              }
            else if(pass ==""){
              alert("Password Masih Kosong");
              }
            }
          </script>
            <div class="form">
                <form class="login-form" name="login_validasi">
                    <h2>LOGIN</h2>
                    <input type="text" name="username" placeholder="Username" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <input type="button" id="btn"name="button" value="SUBMIT" onClick="login()"/> 
                    <hr color="black">
                    <p>Belum Punya Akun?</p>
                    <p><a href=""> Registrasi/Buat Akun</a></p>
                </form>
            </div>
        </body>
        </html>
    `;
  },
  
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
  
export default Login;
