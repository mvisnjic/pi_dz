<template>
  <div class="card">
    <div
      class="card-header text-left px-2 bg-white d-flex justify-content-start"
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
      <div class="px-3 my-auto" id="UserName">UserName</div>
    </div>
    <div class="card-body p-0">
      <img
        class="card-img-top"
        src="https://picsum.photos/800"
        alt="random photo"
      />
    </div>
    <div class="card-footer text-muted">2 days ago</div>
  </div>
</template>

<script>
export default {
  name: "InstagramCard",
};
</script>

<style>
#UserName {
  font-weight: bold;
}
</style>
