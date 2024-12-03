<template>
  <div class="login">
    <div class="div">
      <!-- Sección Izquierda -->
      <div class="left">
        <div class="overlap-group">
          <p class="explore-riviera-maya">
            <span class="text-wrapper">Explore&nbsp;&nbsp;Riviera Maya </span><span class="span">&nbsp;</span>
          </p>
          <div class="text">
            <div class="text-wrapper-2">Welcome to TourCraft</div>
          </div>
          <p class="p">Riviera Maya at your own pace: discover, book and live your adventure.</p>
        </div>
      </div>

      <!-- Sección Derecha -->
      <div class="overlap">
        <div class="group">
          <!-- Campo de Email -->
          <div class="input">
            <div class="title">Email address</div>
            <input v-model="email" class="input-field" placeholder="Your email" type="email" />
          </div>

          <!-- Campo de Contraseña -->
          <div class="input-2">
            <div class="title-2">Password</div>
            <div class="input-field-2">
              <input
                v-model="password"
                ref="passwordField"
                class="text-2"
                placeholder="Your password"
                :type="passwordVisible ? 'text' : 'password'"
              />
              <i class="fas" :class="[passwordVisible ? 'fa-eye-slash' : 'fa-eye']" @click="togglePasswordVisibility"></i>
            </div>
          </div>

          <div class="text-wrapper-3">Hi, Welcome!</div>
          <div class="text-wrapper-4">
            <label>
              <input type="checkbox" id="remember-me" />
              Remember me
            </label>
          </div>
          <div class="text-wrapper-5">
            <a href="#" @click.prevent="forgotPassword">Forgot password?</a>
          </div>
          <div class="text-wrapper-6">Or with</div>
          <img class="line" src="img/line-20.svg" alt="Line" />
          <img class="line-2" src="img/line-21.svg" alt="Line" />

          <!-- Botón de Login -->
          <div class="button-primary">
            <button class="button" @click="handleLogin">Log in</button>
          </div>

          <!-- Botón de Facebook -->
          <div class="button-with-centered" @click="loginWithFacebook">
            <div class="frame">
              <img class="img" src="@/assets/facebook.png" alt="Facebook" />
              <div class="text-wrapper-7">Facebook</div>
            </div>
          </div>

          <!-- Botón de Google -->
          <div class="frame-wrapper" @click="loginWithGoogle">
            <div class="frame">
              <img class="img" src="@/assets/google.png" alt="Google" />
              <div class="text-wrapper-7">Google</div>
            </div>
          </div>

          <!-- Registro -->
          <p class="don-t-have-an">
            <span class="text-wrapper-8">Don’t have an account? </span>
            <a href="#" class="text-wrapper-9" @click.prevent="signUp">Sign up</a>
          </p>
        </div>
        <img class="solano" src="@/assets/logo.png" alt="Logo" />
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'Login',
  data() {
    return {
      passwordVisible: false,
      email: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert(`Logged in as ${user.email}`);
          // Realiza redirección o acción aquí
        })
        .catch((error) => {
          alert(`Error: ${error.message}`);
        });
    },
    forgotPassword() {
      alert('Redirecting to Forgot Password page...');
      this.$router.push('/forgot-password');
    },
    signUp() {
      alert('Redirecting to Sign-Up page...');
      this.$router.push('/sign-up');
    },
    loginWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          alert(`Logged in with Google as ${user.email}`);
          // Redirige o realiza acciones aquí
        })
        .catch((error) => {
          alert(`Error logging in with Google: ${error.message}`);
        });
    },
    loginWithFacebook() {
      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          alert(`Logged in with Facebook as ${user.email}`);
          // Redirige o realiza acciones aquí
        })
        .catch((error) => {
          alert(`Error logging in with Facebook: ${error.message}`);
        });
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
      const passwordField = this.$refs.passwordField;
      if (passwordField) {
        passwordField.type = this.passwordVisible ? 'text' : 'password';
      }
    }
  }
};
</script>


