const firebaseConfig = {
  apiKey: "AIzaSyAqkMIR3_NQr-TfJqeTlRN4h2FArE58_Q0",
  authDomain: "donnghiphep-2.firebaseapp.com",
};

firebase.initializeApp(firebaseConfig);

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "don.html"; // Thành công → chuyển trang
    })
    .catch((error) => {
      document.getElementById("error").innerText = "Sai tài khoản hoặc mật khẩu!";
      console.error(error);
    });
}
