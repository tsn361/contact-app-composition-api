<template>
  <v-container>
    <v-row class="">
      <v-col class="mb-4">
        <a class="font-weight-light text-left text-uppercase">
          <span v-if="isHome" class="blue-grey--text darken-2">MY CONTACT</span>
          <span v-else @click.prevent="goToHome()" class="d-flex blue-grey--text darken-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="back-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </span>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "TopNav",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const isHome = computed(() => {
      return route.name === "Home";
    });
    function goToHome() {
      router.push("/");
    }
    return { isHome, goToHome };
  },
};
</script>
<style scoped>
.back-icon {
  height: 20px;
  width: 20px;
}
a {
  cursor: pointer;
}
</style>
