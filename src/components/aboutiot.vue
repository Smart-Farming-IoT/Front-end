<template>
    <section class="bg-blue-100 bg-opacity-30 text-gray-600 body-font ">
        <div class=" container px-10 py-8 mx-auto flex flex-col">
            <div class="lg:w-6/6 mx-auto">
                <div class="bg-white shadow-lg  rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full"
                        src="@/assets/Iot/agricultu.png">
                </div>
                <div class="bg-white shadow-lg  flex flex-col sm:flex-row mt-10">
                    <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div
                            class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div class="flex flex-col items-center text-center justify-center">
                            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">IoT Smart-Farming</h2>
                            <div class="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                            <p class="text-base"> " Project : Smart Farming System with IoT for Plantation "</p>
                        </div>
                    </div>
                    <div
                        class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p class="leading-relaxed text-lg mb-4">ระบบ IoT Smart-Farming
                            ของเราช่วยในเรื่องของการจัดการคุณภาพดินและน้ำในสวน ช่วยให้ชาวสวน
                            <br> สามารถดูแลสวนได้อย่างมีประสิทธิภาพได้ดียิ่งขึ้นและสะดวกมากขึ้น ดังนั้น
                            เราจึงได้มีความคิดที่จะนำ IoT <br>มาประยุกต์ใช้กับการดูแลสวน
                            เพื่อให้สามารถดูแลสวนได้อย่างทั่วถึง และควบคุมคุณภาพของผลผลิต
                            ให้เป็น<br>ไปตามที่ต้องการ และชาวสวนคุณลุง คุณป้า บางท่านคงไม่ถนัดใช้งานผ่านเว็บไซต์มากนัก
                            ทางเราจึงได้พัฒนา Line ChatBot เพื่อให้สะดวกกับการใช้งานของคนสูงวัยด้วย
                        </p>
                    </div>
                </div>
                <!--  -->
                <section class="bg-white shadow-lg  text-gray-600 body-font pb-6">
                    <div class="container pt-6  py-8 mx-auto">

                        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div
                                    class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-green-500 mb-5 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Website</h2>
                                    <p class="leading-relaxed text-base">ผู้ใช้สามารถควบคุมการทำงานของอุปกรณ์ Iot
                                        ได้ผ่าน<br>ทาง Website เช่น ดูค่า ph ค่า Soil Moisture หรือ <br>การเปิด/ปิด
                                        ของน้ำในสวน</p>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div
                                    class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-green-500 mb-5 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">To Do List</h2>
                                    <p class="leading-relaxed text-base">ใน Website นอกจากจะมี Dashboard
                                        ให้ผู้ใช้ดูแล้วยังมี <br> To Do List ให้ผู้ใช้บันทึกงานหรือเตือนความจำได้อีกด้วย
                                    </p>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div
                                    class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-green-500 mb-5 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Line ChatBot</h2>
                                    <p class="leading-relaxed text-base">มีระบบ Line ChatBot
                                        ช่วยให้พี่น้องชาวสวนสามารถ<br>ควบคุมการทำงานผ่านทาง Line
                                        ได้เพื่อเพิ่มความสะดวก<br>สะบายให้พี่น้องชาวสวน</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>