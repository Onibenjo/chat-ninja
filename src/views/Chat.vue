<template>
  <v-container>
    <!-- <v-row class="text-center"> -->
    <h2 class="teal--text text-center">Ninja Chat</h2>
    <v-card class="mx-auto" max-width="400">
      <!-- <v-card-text> -->
      <v-list two-line>
        <v-list-item-group multiple active-class="pink--text">
          <template v-for="item in messages">
            <v-list-item :key="item.id">
              <v-list-item-avatar>
                <v-avatar color="red">
                  <span class="white--text headline">{{
                    item.name.slice(0, 1)
                  }}</span>
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.message"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text
                  v-text="item.createdDate"
                ></v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
      <v-card-actions>
        <NewMessage :name="name" />
      </v-card-actions>
      <!-- </v-card-text> -->
    </v-card>
    <!-- </v-row> -->
  </v-container>
</template>

<script>
import NewMessage from "@/components/NewMessage";
import { db } from "@/firebase";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage
  },
  data: () => ({
    messages: []
  }),
  created() {
    let ref = db.collection("chat-ninja").orderBy("createdDate");

    ref.onSnapshot(snapshot => {
      console.log(snapshot.docChanges());
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            ...doc.data(),
            createdDate: formatDistanceToNow(doc.data().createdDate)
          });
        }
      });
    });
  }
};
</script>
