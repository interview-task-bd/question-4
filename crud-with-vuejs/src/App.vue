<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"/>
    </div>
    <router-view />
  </div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default{
  name:"App"
}
</script>