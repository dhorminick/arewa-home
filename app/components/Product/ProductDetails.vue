<template>

    <Dialog v-model:visible="visible" modal :draggable="false" position="top">
        <NuxtImg :src="current_img" preload />
    </Dialog>

    <section class="pad mb-[50px] mt-[30px] flex w-full gap-[20px]">
        <NuxtLink class="bb" to="/">Home</NuxtLink>
        <span>-</span>
        <NuxtLink class="bb" to="/products/">Our Products</NuxtLink>
        <span>-</span>
        <NuxtLink>{{ data.header }}</NuxtLink>
    </section>

    <section class="pad my-[100px]">
        <TextLabel :text="data.tag" />
        <h2 class="text-5xl font-bold mt-[10px]">{{ data.header }}</h2>

        <div class="flex flex-col gap-[10px] mt-[50px]">
            <p class="text-justify" v-for="(i, idx_i) in data.description" :key="idx_i">{{ i }}</p>
        </div>
    </section>

    <section class="pad">
        <!-- <h2 class="text-4xl font-bold">Snapshots</h2> -->
        <div class="w-full relative">
            <!-- Slider -->
            <div ref="slider" class="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
                <div v-for="(img, idx) in data.images" :key="idx"
                    class="flex-shrink-0 w-[80%] sm:w-[45%] lg:w-[30%] snap-center rounded-xl overflow-hidden shadow-lg py-[20px]">
                    <!-- <img :src="img" alt="App snapshot" class="w-full h-auto object-cover cursor-pointer"
                        @click="setPreview(img)" /> -->
                    <NuxtImg :src="img" alt="App snapshot" @click="setPreview(img)"
                        class="w-full h-auto object-cover cursor-pointer" preload />
                </div>
            </div>

            <!-- Prev Button -->
            <button @click="scrollPrev"
                class="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200">
                <i class="pi pi-chevron-left"></i>
            </button>

            <!-- Next Button -->
            <button @click="scrollNext"
                class="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200">
                <i class="pi pi-chevron-right"></i>
            </button>
        </div>
    </section>

    <section class="pad py-[100px] bg-gray-50">
        <h2 class="text-5xl text-center font-bold">Features</h2>

        <div class="mt-[50px] grid grid-cols-2 sm:grid-cols-3 gap-[20px] p-[20px]">
            <CardForFeatures v-for="(item, idx) in data.features" :key="idx" :data="item" />
            <CardForFeatures :data="{
                header: '...',
                description: 'And much more...'
            }" />
        </div>
    </section>

    <TextCTA :header="data.cta.header || 'Book a Demo'"
        :description="data.cta.description || 'Are you ready to change the future of pregnancy documentation?'"
        label="Book Demo" :action="(() => navigateTo(booking_url))" />
</template>

<script setup>
const props = defineProps(['data'])
const visible = ref(false)
const current_img = ref('')

const slider = ref(null)
const scrollNext = () => {
    if (slider.value) {
        slider.value.scrollBy({ left: slider.value.clientWidth, behavior: 'smooth' })
    }
}

const scrollPrev = () => {
    if (slider.value) {
        slider.value.scrollBy({ left: -slider.value.clientWidth, behavior: 'smooth' })
    }
}

const setPreview = (i) => {
    if (i !== null) {
        current_img.value = i
        visible.value = true;
    }
}
</script>
<style scoped>
/* Hide scrollbar */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>