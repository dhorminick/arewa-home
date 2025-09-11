<template>
    <div class="w-full p-[70px] flex flex-col gap-[10px] justify-center items-center bg-secondary">
        <h1 class="font-bold text-5xl text-center">{{ header }}</h1>
        <div class="text-center max-w-[700px]">{{ description }}</div>
        <div class="mt-[30px] flex items-center justify-center">
            <ButtonCustom :label="label" @clicked="action" rounded="true" input-class="w-max !py-[15px] !px-[25px]" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['header', 'description', 'label', 'action'])
</script>