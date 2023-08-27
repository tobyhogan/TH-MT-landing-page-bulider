<script setup lang="ts">
</script>

<template>
  <main>
    <div id="hero">
      <h2>
      Welcome to: the best landing page builder for your SAAS around
      </h2>
      <p>
      Have you ever thought, "Man I wish I could spend more time building than making landing pages"
      </p>
      <button>Get Started Today</button>
    </div>
  </main>
</template>

<style scoped>

main {
  box-sizing: border-box;
}

#hero {

  display: flex;
  flex-direction: column;
}

#hero button {
  width: 150px;
  align-self: center;

  font-size: large;

  margin: 60px 0;


}

h2 {
  font-size: xx-large;
  padding: 80px 0px 0 120px;
}

p {
  font-size: larger;

  margin-top: 30px;
  padding: 0 0px 0 120px;
}

</style>