<template>
  <v-row class="section-container" align="center" justify="center">
    <div
      class="floating-emoji emoji-top-left"
      data-aos="fade-down-right"
      data-aos-delay="200"
    >
      🧑‍🤝‍🧑
    </div>
    <div
      class="floating-emoji emoji-center-right"
      data-aos="fade-left"
      data-aos-delay="400"
    >
      💼
    </div>

    <v-col cols="12" data-aos="fade-up" class="text-center">
      <h2 class="display-2 font-weight-bold mb-10">Who's involved?</h2>

      <v-row justify="center">
        <v-col cols="12" md="3" class="mb-4">
          <v-card
            class="pa-6 rounded-xl fill-height d-flex flex-column"
            color="#2E1414"
            elevation="4"
          >
            <h3 class="headline mb-4">Big Tech Companies</h3>
            <p>
              They aim to expand and own as big of a share of the market as
              possible, gaining large leverage and profits. This secures their
              freedom of decision regarding products and leverage against
              governments worldwide. However, as for-profit entities, their
              right to grow, protect their intellectual property, and operate
              freely in the market should be respected.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="3" class="mb-4">
          <v-card
            class="pa-6 rounded-xl fill-height d-flex flex-column"
            color="#2E1414"
            elevation="4"
          >
            <h3 class="headline mb-4">Small Companies</h3>
            <p>
              Newer startups are directly influenced by monopolistic practices
              that don't allow them to grow. They are often either acquired by
              big companies or fade away trying to compete against huge
              resources. They must have the right to fair competition, equal
              rights with larger companies, and the protection of their
              intellectual property by law.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="3" class="mb-4">
          <v-card
            class="pa-6 rounded-xl fill-height d-flex flex-column"
            color="#2E1414"
            elevation="4"
          >
            <h3 class="headline mb-4">General Users</h3>
            <p>
              The public pays for products and expects a fair return, good
              quality, and a smooth experience. Users expect stable pricing and
              the right to have multiple choices in the market. Most
              importantly, they have the right to decide what to purchase and
              the right to have their personal data protected.
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
