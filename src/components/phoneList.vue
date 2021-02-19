<template lang="html">
  <div>
    <phoneListSearch/>
    <ul>
      <phoneListItem
        v-for="(number, ix) in numbers" :key="number.ix"
        :number="number"
        :index="ix"
        @remove-number="removeNumber"
        />
    </ul>
  </div>
</template>

<script>
import phoneListItem from '@/components/phoneListItem';
import phoneListSearch from '@/components/phoneListSearch';

export default {
  components: {
    phoneListItem,
    phoneListSearch,
    },
  props: ['numbers'],//данные от родителя к потомкам - с помощью пропс и директивы v-bind
  methods: {
    removeNumber(id) {
      this.$emit( 'remove-number', id );
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
