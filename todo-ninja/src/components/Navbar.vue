<template>
  <nav>
    <!-- Navbar -->
    <v-app-bar flat dense app>
      <!-- Hamburger Icon -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey-text"></v-app-bar-nav-icon>

      <!-- Logo Title -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Dropdown Menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed class="grey--text" v-bind="attrs" v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in items" :key="item.text" router :to="item.route">
            <v-list-item-title>
              <v-icon left class="grey--text">{{ item.icon }}</v-icon>
              {{item.text}}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Sign Out -->
      <v-btn depressed class="grey--text">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column wrap align-center>
        <!-- Avatar -->
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="The Net Ninja" />
          </v-avatar>
          <p class="white--text subheading mt-3">The Net Ninja</p>
        </v-flex>

        <!-- New Project -->
        <v-flex class="my-3">
          <popout-app></popout-app>
        </v-flex>
      </v-layout>

      <!-- Sidebar Item -->
      <v-list-item-group>
        <v-list-item v-for="item in items" :key="item.text" router :to="item.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import PopoutApp from "./Popout.vue";

export default {
  components: {
    PopoutApp
  },
  data() {
    return {
      drawer: false,
      items: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ]
    };
  }
};
</script>
