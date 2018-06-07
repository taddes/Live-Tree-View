<template>
  <div class="index container">
    <!-- Outputs discrete card for each factory element -->
    <div class="card" v-for="factory in factories" v-bind:key="factory.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteFactory(factory.id)">delete</i>
        <h2 class="blue-grey-text">{{factory.title}}</h2>
        <ul class="numbers">
          <li v-for="(num, index) in factory.numbers" v-bind:key="index">
            <span class="chip">{{num}}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab">
        <router-link :to="{ name: 'EditFactory', params: {factory_slug: factory.slug} }">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      factories: [
        {title: 'Taddes', slug: 'taddes', numbers: ['55', '78', '3'], id: '1'},
        {title: 'Jeremy', slug: 'jeremy', numbers: ['568', '8', '47'], id: '2'},
        {title: 'Sarah', slug: 'sarah', numbers: ['670', '85', '1'], id: '3'},
        {title: 'Victor', slug: 'victor', numbers: ['2', '78', '40'], id: '4'}
      ]
    }
  },
  methods: {
    // method to determine if the clicked factory is deleted or not, based
    // on returned boolean.  If factory.id matches the id in the array, the 
    // factory not is deleted. If it does not match, it is filtered out
    deleteFactory(id) {
      this.factories = this.factories.filter(factory => {
        return factory.id != id
      })
    }
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
