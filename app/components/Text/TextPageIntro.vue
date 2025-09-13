<template>
    <div
        class="p-[50px] sm:p-[110px] bg-light shadow-lg rounded-b-[10px] mb-[20px] flex flex-col justify-center items-center">
        <div class="text-[70%] mb-[20px] flex gap-[10px]">
            <NusxLink to="/">Home</NusxLink> <span>|</span> <span>{{ page }}</span>
        </div>
        <h2 class="font-bold text-[45px] sm:text-5xl mb-[10px]">{{ header }}</h2>
        <div>
            <h6 class="w-full text-center sm:text-left sm:max-w-[1000px]">{{ description }}</h6>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['page', 'header', 'description'])
</script>