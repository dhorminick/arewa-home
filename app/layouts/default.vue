<template>
    <div class="flex flex-col min-h-[100dvh]">
        <NavHeader />
        <div class="flex-1 h-full mt-[90px]">
            <slot />
        </div>
        <NavFooter />
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Arewa Health',
    ogTitle: 'Transforming healthcare management with innovative solutions.',
    description: 'Transforming healthcare management with innovative solutions.',
    ogDescription: 'Transforming healthcare management with innovative solutions.',
    // ogImage: '/images/logo.png',
    // twitterCard: 'summary_large_image',
});
</script>