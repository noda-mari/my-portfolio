<template>
    <div class="w-full">

        <img :src="topImg" alt="トップ画像" class="w-full h-48 object-cover" />
        <div class="text-center p-4">
            <h1 class="text-3xl font-bold">Portfolio | Noda Mari</h1>
            <p class="text-gray-500 text-sm">🗓️ Last Updated: 2025/04/05</p>
        </div>

        <div class="flex flex-col gap-5">
            <div class="grid grid-cols-3 bg-green w-3/4  m-auto p-3 rounded-sm">
                <div class="col-span-2">
                    <h2 class="font-bold text-3xl">💡About me</h2>
                    <div class="p-3">
                        <p>千葉県在住のフリーランスプログラマーです。</p>
                        <p>プログラミングスクールにてLaravel、PHP、MySQL、Dockerを学びました。</p>
                        <p>現在は、Next.jsとReactを用いた求人アプリの開発、Nuxt.jsとMicrosoft Dynamicsを使用した業務系アプリの開発等の案件参画経験が約半年ございます。</p>
                        <p>これからもチーム開発や業務改善に貢献できるよう、技術のキャッチアップと実践を大切にしながら成長を続けていきます。どうぞよろしくお願いいたします。</p>
                    </div>
                </div>
                <div class="col-span-2">

                </div>
            </div>

            <div class="bg-green w-3/4 flex flex-col m-auto p-3 gap-2 rounded-sm">
                <h2 class="font-bold text-3xl">🏢 Works</h2>
                <div class="px-4">
                    <p class="mb-3">個人開発</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 justify-start">
                        <Card :slug="'atte'" :image="clock" title="🕑勤怠管理アプリ" period="2024/12~2024/02" :tags="[
                            { label: 'laravel', color: 'bg-red' },
                            { label: 'PHP', color: 'bg-acent text-white' },
                        ]" />
                        <Card :slug="'rese'" :image="dinner" title="🍔飲食店予約アプリ" period="2024/02~2024/04" :tags="[
                            { label: 'laravel', color: 'bg-red' },
                            { label: 'PHP', color: 'bg-acent text-white' },
                            { label: 'jQuery', color: 'bg-yellow text-white' }
                        ]" />
                        <Card :slug="'dictionary'" :image="book" title="📚辞書アプリ" period="2024/11~現在" :tags="[
                            { label: 'laravel', color: 'bg-red' },
                            { label: 'Next.js', color: 'bg-blue' },
                            { label: 'TypeScript', color: 'bg-mint text-white' }
                        ]" />
                    </div>
                </div>
                <div class="px-4 mb-2">
                    <p class="mb-3">案件参画実績</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-start ">
                        <Card :slug="'recruit'" :image="handshake" title="🏢就職・採用マッチングアプリ開発" period="2024/09~2024/10"
                            :tags="[
                                { label: 'Next.js', color: 'bg-blue' },
                                { label: 'TypeScript', color: 'bg-mint text-white' },
                                { label: 'GraphQL', color: 'bg-pink text-white' }
                            ]" />
                        <Card :slug="'labo'" :image="labo" title="📝研究業績マネジメントアプリ開発" period="2025/01~2025/05" :tags="[
                            { label: 'Dynamics', color: 'bg-[#ad5059]' },
                            { label: 'Nuxt.js', color: 'bg-nuxt text-black' },
                            { label: 'JavaScript', color: 'bg-yellow text-white' }
                        ]" />
                    </div>
                </div>
            </div>

            <div class="bg-green w-3/4 flex flex-col m-auto p-3 gap-2 rounded-sm">
                <h3 class="font-bold mb-3 text-3xl">🛠️ Skills</h3>
                <div class="px-4 mb-2">
                    <p class="mb-3 cursor-pointer select-none" @click="showFrontend = !showFrontend">
                        フロントエンド
                        <span class="ml-2">{{ showFrontend ? '▲' : '▼' }}</span>
                    </p>
                    <transition name="fade">
                        <div v-if="showFrontend"
                            class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 justify-start">
                            <Chart v-for="skill in frontSkills" :key="skill.label" :label="skill.label"
                                :value="skill.value" />
                        </div>
                    </transition>
                </div>
                <div class="px-4 mb-2">
                    <p class="mb-3 cursor-pointer select-none" @click="backFrontend = !backFrontend">
                        バックエンド
                        <span class="ml-2">{{ backFrontend ? '▲' : '▼' }}</span>
                    </p>
                    <transition name="fade">
                        <div v-if="backFrontend"
                            class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 justify-start ">
                            <Chart v-for="skill in backEndSkills" :key="skill.label" :label="skill.label"
                                :value="skill.value" />
                        </div>
                    </transition>
                </div>
                <div class="px-4">
                    <p class="mb-3 cursor-pointer select-none" @click="lowCode = !lowCode">
                        ローコード
                        <span class="ml-2">{{ lowCode ? '▲' : '▼' }}</span>
                    </p>

                    <div name="fade">
                        <div v-if="lowCode" class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-2 justify-start ">
                            <Chart v-for="skill in lowCodeSkills" :key="skill.label" :label="skill.label"
                                :value="skill.value" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-green w-3/4  flex flex-col m-auto p-3 gap-2 rounded-sm mb-5">
                <h2 class="font-bold text-3xl">💼 Career</h2>
                <div class="py-2 px-5">
                    <div class="bg-naby">
                        <h3 class="career-h3 p-1">📝 2024年10月 - 現在　フリーランスプログラマーとして活動中</h3>
                    </div>
                    <div class="mb-5">
                        <li class="career-li">研究業績のマネジメントアプリ開発（４か月）</li>
                        <li class="career-li">就職・採用マッチングアプリのフロントエンド開発（２か月）</li>
                    </div>
                    <div class="bg-naby">
                        <h3 class="career-h3 p-1">📝 2011年8月 - 2023年5月　アミューズメント企業にて勤務（アルバイト・正社員）</h3>
                    </div>
                    <div class="mb-5">
                        <li class="career-li">商品発注、新人教育、接客指導のリーダーを担当（９年・社員）</li>
                        <li class="career-li">フロント接客（２年・アルバイト）</li>
                    </div>
                    <div class="bg-naby">
                        <h3 class="career-h3 p-1">📝 2010年9月 - 2011年7月　金融業（生命保険）にて勤務（個人事業主）</h3>
                    </div>
                    <div class="mb-5">
                        <li class="career-li">新規顧客の開拓、保険の提案、契約の締結‧アフターフォロー（８か月）</li>
                    </div>
                    <div class="bg-naby">
                        <h3 class="career-h3 p-1">📝 2005年6月 - 2010年8月　小売企業にて勤務（正社員）</h3>
                    </div>
                    <div class="mb-5">
                        <li class="career-li">レジ対応、商品発注、シフト管理、新人スタッフトレーニングを担当（５年）</li>
                    </div>
                    <div class="bg-naby">
                        <h3 class="career-h3 p-1">📝 2005年3月 横浜市立鶴見工業学校 化学科 卒業</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup lang="ts">
