<template>
<div class="navbar">
  <nav class="nav-extended teal darken-1">
    <div class="nav-content">
      <router-link v-bind:to="{name: 'Index' }">
        <span class="nav-title">{{title}}</span>
      </router-link>
      <a href="" class="btn-floating btn-large teal darken-4 halfway-fab">
        <router-link v-bind:to="{ name: 'AddFactory' }">
          <i class="material-icons">add</i>
        </router-link>
      </a>
    </div>
  </nav>
</div>

</template>

<script>
export default {
  data() {
    return {
      title: 'Random Number Factory'
    }
  }
}
</script>

<style>
.navbar nav {
  padding: 0 20px;
}
.nav-content {
  text-align: center;
  font-family: 'Sunflower', sans-serif;
}
.nav-title {
  font-family: 'Sunflower', sans-serif;
}
</style>

