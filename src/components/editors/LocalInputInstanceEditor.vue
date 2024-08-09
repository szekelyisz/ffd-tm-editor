<template>
  <GenericInputInstanceEditor v-model="value" />
</template>

<script setup lang="ts">
import { LocalInputInstance } from '@fairfooddata/types';
import { clone, defaultLocalInputInstance } from './defaults';
import { ref, watch } from 'vue';
import GenericInputInstanceEditor from './GenericInputInstanceEditor.vue';

const props = defineProps<{ modelValue: LocalInputInstance | undefined }>();

const value = ref(props.modelValue ?? clone(defaultLocalInputInstance));

const emit = defineEmits(['update:modelValue']);

watch(value, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
