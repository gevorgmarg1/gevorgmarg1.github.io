<template>
  <v-row class="section-container" align="center" justify="center">
    <div
      class="floating-emoji emoji-top-left"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      📱
    </div>
    <div
      class="floating-emoji emoji-bottom-right"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      🏢
    </div>
    <div
      class="floating-emoji emoji-center-left"
      data-aos="fade-right"
      data-aos-delay="300"
    >
      💻
    </div>
    <v-col cols="12" class="text-center" data-aos="fade-up">
      <h1 class="display-3 font-weight-bold mb-4">
        Are we truly free to choose?
      </h1>
      <h2 class="headline mb-10">The invisible monopoly of Big Tech</h2>

      <v-icon size="64" class="bounce-arrow mt-10">mdi-arrow-down</v-icon>
    </v-col>
  </v-row>
</template>

<style scoped>
.section-container {
  min-height: 100vh;
  position: relative;
}
.bounce-arrow {
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
