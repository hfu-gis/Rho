<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      sm="8"
      md="4"
    >
      <v-card class="elevation-12">
        <v-toolbar
          color="primary"
          dark
          flat
        >
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"
              :value="loginUser.name"
            />

            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-textbox-password"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary"
             @click="$emit('login', true); $router.push({name:'Overview'})">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import db from '../db'

export default {
  props: {},
  data() {
    return {
      loginUser: {
        name:''
      }
    }
  },
  methods: {
    login() {
  /*
      db.connect()
        .then(()=>{
          this.$emit('login', true)
        })
  */
    }
  },
  created() {
    let docRef = db.collection('User').doc( 'testUser')
    docRef.get().then(doc => {
      this.loginUser = doc.data()
    })
  }
}
</script>