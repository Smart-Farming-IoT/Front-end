<template>
	<section class=" body-font  bg-blue-100 bg-opacity-30 ">
		<div class="min-w-screen min-h-screen container  mx-auto  flex flex-col  items-stretch px-8 py-8 ">
			<h2 class=" pt-4 pl-4 title-font  text-4xl  font-bold">Dashboard</h2>
			<div class=" flex flex-wrap pt-6 text-center  items-center justify-center ">
				<!-- Soil Moisture -->
				<div class=" p-4 md:w-1/4 sm:w-1/2 w-full">
					<div class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-pink-400 px-4 py-6 ">
						<div class="">
							<img alt="content" class="rounded-full bg-pink-400 text-white p-4 w-20 h-20 mb-3 inline-block"
								src="@/assets/Iot/meter.png">
						</div>
						<h2 class="title-font font-medium text-3xl text-gray-900">{{ this.soilMoisture }}</h2>
						<h2 class="title-font font-medium text-2xl text-gray-600">Soil Moisture</h2>
						<p class="leading-relaxed text-gray-600">Soil Moisture Content</p>
					</div>
				</div>
				<!-- PH Level -->
				<div class=" p-4 md:w-1/4 sm:w-1/2 w-full">
					<div class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-green-400 px-4 py-6 ">
						<div class="">
							<img alt="content" class="rounded-full bg-green-400 text-white p-4 w-20 h-20 mb-3 inline-block"
								src="@/assets/Iot/phbalance.png">
						</div>
						<h2 class="title-font font-medium text-3xl text-gray-900">{{ this.phLevel }}</h2>
						<h2 class="title-font font-medium text-2xl text-gray-600">PH Level</h2>
						<p class="leading-relaxed text-gray-600">Water PH Level</p>
					</div>
				</div>
				<!-- Ambient light -->
				<div class=" p-4 md:w-1/4 sm:w-1/2 w-full">
					<div class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-yellow-400 px-4 py-6 ">
						<div class="">
							<img alt="content" class="rounded-full bg-yellow-400 text-white p-4 w-20 h-20 mb-3 inline-block"
								src="@/assets/Iot/sun.png">
						</div>
						<h2 class="title-font font-medium text-3xl text-gray-900">{{ this.ambientLight }}</h2>
						<h2 class="title-font font-medium text-2xl text-gray-600">Ambient Light</h2>
						<p class="leading-relaxed text-gray-600">Ambient Light Content</p>
					</div>
				</div>
				<!-- ON / OFF -->
				<div class="flex flex-auto pt-6 text-center  items-center justify-center">
					<div class="p-4 md:w-2/6 sm:w-1/2 w-full">
						<div class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-purple-400 px-4 py-6 ">
							<div class="">
								<img alt="content" class="rounded-full bg-purple-400 text-white p-4 w-20 h-20 mb-3 inline-block"
									src="@/assets/Iot/waterdrop.png">
							</div>
							<div class="">
								<button @click="toggle = !toggle" ref="ok"
									class="relative inline-flex items-center h-6 rounded-full w-11 duration-200 select-none bg-gray-300"
									:class="toggle ? 'bg-red-500' : 'bg-gray-500'">
									<span class="sr-only">Enable notifications</span>
									<span class="inline-block w-4 h-4 transform duration-300 bg-white rounded-full translate-x-1"
										:class="toggle ? 'translate-x-1 ' : 'translate-x-6'"></span>
								</button>
							</div>
							<h2 class="title-font font-medium text-2xl text-gray-600">ON / OFF</h2>
							<p class="leading-relaxed text-gray-600">Turn on/off water pump</p>
						</div>
					</div>
					<!-- ON / OFF 2 -->
					<div class="p-4 md:w-2/6 sm:w-1/2 w-full">
						<div class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-blue-400 px-4 py-6 ">
							<div class="">
								<img alt="content" class="rounded-full bg-blue-400 text-white p-4 w-20 h-20 mb-3 inline-block"
									src="@/assets/Iot/plants.png">
							</div>
							<div>
								<button @click="toggle2 = !toggle2" ref="ok"
									class="relative inline-flex items-center h-6 rounded-full w-11 duration-200 select-none bg-gray-300"
									:class="toggle2 ? 'bg-red-500' : 'bg-gray-500'">
									<span class="sr-only">Enable notifications</span>
									<span class="inline-block w-4 h-4 transform duration-300 bg-white rounded-full translate-x-1"
										:class="toggle2 ? 'translate-x-1 ' : 'translate-x-6'"></span>
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

const axios = require("axios");

export default {
	created() {
		this.soilMoisture = 58.5
		this.phLevel = 7.2
		this.ambientLight = 'HIGH'
	},
	data() {
		return {
			message: 'Test',
			soilMoisture: 0,
			phLevel: 0,
			ambientLight: 'LOW',
			toggle: true,
			toggle2: true
		};
	}
};
</script>

