<template>
  <v-app>
    <Header />
    <Administrators />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Administrators from "./views/Administrators.vue";
export default {
  name: "App",
  components: {
    Header,
    Administrators,
  },
  data: () => ({
    //
  }),
};
</script>
