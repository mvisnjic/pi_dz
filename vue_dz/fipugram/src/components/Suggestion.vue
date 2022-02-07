<template>
  <div id="story">
    <div
      class="card-header px-2 bg-white d-flex justify-content-start"
    >
      <div>
        <img
          class="rounded-circle"
          src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
          width="35"
          height="35"
          alt="random profile photo"
        />
      </div>
      <div class="">
          <p class="px-2 m-0 d-inline-flex flex-column">UserName</p>
          <button type="button" class="btn btn-link" id="follow">Follow</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Suggestion",
};
</script>

<style>
#follow {
    margin-left: 62px;
}
</style>