<template>
  <v-container>
    <v-row class="">
      <v-col class="mb-4 text-center">
        <top-nav></top-nav>

        <v-avatar color="white" size="96" class="avatar mb-4">
          <span class="blue--text text-h5 text-uppercase">{{ avatar }}</span>
        </v-avatar>

        <v-form ref="form" @submit.prevent="submit">
          <v-text-field
            v-model="contact.first_name"
            :validate-on-blur="true"
            color="blue darken-2"
            label="First name"
            :rules="rules.first_name"
            required
          ></v-text-field>

          <v-text-field
            v-model="contact.last_name"
            color="blue darken-2"
            label="Last name"
            :rules="rules.first_name"
            required
          ></v-text-field>

          <v-text-field
            v-model="contact.mobile_number"
            color="blue darken-2"
            label="Phone Number"
            :rules="rules.mobile_number"
            required
          ></v-text-field>

          <v-text-field
            v-model="contact.email"
            color="blue darken-2"
            label="Email Address"
            :rules="rules.email"
            required
          ></v-text-field>

          <v-btn class="save-btn" fa dark color="blue" type="submit">
            <v-icon dark icon="fa-solid fa-floppy-disk" class="mr-2"> </v-icon>
            Save
          </v-btn>
        </v-form>
        <v-alert
          v-model="addSuccess"
          border="start"
          variant="tonal"
          closable
          close-label="Close Alert"
          color="deep-purple-accent-4"
          title="contact created!"
        >
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "App",
  components: {
    TopNav,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const addSuccess = ref(false);
    const contact = reactive({ first_name: "", last_name: "", mobile_number: "", email: "" });
    const rules = reactive({
      first_name: [(val) => (val || "").length > 0 || "This field is required"],
      last_name: [(val) => (val || "").length > 0 || "This field is required"],
      email: [(val) => (val || "").length > 0 || "This field is required"],
      mobile_number: [(val) => (val || "").length > 0 || "This field is required"],
    });
    const avatar = computed(() => {
      return contact.first_name.charAt(0) + contact.last_name.charAt(0);
    });

    const formIsValid = computed(() => {
      return contact.first_name !== "" && contact.last_name !== "" && contact.email !== "" && contact.phone !== "";
    });
    const getContact = computed(() => store.getters.getContactList);

    function submit() {
      if (formIsValid.value) {
        contact.id = getContact.value.length + 1;
        store.dispatch("addContact", contact);
        addSuccess.value = true;
        setTimeout(() => {
          router.push("/");
        }, 1200);
      }
    }

    return {
      addSuccess,
      contact,
      rules,
      avatar,
      submit,
    };
  },
};
</script>

<style>
.avatar {
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  font-size: 23px;
}
.save-btn {
  position: fixed;
  bottom: 20px;
  right: 42%;
}
</style>
