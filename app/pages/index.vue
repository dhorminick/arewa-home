<template>
    <section class="pad flex items-center w-full bg-primary h-[83dvh]">
        <div class="sm:w-[60%] h-full sm:pt-[100px] pt-[30px] w-full flex flex-col gap-[10px] text-white">
            <TextLabel text="Arewa health" />
            <h1 class="font-[700] text-5xl sm:text-6xl mb-[10px] sm:mb-[30px] text-center sm:text-left">Transforming
                <span class="text-secondary uppercase">healthcare</span> management <span class="sm:inline hidden">with
                    innovative
                    solutions.</span>
            </h1>
            <div class="text-center sm:text-left">The global, digital, and standardized documentation system for a
                healthy and safe pregnancy.</div>

            <div
                class="flex gap-[10px] mt-[30px] sm:mt-[50px] sm:justify-start sm:items-start justify-center items-center">
                <NuxtLink :to="booking_url" target="_blank">
                    <ButtonCustom label="Book a Demo" size="lg" rounded="true" input-class="w-max border-white border"
                        primary="true" />
                </NuxtLink>
                <NuxtLink to="/contact-us/">
                    <ButtonCustom label="Contact Us" size="lg" rounded="true" input-class="w-max" />
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
                <h1 class="font-bold text-[150%]">Our Vision</h1>
                <div>
                    To revolutionize pregnancy care by creating a world where medical professionals can provide
                    standardized, efficient, and accessible documentation globally. We envision a future where every
                    expectant mother has access to consistent, high-quality care documentation, regardless of their
                    location.
                </div>
            </SplitterPanel>
            <SplitterPanel class="flex flex-col gap-[10px] items-center justify-center p-[50px]">
                <h1 class="font-bold text-[150%]">Our Mission</h1>
                <div>
                    To provide cutting-edge pregnancy documentation solutions that enhance communication between
                    healthcare providers and patients. We're committed to improving maternal care worldwide through
                    innovative technology, standardized processes, and seamless information sharing.
                </div>
            </SplitterPanel>
        </Splitter>
    </section>

    <section class="pad bg-gray-100 py-[100px]">
        <h2 class="text-5xl text-center font-bold">AREWA Health Products</h2>
        <div class="text-center mt-[10px] mb-[50px]">A comprehensive digital solution for pregnancy documentation and
            patient
            communication.
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
                            <h4 class="font-bold mb-[10px]">Features:</h4>
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
                                <ButtonCustom label="Learn More" primary="true" input-class="w-max" size="lg"
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
            <TextLabel text="Steps" />
            <h1 class="text-4xl font-bold mb-[30px] mt-[10px]">Join Arewa Health in a few mins</h1>
        </div>

        <div class="flex sm:flex-col flex-row">
            <Stepper :value="num">
                <StepList class="flex sm:flex-row flex-col">
                    <Step :value="1"><span class="sm:block hidden">Create your account</span></Step>
                    <Step :value="2"><span class="sm:block hidden">Trial Period</span></Step>
                    <Step :value="3"><span class="sm:block hidden">Onboarding</span></Step>
                    <Step class="sm:ml-0 ml-[-15px]" :value="4"><span class="sm:block hidden">Done</span></Step>
                </StepList>
            </Stepper>

            <div class="sm:mt-[30px] sm:mx-[10px] sm:flex-none flex-1">
                <div class="grid gap-[20px] grid-cols-1 sm:grid-cols-2">
                    <div class="col-span-2">
                        <h2 class="font-bold mb-[10px] text-[150%]">{{ current_step?.header }}</h2>
                        <div>{{ current_step?.description }}</div>
                    </div>
                    <div class="hidden">
                        <NuxtImg :src="current_step?.image" :alt="current_step?.header" class="w-full rounded-[10px]"
                            preload />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pad py-[100px] bg-gray-50 scroll-mt-[50px]" id="faqs">
        <div class="mx-[10px] mb-[50px]">
            <TextLabel text="faq's" />
            <h1 class="text-4xl font-bold mb-[30px] mt-[10px]">Frequently Asked Questions</h1>
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

    <TextCTA header="Smarter Care. Seamless Connection. Total Confidence"
        description="From early preparation to postpartum support, we help you stay informed, organized, and empowered every step of the way."
        label="Book Demo" :action="(() => navigateTo('/'))" />
</template>

<script setup lang="ts">
const { t } = useI18n();
type Step = {
    header: string;
    description: string;
    image: string;
}

const steps = ref<Step[]>([
    { header: 'Create your account', description: 'Create an account for your organization with our specialists and determine which version you need and which specific features(practice systems, medical devices) should be integrated.', image: '/images/step/01.avif' },
    { header: 'Trial Period', description: 'Receive a free trial to familiarize yourself with the system.', image: '/images/step/02.avif' },
    { header: 'Onboarding Process', description: 'Onboard your team (midwives, medical assistants, and physicians) and begin assigning roles.', image: '/images/step/03.avif' },
    { header: 'Finish Up', description: 'You\'re ready to go.', image: '/images/step/04.avif' }
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


const projects = ref([
    {
        tag: "Arewa App",
        header: "Arewa App",
        url: "/products/arewa-app",
        summary: 'AREWA Health is your complete digital companion for every stage of your pregnancy journey — from preparation to postpartum care.',
        features: [
            'Ultrasound images and medical findings directly in your app',
            'Information brochures (text and videos) about the topic of pregnancy',
            'Pre-fill the anamnesis form digitally',
            'Have findings translated',
        ],
        images: [
            "/images/arewa-app/Home screen.png",
            "/images/arewa-app/Pregnancy Tools.png",
        ],
    },
    {
        tag: "IPD",
        header: "International Pregnancy Document",
        image: "/images/ipd/Pregnancy Risks.png",
        url: "/products/ipd",
        summary: 'Designed for both expectant mothers and healthcare professionals, it centralizes structured medical records, lifestyle tracking, and personalized counseling into one secure platform.',
        features: [
            'International Pregnancy Document (IPD)',
            'Documenting medical findings',
            'Interfaces to EMR, patient records, and other practice systems',
            'Translation of findings for international patients',
        ],
        images: []
    }
])

const updateStep = (n: number): Step => {
    const index = (n - 1) % steps.value.length
    return steps.value[index] as Step
}

watch(num, (n) => {
    current_step.value = updateStep(n);
})

const faqs = ref([
    { q: 'What services does AREWA Health offer?', a: 'AREWA Health offers a comprehensive digital solution for pregnancy documentation, including digital patient records, mobile apps, community features, and premium services.' },
    { q: 'Where does the name AREWA Health come from?', a: 'The name comes from the Yoruba language and means "The entirety of the woman".' },
    { q: 'Who can use AREWA Health?', a: 'AREWA Health can be used by pregnant women, gynecologists, midwives, and other healthcare providers involved in prenatal care.' },
    { q: 'In which languages is the app available?', a: 'The app is currently available in German and English, with plans for additional languages in the future.' },
    { q: 'How secure are medical data?', a: 'We use end-to-end encryption and comply with all relevant data protection regulations (GDPR, HIPAA) to ensure the security of your medical data.' },
    { q: 'Are there costs for doctors and patients?', a: 'We offer various pricing plans, including free basic features and premium services for advanced features.' },
    { q: 'How can I request a demo?', a: 'You can request a demo through our contact form or contact us directly. We are happy to schedule an appointment for a personal demonstration.' },
    { q: 'How long will the implementation take in my practice?', a: 'The implementation usually takes 2-4 weeks, depending on the size of your practice and the features you want. We will support you throughout the entire process.' },
])
</script>