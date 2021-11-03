<template>
  <div class="logout">
    <button @click="logOut"> Deconection</button>
  </div>

</template>

<script>

export default {
  name: "Logout",
  components: {
  
  },

    data:() => ({
      

    }),

  methods :{
    logOut() {
localStorage.removeItem("token");
this.$router.push("FilActus");

}
       
      
    

  }, //ferme methods

}; //ferme export

</script>


<style>


</style>
