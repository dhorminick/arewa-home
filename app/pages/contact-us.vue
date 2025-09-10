<template>
    <section class="py-[75px] pad">
        <TextLabel text="Need Help?" />
        <h1 class="text-5xl font-bold mb-[50px] mt-[10px]">Contact us or schedule an appointment</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            <div class="flex flex-col gap-[20px]">
                <div v-for="(i, idx) in more" :key="idx" class="flex gap-[30px] items-center">
                    <i :class="`pi pi-${i.icon}`" class="rounded-full bg-[#F5F5F5] p-[10px] text-[90%]"></i>
                    <a :href="i.url" target="_blank" class="bb">{{ i.value }}</a>
                </div>
            </div>
            <div>
                <InputTextCustom label="Name:" v-model="contact.name" />
                <InputTextCustom type="email" label="Email Address:" v-model="contact.email" />
                <div class="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
                    <InputTextCustom label="Telephone number:" v-model="contact.telephone" />
                    <InputTextCustom type="date" label="Select Date:" v-model="contact.date" />
                </div>
                <InputTextAreaCustom label="Message:" v-model="contact.message" />
                <div class="mt-[10px]">
                    <ButtonCustom primary="true" size="lg" label="Submit" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const contact = ref({
    name: '',
    telephone: '',
    email: '',
    date: '',
    message: ''
})

const more = [
    { icon: 'phone', value: '+1-000-000-000', url: 'tel:+1-000-000-000' },
    { icon: 'envelope', value: 'contact@arewa-health.com', url: 'mailto:contact@arewa-health.com' },
    { icon: 'map-marker', value: 'Gartenstraße 19, 14169 Berlin', url: 'https://maps.app.goo.gl/sve7aDCxZkVaM5by8' },
]
</script>
<style scoped>
section {
    padding-inline: 30px !important;
}

@media screen and (min-width: 768px) {
    section {
        padding-inline: 200px !important;
    }
}
</style>