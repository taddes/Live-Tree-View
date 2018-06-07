<template>
  <div class="container edit-factory">
    <h2>Edit Factory {{this.$route.params.factory_slug}}</h2>

  <div class="container add-factory">
    <h2 class="center-align blue-grey-text darken-4">{{editFactoryTitle}}</h2>
    <form @submit.prevent="EditFactory">
      <div class="field title input-field">
        <label for="title">Factory Title:</label>
        <input type="text" name="title" v-model.trim="factory"> <!--add .title after -->
        <p v-if="titleFeedback" class="red-text">{{titleFeedback}}</p>
      </div>

      <!-- <div v-for="(number, index) in numbers" v-bind:key="index">
        <label for="number">Numbers:</label>
        <input type="text" name="number" v-model.number.trim="numbers[index]">
      </div>
      <div class="field add-number">
        <label for="add-number">Numbers:</label>
      </div> -->
      <div>
        <ul class="numbers">
          <label for="num">You randomly generated numbers:</label>
          <br>
          <li v-for="(num, index) in numbers" v-bind:key="index">
            <span class="chip">{{num}}</span>
          </li>
        </ul>
      </div>

      <div class="field min-number input-field">
        <label for="min">Minimum number:</label>
        <input type="text" name="min" v-model.number.trim="min">
        <p v-if="minFeedback" class="red-text">{{minFeedback}}</p>
      </div>
      <div class="field max-number input-field">
        <label for="max">Maximum number:</label>
        <input type="text" name="max" v-model.number.trim="max">
        <p v-if="maxFeedback" class="red-text">{{maxFeedback}}</p>
      </div>



      <div class="add-number">
        <label for="add-number">Choose how many random numbers you'd like</label>
        <select class="browser-default form-control" name="number" v-model="selectedNumber">
          <option  value="" disabled >Choose how many random numbers you'd like</option>
          <option v-for="(randomNumber, index) in randomNumbers" v-bind:key="index" v-bind:value="randomNumber.value" type="number">
            {{ randomNumber.text }}
          </option>
        </select>
        <p v-if="numberFeedback" class="red-text">{{numberFeedback}}</p>
        <span v-if="selectedNumber">You selected {{selectedNumber}} random numbers to be generated</span>
      </div>
      <div class="button field center-align">
        <button class="btn indigo factoryButton">Update Factory</button>
        <!-- <button class="btn indigo numberButton" >Add Number</button> -->
      </div>
    </form>
  </div>




  </div>
</template>

<script>
export default {
  name: 'EditFactory',
  data() {
    return {
      editFactoryTitle: `Edit Factory`,
      factory: null,
           numbers: [],
           title: null,
      randomNumbers: [
        {text: '1', value: 1},
        {text: '2', value: 2},
        {text: '3', value: 3},
        {text: '4', value: 4},
        {text: '5', value: 5},
        {text: '6', value: 6},
        {text: '7', value: 7},
        {text: '8', value: 8},
        {text: '9', value: 9},
        {text: '10', value: 10},
        {text: '11', value: 11},
        {text: '12', value: 12},
        {text: '13', value: 13},
        {text: '14', value: 14},
        {text: '15', value: 15},
        ],

    }
  },
  methods: {
    editFactory() {
      //similar to addFactory in other component
    }
  },
  created() {
    // mongodb refs
  }
  
}
</script>

<style>

</style>


