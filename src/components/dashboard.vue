<template>
	<section class="body-font  bg-blue-100 bg-opacity-30">
    <div class="min-w-screen min-h-screen container  mx-auto  flex flex-col  items-stretch px-8 py-8">
			<div class="flex flex-wrap pt-2 text-center items-center justify-end">
        <!-- <button type="button" data-modal-toggle="popup-add-sensor-modal"> -->
        <button type="submit" @click="addSensorButtonHandler()">
          <svg xmlns="http://www.w3.org/2000/svg"
            class="mt-2 rounded-full shadow-xl bg-green-400 text-white p-3 w-14 h-14"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
			</div>
			<h2 class="pt-4 pl-4 title-font  text-4xl  font-bold">Dashboard</h2>

      <div v-for="(device, key) in devices" :key="key" >
        <div class="pt-6 pl-4">
          <a class="title-font text-xl font-bold">{{ device.name }}</a>
          <a class="pl-2 title-font text-l">(IMEI: {{ device.imei }})</a>
          <a class="pl-2 title-font text-l">
            Latest update on 
            <a v-if="device.latest_timestamp !== '-'">
              {{ new Date(device.latest_timestamp*1000).toLocaleDateString("en-US") }} {{ new Date(device.latest_timestamp*1000).toLocaleTimeString("en-US") }}
            </a>
            <a v-else>
              N/A
            </a>
          </a>
          
        </div>
        <div class="flex flex-wrap text-center items-center justify-center">
          <!-- Soil Moisture -->
          <div class="p-4 md:w-2/6 sm:w-1/2 w-full">
            <div class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-pink-400 px-4 py-6">
              <div class="">
                <img alt="content" class="rounded-full bg-pink-400 text-white p-4 w-20 h-20 mb-3 inline-block"
                  src="@/assets/Iot/meter.png">
              </div>
              <h2 class="title-font font-medium text-3xl text-gray-900">{{ device.latest_moisture.toUpperCase() }}</h2>
              <h2 class="title-font font-medium text-2xl text-gray-600">Soil Moisture</h2>
              <p class="leading-relaxed text-gray-600">Soil Moisture Content</p>
            </div>
          </div>
          <!-- PH Level -->
          <div class="p-4 md:w-2/6 sm:w-1/2 w-full">
            <div class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-green-400 px-4 py-6">
              <div class="">
                <img alt="content" class="rounded-full bg-green-400 text-white p-4 w-20 h-20 mb-3 inline-block"
                  src="@/assets/Iot/phbalance.png">
              </div>
              <h2 class="title-font font-medium text-3xl text-gray-900">{{ device.latest_ph }}</h2>
              <h2 class="title-font font-medium text-2xl text-gray-600">PH Level</h2>
              <p class="leading-relaxed text-gray-600">Water PH Level</p>
            </div>
          </div>
          <!-- Ambient light -->
          <div class="p-4 md:w-2/6 sm:w-1/2 w-full">
            <div class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-yellow-400 px-4 py-6">
              <div class="">
                <img alt="content" class="rounded-full bg-yellow-400 text-white p-4 w-20 h-20 mb-3 inline-block"
                  src="@/assets/Iot/sun.png">
              </div>
              <h2 class="title-font font-medium text-3xl text-gray-900">{{ device.latest_light_intensity.toUpperCase() }}</h2>
              <h2 class="title-font font-medium text-2xl text-gray-600">Ambient Light</h2>
              <p class="leading-relaxed text-gray-600">Ambient Light Content</p>
            </div>
          </div>
        </div>
      </div>

			<div class="flex flex-wrap pt-6 text-center  items-center justify-center">
				<!-- ON / OFF -->
				<div class="flex flex-auto pt-6 text-center  items-center justify-center">
					<div class="p-4 md:w-2/6 sm:w-1/2 w-full">
						<div class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-purple-400 px-4 py-6">
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
						<div class="widget w-full p-4 rounded-lg  shadow-lg bg-white border-l-4 border-blue-400 px-4 py-6">
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
    <div id="addSensorModal" class="relative hidden z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Add A New Device</h3>
                  <div class="mt-2">
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label for="" class="text-xs font-semibold px-1">Device IMEI</label>
                        <div class="flex">
                          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                          </div>
                          <input type="text" placeholder="Enter Device IMEI" v-model="newDeviceIMEI"
                            class="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500">
                        </div>
                        <label for="" v-if="newDeviceIMEIInvalid" class="text-xs font-semibold text-red-500 px-1">{{this.newDeviceIMEIInvalid}}</label>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label for="" class="text-xs font-semibold px-1">Device Name</label>
                        <div class="flex">
                          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                          </div>
                          <input type="text" placeholder="Enter Device Name" v-model="newDeviceName"
                            class="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500">
                        </div>
                        <label for="" v-if="newDeviceNameInvalid" class="text-xs font-semibold text-red-500 px-1">{{this.newDeviceNameInvalid}}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" @click="confirmSensorAddingButtonHandler()" class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Add</button>
              <button type="button" @click="cancelSensorAddingButtonHandler()" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
	</section>
