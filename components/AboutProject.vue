<template>
  <v-row class="section-container" align="center" justify="center">
    <div
      class="floating-emoji emoji-top-right"
      data-aos="fade-left"
      data-aos-delay="100"
    >
      🔍
    </div>
    <div
      class="floating-emoji emoji-center-left"
      data-aos="fade-right"
      data-aos-delay="300"
    >
      💡
    </div>
    <v-col cols="12" md="8" data-aos="fade-up" class="text-center">
      <h2 class="display-2 font-weight-bold mb-10">
        About myself and the project
      </h2>

      <v-card class="pa-8 text-left" color="#2E1414" elevation="4">
        <p class="text-h6 mb-6">
          This project was designed as a conclusion to the CSCI 263: Ethical
          Issues in Software Design course at St. Olaf College. My goal is to
          raise awareness about the growing monopolies in the Tech industry and
          show the general public how their daily choices affect the market. I
          show the ethical aspects to the topic and let the user choose what
          they lean toward to.
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.section-container {
  min-height: 100vh;
  padding: 5rem 0;
}
</style>
