<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const fileInput = ref(null)

const handleFileChange = (event) => {
  const files = event.target.files
  for (let i = 0; i < files.length; i++) {
    props.images.push(files[i])
  }
}

</script>

<template>
  <div>
    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      multiple
      class="form-control"
      @change="handleFileChange"
    />
    <div v-if="props.images.length" class="mt-3">
      <h5>선택된 이미지</h5>
      <div class="d-flex flex-wrap">
        <div
            v-for="(image, index) in props.images"
            :key="index" class="m-2">
            <img
                :src="URL.createObjectURL(image)"
                class="img-thumbnail"
                style="width: 100px; height: 100px;"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>