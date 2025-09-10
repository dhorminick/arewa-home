<template>
    <div class="w-full">
        <div class="flex gap-[10px] justify-between items-center px-[30px] sm:px-[50px]">
            <div class="flex-1 flex gap-[20px]">
                <a class="hover:underline text-[80%]" v-for="(item, idx) in heading" :key="idx" :href="item.url"
                    target="_blank">{{ item.title }}</a>
            </div>
            <select class="p-[5px] text-[80%] rounded-[5px] border outline-none">
                <option>English</option>
                <option>German</option>
                <option>Spanish</option>
            </select>
        </div>
        <div :class="[
            'z-50 transition-all duration-300 ease-in-out',
            isScrolled ? 'top-0 bg-white shadow-md text-primary' : 'top-[30px] bg-primary text-white'
        ]" class="fixed  w-full flex justify-between py-[20px] px-[100px] items-center">
            <NavLogo />
            <div class="flex-1 flex w-full justify-end items-center">
                <div class="flex gap-[20px]">
                    <NuxtLink v-for="(item, idx) in links" :key="idx" :to="item.to"
                        class="hover:text-secondary hover:underline">
                        {{ item.title }}
                    </NuxtLink>
                </div>

                <div class="sm:ml-[50px]">
                    <a :href="booking_url" target="_blank">
                        <ButtonCustom :label="t('app.book-demo')" input-class="w-max" size="lg" rounded="true" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const links = ref([
    { title: t('header.home'), to: '/' },
    { title: t('header.about-us'), to: '/about-us/' },
    { title: t('header.products'), to: '/products/' },
    { title: t('header.faqs'), to: '/' },
    { title: t('header.contact-us'), to: '/contact-us/' },
])
const heading = [
    { title: 'email@email.com', url: 'mailto:email@email.com' },
    { title: '+1-000-000-0000', url: 'tel:+1-000-000-0000' }
]
const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>