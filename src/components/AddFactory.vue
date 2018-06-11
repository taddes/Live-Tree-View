<template>
  <div class="container add-factory">
    <h2 class="center-align blue-grey-text darken-4">{{AddFactoryTitle}}</h2>
    <form >
      <div class="field title input-field" v-bind:class="{invalid: $v.title.$error}">
        <label for="title">Factory Title:</label>
        <input type="text" name="title" v-model.trim="title" @input="$v.title.$touch()">
        <span v-if="$v.title.$error" class="red-text">{{$v.title.$model}} Invalid. Please enter a valid title. Only numbers and letters with no spaces.</span>
        <span v-if="titleFeedback" class="red-text">{{titleFeedback}}</span>
      </div>
      <div>{{$v.title}}</div>
     

      <!-- <div v-for="(number, index) in numbers" v-bind:key="index">
        <label for="number">Numbers:</label>
        <input type="text" name="number" v-model.number.trim="numbers[index]">
      </div>
      <div class="field add-number">
        <label for="add-number">Numbers:</label>
      </div> -->


      <div class="field min-number input-field" v-bind:class="{invalid: $v.min.$error}">
        <label for="min">Minimum number:</label>
        <input type="text" name="min" v-model.number.trim="min" @input="$v.min.$touch()">
        <span v-if="minFeedback" class="red-text">{{minFeedback}}</span>
        <span v-if="$v.min.$error" class="red-text">{{$v.min.$model}} Invalid. Please enter a vaild number</span>
      </div>
      <div>{{$v.min}}</div>
      <div class="field max-number input-field" v-bind:class="{invalid: $v.max.$error}">
        <label for="max">Maximum number:</label>
        <input type="text" name="max" v-model.number.trim="max"  @input="$v.max.$touch()">
        <span v-if="maxFeedback" class="red-text">{{maxFeedback}}</span>
        <span v-if="$v.max.$error" class="red-text">{{$v.max.$model}} Invalid. Please enter a vaild number</span>
      </div>
       <div>{{$v.max}}</div>



      <div class="add-number" v-bind:class="{invalid: $v.selectedNumber.$error}">
        <label for="add-number">Choose how many random numbers you'd like</label>
        <select class="browser-default form-control" name="number" v-model="selectedNumber"  @input="$v.selectedNumber.$touch()">
          <option  value="" disabled >Choose how many random numbers you'd like</option>
          <option v-for="(randomNumber, index) in randomNumbers" v-bind:key="index" v-bind:value="randomNumber.value" type="number">
            {{ randomNumber.text }}
          </option>
        </select>
        <p v-if="numberFeedback" class="red-text">{{numberFeedback}}</p>
        <span v-if="selectedNumber">You've selected {{selectedNumber}} random numbers to be generated</span>
      </div>
      <div>{{$v.selectedNumber}}</div>
      <br>

      <div class="number-display" v-if="showNums">
        <label for="numbers">Your randomly generated numbers:</label>
        <ul class="numbers" >
          <li v-for="(num, index) in numbers" v-bind:key="index">
            <span class="chip">{{num}}</span>
          </li>
        </ul>
      </div>

      <div class="button field center-align">
        <button :disabled="$v.$invalid" class="btn indigo factoryButton" @click.prevent="addFactory">Generate Factory</button>
        <button :disabled="$v.$invalid" class="btn indigo numberButton" @click.prevent="addToApi"><router-link :to="{ name: 'Index'}">Submit</router-link></button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import slugify from 'slugify'
import { required, alphaNum, integer, between, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'AddFactory',
  data(){
    return {
      AddFactoryTitle: 'Add a New Factory!',
      selectedNumber: null,
      title: null,
      another: null,
      min: null,
      max: null,
      urlSlug: null,
      showNums: false,
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
        ]
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
    addFactory(){
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
      // clear numbers array to allow regeneration of numbers, if desired
      this.numbers = []

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
          // this.numbers.length = 0;
          console.log(this.numbers)
          console.log("max again: " + this.max)
        let generatedNumber = parseInt(Math.floor(Math.random() *(this.max - this.min + 1)) + this.min);
        console.log(`gen number: ${i} is ${generatedNumber}`);
        this.numbers.push(generatedNumber);
        this.showNums = true;
        this.minFeedback = null;
        this.maxFeedback = null;
         // create slug for url
        this.urlSlug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@`] /g,
          lower: true
        })
        console.log(this.numbers);
 
        // this.numbers.push(this.another)
        // console.log([i])
        // console.log( Math.floor(Math.random() *(this.max - this.min + 1)))
        }
      }
      }
    },
    addToApi() {
      let newFactory = {
        title: this.title,
        min: this.min,
        max: this.max,
        number: this.number,
        selectedNumber: this.selectedNumber,
        numbers: this.numbers,
        urlSlug: this.urlSlug
      }
      console.log(newFactory)
      axios.post('http://localhost:3000/factories/', newFactory)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
      });
    } // close addToApi method
    
  } // close methods

} // close data exports

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

