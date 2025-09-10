<template>
    <TextPageIntro header="About us"
        description="Meet the experts behind our mission to revolutionize the documentation of prenatal care"
        page="About Us" />

    <section class="pad py-[100px]">
        <div class="grid gap-[50px] grid-cols-1 sm:grid-cols-2">
            <div>
                <TextLabel text="learn about us" />
                <h1 class="text-4xl font-bold mb-[30px] mt-[10px]">Our History</h1>
                <div class="flex flex-col gap-[10px]">
                    <p class="text-justify" v-for="(item, idx) in history" :key="idx">{{ item }}</p>
                </div>
            </div>
            <div>
                <!-- <img src="/images/blank.png" class="w-full h-[500px] rounded-[10px]" /> -->
                <div class="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                    <NuxtImg src="/images/blank.png"
                        class="w-44 h-[150px] rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0" preload />
                    <NuxtImg src="/images/blank.png"
                        class="w-44 h-[150px] rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto" preload />
                    <NuxtImg src="/images/blank.png"
                        class="w-44 h-[150px] rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
                        preload />
                    <NuxtImg src="/images/blank.png"
                        class="w-44 h-[150px] rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
                        preload />
                    <NuxtImg src="/images/blank.png"
                        class="w-44 h-[150px] rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
                        preload />
                    <NuxtImg src="/images/blank.png"
                        class="w-44 h-[150px] rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0" preload />
                    <!-- <img src="/images/blank.png"
                        class="w-44 h-[150px] rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0" />
                    <img src="/images/blank.png"
                        class="w-44 h-[150px] rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto" />
                    <img src="/images/blank.png"
                        class="w-44 h-[150px] rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0" />
                    <img src="/images/blank.png"
                        class="w-44 h-[150px] rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto" />
                    <img src="/images/blank.png"
                        class="w-44 h-[150px] rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto" />
                    <img src="/images/blank.png"
                        class="w-44 h-[150px] rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0" /> -->

                </div>
            </div>
        </div>
    </section>

    <section class="pad py-[100px] bg-gray-50">
        <h2 class="text-5xl text-center font-bold">Meet The Team Behind AREWA Health</h2>
        <div class="text-center mt-[10px]">Meet the experts behind our mission to revolutionize the documentation of
            prenatal care
        </div>

        <div class="mt-[70px] grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
            <CardForTeam v-for="(item, idx) in team" :key="idx" :data="item" />
        </div>
    </section>

    <section class="pad py-[100px]">
        <div>
            <TextLabel text="our development process" />
            <h1 class="text-5xl font-bold mt-[10px] mb-[10px]">Building Arewa Health</h1>
            <div class="w-full sm:max-w-[1000px] mb-[50px]">
                Built on over 30 years of experience from Dr. Gläsmann, and a total contribution of over 120 experts in
                gynecology and obstetrics, <br>Arewa Health combines experience and structures to design pregnancy care
                digitally, inclusively, and effectively!
            </div>
        </div>
        <div class="row_container border">
            <div class="column" v-for="(item, idx) in gallery" :key="idx">
                <!-- <img v-for="(i, idx) in item.img" :key="idx" alt="Gallery Image" :src="i" class="w-[100%]"
                    loading="lazy" /> -->
                <NuxtImg v-for="(i, idx) in item.img" :key="idx" alt="Gallery Image" :src="i" class="w-[100%]"
                    preload />
            </div>
        </div>
    </section>

    <TextCTA header="Book a Demo" description="Are you ready to change the future of pregnancy documentation?"
        label="Book Demo" :action="(() => navigateTo(booking_url))" />
</template>

<script setup>
const history = ref([
    'Arewa health is a global, digital, and standardized documentation system for a healthy and safe pregnancy, aiming at helping doctors document medical findings and send them to their pregnant patients.',
    'Founded in 2025, Gartenstraße - Berlin, Germany, we aim at transforming pregnancy care through innovative technology by creating a world where medical professionals can provide standardized, efficient, and accessible documentation globally, enhancing communication between healthcare providers and patients, improving maternal care worldwide.'
])

const gallery = [
    {
        img: [
            '/images/gallery/01.jpg',
            '/images/gallery/02.png',
            '/images/gallery/03.jpg',
            '/images/gallery/04.png',
        ]
    },
    {
        img: [

            '/images/gallery/05.png',
            '/images/gallery/06.png',
            '/images/gallery/07.png',
            '/images/gallery/08.png',
        ]
    },
    {
        img: [
            '/images/gallery/09.png',
            '/images/gallery/10.png',
            '/images/gallery/11.png',
            '/images/gallery/12.jpg',
        ]
    },
    {
        img: [

            '/images/gallery/13.png',
            '/images/gallery/14.png',
            '/images/gallery/09.png',
            '/images/gallery/10.png',
        ]
    }
]

const team = ref([
    { name: 'Ifedayo Princeton Oladipo', role: 'CEO & Co-Founder', img: '/images/ifedayo.webp', description: 'As CEO and co-founder of AREWA Health, I bring many years of experience in health technology. My vision is to improve and make prenatal care more accessible worldwide.' },
    { name: 'Dr. Oyedupe O. Glasmann', role: 'Gynecologist & Co-Founder', img: '/images/oyedupe.webp', description: 'As a practicing gynecologist and co-founder, I understand the daily challenges in pregnancy care. AREWA Health develops solutions directly from practice.' },
    { name: 'Annika Gutsche', role: 'Data Analyst', img: '/images/annika.webp', description: 'I ensure that our platform enables data-driven decisions. Through intelligent analytical methods, we help doctors make better treatment decisions.' },
    { name: 'Matti Quade', role: 'App Developer', img: '/images/matti.webp', description: 'As an app developer, I focus on translating complex medical workflows into intuitive mobile applications. Usability is my top priority.' },
    { name: 'Erik Seferi', role: 'Backend Developer', img: '/images/erik.webp', description: 'I build the robust technical infrastructure that drives AREWA Health. Security, scalability, and reliability are the cornerstones of our platform.' },
    { name: 'Silvestri Ndoj', role: 'Frontend Developer', img: '/images/ndoj.webp', description: 'I design the user interfaces that doctors and patients use daily. My goal is to present complex medical information clearly and accessibly.' },
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

.column {
    -ms-flex: 25%;
    /* IE10 */
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
    /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap;
    /* IE10 */
    flex-wrap: wrap;
    padding: 0 4px;
}
</style>