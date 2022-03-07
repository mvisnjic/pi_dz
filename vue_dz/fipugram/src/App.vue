<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/">
        <img
          src="./assets/logo.png"
          height="45"
          class="d-inline-bloc align-top"
          loading="lazy"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/Login" class="nav-link">Login</router-link>
          </li>
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/Signup" class="nav-link">Sign Up</router-link>
          </li>
          <li v-if="store.currentUser" class="nav-item">
            <a href="#" @click.prevent="logout()" class="nav-link">Logout</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            v-model="store.searchTerm"
            class="form-control mx-sm-auto"
            type="search"
            placeholder="Pretraga"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>

    {{ store.searchTerm }}

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import store from "./store.js";
import { firebase } from "@/firebase";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.currentUser = user.email;
    console.log(store.currentUser);
  } else {
    store.currentUser = null;
    console.log("User doesn't exists.");
    console.log(store.currentUser);
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
          store.currentUser = null;
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.collapse.in {
  display: block;
}
</style>
