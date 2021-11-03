<template>
  <div class="inscription">
    <p>Inscription :</p>
    <label for="email">Email :</label>
    <input v-model="email" type="email" name="email" id="email" />
    <label for="pwd">Mot de passe :</label>
    <input v-model="pwd" type="password" name="pwd" id="pwd" />
    <button @click ='callinscription();
    log();
    '>Valider</button>
  </div>
</template>

<script>
export default {
  name: "Inscription",
 
data (){
 return {
   email:'',
   pwd:'',
 
 }
},


methods :{
  callinscription (){

    this.$emit ('ins', 
    {email:this.email, pwd:this.pwd,})
  },

      async log() {

      const body = {
        email: this.email,
        password: this.pwd,
      };

      const options ={
        method : "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      };

      try {
      const response = await fetch("https://wanderlust-api.osc-fr1.scalingo.io/register", options);

        console.log(response);

            const data = await response.json();
            console.log(data);

        } catch(error) {
            console.log(error);
        }
      },

}, //ferme methods

}; //ferme les exports

</script>

<style scoped>
.inscription {
  display: flex;
  flex-direction: column;
  width: 30%;
}
label {
  font-weight: bold;
}
</style>




