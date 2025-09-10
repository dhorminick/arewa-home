<template>
    <div class="bg-white shadow-md rounded-xl p-5 w-full relative">
        <!-- Icon -->
        <i :class="`pi pi-${data.icon}`" class="text-xl text-primary right-4 top-4 absolute"></i>

        <!-- Header -->
        <h3 class="text-lg font-semibold mb-2">{{ data.header }}</h3>

        <!-- Description -->
        <p class="text-gray-600 text-sm leading-relaxed">
            {{ data.description }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps(['data'])
</script>