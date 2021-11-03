<template>
  <div class="post">
    <!--trouver solution pour afficher ds la div la photo de pprofile + Le nom utilisateur-->
    <div v-bind:class="{ active: isActive, notactive: isnotActive }">
      <div class="card">
        <div class="img">{{ image }}</div>
        <div class="titre">{{ title }}</div>
        <div class="cont">{{ content }}</div>
      </div>
    </div>
    <div v-bind:class="{ active: isActive, notactive: isnotActive }">
      <div class="createPoste">
        <div class="image">
          <label for="image">Insert your image :</label>
          <input v-model="image" placeholder="Photo..." />
        </div>
        <div class="title">
          <label for="image">Title of your post :</label>
          <input v-model="title" placeholder="Title..." />
        </div>
        <div class="content">
          <label for="content">Content of your post</label>
          <input v-model="content" placeholder="Content..." />
        </div>
        <button
          class="valid"
          @click="
            addPost();
            displayOn();
            loga();
            
          "
        >
          Valider
        </button>
      </div>
    </div>
    <button class="createPost" @click="displayOn();
                                        logb();
    
    ">Create a new post</button>
    <div class="displayPost">
      <ul v-for="(elem, index) in tabPost" :key="index">
        <li>
          <span v-show="!elem.edit">{{ elem.image }}</span>
          <input type="text" v-model="elem.image" v-show="elem.edit" />
        </li>
        <li>
          <span v-show="!elem.edit">{{ elem.title }}</span>
          <input type="text" v-model="elem.title" v-show="elem.edit" />
        </li>
        <li>
          <span v-show="!elem.edit">{{ elem.content }}</span>
          <input type="text" v-model="elem.content" v-show="elem.edit" />
        </li>
        
        <li><button @click="deletePost(elem)

        ">del</button></li>
        <li><button v-show="!elem.edit" v-on:click="editPerson(elem)">edit</button></li>
        <li><button v-show="elem.edit" v-on:click="cancelPerson(elem)">valider</button></li>
        <li><button @click="
        
        addComment();
        
        "
        >
        valider commentaire
        </button>
        </li>
        <li><div><textarea v-model="textCom"></textarea></div></li>
        <li v-for="(elem, index) in tabCom" :key="index">{{elem.textCom}}</li>
        
      </ul>

    </div>
    <div>  </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      image: "",
      title: "",
      content: "",
      isActive: true,
      isnotActive: false,
     
      edit: false,
      tabPost: [],
      textCom:"",
      tabCom:[],
      

    };
  },
  methods: {
    addPost() {
      let liste = {
        image: this.image,
        title: this.title,
        content: this.content,
        edit: this.edit,
      };
      this.tabPost.push(liste);
      console.log(this.tabPost);
    
    },
    displayOn() {
      (this.isActive = !this.isActive), (this.isnotActive = !this.isnotActive);
    },
    deletePost(elem) {
      let index = this.tabPost.indexOf(elem);
      this.tabPost.splice(index, 1);
    },
    editPerson: function(elem) {
      elem.edit = true;
    },

    addComment(){
      
    this.tabCom.push(this.textCom);
    this.textCom="";
  
  },
 
   async loga() {

      const body = {
          title: this.title,
          content: this.content,
          image: this.image,
         
        
          };
          console.log(body);
      const token = localStorage.getItem("token",token);
      
      const options ={
        method : "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "bearer " + token
        },
        body: JSON.stringify(body)
      };

      try {
      const response = await fetch("https://wanderlust-api.osc-fr1.scalingo.io/post", options);

        console.log(response);

            const data = await response.json();
            
            console.log(data);
               
        } catch(error) {
            console.log(error);
        }

    },
    
 
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

<style>
.active {
  display: none;
}
.notactive {
  display: block;
}
.post {
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  width: 90%;
}
.card {
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 40%;
}

.createPost {
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  width: 40%;
}

input {
  width: 80%;
}
</style>
