<template>
  <div>
    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetch_trends");
  },
};
</script>
