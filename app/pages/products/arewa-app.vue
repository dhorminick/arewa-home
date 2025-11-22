<template>
    <ProductDetails :data="products_data[0]" />
</template>

<script setup>
const products_data = computed(() => ProductsData_Translated)
</script>