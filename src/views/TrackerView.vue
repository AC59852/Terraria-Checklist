<template>
  <section id="tracker">
    <h1>{{this.route.name}} content</h1>
    <section id="content">
      <iframe src="https://terraria.fandom.com/wiki/Guide:Class_setups" frameborder="0" class="content__web"></iframe>
      <section id="items">
        <div class="items__filters" v-if="route.name !== 'bosses'">
          <button @click="filterContentAll()">all</button>
          <button @click="filterContent($event)">weapons</button>
          <button @click="filterContent($event)">armour</button>
          <button @click="filterContent($event)">accessories</button>
        </div>
        <div v-else-if="route.name === 'bosses'" class="items__filters">
          <button @click="filterContentAll()">all</button>
          <button @click="filterContent($event)">pre-hardmode</button>
          <button @click="filterContent($event)">hardmode</button>
          <button @click="filterContent($event)">event</button>
        </div>
        <TableComponent :data="data" @loadContent="loadContent" @toggleChoice="toggleChoice"/>
      </section>
    </section>
  </section>
</template>

<script>
import data from '@/assets/data.json'
import TableComponent from '@/components/TableComponent.vue'
export default {
  name: 'TrackerView',

  data() {
    return {
      route: this.$route,
      data: data[this.$route.name],
    }
  },

  mounted() {
    // check if there is a local storage for the current route
    if (localStorage.getItem(`${this.route.name}Items`)) {
      // get the local storage and loop through it
      JSON.parse(localStorage.getItem(`${this.route.name}Items`)).forEach((item) => {
        // get the checkbox with the same id as the item
        const checkbox = document.querySelector(`input[type="checkbox"][id="${item.id}"]`)

        // check the checkbox
        checkbox.checked = true
      })
    }
  },

  methods: {
    loadContent(e) {
      e.preventDefault()

      let name = e.target.innerText.replace(/ /g,"_");

      document.querySelector(".content__web").src = `https://terraria.fandom.com/wiki/${name}`
    },

    filterContent(e) {
      let label = e.target.innerText

      let content = document.querySelectorAll(".table__content")

      content.forEach((item) => {
        if (item.classList.contains(`table__content--${label}`)) {
          item.style.display = "table-row-group"
        } else {
          item.style.display = "none"
        }
      })
    },

    filterContentAll() {
      let content = document.querySelectorAll(".table__content")

      content.forEach((item) => {
        item.style.display = "table-row-group"
      })
    },

    toggleChoice(item, event) {
      // get the clicked item
      let choice = item

      if(localStorage.getItem(`${this.route.name}Items`) !== null) {

        // get the items from local storage
        let items = JSON.parse(localStorage.getItem(`${this.route.name}Items`))

        // check if the item is already in the array
        let index = items.findIndex((item) => item.id === choice.id)

        // if the item is not in the array
        if(index === -1) {
          // add the item to the array
          items.push(choice)

          // checkmark the box
          event.target.checked = true
        } else {
          // remove the item from the array
          items.splice(index, 1)

          // uncheck the box
          event.target.checked = false
        }

        // set the items in local storage
        localStorage.setItem(`${this.route.name}Items`, JSON.stringify(items))
      } else {

        // create an array
        let items = []

        // add the item to the array
        items.push(choice)

        // set the items in local storage
        localStorage.setItem(`${this.route.name}Items`, JSON.stringify(items))
      }
    },
  },

  components: {
    TableComponent,
  },
}
</script>

<style>

</style>