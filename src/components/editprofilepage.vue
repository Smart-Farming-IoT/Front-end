<template>
    <div class="min-w-screen min-h-screen flex items-center justify-center   px-8  ">
        <div class="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
            <div class="p-4 border-b">
                <h2 class="text-2xl ">
                    Profile Information
                </h2>
                <p class="text-sm text-gray-500">
                    Update your account's profile information and email address.
                </p>
            </div>
            <div>
                <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-600">
                        First name
                    </p>
                    <p>
                        Pawat
                    </p>
                </div>
                <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-600">
                        Last name
                    </p>
                    <p>
                        Munkong
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
                    <p class="text-sm text-gray-500">
                        Ensure your account is using a long, random password to stay secure.
                    </p>
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
export default {
    // name: "slideteam",
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