<template>
  <div class="flex flex-col">
    <label class="capitalize" for="for">{{label}}</label>
    <input class="bg-[#F2EFEF] rounded-2xl px-4 py-2 capitalize my-4 focus:outline-none" :placeholder="placeholder" type="type" name="name" id="id" required>
  </div>
</template>

<script>

  export default {
    name : 'InputForm',

    props :{
      for : String,
      label : String,
      type : String,
      name : String,
      id : String,
      placeholder : String,
    },
  }

</script>

<style scoped>
  input::placeholder {
    color: black;
  }
</style>