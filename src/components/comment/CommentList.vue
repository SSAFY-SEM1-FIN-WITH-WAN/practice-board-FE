<script setup>
import { ref, onMounted } from 'vue'
import { useCommentStore } from '@/stores/comment'

const props = defineProps({
  boardId: {
    type: String,
    required: true
  }
})

const editingCommentId = ref(null)
const editedContent = ref({
    content: '',
})

const commentStore = useCommentStore()

const removeComment = function (commentId) {
    commentStore.removeComment(props.boardId, commentId)
    window.location.reload()
}

const modifyComment = function (commentId) {
  if (editedContent.value.content.trim()) {
    commentStore.modifyComment(props.boardId, commentId, editedContent.value)
    editingCommentId.value = null
    editedContent.value.content = ''
    window.location.reload()
  }
}

const startEditing = function (commentId, content) {
  editingCommentId.value = commentId
  editedContent.value.content = content
}

onMounted(() => {
    commentStore.getCommentList(props.boardId)
})

</script>

<template>
  <div class="container">
    <table class="table table-hover text-center">
      <thead>
        <tr>
          <th>내용</th>
          <th>작성자</th>
          <th>등록일</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in commentStore.commentList" :key="comment.id">
          <td>
            <template v-if="editingCommentId !== comment.id">
              {{ comment.content }}
            </template>
            <template v-else>
              <input 
                v-model="editedContent.content" 
                type="text" 
                class="form-control"
              />
            </template>
          </td>
          <td>{{ comment.userName }}</td>
          <td>{{ comment.createdAt }}</td>
          <td>
            <template v-if="editingCommentId !== comment.id">
              <button 
                class="mx-3 btn btn-outline-warning" 
                @click="startEditing(comment.id, comment.content)"
              >
                수정
              </button>
            </template>
            <template v-else>
              <button 
                class="mx-3 btn btn-outline-success" 
                @click="modifyComment(comment.id)"
              >
                저장
              </button>
            </template>
          </td>
          <td>
            <button 
              class="mx-3 btn btn-outline-danger" 
              @click="removeComment(comment.id)"
            >
              X
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>