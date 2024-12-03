<template>
  <div class="container">
    <div class="left-section">
      <div class="image-container">
        <img src="@/assets/monument.jpg" class="responsive-image" alt="Explore Riviera Maya" />
      </div>
      <div class="text-content">
        <h1 class="boldest">Explore Riviera Maya</h1>
        <p>
          <span class="bolder">Welcome to</span>
          <span class="bolder">TourCraft</span>
        </p>
        <div class="text-conten">
          <p class="bold" style="font-size: 1.0rem;">
            Riviera Maya at your own pace: discover, book 
            <span class="line-break">and live your adventure.</span>
          </p>
        </div>
      </div>
    </div>
    <div class="right-section">
      <form @submit.prevent="handleSubmit" class="registration-form">
        <h2>Create account</h2>
        <p>Join with us!</p>
        <div class="form-group">
          <input v-model="form.firstName" type="text" name="first-name" placeholder="First name" required />
          <input v-model="form.lastName" type="text" name="last-name" placeholder="Last name" required />
        </div>
        <div class="form-group">
          <input v-model="form.email" type="email" name="email" placeholder="Email or phone number" required />
          <input v-model="form.dob" type="date" name="dob" required />
        </div>
        <div class="form-group">
          <input v-model="form.password" type="password" name="password" placeholder="Password" required />
          <input v-model="form.confirmPassword" type="password" name="confirm-password" placeholder="Confirm password" required/>
        </div>
        <div class="form-options">
          <label>
            <input v-model="form.remember" type="checkbox" name="remember" /> Remember me
          </label>
          <div class="forgot-password-container">
            <a href="#" class="forgot-password">Forgot password?</a>
          </div>
        </div>
        <div class="buttons-container">
          <div class="button-container">
            <button type="submit" class="btn create-account-btn">Create account</button>
          </div>
          <div class="button-container2">
            <button type="button" class="btn google-btn" @click="signInWithGoogle">
              <img class="iconfinder-google" src="@/assets/google-icon.svg" alt="Google Icon" />
              Sign-in with Google
            </button>
          </div>
        </div>
        <div class="donhave">
          <p>Already have an account? <a href="#">Sing In</a></p>
        </div>
        <div class="terms-container">
          <label>
            <input v-model="form.agree" type="checkbox" name="terms" required />
            I agree to all the <a href="#">Terms</a> and <a href="#">Privacy policy</a>
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "vue-router";

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  dob: "",
  password: "",
  confirmPassword: "",
  remember: false,
  agree: false,
});

const router = useRouter();

const handleSubmit = async () => {
  if (!form.value.agree) {
    alert("You must agree to the terms and privacy policy.");
    return;
  }

  if (form.value.password !== form.value.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, form.value.email, form.value.password);
    console.log("User registered successfully:", userCredential.user);
    // Redirigir a otra página después de un registro exitoso
    router.push("/home");
  } catch (error) {
    console.error("Error during registration:", error.code, error.message);
    alert("Registration failed: " + error.message);
  }
};

