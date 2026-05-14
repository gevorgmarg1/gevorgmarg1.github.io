<template>
  <v-row class="section-container" align="center" justify="center">
    <div
      class="floating-emoji emoji-bottom-left"
      data-aos="zoom-in-up"
      data-aos-delay="200"
    >
      🔓
    </div>
    <div
      class="floating-emoji emoji-top-right"
      data-aos="fade-left"
      data-aos-delay="400"
    >
      📜
    </div>

    <v-col cols="12" data-aos="fade-up" class="text-center">
      <h2 class="display-2 font-weight-bold mb-10">
        Rights of the stakeholders
      </h2>

      <v-row justify="space-around" align="center" class="mt-10">
        <v-col cols="12" md="4">
          <h3 class="display-1 mb-4">Big companies</h3>
          <p class="text-h6 text-left">
            Since these are for-profit companies, their right to grow and
            freedom in the market should be reserved. They should be free to
            make decisions on their own products.
          </p>
        </v-col>

        <v-col
          cols="12"
          md="2"
          class="d-flex justify-center hidden-sm-and-down"
        >
          <div class="vertical-line"></div>
        </v-col>

        <v-col cols="12" md="4">
          <h3 class="display-1 mb-4">Small companies</h3>
          <p class="text-h6 text-right">
            The ability of being able to create, own, improve, and sell their
            products should be taken into consideration. They should have the
            right to fair competition.
          </p>
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
.vertical-line {
  width: 4px;
  height: 200px;
  background-color: #f29b9b;
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