<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");
@import url("https://fonts.googleapis.com/css?family=Commissioner:400,var(--paragraph-p3-semi-bold-font-weight),italic|Golos+Text:400,500,700,600|Inter:500,400,900,600");

* {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html,
body {
  margin: 0px;
  height: 100%;
}

button:focus-visible {
  outline: 2px solid #4a90e2 !important;
  outline: -webkit-focus-ring-color auto 5px !important;
}

a {
  text-decoration: none;
}

:root {
  --white: rgba(255, 255, 255, 1);
}

.login {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.login .div {
  background-color: #ffffff;
  width: 1600px;
  height: 693px;
  position: relative;

}

.login .left {
  position: absolute;
  width: 662px;
  height: 693px;
  top: 0;
  left: 0;
}

.login .overlap-group {
  position: relative;
  width: 660px;
  height: 640px;
  background-image: url('@/assets/monument.jpg');
  background-size: cover;
  background-position: 50% 50%;
}

.login .overlap-group::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Capa negra semitransparente */
  z-index: 1; /* Coloca la capa encima de la imagen */
}

.login .explore-riviera-maya {
  position: absolute;
  width: 633px;
  top: 155px;
  left: 12px;
  text-shadow: 0px 4px 4px #05050548;
  font-family: "Poppins-Bold", Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 40px;
  text-align: center;
  letter-spacing: 0;
  line-height: 29.2px;
  white-space: nowrap;
  z-index: 2
}

.login .text-wrapper {
  font-weight: 700;

}

.login .span {
  font-family: "Playfair Display-Bold", Helvetica;
  font-weight: 700;

}

.login .text {
  display: flex;
  flex-direction: column;
  width: 487px;
  height: 42px;
  align-items: flex-start;
  justify-content: center;
  gap: 5.64px;
  position: absolute;
  top: 250px;
  left: 86px;
  z-index: 2
}

.login .text-wrapper-2 {
  position: relative;
  width: 425px;
  text-shadow: 0px 4px 4px #02020237;
  font-family: "Poppins-SemiBold", Helvetica;
  font-weight: 600;
  color: #ffffff;
  font-size: 25px;
  text-align: center;
  letter-spacing: -0.50px;
  line-height: 35.0px;
}

.login .p {
  position: absolute;
  width: 410px;
  top: 315px;
  left: 124px;
  font-family: "Poppins-Medium", Helvetica;
  font-weight: 500;
  color: #ffffff;
  font-size: 17px;
  text-align: center;
  letter-spacing: -0.34px;
  line-height: 23.8px;
  z-index: 2
}

.login .overlap {
  position: absolute;
  width: 753px;
  height: 571px;
  top: 33px;
  left: 800px;
}

.login .group {
  position: absolute;
  width: 581px;
  height: 515px;
  top: 56px;
  left: 0;
}

.login .input {
  display: flex;
  flex-direction: column;
  width: 570px;
  align-items: flex-start;
  gap: 6px;
  position: absolute;
  top: 64px;
  left: 0;
}

.login .title {
  position: relative;
  width: fit-content;
  margin-top: -1.00px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17.5px;
  white-space: nowrap;
  background: transparent;
  border: none;
  padding: 0;
}

.login .input-field {
  padding: 18px 16px;
  position: relative;
  align-self: stretch;
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid;
  border-color: #d8dadc;
  flex: 1;
  margin-top: -1.00px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #00000080;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 20px;
}

.login .input-2 {
  display: flex;
  flex-direction: column;
  width: 570px;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
  position: absolute;
  top: 166px;
  left: 0;
}

.login .title-2 {
  position: relative;
  width: fit-content;
  margin-top: -1.00px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17.5px;
  white-space: nowrap;
}

.login .input-field-2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;
  position: relative;
  align-self: stretch;
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #d8dadc;
}

