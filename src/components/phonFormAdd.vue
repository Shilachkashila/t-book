<template>
  <div>
    <!-- вместо обычного(prevent)поведения формы(submit)приниает(=)функцию(onSubmit) -->
    <form autocomplete="off"
    v-on:submit.prevent="onSubmit">
      <p class="error"
       v-show="err">
       только цифры <span>1-9</span> дефис <span> - </span>скобки <span>()</span>
      </p>
      <input type="text" maxlength="20" name="phoneNumber" placeholder="номер"
      v-model='telephone'
      :class="{border: err}"
      v-on:focus="numberFocus">
      <input type="text" name="name" placeholder="имя"
      v-model='title'>
      <button
      v-on:keyup.enter="onSubmit"
      type="submit" name="добавить">
      добавить</button>
    </form>
  </div>
</template>

<script>
export default {
name: "",
data() {
  return {
    err: false,
    title: '',
    telephone: '',
  };
},
methods: {
  onSubmit() {
    if (!this.validPhoneNumber(this.telephone)) {
      this.err = true;
      return false;
    }
    if (this.title.trim() && this.telephone.trim()) {
      const newNumb = { id: Date.now(), telephone: this.telephone, title: this.title, completed: false };
      this.$emit('add-numb', newNumb);
      this.title = '';
      this.telephone = '';
      this.err = false;
    }
    },
  validPhoneNumber: function (telephone) {
    var re = /[0-9()-]+/;
    return re.test(telephone);
    },
  numberFocus() {
    this.err = false;
    }
}
};
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
  font-size: 18px;
}
span {
  background-color: #C4C4C4;
  color: #666666;
}
.error {
  color: red;
  text-align:left;
}
.border {
  border-color: red;
}
</style>
