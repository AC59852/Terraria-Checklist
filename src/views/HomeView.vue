<template>
  <div class="home">
    <section class="selectors">
      <h1 class="title title--home">Terraria Tracker</h1>
        <div class="selectors__wrapper">
          <router-link to="/bosses" class="selectors__link">
            <img src="/bosses.jpg" >
            <h2>Bosses</h2>
            <h3>Boss Count: <span>{{ bossesKilled }}</span> / <span>{{ bosses }}</span></h3>
          </router-link>
          <router-link to="/melee" class="selectors__link">
            <img src="/melee.jpg" >
            <h2>Melee</h2>
            <h3>Item Count: <span>{{ obtainedMeleeItems }}</span> / <span>{{ meleeItems }}</span></h3>
          </router-link>
          <router-link to="/ranged" class="selectors__link">
            <img src="/ranged.webp" >
            <h2>Ranged</h2>
            <h3>Item Count: <span>{{ obtainedRangedItems }}</span> / <span>{{ rangedItems }}</span></h3>
          </router-link>
          <router-link to="/mage" class="selectors__link">
            <img src="/mage.webp" >
            <h2>Mage</h2>
            <h3>Item Count: <span>{{ obtainedMageItems }}</span> / <span>{{ mageItems }}</span></h3>
          </router-link>
          <router-link to="/summoner" class="selectors__link">
            <img src="/summoner.jpg" >
            <h2>Summoner</h2>
            <h3>Item Count: <span>{{ obtainedSummonerItems }}</span> / <span>{{ summonerItems }}</span></h3>
          </router-link>
        </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import data from '@/assets/data.json'

export default {
  name: 'HomeView',

  data() {
    return {
      bosses: data['bosses']['pre-hardmode'].length + data['bosses'].hardmode.length + data['bosses'].event.length,
      meleeItems: data['melee'].weapons.length + data['melee'].armour.length + data['melee'].accessories.length,
      rangedItems: data['ranged'].weapons.length + data['ranged'].armour.length + data['ranged'].accessories.length,
      mageItems: data['mage'].weapons.length + data['mage'].armour.length + data['mage'].accessories.length,
      summonerItems: data['summoner'].weapons.length + data['summoner'].armour.length + data['summoner'].accessories.length,
    }
  },

  mounted() {
    // log all localstorage
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.key(i))
    }
  },

  computed: {
    obtainedSummonerItems() {
      // check if there is a local storage for the current route
      if (localStorage.getItem('summonerItems')) {
        // get the local storage and loop through it
        return JSON.parse(localStorage.getItem('summonerItems')).length
      } else {
        return 0
      }
    },

    obtainedMeleeItems() {
      // check if there is a local storage for the current route
      if (localStorage.getItem('meleeItems')) {
        // get the local storage and loop through it
        return JSON.parse(localStorage.getItem('meleeItems')).length
      } else {
        return 0
      }
    },

    obtainedRangedItems() {
      // check if there is a local storage for the current route
      if (localStorage.getItem('rangedItems')) {
        // get the local storage and loop through it
        return JSON.parse(localStorage.getItem('rangedItems')).length
      } else {
        return 0
      }
    },

    obtainedMageItems() {
      // check if there is a local storage for the current route
      if (localStorage.getItem('mageItems')) {
        // get the local storage and loop through it
        return JSON.parse(localStorage.getItem('mageItems')).length
      } else {
        return 0
      }
    },

    bossesKilled() {
      // check if there is a local storage for the current route
      if (localStorage.getItem('bossesItems')) {
        // get the local storage and loop through it
        return JSON.parse(localStorage.getItem('bossesItems')).length
      } else {
        return 0
      }
    }
  },

  components: {
  }
}
</script>
