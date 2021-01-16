<template lang="html">
  <div>
    <ul>
    <phonItem
      v-for="(numb, ix) in numbers" :key="numb.ix"
      :numb="numb"
      :index="ix"
      v-on:remov-numb="removNumb"
      />
    </ul>
  </div>
</template>

<script>
import phonItem from '@/components/phonItem';
export default {
  props: ['numbers'],//данные от родителя к потомкам - с помощью пропс и директивы v-bind
  components: {
    phonItem
  },
  methods: {
    removNumb(id) {
    this.$emit( 'remov-numb', id );
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
