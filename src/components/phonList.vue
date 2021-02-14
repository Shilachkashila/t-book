<template lang="html">
  <div>
    <phonListSearch/>
    <ul>
      <phonListItem
        v-for="(numb, ix) in numbers" :key="numb.ix"
        :numb="numb"
        :index="ix"
        v-on:remov-numb="removNumb"
        />
    </ul>
  </div>
</template>

<script>
import phonListItem from '@/components/phonListItem';
import phonListSearch from '@/components/phonListSearch';

export default {
components: {
  phonListItem,
  phonListSearch,
  },
props: ['numbers'],//данные от родителя к потомкам - с помощью пропс и директивы v-bind
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
