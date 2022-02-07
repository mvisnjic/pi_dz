<template>
  <div class="row">
    <div class="col-2" id="left"></div>
    <div class="col-7" id="middle">
      <InstagramCard v-for="card in filteredCards" :key="card.url" :info="card" />
    </div>
    <div class="col-3" id="right">
      <StoryCard />
    </div>
  </div>
</template>

<script>
import InstagramCard from "../components/InstragramCard.vue";
import StoryCard from "../components/StoryCard.vue";
import store from "../store.js";

let cards = [];

cards = [
  {
    user: "random",
    description: "jedan",
    time: "an hour ago",
    url: "https://picsum.photos/id/1/400",
  },
  {
    user: "test",
    description: "dva",
    time: "2 hours ago",
    url: "https://picsum.photos/id/2/400",
  },
  {
    user: "test3",
    description: "tri",
    time: "few hours ago",
    url: "https://picsum.photos/id/3/400",
  },
];

export default {
  name: "home",
  data: function () {
    return {
      cards: cards,
      store,
    };
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      let newCards = [];

      for (let card of this.cards) {
        if (card.description.indexOf(termin) >= 0) {
          newCards.push(card);
        }
      }
      return newCards;
    },
  },
  components: {
    InstagramCard,
    StoryCard,
  },
};
</script>
