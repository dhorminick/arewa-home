<template>
    <TextPageIntro :header="t('about.header')" :description="t('about.description')" :page="t('about.header')" />

    <section class="pad py-[100px]">
        <div class="grid gap-[50px] grid-cols-1 sm:grid-cols-2">
            <div class="col-span-2">
                <TextLabel :text="t('about.learn-about-us')" />
                <h1 class="text-4xl font-bold mb-[30px] mt-[10px]">{{ t('about.our-history') }}</h1>
                <div class="flex flex-col gap-[10px]">
                    <p class="text-justify" v-for="(item, idx) in history" :key="idx">{{ item }}</p>
                </div>
            </div>
        </div>
    </section>

    <section class="pad py-[100px] bg-gray-50">
        <h2 class="text-5xl text-center font-bold">{{ t('about.meet-the-team-header') }}</h2>
        <div class="text-center mt-[10px]">{{ t('about.meet-the-team-description') }}
        </div>

        <div class="mt-[70px] grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
            <CardForTeam v-for="(item, idx) in team" :key="idx" :data="item" />
        </div>
    </section>

    <section class="pad py-[100px]">
        <div>
            <TextLabel :text="t('about.development-process')" />
            <h1 class="text-5xl font-bold mt-[10px] mb-[10px]">{{ t('about.building-us') }}</h1>
            <div class="w-full sm:max-w-[1100px] mb-[50px]">
                {{ t('about.building-description-1') }} <br>{{ t('about.building-description-2') }}
            </div>
        </div>
        <!-- <div class="row_container border">
            <div class="column" v-for="(item, idx) in gallery" :key="idx">
                <NuxtImg v-for="(i, idx) in item.img" :key="idx" alt="Gallery Image" format="webp" loading="lazy"
                    :src="i" class="w-[100%]" preload />
            </div>
        </div> -->
        <div class="grid_container">
            <div v-for="(i, idx) in gallery_imgs" :key="idx" :class="i.style">
                <NuxtImg alt="Gallery Image" format="webp" loading="lazy" :src="i.img"
                    class="object-center object-cover w-[100%]" preload />
            </div>
        </div>
    </section>

    <TextCTA :header="t('about.cta-header')" :description="t('about.cta-description')" :label="t('app.book-demo')"
        :action="(() => navigateTo(booking_url))" />
</template>

<script setup>
const { t } = useI18n();
const history = ref([
    t('about.history-1'),
    t('about.history-2')
])

const gallery_imgs = [
    { style: 'big', img: '/images/gallery/01.JPG' },
    { style: 'big', img: '/images/gallery/02.png' },
    { style: 'big', img: '/images/gallery/03.JPG' },
    { style: 'vertical', img: '/images/gallery/04.png' },
    { style: 'big', img: '/images/gallery/05.png' },
    { style: '', img: '/images/gallery/06.png' },
    { style: '', img: '/images/gallery/07.png' },
    { style: 'vertical', img: '/images/gallery/08.png' },
    { style: 'vertical', img: '/images/gallery/09.png' },
    { style: 'vertical', img: '/images/gallery/10.png' },
    { style: 'vertical', img: '/images/gallery/11.png' },
    { style: 'vertical', img: '/images/gallery/12.jpg' },
    { style: 'vertical', img: '/images/gallery/13.png' },
    { style: 'vertical', img: '/images/gallery/14.png' },
    { style: 'vertical', img: '/images/gallery/09.png' },
    { style: 'vertical', img: '/images/gallery/10.png' },
]

const team = ref([
    { name: 'Ifedayo Princeton Oladipo', role: 'CEO & Co-Founder (Head of sales)', img: '/images/ifedayo.webp', description: 'As CEO and co-founder of AREWA Health, I bring many years of experience in health technology. My vision is to improve and make prenatal care more accessible worldwide.' },
    { name: 'Dr. Oyedupe O. Glasmann', role: 'Gynecologist & Co-Founder (Medical Head)', img: '/images/oyedupe.webp', description: 'As a practicing gynecologist and co-founder, I understand the daily challenges in pregnancy care. AREWA Health develops solutions directly from practice.' },
    { name: 'Annika Gutsche', role: 'Data Analyst', img: '/images/annika.webp', description: 'I ensure that our platform enables data-driven decisions. Through intelligent analytical methods, we help doctors make better treatment decisions.' },
    { name: 'Dr. Stephanie Salzmann', role: 'International Business Development', img: '/images/profile/stephanie.jpg', description: '' },
])

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* .column {
    -ms-flex: 25%;
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
}

.column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
}

@media screen and (max-width: 800px) {
    .column {
        -ms-flex: 50%;
        flex: 50%;
        max-width: 50%;
    }
}

@media screen and (max-width: 600px) {
    .column {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
    }
}

.row_container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 4px;
} */

.grid_container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    grid-gap: 5px;
    grid-auto-flow: dense;
}

.grid_container img {
    width: 100%;
    height: 100%;
}

.horizontal {
    grid-column: span 2;
}

.vertical {
    grid-row: span 2;
}

.big {
    grid-column: span 2;
    grid-row: span 2;
}
</style>