<template>
  <v-container>
    <v-row class="">
      <v-col class="mb-4 text-center">
        <router-link to="/add" class="text-decoration-none c-p">
          <v-btn class="add-btn" fab dark color="blue"> <v-icon icon="fas fa-plus" class="mr-2" />Add </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AddBtn",
};
</script>
<style scoped>
.add-btn {
  position: fixed;
  bottom: 20px;
  right: 42%;
}
</style>
