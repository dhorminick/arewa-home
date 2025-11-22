<template>
    <ProductDetails :data="products_data[1]" />
</template>

<script setup>
const products_data = computed(() => ProductsData_Translated)
</script>