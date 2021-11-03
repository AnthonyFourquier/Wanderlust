<template>
  <div>
    <div :class="{ displayOn: isnotActive, displayOff: active }">
      <div class="infosprofil">
        <label>lastname</label>
        <input v-model="lastname" placeholder="put your name here" />
        <label>firstname</label>
        <input v-model="firstname" placeholder="put your firstname here" />
        <label>age</label>
        <input v-model="age" type="number" placeholder="put your age here" />
        <label>image :</label>
        <input v-model="image" placeholder="put your image here" />
        <label>nationality :</label>
        <input v-model="nationality" placeholder="put your nationality here" />

<!-- teste a effacer -->
           <label>Password : </label>
        <input type="password" v-model="pwd" placeholder="put your nationality here" />  
        <label>Email :</label>
        <input v-model="email" placeholder="put your nationality here" /> 


        <label for="genderSelect">Choose your gender:</label>
        <select v-model="gender" id="genderSelect">
          <option value="">--Please choose an option--</option>
          <option value="male">Man</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label for="countryVisited"
          >Choose your country you have visited:</label
        >
        <div>
          <input
            type="checkbox"
            id="northAmericaVisited"
            value="northAmerica"
            v-model="countryVisited"
          />
          <label for="northAmericaVisited">north America</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="southAmericaVisited"
            value="southAmerica"
            v-model="countryVisited"
          />
          <label for="southAmericaVisited">South America</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="europeVisited"
            value="europe"
            v-model="countryVisited"
          />
          <label for="europeVisited">Europe</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="oceaniaVisited"
            value="oceanie"
            v-model="countryVisited"
          />
          <label for="oceaniaVisited">Oceania</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="asiaVisited"
            value="asia"
            v-model="countryVisited"
          />
          <label for="asiaVisited">Asia</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="africaVisited"
            value="africa"
            v-model="countryVisited"
          />
          <label for="africa">Africa</label>
        </div>
        <label for="countrytoVisit"
          >Choose your country you want to visit:</label
        >
        <div>
          <input
            type="checkbox"
            id="northAmerica"
            value="northAmerica"
            v-model="countryToVisit"
          />
          <label for="northAmerica">north America</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="southAmerica"
            value="southAmerica"
            v-model="countryToVisit"
          />
          <label for="southAmerica">South America</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="europe"
            value="europe"
            v-model="countryToVisit"
          />
          <label for="europe">Europe</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="oceania"
            value="oceania"
            v-model="countryToVisit"
          />
          <label for="oceania">Oceania</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="asia"
            value="asia"
            v-model="countryToVisit"
          />
          <label for="asia">Asia</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="africa"
            value="africa"
            v-model="countryToVisit"
          />
          <label for="africa">Africa</label>
        </div>
      </div>
    </div>

    <img class="photoProfil" src="" />
    <div>lastname : {{ lastname }}</div>
    <div>firstname : {{ firstname }}</div>
    <div>age : {{ age }}</div>
    <div>genre : {{ gender }}</div>
    <div> password : {{pwd}} </div>
    <div> email : {{email}} </div>
    <div v-for="(pays, index) in countryVisited" :key="index">
      <div>pays visités : {{ pays }}</div>
    </div>
    <div v-for="(pays, index) in countryToVisit" :key="index">
      <div>prochaines destinations : {{ pays }}</div>
      
    </div>
    <div>
      <button @click="addProfile();
                      log();
      "

      >enregistrer</button>
    </div>
    <div>
      <button @click="display();
                      log1();
                      
      ">edit profil</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfosProfil",
   props:{
    
  },
  data: function() {
    return {
      lastname: "",
      firstname: "",
      age: "",
      gender: "",
      countryVisited: [],
      countryToVisit: [],
      tabProfile: [],
      active: true,
      isnotActive: false,
      image:"",
      nationality:"",
      
    };
  },
  methods: {
    addProfile() {
      this.tabProfile.push({
        lastname: this.lastname,
        firstname: this.firstname,
        age: this.age,
        gender: this.gender,
        
      });
    },
    display() {
      (this.active = !this.active), (this.isnotActive = !this.isnotActive);
    },
     async log() {

      const body = {
          firstname:this.firstname,
          lastname:this.lastname,
      
          age: this.age,
          profilePicture: this.image,
          nationality: this.nationality,
          visitedCountries: this.countryVisited,
          wishList: this.countryToVisit

          };
    
      const token = localStorage.getItem("token",token);
      
      const options ={
        method : "PUT",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "bearer " + token
        },
        body: JSON.stringify(body)
      };

      try {
      const response = await fetch("https://wanderlust-api.osc-fr1.scalingo.io/user", options);

        console.log(response);

            const data = await response.json();
            
            console.log(data);
               
        } catch(error) {
            console.log(error);
        }


    },
     
  
   async log1() {

    
      const token = localStorage.getItem("token",token);
      
      const options ={
        method : "GET",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "bearer " + token
        },
     
      };

      try {
      const response = await fetch("https://wanderlust-api.osc-fr1.scalingo.io/user", options);

        console.log(response);

            const data = await response.json();
             
        this.lastname = data.lastname;
        this.firstname = data.firstname;
        this.age = data.age;
        
        this.image = data.profilePicture;
        this.countryVisited = data.visitedCountries;
        this.nationality = data.nationality;
        this.countryToVisit = data.wishList;
            console.log(data);
               
        } catch(error) {
            console.log(error);
        }
       


    }
 
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
      const response = await fetch("https://wanderlust-api.osc-fr1.scalingo.io/user", options);

        console.log(response);

            const data = await response.json();
             
        this.lastname = data.lastname;
        this.firstname = data.firstname;
        this.age = data.age;
        
        this.image = data.profilePicture;
        this.countryVisited = data.visitedCountries;
        this.nationality = data.nationality;
        this.countryToVisit = data.wishList;
            console.log(data);
               
        } catch(error) {
            console.log(error);
        }
       

}
};
</script>

<style>
.infosprofil {
  display: flex;
  flex-direction: column;
}
.displayOff {
  display: none;
}
.displayOn {
  display: block;
}
</style>
