<script lang="ts">
export default {
  props: {
    label: String,
    name: String,
    value: String,
    placeholder: String,
    counters: Boolean,
    inputClass: String
  },
  data() {
    return {
      text: ''
    }
  },
  computed: {
    countWords(): Number {
      return Number(this.text.split(' ').length)
    },
    countChars(): Number {
      return Number(this.text.length)
    }
  },
  mounted() {
    this.text = this.$props.value ? this.$props.value : ''
  }
}
</script>
<template>
  <div>
    <label for="{{ name }}">{{ label }}</label>
    <textarea
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :class="inputClass"
      v-model="text"
    ></textarea>
    <template v-if="counters">
      <small>
        <strong>words:</strong> {{ countWords }} <strong>chars:</strong> {{ countChars }}
      </small>
    </template>
  </div>
</template>
