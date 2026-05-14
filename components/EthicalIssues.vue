<template>
  <v-row class="section-container" align="center" justify="center">
    <div
      class="floating-emoji emoji-bottom-left"
      data-aos="fade-up-right"
      data-aos-delay="200"
    >
      ⚖️
    </div>
    <div
      class="floating-emoji emoji-top-right"
      data-aos="fade-down-left"
      data-aos-delay="400"
    >
      🛑
    </div>
    <div
      class="floating-emoji emoji-center-right"
      data-aos="fade-left"
      data-aos-delay="500"
    >
      🚩
    </div>

    <v-col cols="12" data-aos="fade-up" class="text-center">
      <h2 class="display-2 font-weight-bold mb-10">Why does it matter?</h2>

      <v-row justify="center">
        <v-col cols="12" md="3" class="mb-4">
          <v-card
            class="pa-6 rounded-xl fill-height d-flex flex-column"
            color="#2E1414"
            elevation="4"
          >
            <h3 class="headline mb-4">Lack of Fair Competition</h3>
            <p>
              A monopolized market does not leave a chance for new players to
              come in, which limits the rights of the entrepreneurs. This makes
              one question if it is truly ethical to let one or a few companies
              own the vast majority of the market?
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="3" class="mb-4">
          <v-card
            class="pa-6 rounded-xl fill-height d-flex flex-column"
            color="#2E1414"
            elevation="4"
          >
            <h3 class="headline mb-4">Quality and Freedom</h3>
            <p>
              Does the existence of monopolies cause lower-quality and
              higher-priced products? Is it ethical to limit a private company
              on their actions and decisions about its own products and growth,
              or should they have the freedom and let the strongest and best
              win?
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="3" class="mb-4">
          <v-card
            class="pa-6 rounded-xl fill-height d-flex flex-column"
            color="#2E1414"
            elevation="4"
          >
            <h3 class="headline mb-4">Consumer Responsibility</h3>
            <p>
              Is it ethical to simply buy a product or service from a large
              company because it is easy, or should we actively support smaller
              enterprises by taking on a possible inconvenience to ensure a
              healthier, more diverse market?
            </p>
          </v-card>
        </v-col>
      </v-row>

      <v-icon size="64" class="bounce-arrow mt-10">mdi-arrow-down</v-icon>
    </v-col>
  </v-row>
</template>

<style scoped>
.section-container {
  min-height: 100vh;
  padding: 5rem 0;
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
