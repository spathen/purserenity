<!-- pages/index.vue -->
<template>
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        Navbar,
        Hero,
        About,
        Services,
        Contact,
        Footer,
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
@import "assets/styles/body.css";
</style>
