<template>
  <div class="row">
    <div class="col-2" id="left"></div>
    <div class="col-7" id="middle">
        <InstagramCard/>
        <InstagramCard/>
        <InstagramCard/>
        <InstagramCard/>
        <InstagramCard/>
        <InstagramCard/>
        
    </div>
    <div class="col-3" id="right">... ovdje ide desni stupac!</div>
  </div>
</template>

<script>
import InstagramCard from '../components/InstragramCard.vue'

export default { 
  name: 'home',
  components: {
    InstagramCard,
  } 
}

</script>