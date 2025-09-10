<template>
    <section class="pad my-[100px]">
        <h2 class="text-5xl text-center font-bold">{{ data.header }}</h2>

        <div class="flex flex-col gap-[10px] mt-[50px]">
            <p class="text-justify" v-for="(i, idx_i) in data.description" :key="idx_i">{{ i }}</p>
        </div>
    </section>

    <section class="pad py-[100px] bg-gray-50">
        <h2 class="text-5xl text-center font-bold">Features</h2>

        <div class="mt-[50px] grid grid-cols-2 sm:grid-cols-3 gap-[20px] p-[20px]">
            <CardForFeatures v-for="(item, idx) in data.features" :key="idx" :data="item" />
            <CardForFeatures :data="{
                header: '...',
                description: 'And much more...'
            }" />
        </div>
    </section>

    <TextCTA header="Book a Demo" description="Are you ready to change the future of pregnancy documentation?"
        label="Book Demo" :action="(() => navigateTo(booking_url))" />
</template>

<script setup>
const props = defineProps(['data'])
</script>