<template>
  <div class="connection">
    <p>Connexion :</p>
    <label for="email">Email :</label>
    <input v-model="email" type="email" name="email" id="email" />

    <label for="pwd">Mot de passe :</label>
    <input v-model="pwd" type="password" name="pwd" id="pwd" />

    <button @click='
    log();    
    '>Valider</button>
  </div>
</template>




<script>
export default {
  name: "Connexion",


data (){
 return {
   email:'',
   pwd:''
 }
},

methods:{
  
  
  async log() {

      const body = {
        email: this.email,
        password: this.pwd
      };
      
      
      const options ={
        method : "POST",
        headers:{
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify(body)
      };

      try {
      const response = await fetch("https://wanderlust-api.osc-fr1.scalingo.io/login", options);

        console.log(response);

            const data = await response.json();
            localStorage.setItem("token",data.token)
            console.log(data);
            if(data.success === true ){
               this.$emit('connect', {email:this.email, pwd:this.pwd})
            }

        } catch(error) {
            console.log(error);
        }
      },

  },

}; //export

</script>

<style scoped>
.connection {
  display: flex;
  flex-direction: column;
  width: 100%;
}
label {
  font-weight: bold;
}
</style>
