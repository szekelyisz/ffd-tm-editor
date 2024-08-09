<template>
  <BasicInput v-model="value.type" label="type" readonly />
  <LocalInputInstanceEditor v-if="value.type === 'local'" v-model="value" />
  <TransportedInputInstanceEditor
    v-if="value.type === 'transported'"
    v-model="value"
  />
</template>

<script setup lang="ts">
import { InputInstance } from '@fairfooddata/types';
import LocalInputInstanceEditor from './LocalInputInstanceEditor.vue';
import TransportedInputInstanceEditor from './TransportedInputInstanceEditor.vue';
import { ref } from 'vue';
import BasicInput from './BasicInput.vue';

const props = defineProps<{ value: InputInstance }>();

const value = ref(props.value);
</script>
