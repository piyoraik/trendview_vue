<template>
  <v-row>
    <v-col cols="4"> </v-col>
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
            <tr v-for="trend in trends" v-bind:key="trend.id">
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
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["trends"]),
  },
};
</script>
