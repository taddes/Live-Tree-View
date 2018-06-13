<template>
<div class="footer">
  <footer class="page-footer nav-extended teal darken-1">
    <div class="footer-content">
      <ul class="footer-links">
        <li>Taddes Korris 
          <a class="footer-github grey-text text-lighten-3" target= "_blank" alt="Taddes's Github" href="https://github.com/taddes"><img class="link-icon" src="../assets/github.png">  </a>
          <a class="footer-github grey-text text-lighten-3" target= "_blank" alt="Taddes's Linkedin" href="https://www.linkedin.com/in/taddes/"><img class="link-icon" src="../assets/linkedIn.png"> </a>
        </li>
      </ul>
    </div>
  </footer>
</div>
</template>

<script>
const url = "/Github";
export default {
  name: "Footer",
  data() {
    return {
      
    }
  }
}
</script>

<style>
.footer-text {
  text-align: center;
  font-family: 'Sunflower', sans-serif;
}
.footer-links {
  text-align: center;
}
.link-icon {
  height: 22px;
  width: 22px;
  color: white;
}
footer {
  padding: 5px 5px;
}
.footer-links li {
  font-family: 'Sunflower', sans-serif;
  font-size: 22px;
  padding-bottom: 10px;
}
</style>
