<template>
  <v-form
    ref="form2"
    class="mb-4"
    @submit.prevent="addMessage"
    v-model="valid"
    width="350"
  >
    <v-text-field
      v-model="message"
      label="Enter your message"
      required
      :rules="messageRules"
      full-width
    ></v-text-field>
    <v-btn
      color="teal"
      :disabled="!valid"
      class="mr-4 mt-3"
      @click="addMessage"
    >
      Send
    </v-btn>
  </v-form>
</template>
<script>
import { db } from "@/firebase";
export default {
  props: ["name"],
  data: () => ({
    valid: true,
    message: "",
    messageRules: [v => !!v || "Message is required"]
  }),
  methods: {
    async addMessage() {
      if (this.$refs.form2.validate()) {
        try {
          db.collection("chat-ninja").add({
            message: this.message,
            name: this.name,
            createdDate: Date.now()
          });
        } catch (e) {
          console.log("error");
        }
        this.message = "";
      }
    }
  }
};
</script>
