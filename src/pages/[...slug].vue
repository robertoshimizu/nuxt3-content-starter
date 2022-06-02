<script setup lang="ts">
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('pt', options);
}
</script>
<template>
  <article class="mt-3 max-w-5xl mx-auto flex-col">
    <ContentDoc v-slot="{ doc }">
      <div class="px-8 bg-contain box-border h-64 w-full">
        <img
          :src="doc.imageUrl"
          :alt="doc.alt"
          class="object-cover h-60 w-full"
        />
      </div>

      <div class="px-8 py-2 xs:w-full h-full markdown-body post-right">
        <h1 class="font-bold text-3xl">{{ doc.title }}</h1>
        <p class="py-2 text-sm">Por {{ doc.author.name }}</p>
        <p class="py-0 text-sm">
          Data da publicação: {{ formatDate(doc.datetime) }}
        </p>
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </article>
</template>
