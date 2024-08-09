<template>
  <GenericProcessEditor v-model="value" />
  <MachineInstanceEditor
    v-model="value.machineInstance"
    label="machineInstance"
  />
  <KnowHowEditor v-model="value.knowHow" label="knowHow" />
</template>

<script setup lang="ts">
import { BlendingProcess } from '@fairfooddata/types';
import GenericProcessEditor from './GenericProcessEditor.vue';
import KnowHowEditor from '../KnowHowEditor.vue';
import MachineInstanceEditor from '../MachineInstanceEditor.vue';

import { ref, watch } from 'vue';
import { clone, defaultBlendingProcess } from '../defaults';

const props = defineProps<{ modelValue: BlendingProcess | undefined }>();

const value = ref(props.modelValue ?? clone(defaultBlendingProcess));

const emit = defineEmits(['update:modelValue']);

watch(value, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
