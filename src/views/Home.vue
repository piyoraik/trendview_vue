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
        <form>
          <h3>Search</h3>
          <v-text-field v-model="search" label="Word" solo></v-text-field>
        </form>
      </v-col>
      <v-col cols="8">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Time
                </th>
                <th class="text-left">
                  Rank
                </th>
                <th class="text-left">
                  Word
                </th>
                <th class="text-left">
                  Tweet Count
                </th>
                <th class="text-left">
                  City
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="trend in filterWord" v-bind:key="trend.id">
                <td>{{ trend.now }}</td>
                <td>{{ trend.rank }}</td>
                <td>{{ trend.word }}</td>
                <td>{{ trend.tweetcount }}</td>
                <td>{{ trend.city }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["trends"]),
    filterWord() {
      return this.trends.filter((v) => v["word"].match(this.search));
    },
  },
  data() {
    return {
      trend: {},
      search: "",
    };
  },
};
</script>
