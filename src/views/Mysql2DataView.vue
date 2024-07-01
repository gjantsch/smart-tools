<script lang="ts">
import '../assets/main.css'
import RadioButton from '../components/RadioButton.vue'
import TextArea from '../components/TextArea.vue'

export default {
  components: {
    RadioButton,
    TextArea
  },
  data() {
    return {
      input: '',
      to: ''
    }
  },
  methods: {
    mysqlInputChanged(e: any) {
      this.input = e.target.value
    },
    ouputTypeChanged(e: any) {
      this.to = e.target.value
    }
  },
  computed: {
    convert() {
      const lines = this.input.split('\n')
      let converted = lines.reduce((prev, current) => {
        // ignore row separators
        if (current.substring(0, 2) == '+-') {
          return prev
        }

        let line: (string | number)[] = current
          .substring(1)
          .slice(0, -1)
          .split('|')
          .map((word) => word.trim())

        if (this.to == 'csv') {
          line = line.map((word) => {
            if (isNaN(Number(word))) {
              return `"${word}"`
            }
            return Number(word)
          })

          current = line.join(';')
        } else {
          current = line.join('\t')
        }

        return prev + (prev === '' ? '' : '\n') + current
      }, '')
      return converted
    }
  }
}
</script>

<template>
  <main class="bg-gray-100 p-5 rounded-lg shadow-md">
    <h1>MySQL2Data</h1>
    <p>MySQL Output to Data Converter.</p>
    <div class="pt-4">
      <TextArea
        name="mysql-input"
        placeholder="Paste mysql output here"
        label="MySQL Output"
        inputClass="code"
        @change="mysqlInputChanged"
        counters
      ></TextArea>
    </div>

    <div class="flex content-start items-center pt-4">
      <button class="btn btn-primary">Convert</button>
      <RadioButton
        name="conversionType"
        label="Tabbed (excel)"
        value="tabbed"
        class="mr-4"
        @change="ouputTypeChanged"
        checked
      ></RadioButton>
      <RadioButton
        name="conversionType"
        label="CSV"
        class="mr-4"
        value="csv"
        @change="ouputTypeChanged"
      ></RadioButton>
    </div>

    <div class="pt-4">
      <textarea :value="convert" class="code"></textarea>
    </div>
  </main>
</template>
