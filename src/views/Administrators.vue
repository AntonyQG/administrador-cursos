<template>
  <v-card>
    <v-card-title primary-title> Adminostradores de la consola </v-card-title>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        :loading="loading"
        :disabled="loading"
        color="blue-grey"
        class="ma-2 white--text"
        @click="loader = 'loading'"
      >
        Descargar
        <v-icon right dark> mdi-download </v-icon>
      </v-btn>
      <v-btn
        class="ma-2 white--text"
        :loading="loading2"
        :disabled="loading2"
        color="teal lighten-2"
        @click="loader = 'loading2'"
      >
        Añadir nuevo admin
        <template v-slot:loader>
          <span>Loading...</span>
        </template>
      </v-btn>
    </v-card-title>
    <v-data-table
      v-model="selected"
      show-select
      item-key="admins"
      :headers="headers"
      :items="administradores"
      :search="search"
    >
      <!-- Template for the Color of Estatus -->
      <template v-slot:[`item.estatus`]="{ item }">
        <v-chip :color="getColor(item.estatus)" dark>
          {{ item.estatus }}
        </v-chip>
      </template>
      <!-- Template for the Buttons -->
      <template v-slot:[`item.detalles`]="{ item }">
        <v-icon color="teal lighten-2" class="mr-2" @click="editItem(item)">
          mdi-square-edit-outline
        </v-icon>
        <v-icon color="red accent-4" class="mr-2" @click="deleteItem(item)">
          mdi-trash-can-outline
        </v-icon>
        <router-link to="/perfil">
          <v-icon class="mr-2" @click="seeAdmin()"> mdi-eye-outline </v-icon>
        </router-link>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
      <!-- Template for the Dialogs -->
      <template v-slot:top>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >¿Estás seguro que quieres eliminar a este
              administrador?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- Edit -->
        <v-dialog v-model="dialogEdit" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >¿Estás seguro que quieres editar este
              administrador?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="closeEdit">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="editItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  admins: "Administrators",
  data() {
    return {
      users: "",
      nombreUsusario: "",
      correo: "",
      search: "",
      selected: [],
      loader: null,
      loading: false,
      loading2: false,
      dialogEdit: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        admins: "",
        area: "",
        email: "",
        estatus: "",
      },
      headers: [
        {
          text: "Administradores",
          align: "start",
          sortable: false,
          value: "admins",
        },
        { text: "Área", value: "area" },
        { text: "Correo Electrónico", value: "email" },
        { text: "Estatus", value: "estatus" },
        { text: "Detalles", value: "detalles", sortable: false },
      ],
      administradores: [
        {
          admins: "Eva Chavez",
          area: "Recursos Humanos",
          email: "correo@gmail.com",
          estatus: "Activo",
          detalles: "",
        },
        {
          admins: "Theo French",
          area: "Recursos Humanos",
          email: "correo@gmail.com",
          estatus: "Inactivo",
          detalles: "",
        },
        {
          admins: "Luis Nogueira",
          area: "Recursos Humanos",
          email: "correo@gmail.com",
          estatus: "Activo",
          detalles: "",
        },
        {
          admins: "Leonídio Gomes",
          area: "Recursos Humanos",
          email: "correo@gmail.com",
          estatus: "Activo",
          detalles: "",
        },
        {
          admins: "Raul Horton",
          area: "Recursos Humanos",
          email: "correo@gmail.com",
          estatus: "Activo",
          detalles: "",
        },
        {
          admins: "Kathryn Korkmaz",
          area: "Recursos Humanos",
          email: "correo@gmail.com",
          estatus: "Activo",
          detalles: "",
        },
        {
          admins: "Adam Olsen",
          area: "Recursos Humanos",
          email: "correo@gmail.com",
          estatus: "Activo",
          detalles: "",
        },
        {
          admins: "Roxane Bertrand",
          area: "Recursos Humanos",
          email: "correo@gmail.com",
          estatus: "Inactivo",
          detalles: "",
        },
        {
          admins: "Ema Holst",
          area: "Recursos Humanos",
          email: "correo@gmail.com",
          estatus: "Activo",
          detalles: "",
        },
        {
          admins: "Asuncion Rubio",
          area: "Recursos Humanos",
          email: "correo@gmail.com",
          estatus: "Activo",
          detalles: "",
        },
      ],
    };
  },
  methods: {
    async fetchUsers() {
      const res = await fetch("https://randomuser.me/api/?results=10");
      const data = await res.json();
      return data;
    },
    getDataUsers(usersData) {
      for (let i = 0; i < usersData.length; i++) {
        const singleUser = usersData[i];
        console.log("Name: ", singleUser.name.first);
        console.log("Last", singleUser.name.last);
      }
    },
    getColor(estatus) {
      if (estatus == "Activo") return "green";
      else return "red";
    },
    /*-- Methods for Edit --*/
    // Modify
    editItem(item) {
      this.editedIndex = this.administradores.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogEdit = true;
    },
    editItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeEdit();
    },
    closeEdit() {
      this.dialogEdit = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    /*-- Methods for Delete --*/
    deleteItem(item) {
      this.editedIndex = this.administradores.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
  async created() {
    const data = await this.fetchUsers();
    this.users = data.results;
    this.getDataUsers(this.users);
    // console.log("Data of users: ", this.users);
    // this.nombreUsusario = this.users[0].name.first;
    // console.log("Name of user: ", this.nombreUsusario);
    // this.correo = this.users[0].email;
    // console.log("Email of user: ", this.correo);
  },
};
</script>

<style></style>
