<template>
    <div class="bg-white w-full shadow-md border py-[60px] px-[20px] sm:px-[100px]">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
            <div>
                <div class="text-[150%] uppercase font-bold">Arewa Health</div>
                <div>Transforming healthcare management with innovative solutions.</div>

                <form class="flex gap-[5px] items-center mt-[30px] w-full">
                    <InputTextCustom v-model="email" placeholder="Email Address..." input-class="!mb-0"
                        label="Sign up for newsletter:" />
                    <ButtonCustom icon="send" input-class="w-max !p-[12px] !mt-[23px]" primary=" true" />
                </form>
            </div>
            <div class="col-span-2">
                <div class="w-full grid grid-cols-2 sm:grid-cols-3 sm:gap-0 gap-[20px]">
                    <div v-for="(item, idx) in links" :key="idx">
                        <div class="text-[110%] font-bold uppercase mb-[20px]">{{ item.title }}</div>
                        <div class="flex flex-col gap-[10px] sidebar_urls">
                            <NuxtLink v-for="(link, idx) in item.links" :key="idx" :to="link.url"
                                :target="link.target ? link.target : '_self'">
                                {{ link.title }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="mt-[100px] mb-[20px]">
        <div class="flex sm:flex-row flex-col items-center justify-between gap-[10px]">
            <div class="flex gap-[10px]">
                <NuxtLink v-for="(item, idx) in socials" :key="idx" :to="item.url">
                    <i :class="`text-[20px] p-[5px] rounded-sm pi pi-${item.icon}`"></i>
                </NuxtLink>
            </div>
            <div>&copy; AREWA HEALTH - 2025</div>
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n();
const links = computed(() => [
    {
        title: 'Company', links: [
            { title: t('footer.home'), url: '/' },
            { title: t('footer.about-us'), url: '/about-us/' },
            { title: t('footer.products'), url: '/products/' },
            { title: t('footer.faqs'), url: '/#faqs' },
            { title: t('footer.contact-us'), url: '/contact-us/' },
        ]
    },
    {
        title: 'Legal', links: [
            { url: '/', title: t('footer.privacy-policy') },
            { url: '/', title: t('footer.terms') },
            { url: '/', title: t('footer.hippa') },
        ]
    },
    {
        title: 'Authentication', links: [
            { url: booking_url, title: t('app.book-demo'), target: '_blank' },
        ]
    },

])
const socials = [
    { icon: 'youtube', url: '/', color: '#008000' },
    { icon: 'twitter', url: '/', color: '#008000' },
    { icon: 'facebook', url: '/', color: '#008000' },
    { icon: 'instagram', url: '/', color: '#008000' },
]

const email = ref('');
</script>
<style scoped>
.sidebar_urls a {
    margin-bottom: 1px;
    width: max-content;
}

.sidebar_urls a:hover {
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
}
</style>