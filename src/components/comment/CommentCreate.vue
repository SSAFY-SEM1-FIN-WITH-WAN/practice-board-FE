<script setup>
import { ref } from 'vue'
import { useCommentStore } from '@/stores/comment'

const props = defineProps({
  boardId: {
    type: String,
    required: true
  }
})

const emit = defineEmits()

const commentContent = ref('')
const commentStore = useCommentStore()

const addComment = function () {
  const newComment = { content: commentContent.value }
  commentStore.addComment(props.boardId, newComment)
  commentContent.value = ''
  emit('commentAdded')
  window.location.reload()
}

</script>

<template>
  <div class="comment-create">
    <textarea v-model="commentContent" placeholder="댓글을 작성하세요..." class="form-control"></textarea>
    <button @click="addComment" class="btn btn-primary mt-3">댓글 추가</button>
  </div>
</template>

<style scoped>

</style>