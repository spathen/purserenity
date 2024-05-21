<!-- pages/index.vue -->
<template>
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Why />
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import Why from "@/components/Why.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        Navbar,
        Hero,
        About,
        Services,
        Why,
        Footer,
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
@import "assets/styles/body.css";
</style>
