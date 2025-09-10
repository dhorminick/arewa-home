<template>
    <div :class="props.class"
        class="uppercase font-bold h-[20px] text-[90%] border-l-4 border-l-secondary pl-[10px] flex items-center"
        v-if="text">{{
            text }}
    </div>
</template>

<script setup>
const props = defineProps(['text', 'class'])
</script>
