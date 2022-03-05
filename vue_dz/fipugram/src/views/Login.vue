<template>
  <div class="about"></div>
  <h1>This is a login page</h1>
  <div class="container">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              v-model="mail"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share you email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <button type="button" @click="login" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";
export default {
  name: "login",
  data() {
    return {
      mail: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(this.$router);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.mail, this.password)
        .then(() => {
          this.$router.replace({ name: "Home" });
        })
        .catch(function (e) {
          console.error(e);
        });
    },
  },
};
</script>
