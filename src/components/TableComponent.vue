<template>
  <input type="text" id="tableSearch" @keyup="searchItem()" placeholder="Search">
  <section class="table">
    <section v-for="(index, label) in data" :class="`table__content table__content--${label}`" :key="index">
      <div class="table__label">
        <span colspan="100%">{{label}}</span>
      </div>
      <!-- v-if table body has class of table__content--weapons -->
      <div class="table__filters" v-if="label === 'weapons'">
        <button @click="filterTypeAll()">all</button>
        <button @click="filterType($event)" v-for="(type, index) in weaponTypes" :key="index">{{type}}</button>
      </div>
      <!-- get the data from the label and loop through it -->
      <div class="table__cells">
        <div v-for="item in data[label]" :key="item.id" :class="`table__cell table__cell--${item.type}`" >
          <div class="table__item">
            <input type="checkbox" class="table__checkmark" :id="item.id" @click="$emit('toggleChoice', item, $event)">
            <a href="#" class="table__link" @click="$emit('loadContent', $event)">{{item.name}}</a>
          </div>
          <span v-if="!mobile" class="table__type">{{item.type}}</span>
          <span class="table__Stage">{{item.stage}}</span>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
props: ['data'],

data() {
  return {
    mobile: window.innerWidth < 768,
  }
},

mounted() {
  // check the size of the window
  window.addEventListener('resize', () => {
    this.mobile = window.innerWidth < 768
  })
},

methods: {
  filterType(e) {
    let label = e.target.innerText.toLowerCase()

    let content = document.querySelectorAll(".table__cell");

    content.forEach((item) => {
      if (item.classList.contains(`table__cell--${label}`)) {
        item.style.display = "grid"
      } else {
        item.style.display = "none"
      }
    })
  },

  filterTypeAll() {
    let content = document.querySelectorAll(".table__cell")

    content.forEach((item) => {
      item.style.display = "grid"
    })
  },

  searchItem() {
    let input = document.getElementById("tableSearch").value.toUpperCase()
    let content = document.querySelectorAll(".table__cell")

    content.forEach((item) => {
      let name = item.querySelector(".table__link").innerText.toUpperCase()

      if (name.indexOf(input) > -1) {
        item.hidden = false
      } else {
        item.hidden = true
      }
    })
  }
},

computed: {
  weaponTypes() {
    return [...new Set(this.data.weapons.map(item => item.type))]
  },
}
}
</script>

<style>

</style>