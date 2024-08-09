<template>
  <q-card class="q-my-md">
    <q-expansion-item :label="$props.label" default-opened>
      <div class="q-pa-md row">
        <div class="col q-pr-sm">
          <BasicInput
            v-model.number="value.coordinates[0]"
            label="longitude"
            :default-value="0"
            type="number"
          />
        </div>
        <div class="col q-pl-sm">
          <BasicInput
            v-model.number="value.coordinates[1]"
            label="latitude"
            :default-value="0"
            type="number"
          />
        </div>
      </div>
    </q-expansion-item>
  </q-card>
</template>

<script setup lang="ts">
import { Location } from '@fairfooddata/types';
import BasicInput from './BasicInput.vue';
import { clone, defaultLocation } from './defaults';
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: Location | undefined;
  label: string;
}>();

const value = ref(props.modelValue ?? clone(defaultLocation));

const emit = defineEmits(['update:modelValue']);

watch(value, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