import Card from '@/components/Card.vue'
import topImg from '@/assets/flower.jpg'
import dinner from '@/assets/dinner.jpg'
import Chart from '@/components/Chart.vue'
import clock from '@/assets/clock.jpg'
import book from '@/assets/book.jpg'
import handshake from '@/assets/handshake.jpg'
import labo from '@/assets/labo.jpg'

import { ref } from 'vue'

const showFrontend = ref(false)
const backFrontend = ref(false)
const lowCode = ref(false)


const frontSkills = [
    { label: "Vue.js", value: 50 },
    { label: "JavaScript", value: 50 },
    { label: "HTML/CSS", value: 60 },
    { label: "TypeScript", value: 50 },
    { label: "React.js", value: 50 },
    { label: "Next.js", value: 50 },
    { label: "GraphQL", value: 50 },
    { label: "Chakra UI", value: 50 }
]

const backEndSkills = [
    { label: "PHP", value: 40 },
    { label: "Laravel", value: 40 }
]

const lowCodeSkills = [
    { label: "Microsoft Dataverse", value: 60 },
    { label: "Power Platform", value: 30 },
    { label: "Power Automate", value: 70 }
]

</script>

<style scoped>
.career-h3 {
    font-weight: bold;
}

.career-li {
    padding: 5px;
}
</style>