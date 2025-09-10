<template>
    <section class="flex items-center w-full bg-primary h-[83dvh]">
        <div class="sm:w-[55%] h-full sm:pt-[100px] px-[50px] w-full flex flex-col gap-[10px] text-white">
            <TextLabel text="Arewa health" />
            <h1 class="font-[700] text-6xl mb-[30px] text-left">Transforming healthcare management with innovative
                solutions.</h1>
            <div>The global, digital, and standardized documentation system for a healthy and safe pregnancy.</div>

            <div class="flex gap-[10px] mt-[50px]">
                <ButtonCustom label="Book a Demo" size="lg" rounded="true" input-class="w-max border-white border"
                    primary="true" />
                <ButtonCustom label="Contact Us" size="lg" rounded="true" input-class="w-max" />
            </div>
        </div>
        <div class="flex justify-center items-center flex-1">
            <img src="/images/blank.png" class="h-[510px] rounded-full w-[550px] object-center" />
        </div>
    </section>
    <TextCTA header="Book a Demo" description="Are you ready to change the future of pregnancy documentation?"
        label="Book Demo" :action="(() => navigateTo('/'))" />
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>