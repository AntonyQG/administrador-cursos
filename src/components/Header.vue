<template>
  <v-app id="inspire" style="color: White">
    <!-- Lateral Navigation -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item class="px-2">
          <router-link to="/">
            <v-img
              src="../assets/GLI.png"
              style="
                 {
                  border: none;
                  margin: 0;
                  padding: 0;
                  max-width: 35%;
                  height: auto;
                }
              "
            ></v-img>
          </router-link>
        </v-list-item>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in items" :key="item.title" :to="item.path">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <!-- Footer -->
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            ¿Necesitas Ayuda?
            <v-icon>mdi-help-rhombus</v-icon>
          </v-btn>
        </div>
      </template>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-navigation-drawer>

    <!-- Header -->
    <v-app-bar color="teal lighten-2" app>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        style="color: White"
      ></v-app-bar-nav-icon>

      <v-toolbar-title style="color: White">GLI </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Icons -->
      <v-btn icon style="color: White">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-divider vertical></v-divider>

      <!-- User -->
      <v-list
        style="
           {
            border: none;
            margin: 0;
            padding: 0;
            width: 14%;
          }
        "
        color="teal lighten-2"
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content style="color: White">
            <v-list-item-title>Adriana Stefan</v-list-item-title>
            <v-list-item-subtitle style="color: White"
              >Recursos Humanos</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-btn icon style="color: White">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
  },
  data() {
    return {
      pathHome: "/",
      drawer: false,
      group: null,
      items: [
        {
          title: "Administradores",
          icon: "mdi-briefcase-account",
          path: "/administradores",
        },
        { title: "Catálogos", icon: "mdi-notebook" },
        { title: "Líderes", icon: "mdi-account-group" },
        { title: "Usuarios", icon: "mdi-account-multiple" },
        { title: "Mi Empresa", icon: "mdi-account-group-outline" },
        { title: "Cursos", icon: "mdi-food-apple" },
        { title: "Recompensas", icon: "mdi-shopping" },
        { title: "Eventos", icon: "mdi-calendar-multiple" },
        { title: "Notificaciones", icon: "mdi-comment-alert" },
        { title: "Reportes", icon: "mdi-chart-timeline-variant" },
      ],
    };
  },
  methods: {},
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
