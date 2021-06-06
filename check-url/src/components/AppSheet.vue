<template>
  <v-container>
    <v-row justify="space-around">
      <v-col md="12">
        <v-sheet>
          <v-sheet
            :rounded="rounded"
            class="mx-auto pa-12"
            color="grey lighten-3"
          >
            <v-btn
              con
              href="https://github.com/petr1980/test-url"
              target="_blank"
              x-large
              color="success"
              dark
            >
              Project in github
            </v-btn>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AppSheet",
};
</script>

<style>
</style>