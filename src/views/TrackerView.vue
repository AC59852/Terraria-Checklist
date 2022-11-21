<template>
  <section id="tracker">
    <h1>{{this.route.name}} items</h1>
    <section id="content">
      <iframe src="https://terraria.fandom.com/wiki/Guide:Class_setups" frameborder="0" class="content__web"></iframe>
      <section id="items">
        <div class="items__filters">
          <button @click="filterContent($event)">weapons</button>
          <button @click="filterContent($event)">armour</button>
          <button @click="filterContent($event)">accessories</button>
        </div>
        <table id="table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Stage</th>
            </tr>
          </thead>
          <tbody v-for="(index, label) in data" :class="`table__content table__content--${label}`" :key="index">
            <tr class="items__label"><th colspan="2">{{label}}</th></tr>
            <!-- get the data from the label and loop through it -->
            <tr v-for="item in data[label]" :key="item.id">
              <td>
                <input type="checkbox">
                <span>{{item.name}}</span>
              </td>
              <td>{{item.stage}}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  </section>
</template>

<script>
import data from '@/assets/data.json'
export default {
  name: 'TrackerView',

  data() {
    return {
      route: this.$route,
      data: data[this.$route.name],
    }
  },

  mounted() {
    console.log(this.data)
  },

  components: {
  }
}
</script>

<style>

</style>