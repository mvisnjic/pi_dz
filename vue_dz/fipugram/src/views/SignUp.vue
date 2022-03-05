<template>
  <div class="about"></div>
  <h1>This is a sign up page</h1>
  <div class="container">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              required
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
            <label for="exampleInputusername">Username</label>
            <input
              type="username"
              required
              class="form-control"
              id="exampleInputUsername1"
              aria-describedby="usernameHelp"
              placeholder="Username"
              v-model="username"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              required
              name="password2"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2">Re-type Password</label>
            <input
              type="password"
              name="password2"
              required
              class="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
              v-model="passwordRepeat"
            />
          </div>
          <button type="button" @click="signup" class="btn btn-primary">
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
  data() {
    return {
      mail: "",
      username: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      if (this.password != this.passwordRepeat) {
        alert("\nPassword didnt match!");
        return false;
      } else {
        alert("\nDone!");
        return firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.mail,
            this.username,
            this.password
          )
          .then(function () {
            console.log(`Dodan korisnik!`);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
};
</script>
