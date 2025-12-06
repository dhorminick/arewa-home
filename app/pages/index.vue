<template>
    <section class="pad flex items-center w-full bg-primary h-[83dvh]">
        <div class="sm:w-[60%] h-full sm:pt-[100px] pt-[30px] w-full flex flex-col gap-[10px] text-white">
            <TextLabel text="Arewa health" />
            <h1 class="font-[700] text-5xl sm:text-6xl mb-[10px] sm:mb-[30px] text-center sm:text-left">
                {{ t('home.landing-1') }}
                <span class="text-secondary uppercase">{{ t('home.landing-2') }}</span> {{ t('home.landing-3') }} <span
                    class="sm:inline hidden">{{ t('home.landing-4') }}</span>
            </h1>
            <div class="text-center sm:text-left">{{ t('home.summary') }}</div>

            <div
                class="flex gap-[10px] mt-[30px] sm:mt-[50px] sm:justify-start sm:items-start justify-center items-center">
                <NuxtLink :to="booking_url" target="_blank">
                    <ButtonCustom :label="t('app.book-demo')" size="lg" rounded="true"
                        input-class="w-max border-white border" primary="true" />
                </NuxtLink>
                <NuxtLink to="/contact-us/">
                    <ButtonCustom :label="t('header.contact-us')" size="lg" rounded="true" input-class="w-max" />
                </NuxtLink>
            </div>
        </div>
        <div class="hidden justify-center items-center flex-1 relative sm:flex min-h-[400px]">
            <NuxtImg src="/images/hero.avif" format="webp" loading="lazy"
                class="h-full ..rounded-full w-full object-center" preload />
            <!-- <NuxtImg src="/images/hero.avif" placeholder="blur" class="h-full ..rounded-full w-full object-center"
                preload :custom="true" v-slot="{ src, isLoaded, imgAttrs }">
                <img v-if="isLoaded" v-bind="imgAttrs" :src="src">

                <img v-else src="/images/blur-hero.webp" alt="Image">
            </NuxtImg> -->
            <div
                class="rounded-[10px] p-[15px] bg-white flex flex-col justify-center items-center absolute bottom-[70px] left-0">
                Dr. Oyedupe O. Gläsmann
                <div class="text-secondary">Gynecologist & Co-Founder</div>
            </div>
        </div>
    </section>

    <section class="pad py-[50px]">
        <Splitter class="sm:flex-row flex-col flex">
            <SplitterPanel class="flex flex-col gap-[10px] items-center justify-center p-[50px]">
                <!-- <div class="flex items-center gap-[10px]">
                    <i class="pi pi-lightbulb"></i> 
                </div> -->
                <h1 class="font-bold text-[150%]">{{ t('home.vision') }}</h1>
                <div>
                    {{ t('home.vision-statement') }}
                </div>
            </SplitterPanel>
            <SplitterPanel class="flex flex-col gap-[10px] items-center justify-center p-[50px]">
                <h1 class="font-bold text-[150%]">{{ t('home.mission') }}</h1>
                <div>
                    {{ t('home.mission-statement') }}
                </div>
            </SplitterPanel>
        </Splitter>
    </section>

    <section class="pad bg-gray-100 py-[100px]">
        <h2 class="text-5xl text-center font-bold">{{ t('home.product-header') }}</h2>
        <div class="text-center mt-[10px] mb-[50px]">{{ t('home.product-description') }}
        </div>

        <div v-for="(item, idx) in projects" :key="idx" class="py-[70px]">
            <div class="grid gap-[50px] grid-cols-1 sm:grid-cols-2"
                :class="idx % 2 !== 0 ? 'sm:[&>*:first-child]:order-2 sm:[&>*:last-child]:order-1' : ''">
                <div class="flex justify-center items-center">
                    <div>
                        <TextLabel :text="item.tag" class="!border-l-primary" />
                        <h1 class="text-4xl font-bold mb-[30px] mt-[10px]">{{ item.header }}</h1>
                        <div class="flex flex-col gap-[10px]">
                            <p class="text-justify">{{ item.summary }}</p>
                        </div>
                        <div class="mt-[20px]">
                            <h4 class="font-bold mb-[10px]">{{ t('home.features') }}:</h4>
                            <div class="flex flex-col gap-[10px]">
                                <div v-for="(i, idx_i) in item.features" :key="idx_i"
                                    class="flex gap-[10px] items-center">
                                    <i class="pi pi-check"></i>
                                    <span>{{ i }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="mt-[50px]">
                            <NuxtLink :to="item.url">
                                <ButtonCustom :label="t('home.learn-more')" primary="true" input-class="w-max" size="lg"
                                    icon="angle-right" />
                            </NuxtLink>
                        </div>

                    </div>
                </div>
                <div>
                    <div v-if="idx === 0" class="gap-[10px] w-full grid sm:grid-cols-2">
                        <NuxtImg format="webp" loading="lazy" :src="item.images[0]" :alt="item.header"
                            class="w-full rounded-[10px] shadow-md" preload />
                        <NuxtImg format="webp" loading="lazy" :src="item.images[1]" :alt="item.header"
                            class="w-full sm:block hidden shadow-md rounded-[10px]" preload />
                    </div>
                    <NuxtImg format="webp" loading="lazy" v-else :src="item.image" :alt="item.header"
                        class="max-h-[600px] object-cover rounded-[10px] shadow-md" preload />
                </div>
            </div>
        </div>
    </section>

    <section class="pad py-[100px]">
        <div class="mx-[10px] mb-[50px]">
            <TextLabel :text="t('home.steps')" />
            <h1 class="text-4xl font-bold mb-[30px] mt-[10px]">Join Arewa Health in a few mins</h1>
        </div>

        <div class="flex sm:flex-col flex-row">
            <Stepper :value="num">
                <StepList class="flex sm:flex-row flex-col">
                    <Step :value="1"><span class="sm:block hidden">{{ t('home.step-1') }}</span></Step>
                    <Step :value="2"><span class="sm:block hidden">{{ t('home.step-2') }}</span></Step>
                    <Step :value="3"><span class="sm:block hidden">{{ t('home.step-3') }}</span></Step>
                    <Step class="sm:ml-0 ml-[-15px]" :value="4"><span class="sm:block hidden">{{ t('home.step-4')
                            }}</span></Step>
                </StepList>
            </Stepper>

            <div class="sm:mt-[30px] sm:mx-[10px] sm:flex-none flex-1">
                <div class="grid gap-[20px] grid-cols-1 sm:grid-cols-2">
                    <div class="col-span-2">
                        <h2 class="font-bold mb-[10px] text-[150%]">{{ current_step?.header }}</h2>
                        <div>{{ current_step?.description }}</div>
                    </div>
                    <!-- <div class="hidden">
                        <NuxtImg :src="current_step?.image" :alt="current_step?.header" class="w-full rounded-[10px]"
                            preload />
                    </div>-->
                </div>
            </div>
        </div>
    </section>

    <section class="pad py-[100px] bg-gray-50 scroll-mt-[50px]" id="faqs">
        <div class="mx-[10px] mb-[50px]">
            <TextLabel text="faq's" />
            <h1 class="text-4xl font-bold mb-[30px] mt-[10px]">{{ t('home.faqs-header') }}</h1>
        </div>
        <Accordion :value="['0']" multiple>
            <AccordionPanel :value="idx" v-for="(item, idx) in faqs" :key="idx">
                <AccordionHeader>
                    <h6 class="!font-bold text-primary">{{ item.q }}</h6>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0 font-[400] text-gray-500">
                        {{ item.a }}
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </section>

    <TextCTA :header="t('home.home-cta-header')" :description="t('home.home-cta-description')"
        :label="t('app.book-demo')" :action="(() => navigateTo('/'))" />
</template>

<script setup lang="ts">
const { t } = useI18n();
type Step = {
    header: string;
    description: string;
}

const steps = computed<Step[]>(() => [
    { header: t('home.step-1-header'), description: t('home.step-1-description') },
    { header: t('home.step-2-header'), description: t('home.step-2-description') },
    { header: t('home.step-3-header'), description: t('home.step-3-description') },
    { header: t('home.step-4-header'), description: t('home.step-4-description') }
])

const num = ref(1)
const current_step = ref<Step | null>(steps.value[0] as Step)
let timer: NodeJS.Timeout | null = null

const startCounter = (seconds: number) => {
    timer = setInterval(() => {
        num.value = num.value < 4 ? num.value + 1 : 1
    }, seconds * 1000)
}

onMounted(() => {
    startCounter(3)
})

onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
})


