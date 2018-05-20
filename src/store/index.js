import Vue from 'vue'
import vuex from 'vuex'
import menu from './modules/menu'
import dialog from './modules/dialog'

Vue.use(vuex);

export default new vuex.Store({
  state: {
    menu,
    dialog
  },
  mutations: {
    switch_menu(state, data) {
      debugger;
      state.menu.active = data.active;
      state.menu.trigger = data.trigger;
      console.log(data);
    },
    switch_dialog(state) {
      state.dialog.showDialog = !state.menu.showDialog;
    }
  },
  actions: {
    switch_dialog_action(context) {
      context.commit('switch_dialog');
    }
  }
})
