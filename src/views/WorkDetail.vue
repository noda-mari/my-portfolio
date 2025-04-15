<template>
  <div v-if="app" class="w-full px-4 md:px-8 lg:px-10 pt-20 flex flex-col gap-6">
    <h1 class="text-2xl md:text-3xl font-bold mb-2 text-center">{{ app.title }}</h1>
    <div class="grid grid-cols-1 lg:grid-cols-6 gap-4">
      <div class="lg:col-span-3">
        <div class="flex flex-col gap-4">
          <img v-for="(image, index) in app.imageList" :key="index" :src="image" alt="アプリ画面"
            class="w-full max-w-md rounded border cursor-pointer" @click="openModal(index)" />
        </div>
      </div>
      <div class="lg:col-span-3 flex flex-col gap-6">
        <p>製作期間：{{ app.duration }}</p>
        <div>
          <h2 class="text-lg font-bold">【概要】</h2>
          <p class="w-full lg:w-3/4">{{ app.description }}</p>
        </div>
        <div v-if="app.gitHubUrl">
          <h2 class="text-lg font-bold">【Github URL】</h2>
          <a
            :href="app.gitHubUrl"
            class="w-full lg:w-3/4 text-blue-400 hover:underline break-words"
            target="_blank"
            rel="noopener noreferrer"
            >
          {{ app.gitHubUrl }}
          </a>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-1.5">【使用技術】</h2>
          <div class="flex gap-2">
            <Tag v-for="(tag, index) in app.tags" :key="index" :label="tag.label" :colorClass="tag.color" />
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-2">【開発体制】</h2>
          <div class="grid grid-cols-[10ch_1fr] gap-x-4 gap-y-2 text-sm md:text-base">
            <div class="font-bold whitespace-nowrap">開発期間</div>
            <p>：{{ app.date }}</p>

            <div class="font-bold whitespace-nowrap">チームメンバー</div>
            <p>：{{ app.menber }}</p>

            <div class="font-bold whitespace-nowrap">タスク管理</div>
            <p>：{{ app.task }}</p>

            <div class="font-bold whitespace-nowrap">バージョン管理</div>
            <p>：{{ app.version }}</p>
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-2">【担当業務】</h2>
          <div class="grid grid-cols-[10ch_1fr] gap-x-4 gap-y-2 text-sm md:text-base">
            <div class="font-bold whitespace-nowrap">担当工程</div>
            <div>{{ app.inCharge }}</div>

            <div class="font-bold whitespace-nowrap">機能一覧</div>
            <ul class="list-none">
              <li v-for="(feature, index) in app.featureList" :key="index">・{{ feature }}</li>
            </ul>
          </div>
        </div>
        <div class="mb-6">
          <h2 class="text-lg font-bold mb-2">【開発環境及び使用ツール】</h2>
          <div class="grid grid-cols-[10ch_1fr] gap-x-4 gap-y-2 text-sm md:text-base">
            <div class="font-bold whitespace-nowrap">使用技術一覧</div>
            <ul class="list-none">
              <li v-for="(tech, index) in app.techList" :key="index">・{{ tech }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <ImageModal
  :show="showModal"
  :imageList="app.imageList"
  :currentIndex="modalIndex"
  @close="showModal = false"
  @update:index="modalIndex = $event"
/>

  </div>
  <div v-else>
    <p>アプリが見つかりません。</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { apps } from '@/data/apps'
import Tag from '@/components/Tag.vue'
import { ref } from 'vue'
import ImageModal from '@/components/ImageModal.vue'

const route = useRoute()
const app = apps.find(a => a.slug === route.params.slug)

const showModal = ref(false)
const modalIndex = ref(0)

const openModal = (index) => {
  modalIndex.value = index
  showModal.value = true
}


console.log(app)
</script>