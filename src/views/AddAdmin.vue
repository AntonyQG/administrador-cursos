<template>
  <v-app v-if="!changeSave">
    <v-card outlined class="" elevation="" max-width="">
      <v-card-title class="text-h5"> Space </v-card-title>
      <v-row>
        <v-col> </v-col>
        <v-col cols="12" sm="1" md="8">
          <v-card-title class="text-h5"> Agregar Administrador </v-card-title>
          <v-spacer></v-spacer>
          <v-card-subtitle class="text-h7">
            Sube tu fotografía con un peso menor a 2MB
          </v-card-subtitle>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-file-input
              v-model="foto"
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon="mdi-camera"
              truncate-length="20"
              required
              label="Escoge una foto de perfil"
            ></v-file-input>

            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Nombre"
              required
            ></v-text-field>

            <v-text-field
              v-model="apellido"
              :counter="10"
              :rules="lastNameRules"
              label="Apellidos"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Correo Electrónico"
              required
            ></v-text-field>

            <v-select
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || 'Es requerido']"
              label="Área"
              required
            ></v-select>

            <v-select
              v-model="select2"
              :items="estatus"
              :rules="[(v) => !!v || 'Es requerido']"
              label="Estatus"
              required
            ></v-select>

            <v-btn class="mr-4" @click="reset"> Cancelar </v-btn>

            <v-btn
              class="ma-2 white--text"
              color="teal lighten-2"
              @click="saveChanges"
            >
              Agregar administrador
            </v-btn>
          </v-form>
        </v-col>
        <v-col> </v-col>
      </v-row>
    </v-card>
  </v-app>

  <v-app v-else>
    <v-card outlined class="" elevation="" max-width="">
      <v-card-title class="text-h5"> Space </v-card-title>
      <v-row>
        <v-col> </v-col>
        <v-col cols="12" sm="1" md="8">
          <v-card-title class="text-h5"> Agregar Administrador </v-card-title>
          <v-spacer></v-spacer>

          <v-avatar color="success">
            <v-icon dark> mdi-check </v-icon>
          </v-avatar>
          <v-card-title class="text-h7"> Administrador añadido </v-card-title>
          <v-card-subtitle class="text-h8">
            Tu administrador se ha añadido
          </v-card-subtitle>
          <v-btn
            class="ma-2 white--text"
            color="teal lighten-2"
            @click="invertChanges"
          >
            Regresar a administradores
          </v-btn>
        </v-col>
        <v-col> </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      changeSave: false,
      foto: "",
      valid: true,
      name: "",
      apellido: "",
      nameRules: [
        (v) => !!v || "El nombre es requerido",
        (v) =>
          (v && v.length <= 20) ||
          "El nombre debe tener menos de 20 catacteres",
      ],
      lastNameRules: [
        (v) => !!v || "El apellido es requerido",
        (v) =>
          (v && v.length <= 20) ||
          "El apellido debe tener menos de 20 catacteres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "Correo electrónico requerido",
        (v) =>
          /.+@.+\..+/.test(v) ||
          "El correo electrónico debe tener el correcto formato",
      ],
      select: null,
      select2: null,
      items: ["Recursos Humanos", "TI", "Contabilidad", "Finanzas"],
      estatus: ["Activo", "Inactvo"],
      checkbox: false,
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    saveChanges() {
      this.changeSave = true;
    },
    invertChanges() {
      this.changeSave = false;
    },
  },
};
</script>

<style></style>
