<template>
  <table id="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Stage</th>
      </tr>
    </thead>
    <tbody v-for="(index, label) in data" :class="`table__content table__content--${label}`" :key="index">
      <tr class="tabel__label"><th colspan="2">{{label}}</th></tr>
      <!-- get the data from the label and loop through it -->
      <tr v-for="item in data[label]" :key="item.id">
        <td>
          <input type="checkbox" :id="item.id" @click="$emit('toggleChoice', item, $event)">
          <a href="#" class="table__link" @click="$emit('loadContent', $event)">{{item.name}}</a>
        </td>
        <td>{{item.stage}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
props: ['data'],
}
</script>

<style>

</style>