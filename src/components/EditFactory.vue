<template>
  <div class="container edit-factory">
    <h2>Edit Factory {{this.$route.params.factory_slug}}</h2>

  <div class="container add-factory">
    <h2 class="center-align blue-grey-text darken-4">{{editFactoryTitle}}</h2>
    <form @submit.prevent="editFactory">
      <div class="field title input-field" v-bind:class="{invalid: $v.title.$error}">
        <label for="title">Factory Title:</label>
        <input type="text" name="title" v-model.trim="title"  @input="$v.title.$touch()"> <!--add .title after -->
        <p v-if="$v.title.$error">{{$v.title.$model}} Invalid. Please enter a valid title. Only numbers and letters with no spaces.</p>
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

      <div class="field min-number input-field" v-bind:class="{invalid: $v.min.$error}">
        <label for="min">Minimum number:</label>
        <input type="text" name="min" v-model.number.trim="min"  @input="$v.min.$touch()">
        <p v-if="minFeedback" class="red-text">{{minFeedback}}</p>
        <p v-if="$v.min.$error">{{$v.min.$model}} Invalid. Please enter a vaild number</p>
      </div>
      <div class="field max-number input-field" v-bind:class="{invalid: $v.max.$error}">
        <label for="max">Maximum number:</label>
        <input type="text" name="max" v-model.number.trim="max" @input="$v.max.$touch()">
        <p v-if="maxFeedback" class="red-text">{{maxFeedback}}</p>
        <p v-if="$v.max.$error">{{$v.max.$model}} Invalid. Please enter a vaild number</p>
      </div>



      <div class="add-number" v-bind:class="{invalid: $v.selectedNumber.$error}">
        <label for="add-number">Choose how many random numbers you'd like</label>
        <select class="browser-default form-control" name="number" v-model="selectedNumber" @input="$v.selectedNumber.$touch()">
          <option  value="" disabled >Choose how many random numbers you'd like</option>
          <option v-for="(randomNumber, index) in randomNumbers" v-bind:key="index" v-bind:value="randomNumber.value" type="number">
            {{ randomNumber.text }}
          </option>
        </select>
        <p v-if="numberFeedback" class="red-text">{{numberFeedback}}</p>
        <span v-if="selectedNumber">You selected {{selectedNumber}} random numbers to be generated</span>
      </div>
      <div class="button field center-align">
        <button :disabled="$v.$invalid" class="btn indigo factoryButton">Update Factory</button>
        <!-- <button class="btn indigo numberButton" >Add Number</button> -->
      </div>
    </form>
  </div>




  </div>
</template>

<script>
import { required, alphaNum, integer, between, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'EditFactory',
  data() {
    return {
      editFactoryTitle: `Edit Factory`,
      factory: null,
      selectedNumber: null,
      title: null,
      another: null,
      min: null,
      max: null,
      titleFeedback: null,
      numberFeedback: null,
      minFeedback: null,
      maxFeedback: null,
      numbers: [],
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
   validations: {
    title: {
      required,
      alphaNum
    },
    min: {
      required,
      numeric
    },
    max: {
      required,
      numeric
    },
    selectedNumber: {
      required
    }
  },
  methods: {
    editFactory() {
      //similar to addFactory in other component
      if(this.title === null) {
        this.titleFeedback = 'Please enter a valid title'
        this.numberFeedback = null;
      } else if (this.selectedNumber === null) {
        this.titleFeedback = null;
        this.numberFeedback = 'Please select a number'
      } else if (this.title === null && this.selectedNumber === null) {
        this.titleFeedback = 'Please enter a valid title'
        this.numberFeedback = 'Please select a number'
      } else {
        this.titleFeedback = null;
        this.numberFeedback = null;
      console.log("title: " + this.title);
      console.log("selected number: " + this.selectedNumber);
      console.log("min number: " + this.min);
      console.log("max number: " + this.max);
      // console.log(Math.floor(Math.random() *(parseInt(this.max)) - parseInt(this.min + 1)))
    
      for(let i = 0; i < this.selectedNumber; i++) {
        if(this.min > this.max) {
          this.minFeedback = 'Your minimum number cannot be larger than your maximum number'
        } else if(this.max < this.min) {
          this.maxFeedback = 'Your maximum number cannot be less than your minimum number'
        } else if(this.max == this.min) {
          this.maxFeedback = 'Your minimum and maximum numbers cannot be equal'
        } else if(this.min == this.max) {
          this.minFeedback = 'Your minimum and maximum numbers cannot be equal'
        } else if(this.min == null) {
          this.minFeedback = 'Please provide a minimum value'
        } else if(this.max == null) {
          this.maxFeedback = 'Please provide a maximum value'
        } else if(this.max == null && this.min === null) {
          this.maxFeedback = 'Please provide a maximum value'
          this.minFeedback = 'Please provide a minimum value'
        } else {
          console.log("max again: " + this.max)
        let generatedNumber = parseInt(Math.floor(Math.random() *(this.max - this.min + 1)) + this.min);
        console.log(`gen number: ${i} is ${generatedNumber}`);
        this.numbers.push(generatedNumber);
        this.minFeedback = null;
        this.maxFeedback = null;
        console.log(this.numbers);
        // this.numbers.push(this.another)
        // console.log([i])
        // console.log( Math.floor(Math.random() *(this.max - this.min + 1)))
          }
        }
      }
    }
  },
  created() {
    // mongodb refs
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
.numbers li {
  display: inline-block;
}
</style>


