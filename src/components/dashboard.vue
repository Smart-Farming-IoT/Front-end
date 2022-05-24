<template>
    <section class=" body-font  bg-blue-100 bg-opacity-30 ">
        <div class="min-w-screen min-h-screen container  mx-auto  flex flex-col  items-stretch px-8 py-8 ">
            <h2 class=" pt-4 pl-4 title-font  text-4xl  font-bold">Dashboard</h2>
            <div class=" flex flex-wrap pt-6 text-center  items-center justify-center ">
                <!-- Soil Moisture -->
                <div class=" p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-pink-400 px-4 py-6 ">
                        <div class="">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                class="rounded-full bg-pink-400 text-white p-4 w-16 h-16 mb-3 inline-block"
                                viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <h2 class="title-font font-medium text-3xl text-gray-900">87.50</h2>
                        <h2 class="title-font font-medium text-2xl text-gray-600">Soil Moisture</h2>
                        <p class="leading-relaxed text-gray-600">Soil Moisture Content</p>
                    </div>
                </div>
                <!-- PH Level -->
                <div class=" p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div
                        class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-green-400 px-4 py-6 ">
                        <div class="">
                            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"
                                class="rounded-full bg-green-400 text-white p-4 w-16 h-16 mb-3 inline-block"
                                viewBox="0 0 24 24" width="24px" height="24px">
                                <path
                                    d="M 2 2 L 2 12 L 16 12 L 16 6 L 18 6 C 18.551 6 19 6.449 19 7 L 19 9 L 18 9 L 18 15 L 19 15 L 19 22 L 21 22 L 21 15 L 22 15 L 22 9 L 21 9 L 21 7 C 21 5.346 19.654 4 18 4 L 16 4 L 16 2 L 2 2 z M 9 6 C 10.654 6 12 7.346 12 9 L 10 9 C 10 8.449 9.551 8 9 8 C 8.449 8 8 8.449 8 9 L 6 9 C 6 7.346 7.346 6 9 6 z M 2 14 L 2 22 L 16 22 L 16 14 L 2 14 z M 7 17 C 7.552 17 8 17.448 8 18 C 8 18.552 7.552 19 7 19 C 6.448 19 6 18.552 6 18 C 6 17.448 6.448 17 7 17 z M 11 17 C 11.552 17 12 17.448 12 18 C 12 18.552 11.552 19 11 19 C 10.448 19 10 18.552 10 18 C 10 17.448 10.448 17 11 17 z" />
                            </svg>
                        </div>
                        <h2 class="title-font font-medium text-3xl text-gray-900">5.8</h2>
                        <h2 class="title-font font-medium text-2xl text-gray-600">PH Level</h2>
                        <p class="leading-relaxed text-gray-600">Water PH level</p>
                    </div>
                </div>
                <!-- Ambient light -->
                <div class=" p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div
                        class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-yellow-400 px-4 py-6 ">
                        <div class="">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                class="rounded-full bg-yellow-400 text-white p-4 w-16 h-16 mb-3 inline-block"
                                viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <h2 class="title-font font-medium text-3xl text-gray-900">LOW+</h2>
                        <h2 class="title-font font-medium text-2xl text-gray-600">Ambient light</h2>
                        <p class="leading-relaxed text-gray-600">Ambient light Content</p>
                    </div>
                </div>
                <!-- ON / OFF -->
                <div class="flex flex-auto pt-6 text-center  items-center justify-center">
                    <div class="p-4 md:w-2/6 sm:w-1/2 w-full">
                        <div
                            class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-purple-400 px-4 py-6 ">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                class="rounded-full bg-purple-400 text-white p-4 w-16 h-16 mb-3 inline-block"
                                viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <div class="">
                                <button @click="toggle = !toggle" ref="ok"
                                    class="relative inline-flex items-center h-6 rounded-full w-11 duration-200 select-none bg-gray-300"
                                    :class="toggle ? 'bg-red-500' : 'bg-gray-500'">
                                    <span class="sr-only">Enable notifications</span>
                                    <span
                                        class="inline-block w-4 h-4 transform duration-300 bg-white rounded-full translate-x-1"
                                        :class="toggle ? 'translate-x-1 ' : 'translate-x-6'"></span>
                                </button>
                            </div>
                            <h2 class="title-font font-medium text-2xl text-gray-600">ON / OFF</h2>
                            <p class="leading-relaxed text-gray-600">Turn on/off water pump</p>
                        </div>
                    </div>
                    <!-- ON / OFF 2 -->
                    <div class="p-4 md:w-2/6 sm:w-1/2 w-full">
                        <div
                            class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-blue-400 px-4 py-6 ">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                class="rounded-full bg-blue-400 text-white p-4 w-16 h-16 mb-3 inline-block"
                                viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <div>
                                <button @click="toggle = !toggle" ref="ok"
                                    class="relative inline-flex items-center h-6 rounded-full w-11 duration-200 select-none bg-gray-300"
                                    :class="toggle ? 'bg-red-500' : 'bg-gray-500'">
                                    <span class="sr-only">Enable notifications</span>
                                    <span
                                        class="inline-block w-4 h-4 transform duration-300 bg-white rounded-full translate-x-1"
                                        :class="toggle ? 'translate-x-1 ' : 'translate-x-6'"></span>
                                </button>
                            </div>
                            <h2 class="title-font font-medium text-2xl text-gray-600">ON / OFF</h2>
                            <p class="leading-relaxed text-gray-600">Turn on/off water valve in garden.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {

    data() {
        return {
            message: 'Test',
            toggle: true
        };
    },


};
</script>

