<template>
  <div class="antialiased bg-gray-800">
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
  head() {
    return {
      title: "Stephen Cook / Web Developer"
    };
  },
  components: {
    Navbar,
    Footer
  }
};
</script>

<style></style>
