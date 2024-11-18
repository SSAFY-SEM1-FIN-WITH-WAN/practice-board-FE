<template>
    <div class="file-uploader">
        <input type="file" multiple accept="image/*" @change="onFileChange" />

        <ul v-if="selectedFiles.length">
            <li v-for="(file, index) in selectedFiles" :key="index">
                {{ file.name }} ({{ (file.size / 1024).toFixed(2) }} KB)
                <button @click="removeFile(index)">삭제</button>
            </li>
        </ul>

        <button @click="uploadFiles" :disabled="!selectedFiles.length || isUploading">
            {{ isUploading ? '업로드 중...' : '업로드' }}
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFileStore } from '@/stores/file';

const fileStore = useFileStore();

const selectedFiles = ref([]);
const isUploading = ref(false);

const onFileChange = (event) => {
    const files = Array.from(event.target.files);
    selectedFiles.value.push(...files);
};

const removeFile = (index) => {
    selectedFiles.value.splice(index, 1);
};

const uploadFiles = async () => {
    if (!selectedFiles.value.length) return;

    isUploading.value = true;

    try {
        await fileStore.uploadImageFile(selectedFiles.value);
        alert('업로드 성공!');
        selectedFiles.value = [];
    } catch (error) {
        console.error('업로드 실패:', error);
        alert('업로드 실패. 다시 시도하세요.');
    } finally {
        isUploading.value = false;
    }
};
</script>

<style scoped>
.file-uploader {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

input[type="file"] {
    margin-bottom: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    margin-bottom: 5px;
}

button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
