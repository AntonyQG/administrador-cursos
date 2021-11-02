<template>
  <v-app>
    <v-card outlined class="" elevation="" max-width="">
      <v-card-title class="text-h5"> Space </v-card-title>
      <v-row>
        <v-col> </v-col>
        <v-col cols="12" sm="1" md="8">
          <v-card-title class="text-h5">
            Administradores de consola
          </v-card-title>
          <v-spacer></v-spacer>

          <v-avatar color="success">
            <v-icon dark> mdi-check </v-icon>
          </v-avatar>
          <v-card-title class="text-h7"> Administrador añadido </v-card-title>
          <v-card-subtitle class="text-h8">
            Tu administrador ha sido guardado con éxito.
          </v-card-subtitle>
          <router-link :to="path">
            <v-btn class="ma-2 white--text" color="teal lighten-2">
              Regresar a administradores
            </v-btn>
          </router-link>
        </v-col>
        <v-col> </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/",
    };
  },
  methods: {},
};
</script>
