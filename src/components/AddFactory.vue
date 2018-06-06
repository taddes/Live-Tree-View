<template>
  <div class="container add-factory">
    <h2 class="center-align blue-grey-text darken-4">{{AddFactoryTitle}}</h2>
    <form @submit.prevent="AddFactory">
      <div class="field title input-field">
        <label for="title">Factory Title:</label>
        <input type="text" name="title" v-model.trim="title">
      </div>
      <div class=" add-number">
        <label for="add-number">Choose how many random numbers you'd like</label>
        <select class="browser-default form-control" name="number" v-model="selectedNumber">
          <option  value="" disabled >Choose how many random numbers you'd like</option>
          <option v-for="(randomNumber, index) in randomNumbers" v-bind:key="index" v-bind:value="randomNumber.value" type="number">
            {{ randomNumber.text }}
          </option>
        </select>
        <span>You selected {{selectedNumber}} random numbers to be generated</span>
      </div>
      <div class="button field center-align">
        <button class="btn indigo">Add Factory</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddFactory',
  data(){
    return {
      AddFactoryTitle: 'Add a New Factory!',
      selectedNumber: null,
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
    AddFactory(){
      console.log(this.title);
      console.log(this.selectedNumber)
    }
  }

}
</script>

<style>
.add-factory {
  margin: 60px auto;
  padding:20px;
  max-width:400px;
 
}
.add-factory h2 {
  font-size: 2em;
  margin: 20px auto;
}
.button {
  margin: 20px;
  padding: 20px;
}
.add-factory .field {
  margin: 20px auto;
}


</style>

