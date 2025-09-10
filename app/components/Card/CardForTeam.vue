<template>
    <div class="relative h-[400px] rounded-[10px] overflow-hidden shadow-lg flex items-end p-5 text-white bg-center bg-cover"
        :style="{ backgroundImage: `url(${data.img})` }">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- Content -->
        <div class="relative z-10">
            <h2 class="text-xl font-bold">{{ data.name }}</h2>
            <p class="text-sm mt-1">{{ data.role }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['data'])
</script>