<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    contacts: [
      {
        id: 1,
        first_name: "Shakhawat",
        last_name: "Hossain",
        email: "tsn361@gmail.com",
        mobile_number: "01684-960560",
      },
      {
        id: 2,
        first_name: "Sadat",
        last_name: "Hossain",
        email: "tsn3611@gmail.com",
        mobile_number: "019156085354",
      },
      {
        id: 3,
        first_name: "Nabil",
        last_name: "Hossain",
        email: "tsn36111@gmail.com",
        mobile_number: "01724800786",
      },
    ],
  }),
  mounted() {
    this.$store.dispatch("setContacts", this.contacts);
  },
};
</script>
<style>
.c-p {
  cursor: pointer;
}
</style>
