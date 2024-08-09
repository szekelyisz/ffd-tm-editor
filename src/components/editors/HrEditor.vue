<template>
  <q-card class="q-my-md">
    <q-expansion-item :label="$props.label" default-opened>
      <div class="q-pa-md">
        <BasicInput
          v-model="value.assignee"
          label="assignee"
          default-value=""
        />
        <BasicInput v-model="value.tasks" label="tasks" default-value="" />
      </div>
    </q-expansion-item>
  </q-card>
</template>

<script setup lang="ts">
import { Hr } from '@fairfooddata/types';
import BasicInput from './BasicInput.vue';
import { clone, defaultHr } from './defaults';
import { ref, watch } from 'vue';

const props = defineProps<{ modelValue: Hr | undefined; label: string }>();

const value = ref(props.modelValue ?? clone(defaultHr));

const emit = defineEmits(['update:modelValue']);

watch(value, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
