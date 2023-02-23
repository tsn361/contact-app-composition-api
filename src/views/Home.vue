<template>
  <div class="home">
    <top-nav></top-nav>
    <contact-list></contact-list>
    <add-button></add-button>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
import ContactList from "@/components/ContactList.vue";
import AddButton from "@/components/AddButton.vue";
export default {
  name: "Home",
  components: {
    TopNav,
    ContactList,
    AddButton,
  },
};
</script>
