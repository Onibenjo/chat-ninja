<template>
  <v-container fluid>
    <Welcome />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";

export default {
  name: "Home",
  components: {
    Welcome
  }
};
</script>
