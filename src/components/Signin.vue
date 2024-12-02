<template>
    <div class="container">
    <div class="left-section">
      <img src="@/assets/monument.jpg" class="responsive-image" alt="Explore Riviera Maya" />
      <div class="text-content">
        <h1>Explore Riviera Maya</h1>
        <p>Welcome to TourCraft</p>
        <p>Riviera Maya at your own pace: discover, book and live your adventure.</p>
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
          <input v-model="form.confirmPassword" type="password" name="confirm-password" placeholder="Confirm password" required />
        </div>

        <!-- Form options section -->
        <div class="form-options">
          <label>
            <input v-model="form.remember" type="checkbox" name="remember" /> Remember me
          </label>
          <div class="forgot-password-container">
            <a href="#" class="forgot-password">Forgot password?</a>
          </div>
        </div>

        <!-- Buttons container -->
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

        <!-- Don't have an account section -->
        <div class="donhave">
          <p>Don't have an account? <a href="#">Log In</a></p>
        </div>

        <!-- Terms and privacy policy section -->
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
  
  <script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  export default {
    name: "RegistrationForm",
    data() {
      return {
        form: {
          firstName: "",
          lastName: "",
          email: "",
          dob: "",
          password: "",
          confirmPassword: "",
          remember: false,
          agree: false,
        },
      };
    },
    methods: {
    handleSubmit() {
      // Handle form submission
    },
    async signInWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('User signed in:', user);
        // Redirect or perform other actions after successful sign-in
      } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Error during sign-in with Google:', errorCode, errorMessage, email, credential);
      }
    }
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
    font-family: Arial, sans-serif;
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
    font-family: Arial, sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: white;
    text-align: center;
    padding: 400px 20px 20px 20px;
    height: 100%; 
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.9); 
  }
  
  .left-section img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    z-index: -1; 
    opacity: 0.6; 
  }
  
  .text-content {
    position: relative; 
    top: -280px; 
    z-index: 1; 
    text-align: center;
    line-height: 1.4; 
    margin: 0; 
  }
  
  .left-section h1, .left-section p {
    margin: 10px; 
  }
  
  .right-section {
    flex: 3; 
    padding: 50px 40px; 
    display: flex;
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
    bottom: 30px; 
  }
  
  .terms-container label {
    position: absolute;
    bottom: 10px; 
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
    background-color: var(--body-text, #f4f4f4);
    color: #333;
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
    background-color: #e0e0e0;
    transform: scale(1.05);
  }
  
  .iconfinder-google {
    width: 20px;
    height: 20px;
  }
  
  
  .donhave {
    position: absolute;
    justify-content: center;
    right: 310px;
    bottom: -150px;
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