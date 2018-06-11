<template>
  <div class="index container">
    <!-- Outputs discrete card for each factory element -->
    <div class="card" v-for="factory in factories" v-bind:key="factory._id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteFactory(factory._id)">delete</i>
        <h2 class="blue-grey-text">{{factory.title}}</h2>
        <ul class="numbers">
          <li v-for="(num, index) in factory.numbers" v-bind:key="index">
            <span class="chip">{{num}}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab">
        <router-link :to="{ name: 'EditFactory', params: {factory_slug: factory._id} }">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Index',
  data () {
    return {
      factories: []
    }
  },
  methods: {
    // method to determine if the clicked factory is deleted or not, based
    // on returned boolean.  If factory.id matches the id in the array, the 
    // factory not is deleted. If it does not match, it is filtered out
    deleteFactory(id) {
      console.log(id)
      // Delete doc from database, using unique id.
      axios.delete('http://localhost:3000/factories/' + id)
      .then((res) => {
        console.log("hi!")
        console.log(id)
        console.log(this.factories)
        this.factories = this.factories.filter(factory => {
          console.log('trying!')
          console.log('factory._id' + factory._id)
          console.log('id' + id)
          console.log('factory'+ factory)
           return factory._id != id
           console.log(factory.id)
      console.log('deleted!')
      })
    })
    .catch((err) => {
    console.log(err);
    });
   }

  },
  created() {
        axios.get('http://localhost:3000/factories')
    .then((res) => {
      console.log(res.data);
      this.factories = res.data;
      console.log(`factories ${this.factories}`)

    })
    .catch((err) => {
    console.log(err);
    });
    
  },
  mounted() {
    // axios.get('http://localhost:3000/factories')
    // .then((res) => {
    //   console.log(res.data);
    //   this.factories = res.data;
    //   console.log(`factories ${this.factories}`)

    // })
    // .catch((err) => {
    // console.log(err);
    // });

  }
}

</script>


<style>
.index {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
   font-family: 'Sunflower', sans-serif;
   font-size: 1.8em;
   text-align: center;
   margin-top: 0;
}
.index ul {
  margin: 30px auto;
}
.index .numbers li {
  display: inline-block;
}
.index .delete {
  position:absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.8em;
}

</style>
