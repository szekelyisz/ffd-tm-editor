<template>
  <TransportEditor v-model="value.transport" label="transport" />
  <GenericInputInstanceEditor v-model="value" />
</template>

<script setup lang="ts">
import { TransportedInputInstance } from '@fairfooddata/types';
import { ref, watch } from 'vue';
import { clone, defaultTransportedInputInstance } from './defaults';
import TransportEditor from './TransportEditor.vue';
import GenericInputInstanceEditor from './GenericInputInstanceEditor.vue';

const props = defineProps<{
  modelValue: TransportedInputInstance | undefined;
}>();

const value = ref(props.modelValue ?? clone(defaultTransportedInputInstance));

const emit = defineEmits(['update:modelValue']);

watch(value, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
