<template>
  <div>
    <!-- вместо обычного(prevent)поведения формы(submit)приниает(=)функцию(onSubmit) -->
    <form v-on:submit.prevent="onSubmit">
      <input type="text" name="phone-number" v-model='telephone'>
      <input type="text" name="name" v-model='title'>
      <button
      v-on:keyup.enter="onSubmit"
      type="submit" name="добавить"
      >добавить</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      title: '',
      telephone: '',
    }
  },
  methods: {
  onSubmit() {
    // всё что в поле data доступно через ключевое слово thiss
    if (this.title.trim() && this.telephone.trim()) {
      const newNumb = { id: Date.now(), telephone: this.telephone, title: this.title, completed: false }
      this.$emit('add-numb', newNumb)
      this.title = ''
      this.telephone = ''
    }
  }
}
}
</script>
<style scoped>
div {
  margin-bottom: 1rem;
}
form {
  display: inline-block;
  padding: 8px;
  border: 1px solid #9966ff;
}
input {
  box-sizing: border-box;
  height: 2rem;
  padding: 0 10px;
  margin: 0 2px;
  font-size: 16px;
  border-color: transparent;
  background-color: #cccccc;
}
button {
  height: 2rem;
  width: 80px;
  border: 1px solid #9966ff;
  border-radius: 8px;
  background-color: #C4C4C4;
  color: #993366;
  font-size: 16px;
}
</style>
