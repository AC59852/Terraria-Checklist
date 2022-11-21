<template>
  <div class="home">
    <h1>Terraria Tracker</h1>
    <section id="selectors">
        <router-link to="/bosses" class="selectors__link">
          <img src="/" >
          <h2>Bosses</h2>
          <h3>Boss Count: <span>{{ bossesKilled }}</span> / <span>28</span></h3>
        </router-link>
        <router-link to="/melee" class="selectors__link">
          <img src="/" >
          <h2>Melee</h2>
          <h3>Item Count: <span>{{ summonerItems }}</span> / <span>28</span></h3>
        </router-link>
        <router-link to="/ranged" class="selectors__link">
          <img src="/" >
          <h2>Ranged</h2>
          <h3>Item Count: <span>{{ summonerItems }}</span> / <span>28</span></h3>
        </router-link>
        <router-link to="/mage" class="selectors__link">
          <img src="/" >
          <h2>Mage</h2>
          <h3>Item Count: <span>{{ summonerItems }}</span> / <span>28</span></h3>
        </router-link>
        <router-link to="/summoner" class="selectors__link">
          <img src="/" >
          <h2>Summoner</h2>
          <h3>Item Count: <span>{{ summonerItems }}</span> / <span>86</span></h3>
        </router-link>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',

  data() {
    return {
      bossesKilled: 0,
      summonerItems: 0
    }
  },

  components: {
  }
}
</script>
