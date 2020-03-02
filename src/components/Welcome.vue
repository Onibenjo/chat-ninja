<template>
  <v-card class="mx-auto mt-9 px-6" max-width="400" outlined align="center">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="py-9"
      @submit.prevent="validate"
    >
      <h2 class="teal--text">Welcome</h2>
      <v-text-field
        v-model="name"
        :counter="20"
        :rules="nameRules"
        label="Enter your name"
        required
        full-width
      ></v-text-field>

      <v-btn :disabled="!valid" color="teal" class="mr-4" @click="validate">
        Enter
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 20) || "Name must be less than 10 characters"
    ]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$router.push({ name: "Chat", params: { name: this.name } });
      }
    }
  }
};
</script>

<style scoped></style>
