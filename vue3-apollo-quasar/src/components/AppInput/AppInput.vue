<template>
  <input
    :type="inputType"
    v-bind="$attrs"
    :value="modelValue"
    :class="inputClass"
    autocomplete="new-value"
    autocorrect="false"
    @input="$emit('update:modelValue', handleInputChange($event))"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppInput',
  props: {
    inputClass: String,
    inputType: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: String,
      default: '',
    },
  },

  setup() {
    const handleInputChange = (event: Event) =>
      (event.target as HTMLInputElement).value;
    return { handleInputChange };
  },
});
</script>
