<template>
<div class="navbar">
  <nav class="nav-extended teal darken-1">
    <div class="nav-content">
      <router-link v-bind:to="{name: 'Index' }">
        <span class="nav-title">{{title}}</span>
      </router-link>
      <a href="" class="btn-floating btn-large teal darken-4">
        <router-link v-bind:to="{ name: 'AddBranch' }">
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
      title: 'Live Tree Factory'
    }
  }
  
}
</script>

<style>
.navbar nav {
  padding: 0 20px;
}


</style>

