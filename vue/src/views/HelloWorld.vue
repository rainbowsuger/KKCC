<template>
  <div class="container">
    <img src="@/assets/logo.png">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to KKCC',
    };
  },
};
</script>


<style scoped>
.container {
  text-align: center;
}
</style>
