<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Trend View</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-row>
      <v-col cols="4">
        <h3>Search</h3>
        <form>
          <v-text-field v-model="search" label="Word" solo></v-text-field>

          <v-btn class="mr-4" v-on:click="searchWord">Search</v-btn>
        </form>
      </v-col>
      <v-col cols="8">
        <v-data-table
          :headers="headers"
          :items="trends"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["trends"]),
  },
  data() {
    return {
      trend: {},
      headers: [
        { text: "Time", value: "now" },
        { text: "Rank", value: "rank" },
        { text: "Word", value: "word" },
        { text: "TweetCount", value: "tweetcount" },
        { text: "City", value: "city" },
      ],
      search: "",
    };
  },
  methods: {
    searchWord() {
      this.$store.dispatch("search_trends", this.search);
      this.search = "";
    },
  },
};
</script>
