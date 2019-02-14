<template>
<div id="app">
  <v-app id="inspire">
    <b-container>
      <router-view/>
    </b-container>
    <!-- <v-navigation-drawer
      fixed
      clipped
      class="grey lighten-4"
      app
      v-model="drawer"    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-list-tile
            :key="i"
            @click="linkTo(item.path)"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar  color="amber" app absolute clipped-left style="position:fixed">
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5 cwhite">Youry Admin</span>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content> -->
  </v-app>
</div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
      drawer: null,
      items: [
        { icon: 'show_chart', text: 'Dashboard' , path: 'dashboard'},
        { icon: 'assignment', text: 'Admin', path: 'admin' },
      ],
      
    }),
    props: {
      source: String
    },
    mounted(){
    },
   methods:{
    linkTo(p){
      this.$router.push({ name: p , params: { alldata: this.alldata} })
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#keep main .container {
    height: 660px;
  }

  .navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 400;
  }
.v-toolbar[data-booted=true] {
  background-color: #61a0ff !important
}  
</style>
