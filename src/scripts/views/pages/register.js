const Register = {
  async render() {
    return `
      <h2 style="text-align: center;">This is page register</h2>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Registrasi Page</title>
            <link rel="stylesheet" href="registrasi.css">
        </head>
        <body>
            <script type="text/javascript">
            function registrasi(){
                    var nama=(document.regis_validasi.name.value)
              var email=(document.regis_validasi.email.value); 
              var pass=(document.regis_validasi.password.value);

            if(nama =="" && email =="" && pass =="" ){ 
              alert("Data Masih Kosong"); 
              } 
            else if(nama !="" && email !=="" && pass !=""){
              alert("Selamat Anda Berhasil Registrasi"); 
              }
            else if(nama ==""){
              alert("Nama Lengkap Masih Kosong"); 
              }
                else if(email ==""){
              alert("Email Masih Kosong"); 
              }
            else if(pass ==""){
              alert("Password Masih Kosong");
              }
            }
          </script>

            <div class="form_registrasi">
                <form class="login-form" name="regis_validasi">
                    <h2>REGISTRASI</h2>
                    <input type="text" name="name" placeholder="Nama Lengkap" required/>
                    <input type="email" name="email" placeholder="Email" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <input type="button" id="btn"name="button" value="SUBMIT" onClick="registrasi()"/> 
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
  
export default Register;
