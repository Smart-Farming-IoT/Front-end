<template>
  <div class="relative flex min-h-screen">
    <div
      class=" bg-gray-900 text-white w-64  space-y-6 px-2 py-4  absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full  transition duration-200 ease-in-out"
      :class="{ 'relative -translate-x-0': showSidebar }">
      <a @click="homehelper = null" class="flex items-center space-x-2 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg><span class="text-2xl font-extrabold text-white">IOT Icon</span>
      </a>
      <nav>
        <a href="/"
          class="group flex items-center space-x-2 py-3 px-4 text-white hover:bg-white hover:bg-opacity-90  hover:text-gray-900 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span class=" text-white  group-hover:text-gray-900 text-lg ">DASHBOARD</span>
        </a>
        <a href="/todo"
          class="group flex items-center space-x-2 py-3 px-4 text-white hover:bg-white hover:bg-opacity-90  hover:text-gray-900 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span class=" text-white  group-hover:text-gray-900 text-lg ">TO-DO LIST</span>
        </a>
        <a href="/about"
          class="group flex items-center space-x-2 py-3 px-4 text-white hover:bg-white hover:bg-opacity-90  hover:text-gray-900 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class=" text-white  group-hover:text-gray-900 text-lg ">ABOUT</span>
        </a>
        <a href="/team"
          class="group flex items-center space-x-2 py-3 px-4 text-white hover:bg-white hover:bg-opacity-90  hover:text-gray-900 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class=" text-white  group-hover:text-gray-900 text-lg">TEAM</span>
        </a>
      </nav>
    </div>
    <div class="flex-1 bg-white">
      <div class="bg-white shadow px-2 py-4">
        <button @click="showSidebar = !showSidebar" class="text-gray-900 font-extrabold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <a href="/team"
          class="group flex items-center space-x-2 py-3 px-4 text-black hover:bg-white hover:bg-opacity-90  hover:text-gray-900 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class=" text-black  group-hover:text-gray-900 text-lg">UA</span>
        </a>
      </div>
      <div class="bg-blue-100 bg-opacity-30">
        <!-- component -->
        <component :is="child_component"></component>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

// import teammember from "../components/teammember.vue";
// import HelloWorld from "./HelloWorld.vue";
import homehelper from "../components/homehelper.vue"
import teammember from "../components/teammember.vue";
import aboutiot from "../components/aboutiot.vue";
import dashboard from "../components/dashboard.vue";
import todolist from "../components/todolist.vue";

export default {
  components: {
    homehelper,
    teammember,
    aboutiot,
    dashboard,
    todolist
  },
  props: [
    'child_component'
  ],
  setup() {
    const showSidebar = ref(false);
    return {
      showSidebar,
    }
  }

};
</script>