</template>

<script>
import { useStore } from 'vuex'
const axios = require("axios")

export default {
	created() {
    const store = useStore()
    this.userId = store.state.user.uid
    this.newDeviceIMEI = ""
    this.newDeviceIMEIInvalid = ""
    this.newDeviceName = ""
    this.newDeviceNameInvalid = false
    this.devices = []

    this.refreshDevices()
	},
	data() {
		return {
      newDeviceIMEI: this.newDeviceIMEI,
      newDeviceIMEIInvalid: this.newDeviceIMEIInvalid,
      newDeviceName: this.newDeviceName,
      newDeviceNameInvalid: this.newDeviceNameInvalid,
      devices: this.devices,
			message: 'Test',
			toggle: true,
			toggle2: true
		};
	},
  methods: {
    refreshDevices() {
      axios.post(this.firebaseBase + this.apiBase + '/device', {
          "user_id": this.userId,
        })
          .then(resp => {
            this.devices = resp.data.device_list;
          });
    },
    addSensorButtonHandler() {
      this.newDeviceIMEI = ""
      this.newDeviceIMEIInvalid = ""
      this.newDeviceName = ""
      this.newDeviceNameInvalid = ""
      var element = document.getElementById("addSensorModal");
      element.classList.remove("hidden");
    },
    confirmSensorAddingButtonHandler() {
      if (this.newDeviceIMEI === "") {
        this.newDeviceIMEIInvalid = "Please input a valid Device IMEI"
      }
      else {
        this.newDeviceIMEIInvalid = ""
      }
      if (this.newDeviceName === "") {
        this.newDeviceNameInvalid = "Please input a valid Device Name"
      }
      else {
        this.newDeviceNameInvalid = ""
      }
      if (this.newDeviceIMEIInvalid || this.newDeviceNameInvalid) {
        return
      }
      axios.post(this.firebaseBase + this.apiBase + '/device/new', {
          "imei": this.newDeviceIMEI,
          "name": this.newDeviceName,
          "user_id": this.userId,
        })
          .then(resp => {
            this.refreshDevices()
            var element = document.getElementById("addSensorModal");
            element.classList.add("hidden");
          })
          .catch(resp => {
            console.log(resp)
            if (resp.response.data.msg === "Cannot create a new device: device imei already existed") {
              this.newDeviceIMEIInvalid = "Device IMEI already existed"
            }
          });
    },
    cancelSensorAddingButtonHandler() {
      this.newDeviceIMEI = ""
      this.newDeviceIMEIInvalid = false
      this.newDeviceName = ""
      this.newDeviceNameInvalid = false
      var element = document.getElementById("addSensorModal");
      element.classList.add("hidden");
    }
  }
};
</script>