const signInWithGoogle = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User signed in with Google:", user);
    router.push("/home");
  } catch (error) {
    console.error("Error during sign-in with Google:", error.code, error.message);
    alert("Google sign-in failed: " + error.message);
  }
};
</script>
  
  
  <style scoped>
  :root {
      --white: rgba(255, 255, 255, 1);
      --blue: rgba(0, 122, 255, 1);
      --body-text: rgba(45, 55, 72, 1);
      --black: rgba(29, 29, 29, 1);
      --strokes: rgba(209,209,209,1);
  }
  
  body {
    padding-bottom: 50px;
    font-family: "poppins-bold", Helvetica;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    background-color: #f4f4f4;
    overflow: hidden; 
  }
  
  .container {
    display: flex;
    width: 100%;
    height: 100%;
    background: #fff;
    padding-bottom: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .left-section {
    flex: 2;
    font-family: "poppins-bold", Helvetica;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: white;
    text-align: center;
    padding: 400px 40px 30px 30px;
    height: 100%; 
    z-index: 1;   
    background-color: rgba(0, 0, 0, 0.9); 
    overflow: hidden;
  }
  
  
.image-container {
  position: absolute; /* La imagen se coloca en posición absoluta */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Detrás del contenido */
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6; /* Transparencia de la imagen */
}
  
  .text-content {
    position: relative; 
    top: -280px; 
    z-index: 1; 
    text-align: center;
    line-height: 1.4; 
    margin: 0; 
  }

  .text-content h1 {
  font-size: 2.2rem; /* Tamaño grande para el título */
  font-weight: 700; /* Asegúrate de que sea negrita */
  margin-bottom: 20px; /* Espaciado entre el título y el párrafo */
}

.text-content p {
  font-size: 1.2rem; /* Aumenta el tamaño del texto de los párrafos */
  font-weight: 500; /* Ajusta el peso del texto */
  margin-bottom: 20px; /* Aumenta el espaciado entre párrafos */
  position: relative; 
    top: 50px; 
    z-index: 1; 
    text-align: center;
    line-height: 1.4; 
    margin: 0; 
}

.text-conten {
    position: relative; 
    top: 20px; 
    z-index: 1; 
    text-align: center;
    line-height: 1.4; 
    margin: 0; 
    font-size: 0.4rem;
  }

  .line-break {
  display: block;
}
  
  .boldest {
  font-weight: 900; /* Muy negrita */
}

.bolder {
  font-weight: 600; /* Negrita media */
}

.bold {
  font-weight: 200; /* Reduce el grosor de la negrita */
}

  
  .right-section {
    flex: 3; 
    padding: 50px 40px; 
    display: flex;
    font-family: "poppins-bold", Helvetica;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    height: 100%; 
    overflow-y: auto;
  }
  
  .registration-form {
    width: 100%;
    max-width: 600px;
    padding: 10px; 
    box-sizing: border-box;
  }
  
  .registration-form h2 {
    margin-bottom: 20px; 
    font-size: 1.6rem; 
  }
  
  .form-group {
    display: flex;
    gap: 150px;
    margin-bottom: 20px; 
  }
  
  .form-group input {
    flex: 1;
    padding: 10px; 
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem; 
  }
  
  .form-options {
    position: absolute;
    bottom: 120px; 
  }
  
  .terms-container label {
    position: absolute;
    bottom: 100px; 
  }
  
  .form-options label {
    font-size: 0.8rem; 
    display: block;
    color: #333; 
  }
  
  .form-options a {
    color: #007bff;
    text-decoration: none;
  }
  
  .form-options a:hover {
    text-decoration: underline;
  }
  
  .buttons-container {
    display: flex;
    justify-content: flex-end; 
    align-items: center;
    width: 100%; 
    margin-top: 20%; 
    gap: 154px; 
    position: relative; 
    right: -6px; 
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    left: 2px;
  }
  
  .button-container2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .create-account-btn {
    width: 220px;
    height: 50px;
    background-color: var(--blue, #007bff);
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .create-account-btn:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  
  .google-btn {
    width: 220px;
    height: 50px;
    background-color: var(--body-text, #2D3748);
    color: white;
    border-radius: 5px;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    transition: background-color 0.3s ease, transform 0.2s ease;
    cursor: pointer;
  }
  
  .google-btn:hover {
    background-color: #242b37;
    transform: scale(1.05);
  }
  
  .iconfinder-google {
    width: 20px;
    height: 20px;
  }
  
  
  .donhave {
    position: absolute;
    justify-content: center;
    right: 330px;
    bottom: -90px;
  }
  
  .forgot-password-container {
    position: absolute;
    bottom: 3px; 
    right: -500px;  
  }
  
  .forgot-password {
    font-size: 0.8rem; 
    color: #007bff;
    text-decoration: none;
  }
  
  .forgot-password:hover {
    text-decoration: underline;
  }
  </style>