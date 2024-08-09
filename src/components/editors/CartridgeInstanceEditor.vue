<template>
  <BasicInput v-model="value.type" label="type" />
  <q-checkbox v-model="value.bio" label="bio" />
  <BasicInput v-model="value.ownerId" label="ownerId" default-value="" />
  <BasicInput v-model="value.grade" label="grade" default-value="" />
  <BasicInput v-model.number="value.quantity" label="quantity" type="number" />
  <BasicInput v-model="value.size" label="size" />
</template>

<script setup lang="ts">
import { CartridgeInstance } from '@fairfooddata/types';
import { clone, defaultCartridgeInstance } from './defaults';
import { ref, watch } from 'vue';
import BasicInput from './BasicInput.vue';

const props = defineProps<{ modelValue: CartridgeInstance | undefined }>();

const value = ref(props.modelValue ?? clone(defaultCartridgeInstance));

const emit = defineEmits(['update:modelValue']);

watch(value, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
