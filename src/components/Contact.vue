<template>
    <div class="contact-us">
      <div class="container">
        <div class="form">
          <div class="banner">
            <img class="img" src="@/assets/Hero.png" alt="Banner" />
            <div class="frame">
              <div class="text">
                <p class="do-you-have-any">Do You Have Any Questions Or Want Some Clarification?</p>
                <div class="text-wrapper">We Can help you</div>
              </div>
            </div>
          </div>
          <div class="form-2">
            <div class="header">
              <p class="p">Contact Us For Any Questions</p>
              <p class="text-wrapper-2">Eu id cras morbi consectetur viverra eleifend pellentesque dui.</p>
            </div>
            <div class="inputs">
              <div class="text-input">
                <div class="text-input-2">
                  <input class="input" placeholder="Full Name" type="text" id="input-1" />
                  <div class="input-2"></div>
                </div>
                <div class="text-input-2">
                  <label class="text-wrapper-3" for="input-1">Phone</label>
                  <div class="input-2"></div>
                </div>
              </div>
              <div class="text-input">
                <div class="text-input-2">
                  <input class="input" placeholder="Email" type="email" />
                  <div class="input-2"></div>
                </div>
                <div class="text-input-2">
                  <div class="text-wrapper-3">Subject</div>
                  <div class="input-2"></div>
                </div>
              </div>
              <div class="text-input-3">
                <input class="input" placeholder="Message" type="text" />
                <div class="input-3"></div>
              </div>
            </div>
            <div class="button-wrapper">
              <button class="send-message">Send Message</button>
            </div>
          </div>
        </div>
        <img class="image" src="@/assets/Hero.png" alt="Image" />
        <div class="hero">
          <div class="text-wrapper-5">Contact Us</div>
        </div>
        <div class="navbar">
          <router-link to="/" class="text-wrapper-6">Home</router-link>
          <router-link to="/tours" class="text-wrapper-6">Tours</router-link>
          <router-link to="/guides" class="text-wrapper-6">Guides</router-link>
          <router-link to="/about" class="text-wrapper-6">About Us</router-link>
          <router-link to="/contact" class="text-wrapper-7">Contact Us</router-link>
          <router-link to="/sign-in" class="sign-up">
            <div class="sign-up-text">Sign In</div>
          </router-link>
          <router-link to="/log-in" class="sign-up-wrapper">
            <div class="sign-up-text-wrapper">
              <div class="sign-up-text-2">Log In</div>
            </div>
          </router-link>
        </div>
        <div class="overlap">
          <img class="solano" src="@/assets/image.png" alt="Solano" />
        </div>
        <div class="footer">
          <div class="text-icons-wrapper">
            <div class="text-icons">
              <div class="logo-section">
                <div class="logo">
                  <img class="solano-2" src="@/assets/logo.png" alt="Solano" />
                  <div class="text-wrapper-8">TourCraft</div>
                </div>
                <p class="text-wrapper-9">
                  Lorem ipsum dolor sit amet consectetur. Enim nulla suscipit leo integer bibendum ultrices. Nulla sed
                  arcu amet montes tellus sit sem quis.
                </p>
                <div class="social-icons">
                  <div class="social-icon"><i class="fab fa-facebook-f"></i></div>
                  <div class="social-icon"><i class="fab fa-twitter"></i></div>
                  <div class="social-icon"><i class="fab fa-instagram"></i></div>
                </div>
              </div>
              <div class="useful-links">
                <div class="text-wrapper-10">Useful Links</div>
                <div class="links">
                  <router-link to="/">Home</router-link>
                  <router-link to="/tours">Tours</router-link>
                  <router-link to="/guides">Guides</router-link>
                  <router-link to="/about">About Us</router-link>
                  <router-link to="/contact">Contact Us</router-link>
                </div>
              </div>
              <div class="contact-info">
                <div class="text-wrapper-10">Contact</div>
                <div class="frame-2">
                  <div class="frame-3">
                    <img class="img-2" src="/call.svg" alt="Phone" />
                    <div class="text-wrapper-11">(+52) 55 2110 5157</div>
                  </div>
                  <div class="frame-3">
                    <img class="img-2" src="/email.svg" alt="Mail" />
                    <div class="text-wrapper-12">hello@utrivieramaya.edu.mx</div>
                  </div>
                  <div class="frame-3">
                    <img class="img-2" src="/location.svg" alt="Map Pin" />
                    <p class="text-wrapper-13">Playa del Carmen, Quintana Roo, Mexico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="text-wrapper-14">©Copyright 2024 Tourcraft. All Rights Reserved</p>
        </div>
        <div class="group">
          <div class="address">
            <img class="icon" src="/location.svg" alt="Map Pin" />
            <div class="text-wrapper-15">Address</div>
            <p class="avenida-paseo-del">
              Avenida Paseo Del Mayab 4000 Región 79, Solidaridad, 77710<br />Playa Del Carmen, Quintana Roo
            </p>
          </div>
          <div class="email">
            <img class="icon-2" src="/email.svg" alt="Mail" />
            <div class="text-wrapper-16">Email</div>
            <div class="text-wrapper-17">2302032@utrivieramaya.edu.mx</div>
            <div class="text-wrapper-17">TourCraft@icloud.com</div>
          </div>
          <div class="phone">
            <img class="icon-2" src="/call.svg" alt="Phone" />
            <div class="text-wrapper-16">Phone</div>
            <div class="text-wrapper-17">(984) 707-4989</div>
            <div class="text-wrapper-17">(55) 2670-3634</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactUs'
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
  
  .contact-us {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .contact-us .container {
    background-color: #ffffff;
    width: 1600px;
    height: 2868px;
    position: relative;
  }
  
  .contact-us .form {
    display: inline-flex;
    align-items: flex-start;
    gap: 48px;
    padding: 60px 120px;
    position: absolute;
    top: 949px;
    left: 80px;
  }
  
  .contact-us .banner {
    position: relative;
    width: 368px;
    height: 602px;
    background-color: #000000;
    border-radius: 20px;
    overflow: hidden;
    background-image: url('@/assets/Hero.png');
    background-size: cover;
    background-position: 50% 50%;
  }
  
  .contact-us .img {
    width: 100%;
    height: auto;
  }
  
  .contact-us .frame {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
  
  .contact-us .text {
    color: #ffffff;
  }
  
  .contact-us .do-you-have-any {
    font-size: 24px;
    font-weight: bold;
  }
  
  .contact-us .text-wrapper {
    font-size: 18px;
  }
  
  .contact-us .form-2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .contact-us .header {
    margin-bottom: 20px;
  }
  
  .contact-us .p {
    font-size: 24px;
    font-weight: bold;
  }
  
  .contact-us .text-wrapper-2 {
    font-size: 16px;
    color: #666666;
  }
  
  .contact-us .inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .contact-us .text-input {
    display: flex;
    gap: 20px;
  }
  
  .contact-us .text-input-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .contact-us .input {
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    width: 100%;
  }
  
  .contact-us .input-2,
  .contact-us .input-3 {
    height: 1px;
    background-color: #cccccc;
  }
  
  .contact-us .button-wrapper {
    display: flex;
    justify-content: center;
  }
  
  .contact-us .send-message {
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .contact-us .send-message:hover {
    background-color: #0056b3;
  }
  
  .contact-us .image {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: auto;
  }
  
  .contact-us .hero {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .contact-us .text-wrapper-5 {
    font-size: 48px;
    color: #ffffff;
    font-weight: bold;
  }
  
  .contact-us .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .contact-us .text-wrapper-6,
  .contact-us .text-wrapper-7 {
    font-size: 16px;
    color: #333333;
    text-decoration: none;
    margin: 0 10px;
  }
  
  .contact-us .sign-up,
  .contact-us .sign-up-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border-radius: 5px;
    text-decoration: none;
  }
  
  .contact-us .sign-up-text,
  .contact-us .sign-up-text-wrapper {
    font-size: 16px;
  }
  
  .contact-us .overlap {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  
  .contact-us .solano {
    width: 100px;
    height: auto;
  }
  
  .contact-us .footer {
    background-color: #f8f8f8;
    padding: 40px 20px;
    text-align: center;
  }
  
  .contact-us .text-icons-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  
  .contact-us .text-icons {
    display: flex;
    gap: 40px;
  }
  
  .contact-us .logo-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .contact-us .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .contact-us .solano-2 {
    width: 50px;
    height: auto;
  }
  
  .contact-us .text-wrapper-8 {
    font-size: 24px;
    font-weight: bold;
  }
  
  .contact-us .text-wrapper-9 {
    font-size: 16px;
    color: #666666;
    margin-top: 10px;
  }
  
  .contact-us .social-icons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  
  .contact-us .social-icon {
    font-size: 24px;
    color: #333333;
  }
  
  .contact-us .useful-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .contact-us .text-wrapper-10 {
    font-size: 18px;
    font-weight: bold;
  }
  
  .contact-us .links {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .contact-us .contact-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .contact-us .frame-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .contact-us .frame-3 {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .contact-us .img-2 {
    width: 20px;
    height: auto;
  }
  
  .contact-us .text-wrapper-11,
  .contact-us .text-wrapper-12,
  .contact-us .text-wrapper-13 {
    font-size: 16px;
    color: #333333;
  }
  
  .contact-us .text-wrapper-14 {
    font-size: 14px;
    color: #666666;
    margin-top: 20px;
  }
  
  .contact-us .group {
    display: flex;
    justify-content: space-between;
    padding: 40px 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .contact-us .address,
  .contact-us .email,
  .contact-us .phone {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .contact-us .icon,
  .contact-us .icon-2 {
    width: 20px;
    height: auto;
  }
  
  .contact-us .text-wrapper-15,
  .contact-us .text-wrapper-16 {
    font-size: 18px;
    font-weight: bold;
  }
  
  .contact-us .avenida-paseo-del,
  .contact-us .text-wrapper-17 {
    font-size: 16px;
    color: #333333;
  }
  </style>