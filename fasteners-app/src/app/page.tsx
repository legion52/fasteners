import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";
import AboutSection from "./sections/AboutSection";
import ProductsSection from "./sections/ProductsSection";
import PartnersSection from "./sections/PartnersSection";
import Footer from "./sections/Footer";
import ContactsSection from "./sections/ContactsSection";

export default function Home() {
  return (
    <main className={styles.main}>
   <Header/>
   <AboutSection/>
   <ProductsSection/>
   <ContactsSection/>
   <PartnersSection/>
   <Footer/>
    </main>
  );
}
