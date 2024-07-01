<script lang="ts">
import '../assets/main.css'

import TextArea from '../components/TextArea.vue'

const uuencoder = (inputText: string): string => {
  const encodeTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

  const table = encodeTable.split('')

  let encoded_text: string = ''

  if (inputText.length) {
    let remainder: string = ''
    let extra: string = ''

    let utf8encoded = new TextEncoder().encode(inputText)

    utf8encoded.map((char) => {
      const ascii = char
      const bytes = (ascii >>> 0).toString(2).padStart(8, '0')
      const current = remainder + bytes
      const to_encode = current.substring(0, 6)

      encoded_text = encoded_text + table[parseInt(to_encode, 2)]
      remainder = current.substring(6)

      if (remainder.length == 6) {
        encoded_text = encoded_text + table[parseInt(remainder, 2)]
        remainder = ''
      }
    })

    if (remainder.length > 0) {
      const count = 6 - remainder.length
      remainder = remainder + '0'.repeat(count)
      extra = '='.repeat(count / 2)
      encoded_text = encoded_text + table[parseInt(remainder, 2)] + extra
    }
  }

  return encoded_text
}

export default {
  components: {
    TextArea
  },
  data() {
    return {
      input: '',
      to: ''
    }
  },
  methods: {
    textInputChanged(e: any) {
      this.input = e.target.value
    }
  },
  computed: {
    convert() {
      return uuencoder(this.input)
    }
  }
}
</script>

<template>
  <main class="bg-gray-100 p-5 rounded-lg shadow-md">
    <h1>Unix-to-Unix Encoder</h1>
    <p></p>
    <div class="pt-4">
      <TextArea
        name="text-input"
        placeholder=""
        label="Text to be encoded"
        inputClass="code"
        @change="textInputChanged"
        counters
      ></TextArea>
    </div>

    <div class="pt-4">
      <textarea :value="convert" class="code"></textarea>
    </div>
  </main>
</template>
