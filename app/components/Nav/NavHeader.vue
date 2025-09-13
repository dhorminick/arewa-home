<template>
    <Drawer v-model:visible="showMenu" position="left">
        <div class="flex w-full flex-col py-[30px] items-center justify-center">
            <div class="flex flex-col gap-[20px] flex-1">
                <NuxtLink v-for="(item, idx) in links" :key="idx" :to="item.to"
                    class="hover:text-secondary hover:underline text-[150%]" @click="showMenu = false">
                    {{ item.title }}
                </NuxtLink>
            </div>
            <a :href="booking_url" target="_blank" class="mt-[50px] w-full ml-[120px]">
                <ButtonCustom :label="t('app.book-demo')" primary="true" input-class="w-max" size="lg" rounded="true" />
            </a>
        </div>
    </Drawer>

    <div class="w-full">
        <div class="flex gap-[10px] justify-between items-center px-[20px] sm:px-[50px]">
            <div class="flex-1 hidden sm:flex gap-[20px]">
                <a class="hover:underline text-[80%]" v-for="(item, idx) in heading" :key="idx" :href="item.url"
                    target="_blank">{{ item.title }}</a>
            </div>
            <div class="sm:hidden flex-1"></div>
            <select class="p-[5px] text-[80%] rounded-[5px] border outline-none">
                <option>English</option>
                <option>German</option>
                <option>Spanish</option>
            </select>
        </div>
        <div :class="[
            'z-50 transition-all duration-300 ease-in-out',
            isScrolled ? 'top-0 bg-white shadow-md text-primary' : 'top-[30px] bg-primary text-white'
        ]" class="fixed w-full flex justify-between py-[20px] px-[20px] sm:px-[100px] !items-center">
            <div class="flex-1 sm:flex-none">
                <NavLogo />
            </div>
            <div class="flex-1 w-full justify-end items-center sm:flex hidden">
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
            <div class="items-center justify-end sm:hidden flex gap-[10px]">
                <a :href="booking_url" target="_blank">
                    <ButtonCustom :label="t('app.book-demo')" input-class="w-max" size="lg" rounded="true" />
                </a>
                <i class="pi pi-bars cursor-pointer" @click="showMenu = true"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const showMenu = ref(false)
const links = computed(() => [
    { title: t('header.home'), to: localePath('/') },
    { title: t('header.about-us'), to: localePath('/about-us/') },
    { title: t('header.products'), to: localePath('/products/') },
    { title: t('header.faqs'), to: '/#faqs' },
    { title: t('header.contact-us'), to: localePath('/contact-us/') },
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