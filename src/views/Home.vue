<template>
    <div class="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-10">
        <div class="flex flex-col gap-10">
            <div class="grid grid-cols-1 md:grid-cols-3 bg-[#ca8f7a] w-full max-w-screen-lg mx-auto p-3 rounded-2xl">
                <div class="col-span-2">
                    <h2 class=" font-['Genos'] text-2xl sm:text-3xl md:text-4xl font-bold p-2 text-[#c64e2f]">💡About
                        me</h2>
                    <div class="p-3 text-[#F4F5F7]" >
                        <p>千葉県在住のフリーランスプログラマーです。</p>
                        <p>プログラミングスクールにてLaravel、PHP、MySQL、Dockerを学びました。</p>
                        <p>現在は、Next.jsとReactを用いた求人アプリの開発、Nuxt.jsとMicrosoft Dynamicsを使用した業務系アプリの開発等の案件参画経験が約半年ございます。</p>
                        <p>これからもチーム開発や業務改善に貢献できるよう、技術のキャッチアップと実践を大切にしながら成長を続けていきます。どうぞよろしくお願いいたします。</p>
                        <p>ポートフォリオのソースコードは🔗
                            <a href="https://github.com/noda-mari/my-portfolio.git" target="_blank"
                                class="text-amber-100 underline hover:text-blue-300">
                                GitHubで公開中です
                            </a>
                        </p>
                    </div>
                </div>
                <div class="col-span-1 flex items-center justify-center">
                    <img src="../assets/protfolio-img02.jpg" alt=""
                        class="w-40 sm:w-52 md:w-60 aspect-square object-cover rounded-full" />
                </div>
            </div>

            <div class="bg-[#ca8f7a] w-full max-w-screen-lg mx-auto flex flex-col p-3 gap-2 rounded-2xl">
                <h2 class="font-['Genos'] text-2xl sm:text-3xl md:text-4xl font-bold p-2 text-[#c64e2f]">🗂️ Works
                </h2>
                <div class="px-4">
                    <p class="font-['Kiwi_Maru'] text-xl mb-3">個人開発</p>
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
                    <p class="font-['Kiwi_Maru'] text-xl mb-3">案件参画実績</p>
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

            <div class="bg-[#ca8f7a] w-full max-w-screen-lg mx-auto flex flex-col  p-3 gap-2 rounded-2xl">
                <h3 class="font-['Genos'] text-2xl sm:text-3xl md:text-4xl font-bold mb-3 p-2 text-[#c64e2f]">🛠️
                    Skills</h3>
                <div class="px-4 mb-2">
                    <p class="font-['Kiwi_Maru'] text-xl mb-3 cursor-pointer select-none"
                        @click="showFrontend = !showFrontend">
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
                    <p class="font-['Kiwi_Maru'] text-xl mb-3 cursor-pointer select-none"
                        @click="backFrontend = !backFrontend">
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
                    <p class="font-['Kiwi_Maru'] text-xl mb-3 cursor-pointer select-none" @click="lowCode = !lowCode">
                        ローコード
                        <span class="ml-2">{{ lowCode ? '▲' : '▼' }}</span>
                    </p>

                    <transition name="fade">
                        <div v-if="lowCode"
                            class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-2 justify-start ">
                            <Chart v-for="skill in lowCodeSkills" :key="skill.label" :label="skill.label"
                                :value="skill.value" />
                        </div>
                    </transition>
                </div>
            </div>
            <div class="bg-[#ca8f7a] w-full max-w-screen-lg mx-auto flex flex-col p-3 gap-2 rounded-2xl mb-10">
                <h2 class="font-['Genos'] text-2xl sm:text-3xl md:text-4xl font-bold p-2 text-[#c64e2f]">💼 Career
                </h2>
                <div class="py-2 px-5">

                    <CareerItem date="🏃‍♂️ 2024年10月 - 現在" title="フリーランスプログラマーとして活動中"
                        :onClick="() => openModal('freePg')" />
                    <div class="mb-5">
                        <li class="career-li">研究業績のマネジメントアプリ開発（４か月）</li>
                        <li class="career-li">就職・採用マッチングアプリのフロントエンド開発（２か月）</li>
                    </div>

                    <CareerItem date="🎪 2011年8月 - 2023年5月" title="アミューズメント企業にて勤務（アルバイト・正社員）"
                        :onClick="() => openModal('amusement')" />
                    <div class="mb-5">
                        <li class="career-li">商品発注、新人教育、接客指導のリーダーを担当（９年・社員）</li>
                        <li class="career-li">フロント接客（２年・アルバイト）</li>
                    </div>

                    <CareerItem date="🏢 2010年9月 - 2011年7月　" title="金融業（生命保険）にて勤務（個人事業主）"
                        :onClick="() => openModal('insurance')" />
                    <div class="mb-5">
                        <li class="career-li">新規顧客の開拓、保険の提案、契約の締結‧アフターフォロー（８か月）</li>
                    </div>

                    <CareerItem date="🏪 2005年6月 - 2010年8月　" title="小売企業にて勤務（正社員）"
                        :onClick="() => openModal('convenienceStore')" />
                    <div class="mb-5">
                        <li class="career-li">レジ対応、商品発注、シフト管理、新人スタッフトレーニングを担当（５年）</li>
                    </div>

                    <CareerItem date="🏫 2005年3月" title="横浜市立鶴見工業学校 化学科 卒業" :onClick="() => openModal('highScool')" />

                </div>
            </div>
        </div>

    </div>
    <CareerModal :isOpen="show" :slug="selectedSlug" @close="show = false" />

</template>

<script setup lang="ts">
import Card from '@/components/Card.vue'
import dinner from '@/assets/dinner.jpg'
import Chart from '@/components/Chart.vue'
import clock from '@/assets/clock.jpg'
import book from '@/assets/book.jpg'
import handshake from '@/assets/handshake.jpg'
import labo from '@/assets/labo.jpg'
import CareerModal from '@/components/Modal.vue'
import CareerItem from '../components/CareerItem.vue'

import { ref } from 'vue'

const showFrontend = ref(false)
const backFrontend = ref(false)
const lowCode = ref(false)
const show = ref(false)
const selectedSlug = ref('')

const openModal = (slug: string) => {
    selectedSlug.value = slug
    show.value = true
}


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