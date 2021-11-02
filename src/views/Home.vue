<template>
  <v-card class="mx-auto" max-width="400" tile>
    <v-card-title class="text-h5"> Space </v-card-title>
    <v-spacer></v-spacer>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h5">Administradores</v-list-item-title>
        <v-list-item-subtitle>Página principal</v-list-item-subtitle>
        <router-link :to="path">
          <v-btn class="ma-2 white--text" color="blue darken-2">
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </router-link>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h5"
          >Perfil Administrador</v-list-item-title
        >
        <v-list-item-subtitle>Página para checar perfil</v-list-item-subtitle>
        <router-link :to="pathPerfil">
          <v-btn class="ma-2 white--text" color="blue darken-2">
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </router-link>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h5"
          >Añadir admnistrador</v-list-item-title
        >
        <v-list-item-subtitle
          >Formulario para añadir administrador</v-list-item-subtitle
        >
        <v-list-item-subtitle
          >(Dentro den click en agregar)</v-list-item-subtitle
        >
        <router-link :to="pathAdd">
          <v-btn class="ma-2 white--text" color="blue darken-2">
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </router-link>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h5">Cambios guardados</v-list-item-title>
        <v-list-item-subtitle
          >Página para checar cambios guardados</v-list-item-subtitle
        >
        <router-link :to="pathSaved">
          <v-btn class="ma-2 white--text" color="blue darken-2">
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </router-link>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/administradores",
      pathPerfil: "/perfil",
      pathAdd: "/add",
      pathSaved: "/saved",
    };
  },
};
</script>
