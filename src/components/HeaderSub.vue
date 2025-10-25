<template>
    <div class="fixed top-0 left-0 w-full z-50">
        <header class="relative">
        <img :src="topImg[1]" alt="トップ画像" class="w-full object-cover mb-10" />
        <div class="absolute bottom-4.5 left-7 ">
            <span class="icon-[solar--round-arrow-left-linear] text-[#c64e2f] text-4xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90" v-on:click="goBack"></span>
        </div>
    </header>
    </div>
    
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router'


defineProps<{
    topImg: string[]
    subtitle: string
}>()

const router = useRouter()

const goBack = () => {
    router.back()
}

</script>