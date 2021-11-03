<template>
  <div class="login">
    <div class="bloc-connect">
      <div v-if="!isconnected">
        <div v-if="state == 'connexion'">
          <Connexion @connect="connection" />


        <button @click ="state = 'inscription'"> Créer un compte </button>
      </div>

    <div v-else-if = "state == 'inscription'">
         <Inscription @ins ="inscription" />
         
         <button @click="state ='connexion'"> J'ai déjà un compte : Se connecter</button>
    </div>

       <SuperAdmin />

  </div>

    </div>
  </div>
</template>

<script>
import Connexion from "../components/Connexion.vue";
import Inscription from "../components/Inscription.vue";
import SuperAdmin from "../components/SuperAdmin.vue";

export default {
  name: "Login",
  components: {
    Connexion,
    Inscription,
    SuperAdmin,
  },

    data:() => ({
        users :[

        ],
      
      state: 'connexion',
      isconnected: false,

  }),

  methods: {
    inscription(payload) {
      let exist = false;
      for (const elem of this.users) {
        if (elem.email != payload.email) {
          exist = false;
        } else if (elem.email == payload.email) {
          exist = true;
          break;
        }
      }

      if (!exist) {
        let user = {
          email: payload.email,
          pwd: payload.pwd,
        };

        this.users.push(user);

        alert("Nouvel utilisateur créé");
      } else {
        alert("Utilisateur existant");
      }
    }, //ferme inscription(payload)

  
    connection () {

          this.isconnected = true;
          this.$router.push("FilActus");
          
        
       
      
    }//ferme connection(payload)

  }, //ferme methods

}; //ferme export

</script>

<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../public/map1.jpg");
  height: 90vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.bloc-connect {
  background: rgba(255, 255, 255, 0.671);
  width: 30%;
  padding: 20px;
  border-radius: 10px;
}
</style>
