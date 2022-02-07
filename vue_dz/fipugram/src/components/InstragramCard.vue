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
      <div class="px-3 my-auto" id="UserName">{{ info.user }}</div>
    </div>
    <div class="card-body p-0">
      <img class="card-img-top" :src="info.url" alt="random photo" />
    </div>
    <div class="card-footer bg-white">
      <!-- Icons container -->
      <div class="d-flex justify-content-start" id="IconsContainer">
        <div class="text-left col-1" id="heartIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            fill="black"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path
              d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
            />
          </svg>
        </div>
        <div class="text-left col-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="black"
            class="bi bi-chat my-auto"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
            />
          </svg>
        </div>

        <div class="col text-right" id="saveIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="black"
            class="bi bi-box-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
            />
          </svg>
        </div>
      </div>

      <div class="justify-content-start d-flex" id="footerText">
        <p class="">Liked by</p>
        <p class="font-weight-bold mx-1">UserName</p>
        <p>and</p>
        <p class="font-weight-bold mx-1">others</p>
      </div>

      <div class="justify-content-start d-flex" id="footerText">
        <p id="UserName">{{ info.user }}</p>
        <p class="mx-1">{{ info.description }}</p>
      </div>
      <small class="form-text text-muted text-left" id="footerText">
        {{ info.time }}
      </small>
      <hr />

      <div class="form-group d-flex">
        <textarea
          class="form-control"
          id="comment"
          rows="1"
          placeholder="Add a comment..."
        ></textarea>
        <button type="button" class="btn btn-link">Post</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "InstagramCard",
};
</script>

<style>
#UserName {
  font-weight: bold;
}

#footerText {
  font-size: 12px;
}

#comment {
  resize: none;
  border: none;
}
</style>
