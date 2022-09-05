<template>
  <div class="min-w-screen min-h-screen flex items-center justify-center pb-40   px-8  ">
    <div class="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
      <div class="p-4 border-b">
        <h2 class="text-2xl ">
          Profile Information
        </h2>
        <div class="flex justify-between">
          <p class="text-sm text-gray-500">
            Update your account's profile information and email address.
          </p>
          <button type="button" @click="editButtonClickedHandler" v-if="!isEditing"
            class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Edit</button>
          <button type="button" @click="saveButtonClickedHandler" v-if="isEditing"
            class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Save</button>
        </div>
      </div>
      <div>
        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p class="text-gray-600">
            First Name
          </p>
          <p>
            <a v-if="!isEditing">{{userFirstName}}</a>
            <input v-if="isEditing" v-model="userFirstName" style="border: 2px solid black"/>
          </p>
        </div>
        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p class="text-gray-600">
            Last Name
          </p>
          <p>
            <a v-if="!isEditing">{{userLastName}}</a>
            <input v-if="isEditing" v-model="userLastName" style="border: 2px solid black"/>
          </p>
        </div>
        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p class="text-gray-600">
            Email Address
          </p>
          <p>
            Test@gmail.com
          </p>
        </div>
        <div class="p-4 border-b">
          <h2 class="text-2xl ">
            Update Password
          </h2>
          <div class="flex justify-between">
            <p class="text-sm text-gray-500">
              Ensure your account is using a long, random password to stay secure.
            </p>
            <button type="button"
              class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Edit</button>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p class="text-gray-600">
            Password
          </p>
          <p>
            ****************
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  created() {
    const store = useStore();
    this.user = store.state.user;
    this.userFullName = this.user.displayName.split(' ');
    this.userFirstName = this.userFullName[0];
    this.userLastName = this.userFullName[1];
    this.isEditing = false;
  },
  data() {
    return {
      userFullName: this.userFullName,
      userFirstName: this.userFirstName,
      userLastName: this.userLastName,
      isEditing: this.isEditing
    }
  },
  methods: {
    editButtonClickedHandler: function (e) {
      this.isEditing = !this.isEditing;
    },
    saveButtonClickedHandler: function (e) {
      this.userNameChangedHandler()
      this.isEditing = !this.isEditing;
    },
    userNameChangedHandler: function (e) {
      this.userFullName = `${this.userFirstName} ${this.userLastName}`;
      this.user.displayName = this.userFullName;
      this.$store.dispatch('updateProfile', {
        displayName: this.user.displayName,
      });
      console.log('dispatched')
    }
  }
  
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Mitr";

h1,
h2,
h3,
p {
  font-family: "Mitr", sans-serif;
}
</style>