<template>
  <div class="main-container">
    <nav class="navigation">
      <router-link to="/home" active-class="active">
        <img src="@/assets/logo.png" alt="Logo" class="logo">
      </router-link>
      <button class="navbar-toggler" type="button" @click="toggleMenu" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['nav-links', { 'show': isMenuOpen }]">
        <router-link to="/home" class="nav-link" active-class="active">Home</router-link>
        <router-link to="/tours" class="nav-link" active-class="active">Tours</router-link>
        <router-link to="/guides" class="nav-link" active-class="active">Guides</router-link>
        <router-link to="/about" class="nav-link" active-class="active">About Us</router-link>
        <router-link to="/contact" class="nav-link" active-class="active">Contact Us</router-link>
        <button @click="navigateTo('/sign-in')" v-if="!isLoggedIn" class="nav-link button-link">
          Sign In
        </button>
        <button @click="navigateTo('/login')" v-if="!isLoggedIn" class="nav-link button-link">
          Log In
        </button>
        <button @click="handleSignOut" v-if="isLoggedIn" class="nav-link button-link">
          Sign out
        </button>
      </div>
    </nav>

    <main class="content">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <router-link to="/home">
            <img src="@/assets/logo.png" alt="Logo" class="footer-logo">
          </router-link>
          <p>Your platform for connecting and sharing with the community.</p>
          <div class="social-icons">
            <a href="https://www.facebook.com" target="_blank">
              <img src="/facebook.svg" alt="Facebook Icon">
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <img src="/twitter.svg" alt="Twitter Icon">
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src="/instagram.svg" alt="Instagram Icon">
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/tours">Tours</router-link></li>
            <li><router-link to="/guides">Guides</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><img src="/email.svg" alt="Email Icon"> Email: info@yoursite.com</li>
            <li><img src="/call.svg" alt="Phone Icon"> Phone: (123) 456-7890</li>
            <li><img src="/location.svg" alt="Address Icon"> Address: Your Location</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const router = useRouter();
const isLoggedIn = ref(false);
const isMenuOpen = ref(false);

const auth = getAuth();

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
};

const navigateTo = (path) => {
  router.push(path);
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const scrollToSection = (sectionId) => {
  nextTick(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
};

const handleButtonClick = (route) => {
  scrollToSection('home');
  setTimeout(() => {
    if (route === 'home') router.push('/');
    else if (route === 'aboutus') router.push('/AboutUS');
    else if (route === 'contact') router.push('/Contact');
    else if (route === 'guides') router.push('/Guides');
    else if (route === 'signin') router.push('/SignIn');
    else if (route === 'login') router.push('/Login');
    else if (route === 'tours') router.push('/Tours');
  }, 500);
};
</script>


<style>

/* Nav Section */
.navigation{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 300px 0;
}

.logo {
  width: 250px;
  height: auto;
  padding-top: 0px;
}

.nav-links {
  display: flex;
  align-items: center;
  padding-top: 30px;
  gap: 30px;
}

.nav-link {
  font-family: "Inter", Helvetica;
  font-size: 16px;
  color: #000000;
  text-decoration: none;
}

.nav-link:hover {
  color: #000000;
  font-weight: bold;
}

.nav-link.active {
  color: #000000;
  font-weight: bold;
}

.button-link {
  background: none;
  border: none;
  cursor: pointer;
  padding: 14px 38px;
  border-radius: 38px;
  border: 2px solid #000000;
  font-family: "Inter", Helvetica;
  font-size: 16px;
  color: #000000;
  text-decoration: none;
}

.button-link:hover {
  background-color: #f0f0f0;
}

.navbar-toggler {
  border-color: #fff;
  /* Color del borde */
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.85)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* Footer Styles */
.footer {
  font-family: "Inter", Helvetica;
  background-color: #ffffff;
  color: #000000;
  border-top: 2px solid #000000;
  padding-top: 50px;
}

.footer-logo {
  margin-top: -40px;
  width: 150px;
  height: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
}

.footer-section {
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin-left: 40px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section ul {
  margin-left: 40px;
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #000000;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #3498db;
}

.footer-bottom {
  background-color: #ffffff;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}

.footer-bottom p {
  font-size: 0.9rem;
  color: #aaa;
}

.footer-section ul li img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
}
.social-icons a img {
  width: 30px;
  height: 30px;
  margin: 10px 5px;
  transition: transform 0.3s ease;
  opacity: 0.7;
}

.social-icons a img:hover {
  transform: scale(1.2);
}



/* Estilos para el botón de menú y el comportamiento en pantallas pequeñas */
@media (max-width: 992px) {
  .nav-links {
    display: none; /* El menú está oculto por defecto */
    background-color: rgba(247, 248, 249, 0.95);
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
    flex-direction: column; /* Menú en columna */
  }

  .nav-links.show {
    display: flex; /* Muestra el menú cuando se activa */
  }

  .logo {
    width: 150px;
    margin-left: -250px;
  }

  /* Estilo del botón de hamburguesa */
  .navbar-toggler {
    background: transparent;
    border: none;
    font-size: 24px;
    color: #0f0f0f;
    cursor: pointer;
    margin-top: 30px;
  }

  /* Icono de la hamburguesa */
  .navbar-toggler-icon {
    width: 30px;
    height: 30px;
    background-color: #131313;
    display: inline-block;
    position: relative;
  }

  /* Líneas del icono de hamburguesa */
  .navbar-toggler-icon::before,
  .navbar-toggler-icon::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 3px;
    transition: all 0.3s ease;
  }

  /* Espaciado de las líneas del icono */
  .navbar-toggler-icon::before {
    top: -8px;
  }

  .navbar-toggler-icon::after {
    top: 8px;
  }

  /* Estilo para cuando el menú está abierto */
  .nav-links.show {
   display: flex;
   flex-direction:row;
   margin-top: 200px;
   margin-left: -500px;
   transform: scale(0.4);
  }

  .content {
    margin-top: 120px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .footer-section {
    text-align: center; 
}
}
</style>