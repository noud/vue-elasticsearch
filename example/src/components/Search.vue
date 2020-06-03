<template>
  <div class="search">

    <img src="../assets/elastic-logo.svg" alt="elastic" class="logoImg">
    <h1>Enterprise Search</h1>

    <!-- Customize autocomplete input using inputClass binding, `input-box-header` and  `input-box-footer` slot templates -->
    <!-- Customize suggestion item using suggestionClass binding and `suggestion` slot template -->
    <vue-elastic-autocomplete
      :suggestions="suggestions"
      inputClass="ve-autocomplete-input"
      suggestionClass="ve-autocomplete-suggestion"
      @changed="onChange"
      @selected="onSelect">

      <template slot="input-box-header">
      </template>

      <template slot="input-box-footer">
        <i class="fa fa-search"></i>
      </template>

      <template slot="suggestion" slot-scope="{ suggestion }">
        {{ suggestion.text }} {{ suggestion.score }}
      </template>

    </vue-elastic-autocomplete>

  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      msg: 'Search View'
    }
  },
  computed: {
    suggestions () {
      return this.$store.getters['elastic/suggest/suggestions']
    }
  },
  methods: {
    onChange (value) {
      this.$store.dispatch('elastic/suggest/fetchSuggestions', value)
    },
    onSelect (keyword) {
      this.$router.push({name: 'Result', params: { keyword }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
