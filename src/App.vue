<script setup lang="ts">
import { onMounted, ref} from "vue";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const isLoggedIn = ref(false);

let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;

    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {

  });
};


const signInWithGoogle = () => {
  console.log("sign in with google initiated ");

  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);

    })
    .catch((error) => {
      console.log("sign in did not work");

    });
};

console.log("The value of isLoggedIn: ");
console.log(isLoggedIn);


</script>

<template>
  <nav>
    <a href="/home"><h1>Landing Page Builder</h1></a>
    <a class="promotional" href="/pricing" v-if="!(isLoggedIn)">Pricing</a>
    <a class="promotional" href="/showcase" v-if="!(isLoggedIn)">Showcase</a>
    <div class="spacing"></div>
    <a href="/my-account" v-if="isLoggedIn">My Account</a>
    <a href="/dashboard" v-if="isLoggedIn">Dashboard</a>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
    <button @click="signInWithGoogle" v-else>Login</button>
  </nav>
  <hr>
  <RouterView />
  <hr>
  <footer>
    <a href="">Github</a>
    <a href=""> Instagram</a>
  </footer>

</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;

  align-self: baseline;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;

  margin-top: 2rem;
  margin-bottom: 2rem;
  
  display: flex;
  flex-direction: row;
}

nav button {
  height: 30px;
  margin: 0.75rem 0 0 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.spacing {
  flex-grow: 1;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a{
  margin-top: 5px;
  margin-left: 15px;

  font-size: medium;
  display: flex;
  align-self: center;
}

nav a:first-of-type {
  border: 0;
}

.promotional {
  margin-top: 15px;
  margin-left: 40px;
}

nav h1 {
  font-size: xx-large;
}

footer {
  display: flex;
  justify-content: center;

  margin-top: 20px;
}

footer a {
  margin-right: 10px;
}


</style>
