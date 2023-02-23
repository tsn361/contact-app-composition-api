import { createStore } from "vuex";

export default createStore({
  state: { contact: "first contact" },
  getters: { getContactList: (state) => state.contact },
  mutations: {
    setContacts(state, contact) {
      state.contact = contact;
    },
    addContact(state, contact) {
      state.contact.push(JSON.parse(JSON.stringify(contact)));
    },
    updateContact(state, contact) {
      let index = state.contact.findIndex((item) => item.id === contact.value.id);
      state.contact.splice(index, 1, contact.value);
    },
  },
  actions: {
    addContact({ commit }, contact) {
      commit("addContact", contact);
    },
    setContacts({ commit }, contact) {
      commit("setContacts", contact);
    },
    updateContact({ commit }, contact) {
      commit("updateContact", contact);
    },
    deleteContact(contact) {
      this.state.contact.splice(this.state.contact.indexOf(contact), 1);
    },
  },
  modules: {},
});
