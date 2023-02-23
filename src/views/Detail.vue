<template>
  <v-container>
    <v-row>
      <v-col class="mb-4">
        <top-nav></top-nav>
        <div class="text-center">
          <v-avatar color="white" size="96" class="avatar">
            <span class="blue--text text-h5 text-uppercase">{{ avatarImg }}</span>
          </v-avatar>
        </div>

        <div class="text-left mx-2">
          <div class="mt-3">
            <a class="text-sm-body-2 pt-sm-2">First name</a><br />
            <span class="text-sm-body-2 black--text">{{ contact.first_name }}</span>
          </div>
          <div class="mt-3">
            <a class="text-sm-body-2 pt-sm-2">Last name</a><br />
            <span class="text-sm-body-2 black--text">{{ contact.last_name }}</span>
          </div>

          <div class="mt-3">
            <a class="text-sm-body-2 pt-sm-2">Phone number</a><br />
            <span class="text-sm-body-2 black--text">{{ contact.mobile_number }}</span>
          </div>
          <div class="mt-3">
            <a class="text-sm-body-2 pt-sm-2">Email</a><br />
            <span class="text-sm-body-2 black--text">{{ contact.email }}</span>
          </div>
        </div>

        <div class="action-area">
          <v-btn @click="$router.push('/edit/' + contact.id)" class="mr-3" fab blue color="blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="edit-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </v-btn>
          <v-btn @click="deleteContact(contact.id)" fab color="pink darken-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="delete-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import { ref, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "App",
  components: {
    TopNav,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const contact = ref({ first_name: "", last_name: "", phone: "", email: "" });
    const getContact = computed(() => store.getters.getContactList);
    const avatarImg = computed(() => {
      let selected = getContact.value.filter((contact) => contact.id == route.params.id)[0];
      return selected.first_name.charAt(0) + selected.last_name.charAt(0);
    });
    function deleteContact(id) {
      store.dispatch("deleteContact", id);
      setTimeout(() => {
        router.push("/");
      }, 100);
    }
    onMounted(() => {
      let selected = getContact.value.filter((contact) => contact.id == route.params.id)[0];
      contact.value = selected;
    });
    return { contact, avatarImg, deleteContact };
  },
};
</script>

<style>
.avatar {
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  font-size: 23px;
}
.action-area {
  position: fixed;
  bottom: 20px;
  text-align: center;
  width: 100%;
}
.delete-icon {
  width: 24px;
  height: 24px;
  color: white;
}
.edit-icon {
  width: 24px;
  height: 24px;
  color: white;
}
</style>
