<template>
  <q-input
    @update:model-value="update"
    :model-value="props.modelValue"
    :type="$props.type"
    :label="$props.label"
    :readonly="$props.readonly"
    stack-label
  />
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);

const props = defineProps<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelValue: any | undefined;
  type?:
    | 'number'
    | 'search'
    | 'text'
    | 'password'
    | 'textarea'
    | 'email'
    | 'tel'
    | 'file'
    | 'url'
    | 'time'
    | 'date'
    | undefined;
  label?: string | undefined;
  readonly?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any | undefined;
}>();

function update(value: number | string | null | undefined) {
  emit(
    'update:modelValue',
    value === '' || value === null || value === undefined
      ? props.defaultValue
      : value
  );
}
</script>
