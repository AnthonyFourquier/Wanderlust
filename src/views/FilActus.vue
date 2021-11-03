<template>
  <div>
    <h1>Fil d'actus</h1>
      <Post /> 
  </div>
</template>

<script>
import Post from "../components/Post.vue";
export default {
  name: "FilActus",
  components: {
    Post
  },
  mounted: async function(){

  const token = localStorage.getItem("token",token);
      
      const options ={
        method : "GET",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "bearer " + token
        },
     
      };

      try {
      const response = await fetch("https://wanderlust-api.osc-fr1.scalingo.io/posts", options);

        console.log(response);

            const data = await response.json();
         
   
          this.tabPost= data.posts ;

            console.log(data);
               
        } catch(error) {
            console.log(error);
        }
       

} 
};
</script>

<style scoped>

</style>
