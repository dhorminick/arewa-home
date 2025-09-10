<template>
    <TextPageIntro header="Our Products"
        description="A comprehensive digital solution for pregnancy documentation and patient communication"
        page="Our Products" />

    <section class="pad py-[100px]" v-for="(item, idx) in ProductsData" :key="idx">
        <div class="grid gap-[50px] grid-cols-1 sm:grid-cols-2"
            :class="idx % 2 !== 0 ? 'sm:[&>*:first-child]:order-2 sm:[&>*:last-child]:order-1' : ''">
            <div>
                <TextLabel :text="item.tag" />
                <h1 class="text-4xl font-bold mb-[30px] mt-[10px]">{{ item.header }}</h1>
                <div class="flex flex-col gap-[10px]">
                    <p class="text-justify" v-for="(i, idx_i) in item.summary" :key="idx_i">{{ i }}</p>
                </div>
                <div class="mt-[50px]">
                    <ButtonCustom label="Read More" primary="true" input-class="w-max" size="lg" icon="angle-right"
                        @clicked="navigateTo(item.url)" />
                </div>
            </div>
            <div>
                <img :src="item.image" :alt="item.header" class="w-full h-[500px] rounded-[10px]" />
            </div>
        </div>
    </section>

</template>

<script setup>
// const products = ref([
//     {
//         tag: 'Arewa App', header: 'Arewa App', image: '/images/arewa-app.png', url: '/products/arewa-app', summary: [
//             'AREWA Health is your complete digital companion for every stage of your pregnancy journey — from preparation to postpartum care. Designed with both mothers and healthcare providers in mind, our app combines powerful tracking tools, secure medical communication, and educational resources into one easy-to-use platform.'
//         ], description: [
//             'AREWA Health is your complete digital companion for every stage of your pregnancy journey — from preparation to postpartum care. Designed with both mothers and healthcare providers in mind, our app combines powerful tracking tools, secure medical communication, and educational resources into one easy-to-use platform.',
//             'Whether you want to log your daily feelings, monitor your baby’s movements, calculate your due date, or track vital health parameters, AREWA Health helps you stay informed and connected. Receive medical results directly on your phone, securely share your health history with your doctor, and keep an organized record of your pregnancy progress.',
//             'With interactive features like a weight tracker, step counter, ultrasound image viewer, and a nutrient guide, you’ll have everything you need to take control of your health and well-being. Our goal is to make prenatal care more accessible, personalized, and engaging — so you can focus on what matters most: a healthy, happy pregnancy.'
//         ],
//         features: [
//             { icon: 'mars', header: 'Pregnancy Tools', description: 'Stay on top of your journey with tools like pregnancy notes, a due date calculator, baby movement counter, and a weight tracker. These features help you record important milestones and monitor your well-being throughout your pregnancy.' },
//             { icon: 'objects-column', header: 'Medical Findings', description: 'Access your medical results, track vital signs, and store ultrasound images securely in one place. Easily follow your pregnancy progress and review your health history at any time.' },
//             { icon: 'calendar', header: 'Anamnesis Form', description: 'Complete your medical history digitally from the comfort of your home. Share it instantly and securely with your healthcare provider to save time during consultations.' },
//             { icon: 'shield', header: 'AREWA Guide', description: 'Learn about essential nutrients and how to prepare for a healthy pregnancy. Get answers to common questions with our informative FAQ section.' },
//             { icon: 'lightbulb', header: 'Period Tracker', description: 'Monitor your menstrual cycle to better understand your reproductive health. Use it for family planning or to keep track of cycle-related health changes.' },
//         ]
//     },
//     {
//         tag: 'IPD', header: 'International Pregnancy Document', image: '/images/ipd.jpeg', url: '/products/ipd', summary: [
//             'The International Pregnancy Document (IPD) is a complete digital framework that transforms how pregnancy information is documented, managed, and shared. Designed for both expectant mothers and healthcare professionals, it centralizes structured medical records, lifestyle tracking, and personalized counseling into one secure platform. With tools for real-time data capture, smart appointment scheduling, and visual progress analysis, the IPD ensures that every stage of pregnancy is clearly organized and easy to follow.'
//         ], description: [
//             'The International Pregnancy Document (IPD) is a complete digital framework that transforms how pregnancy information is documented, managed, and shared. Designed for both expectant mothers and healthcare professionals, it centralizes structured medical records, lifestyle tracking, and personalized counseling into one secure platform. With tools for real-time data capture, smart appointment scheduling, and visual progress analysis, the IPD ensures that every stage of pregnancy is clearly organized and easy to follow.',
//             'From recording vital signs, blood tests, and ultrasound results to documenting lifestyle factors and identifying potential risks, the IPD keeps all essential information in one place. Its clear timelines, detailed gravidas charts, and accessible summaries allow doctors and patients to collaborate more effectively, ensuring that care decisions are based on accurate, up-to-date information. By providing clarity, organization, and insight, the IPD supports a safer, more informed, and well-coordinated pregnancy journey.'
//         ],
//         features: [
//             { icon: 'crown', header: 'Enlightenment & Counseling', description: 'Keep a structured record of medical consultations, lifestyle habits, and behaviors such as nutrition, stress, and sleep. Receive tailored advice on career, sports, travel, and maternity protection, all in one unified overview.' },
//             { icon: 'map-marker', header: 'Smart Appointment Overview', description: 'View a chronological list of all important dates and appointments at a glance. Get timely reminders for emergencies, complications, or medications, and manage patient data and scheduling with ease.' },
//             { icon: 'chart-bar', header: 'Gravida Chart', description: 'Access a centralized view of all pregnancy check-ups and examination details. Track vital parameters like SSW, blood pressure, and weight in a clear, timeline-based format for both doctors and patients.' },
//             { icon: 'heart', header: 'Labor Examinations', description: 'Digitally record and store blood and infection test results with real-time updates. Keep important data such as blood type, Rh factor, and antibody status organized for quick reference.' },
//             { icon: 'question', header: 'Pregnancy Risks', description: 'Understand potential pregnancy risks with clear explanations of relevant medical terms. Stay informed to support proactive care and decision-making.' },
//         ]
//     }
// ])
</script>
