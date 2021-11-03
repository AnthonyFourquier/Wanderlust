<template>
  <div id="profile">
    <div><Post /></div>
    <div><InfosProfil /></div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import InfosProfil from "../components/InfosProfil.vue";
/* import Gallerie from "../components/Gallerie.vue";
import Amis from "../components/Amis.vue"; */

export default {
  name: "Profil",
  components: {
    Post,
    InfosProfil,
    /* Gallerie,
    Amis, */
  },
};
</script>

<style>
#profile {
  display: flex;
  flex-direction: row;
  width: 90%;
}
</style>
