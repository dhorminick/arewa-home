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
            <form @submit.prevent="sendContactMail(contact)">
                <InputTextCustom label="Name:" v-model="contact.name" />
                <InputTextCustom type="email" label="Email Address:" v-model="contact.email" />
                <div class="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
                    <InputTextCustom label="Telephone number:" v-model="contact.telephone" />
                    <InputTextCustom type="date" label="Select Date:" v-model="contact.date" />
                </div>
                <InputTextAreaCustom label="Message:" v-model="contact.message" />
                <input type="text" :v-model="contact.crsf" autocomplete="off" tabindex="-1"
                    style="position: absolute; left: -9999px;">
                <div class="mt-[10px]">
                    <ButtonCustom primary="true" size="lg" type="submit" label="Submit" />
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ADDRESS, CONTACT_EMAIL } from '~/utils/constants';
const toast = useToast()

const contact = ref({
    name: '',
    telephone: '',
    email: '',
    date: '',
    message: '',
    crsf: null
})

const more = [
    { icon: 'phone', value: '+1-000-000-000', url: 'tel:+1-000-000-000' },
    { icon: 'envelope', value: CONTACT_EMAIL, url: `mailto:${CONTACT_EMAIL}` },
    { icon: 'map-marker', value: ADDRESS, url: 'https://maps.app.goo.gl/sve7aDCxZkVaM5by8' },
]
const sendContactMail = async (data) => {
    if (data.email === null || data.email === '') {
        toast.add({
            severity: 'error',
            summary: 'ERROR', detail: "Please provide an email address!", life: 3000
        });
        return;
    }

    if (data.message === null || data.message === '') {
        toast.add({
            severity: 'error',
            summary: 'ERROR', detail: "Please provide a contact message!", life: 3000
        });
        return;
    }

    if (data.name === null || data.name === '') {
        toast.add({
            severity: 'error',
            summary: 'ERROR', detail: "Please provide a contact name!", life: 3000
        });
        return;
    }

    try {
        const response = await fetch("https://api.dev.arewa-health.com/contact-us", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: data.email, crsf: data.crsf, message: data.message, telephone: data.telephone, date: data.date ? parseDateToReadableDateString(data.date) : null, name: data.name }),
        });

        const d = await response.json();
        if (response.ok) {
            toast.add({
                severity: 'success',
                summary: 'SUCCESS', detail: d.message || 'Contact mail sent successfully!', life: 3000
            });

            // cleanup
            contact.value = {
                name: '',
                telephone: '',
                email: '',
                date: '',
                message: '',
                crsf: null
            }
        } else {
            toast.add({
                severity: 'error',
                summary: 'ERROR', detail: d.message || 'An error occured!', life: 3000
            });
        }
    } catch (error) {
        console.error("Error sending mail:", error);
    }
}

onBeforeMount(() => {
    contact.value = {
        name: '',
        telephone: '',
        email: '',
        date: '',
        message: '',
        crsf: null
    }
})
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