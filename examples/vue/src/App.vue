<script setup lang="ts">
import { store } from './store'

const count = ref("")

function onSendClick() {
   fetch('/api/get', {
      method: 'get',
   }).then(async (res) => {
      const text = await res.text()
      console.log(text)
   })
}
</script>

<template>
   <div>
      {{ count }}
   </div>
   <button @click="count += 's'">add</button>
   <button @click="onSendClick">发送</button>
</template>