import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dreamz | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <Banner />
      <About />
      <WhyUs />
      <Footer />


      <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
<Script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" />
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"/>

      <Script src="https://code.jquery.com/jquery-3.4.1.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
      <Script src="lib/wow/wow.min.js" />
      <Script src="lib/easing/easing.min.js" />
      <Script src="lib/waypoints/waypoints.min.js" />
      <Script src="lib/owlcarousel/owl.carousel.min.js" />
      <Script src="lib/counterup/counterup.min.js" />

      <Script src="js/main.js" />
    </div>
  );
}