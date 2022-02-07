<template>
  <div id="card">
    <div class="card" style="width: 20rem">
      <div class="card-body">
          <div class="d-inline-flex mx-auto">
            <h6 id="naslov" class="text-muted d-inline-flex">Stories</h6>
            <h6 id="watchall" class="text-right d-inline-flex"><ins>Watch all</ins></h6>
          </div>
        <div>
            <Story/>

        </div>
      </div>
    </div>
    <div id="suggestions" class="card" style="width: 20rem">
      <div class="card-body">
          <div class="d-inline-flex">
            <h6 id="naslov" class="text-muted d-inline-flex">Suggestions for you</h6>
            <h6 id="seeall" class="text-right d-inline-flex"><ins>See all</ins></h6>
          </div>
        <div>
            <Suggestion/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Story from '../components/Story.vue'
import Suggestion from '../components/Suggestion.vue'

export default {
  name: "StoryCard",
  components: {
      Story,
      Suggestion,
  }
};
</script>

<style>
#seeall {
  font-weight: bold;
  padding-left: 110px;
  font-size: smaller;
}

#watchall {
  font-weight: bold;
  padding-left: 175px;
  font-size: smaller;
}

#suggestions {
    margin-top: 20px;
}
#naslov {
    font-size: smaller;
}
</style>
