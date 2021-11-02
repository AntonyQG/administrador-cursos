<template>
  <v-app>
    <!--  -->
    <v-card outlined>
      <v-card-title class="text-h5"> Space </v-card-title>
      <v-spacer></v-spacer>
      <v-card-title class="text-h5"> Perfil del administrador </v-card-title>
      <v-spacer></v-spacer>
      <v-list-item>
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-row>
        <v-col>
          <div>
            <v-card-subtitle>NOMBRE(S)</v-card-subtitle>
          </div>
          <div style="margin-top: -30px">
            <v-card-title>Evan</v-card-title>
          </div>
        </v-col>
        <v-col>
          <div>
            <v-card-subtitle>APELLIDO(S)</v-card-subtitle>
          </div>
          <div style="margin-top: -30px">
            <v-card-title>You</v-card-title>
          </div>
        </v-col>

        <v-col>
          <div>
            <v-card-subtitle>CORREO ELECTRONICO</v-card-subtitle>
          </div>
          <div style="margin-top: -30px">
            <v-card-title>correo@gmail.com</v-card-title>
          </div>
        </v-col>
        <!-- <v-col></v-col> -->
      </v-row>

      <v-row>
        <v-col>
          <div>
            <v-card-subtitle>AREA</v-card-subtitle>
          </div>
          <div style="margin-top: -30px">
            <v-card-title>Recurso Humanos</v-card-title>
          </div>
        </v-col>
        <v-col>
          <div>
            <v-card-subtitle>ESTATUS</v-card-subtitle>
          </div>
          <div style="margin-top: -30px">
            <v-card-title>Activo</v-card-title>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-card outlined d-flex flex-row mb->
      <v-btn class="ma-2 white--text" color="teal lighten-2">
        Editar administrador
      </v-btn>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
