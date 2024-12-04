<template>
  <div class="main-container">
    <nav class="navigation">
      <router-link to="/home" active-class="active">
        <img src="@/assets/logo.png" alt="Logo" class="logo">
      </router-link>
      <div class="nav-links">
        <router-link to="/home" class="nav-link" active-class="active">
          Home
        </router-link>
        <router-link to="/tours" class="nav-link" active-class="active">
          Tours
        </router-link>
        <router-link to="/guides" class="nav-link" active-class="active">
          Guides
        </router-link>
        <router-link to="/about" class="nav-link" active-class="active">
          About Us
        </router-link>
        <router-link to="/contact" class="nav-link" active-class="active">
          Contact Us
        </router-link>
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
</script>


<style>

/* Nav Section */
.navigation {
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

@media (max-width: 768px) {
  /* Navegación */
  .navigation {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
  }

  .logo {
    width: 200px; /* Ajusta el tamaño del logo */
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nav-link,
  .button-link {
    font-size: 16px;
    padding: 12px 20px;
    font-family: "Inter", Helvetica;
  }

  .nav-link:hover {
    font-weight: bold;
  }

  .button-link {
    background: none;
    border: 2px solid #000000;
    border-radius: 38px;
    cursor: pointer;
  }

  /* Ajuste del contenido */
  .content {
    padding: 20px;
    margin-top: 100px;
  }

  /* Pie de página */
  .footer-content {
    grid-template-columns: repeat(3, 1fr); /* Usamos 3 columnas, igual que en el diseño de escritorio */
    gap: 2rem;
    padding: 0 20px;
  }

  .footer-section ul {
    margin-left: 0;
    padding: 0;
    list-style: none;
  }

  .footer-logo {
    margin: 0 auto;
    width: 150px;
  }

  /* Ajuste de iconos sociales */
  .social-icons a img {
    width: 25px;
    height: 25px;
    margin: 5px;
  }
}

@media (max-width: 480px) {
  .navigation {
    display: flex;
    flex-direction: column; /* Cambiar de fila a columna */
    align-items: center; /* Centrar los elementos en el eje horizontal */
    justify-content: center;
    padding: 0 20px;
    width: 100%;
    max-width: 960px; /* Limitar el ancho máximo */
    margin: 0 auto; /* Centrar horizontalmente */
  }

  .nav-links {
    display: flex;
    flex-direction: column; /* Alinear los elementos verticalmente */
    align-items: center; /* Centrar los enlaces de navegación */
    gap: 15px; /* Espacio entre los enlaces */
    margin-top: 0;
  }

  .logo {
    width: 180px; /* Ajusta el tamaño del logo */
    margin-bottom: -50px;
  }

  .navigation {
    padding: 0.5rem;
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