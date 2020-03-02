<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"> {{ this.name }} - name </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Chat",
  props: ["name"],
  data: () => ({})
};
</script>