const projects = computed(() => [
    {
        tag: "Arewa App",
        header: t('home.arewa-app'),
        url: "/products/arewa-app",
        summary: t('home.app-description'),
        features: [
            t('home.arewa-app-feature-1'),
            t('home.arewa-app-feature-2'),
            t('home.arewa-app-feature-3'),
            t('home.arewa-app-feature-4'),
        ],
        images: [
            "/images/arewa-app/Home screen.png",
            "/images/arewa-app/Pregnancy Tools.png",
        ],
    },
    {
        tag: "IPD",
        header: t('home.ipd'),
        image: "/images/ipd/Pregnancy Risks.png",
        url: "/products/ipd",
        summary: t('home.ipd-description'),
        features: [
            t('home.ipd-feature-1'),
            t('home.ipd-feature-2'),
            t('home.ipd-feature-3'),
            t('home.ipd-feature-4'),
        ],
        images: []
    }
]);


const updateStep = (n: number): Step => {
    const index = (n - 1) % steps.value.length
    return steps.value[index] as Step
}

watch(num, (n) => {
    current_step.value = updateStep(n);
})

const faqs = computed(() => [
    { q: t('home.faqs-header-1'), a: t('home.faqs-description-1') },
    { q: t('home.faqs-header-2'), a: t('home.faqs-description-2') },
    { q: t('home.faqs-header-3'), a: t('home.faqs-description-3') },
    { q: t('home.faqs-header-4'), a: t('home.faqs-description-4') },
    { q: t('home.faqs-header-5'), a: t('home.faqs-description-5') },
    { q: t('home.faqs-header-6'), a: t('home.faqs-description-6') },
    { q: t('home.faqs-header-7'), a: t('home.faqs-description-7') },
    { q: t('home.faqs-header-7'), a: t('home.faqs-description-8') },
])
</script>