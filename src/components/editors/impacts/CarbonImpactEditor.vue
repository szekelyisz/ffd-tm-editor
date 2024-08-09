<template>
  <GenericImpactEditor v-model="value" />
</template>

<script setup lang="ts">
import { CarbonImpact } from '@fairfooddata/types';
import GenericImpactEditor from './GenericImpactEditor.vue';
import { ref } from 'vue';

const props = defineProps<{ modelValue: CarbonImpact }>();

const value = ref(props.modelValue);
</script>
