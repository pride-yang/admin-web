<template>
  <div class="h-full">
    <n-card title="新文章" class="shadow-sm rounded-16px h-full">
      <template #header-extra>
        <n-space
          ><n-button> 预览 </n-button> <n-button type="primary" @click="publicVisible = true"> 发布 </n-button></n-space
        >
      </template>
      <div class="py-4">
        <n-input v-model:value="post.title" size="large" placeholder="请输入文章标题"></n-input>
      </div>
      <y-markdown v-model:value="post.originalContent" @get="getHtml" />
    </n-card>
    <publish-post-modal v-model:visible="publicVisible" title="发布文章" :post="post"></publish-post-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Vditor from 'vditor';
import { getOneApi, PostDetail } from '@/service/api/post';
import YMarkdown from '@/components/common/Markdown.vue';
import { resetPost } from '@/views/document/common';
import PublishPostModal from './component/PublishPostModal/index.vue';

const route = useRoute();
const publicVisible = ref<boolean>(false);
const post = ref<PostDetail>(resetPost());

function getHtml(editor: Vditor) {
  post.value.formatContent = editor.getHTML();
}

onMounted(async () => {
  if (route.query.postId) {
    const { data } = await getOneApi(route.query.postId as string);
    if (data) {
      if (data.originalContent === null) {
        data.originalContent = '';
      }
      post.value = data;
    }
  }
});
</script>
<style scoped></style>
