import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Shop from '../components/Shop';
import Footer from '../components/Footer';
import "../assets/styles/css/flaticon.css";
import "../assets/styles/css/fontawesome.css";
import "../assets/styles/css/animate.css";
import "../assets/styles/css/owl.carousel.min.css";
import "../assets/styles/css/owl.theme.default.min.css";
import "../assets/styles/css/nice-select.css";
import "../assets/styles/css/magnific-popup.css";
import "../assets/styles/css/jquery-ui.css";
import "../assets/styles/css/style.css";


function Home() {
  return (
    <div>
      <Navbar />
      <main class="mt-0">
        <Sidebar />
        <Shop />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