.login .input-field-2 input {
  flex: 1;
  border: none;
  outline: none;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #00000080;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 20px;
  padding-right: 30px; /* Espacio para el ícono */
}

.login .input-field-2 i {
  width: 20px;
  height: 20px;
  cursor: pointer; /* Opcional: si el ícono tiene funcionalidad */
}

.login .text-2 {
  position: relative;
  flex: 1;
  margin-top: -1.00px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #00000080;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 20px;
}

.login .img {
  position: relative;
  width: 20px;
  height: 20px;
}

.login .text-wrapper-3 {
  position: absolute;
  width: 325px;
  top: 0;
  left: 0;
  font-family: "Poppins-Bold", Helvetica;
  font-weight: 700;
  color: #000000;
  font-size: 19.8px;
  letter-spacing: -0.20px;
  line-height: 25.7px;
}

.login .text-wrapper-4 {
  position: absolute;
  width: 155px;
  height: 18px;
  top: 262px;
  left: 27px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17.5px;
}

.login .text-wrapper-5 {
  position: absolute;
  width: 192px;
  height: 18px;
  top: 268px;
  left: 378px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17.5px;
}

.login .text-wrapper-6 {
  position: absolute;
  width: 79px;
  height: 18px;
  top: 430px;
  left: 245px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000b2;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17.5px;
}

.login .line {
  left: 357px;
  position: absolute;
  width: 213px;
  height: 1px;
  top: 438px;
  object-fit: cover;
}

.login .line-2 {
  left: 0;
  position: absolute;
  width: 213px;
  height: 1px;
  top: 438px;
  object-fit: cover;
}

.login .checkbox-on {
  position: absolute;
  width: 21px;
  height: 21px;
  top: 261px;
  left: 1px;
}

.login .button-primary {
  display: flex;
  width: 516px;
  height: 34px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 17px 152px;
  position: absolute;
  top: 335px;
  left: 27px;
  background-color: #111827;
  border-radius: 5px;
}

.login .button {
  all: unset;
  box-sizing: border-box;
  position: relative;
  width: fit-content;
  margin-top: -11.07px;
  margin-bottom: -9.07px;
  font-family: "Inter-SemiBold", Helvetica;
  font-weight: 600;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.login .button-with-centered {
  display: flex;
  flex-direction: column;
  width: 275px;
  height: 45px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px 45px;
  position: absolute;
  top: 470px;
  left: 0;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid;
  border-color: #d8dadc;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.login .button-with-centered:hover {
  background-color: #d8d8d8;
  transform: scale(1.05);
}


.login .frame {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  position: relative;
  flex: 0 0 auto;
  margin-top: -5.50px;
  margin-bottom: -5.50px;
}

.login .text-wrapper-7 {
  position: relative;
  width: fit-content;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17.5px;
  white-space: nowrap;
}

.login .frame-wrapper {
  display: flex;
  flex-direction: column;
  width: 275px;
  height: 45px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px 45px;
  position: absolute;
  top: 470px;
  left: 296px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid;
  border-color: #d8dadc;
  transition: background-color 0.3s ease, transform 0.2s ease;
    cursor: pointer;
}

.login .frame-wrapper:hover {
  background-color: #d8d8d8;
  transform: scale(1.05);
}

.login .don-t-have-an {
  position: absolute;
  width: 161px;
  top: 391px;
  left: 205px;
  font-family: "Poppins-Regular", Helvetica;
  font-weight: 400;
  color: transparent;
  font-size: 9.9px;
  letter-spacing: -0.20px;
  line-height: 13.8px;
}

.login .text-wrapper-8 {
  color: #2d3748;
  letter-spacing: -0.02px;
}

.login .text-wrapper-9 {
  color: #007aff;
  letter-spacing: -0.02px;
}

.login .solano {
  position: absolute;
  width: 193px;
  height: 70px;
  top: -30px;
  left: 460px;
  object-fit: cover;
  z-index: 20;
}
</style>