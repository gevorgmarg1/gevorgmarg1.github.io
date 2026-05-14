<template>
  <v-row class="section-container" align="center" justify="center">
    <div
      class="floating-emoji emoji-top-right"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      🏆
    </div>
    <div
      class="floating-emoji emoji-center-left"
      data-aos="fade-right"
      data-aos-delay="500"
    >
      📈
    </div>

    <v-col cols="12" data-aos="fade-up" class="text-center">
      <h2 class="display-2 font-weight-bold mb-10">Results of the quiz</h2>
      <p class="display-1 mb-8">How your choices have changed the market</p>

      <v-card class="pa-10 mx-auto" max-width="600" color="#2E1414">
        <p class="text-h5">{{ resultMessage }}</p>
      </v-card>

      <v-icon size="64" class="bounce-arrow mt-10">mdi-arrow-down</v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    marketScore() {
      return this.$store.state.marketScore
    },
    allAnswered() {
      return Object.keys(this.$store.state.answers).length === 5
    },
    resultMessage() {
      if (!this.allAnswered) {
        return 'Please answer all 5 scenario questions to see the results of your choices!'
      }
      const score = this.marketScore
      if (score < -1) {
        return 'The market has become entirely monopolistic based on these trends. Large companies bought out or crushed their competition, meaning many innovative small companies went out of business completely, leaving consumers with no alternatives and total reliance on a few massive corporations.'
      }
      if (score >= -1 && score <= 1) {
        return "You are staying neutral, but private companies are still trying extremely hard to become monopolistic. Since consumer choice alone isn't stopping them, it is now entirely left to the government to regulate and control the market—which sometimes succeeds, but sometimes fails."
      }
      return 'Because of choices like yours, slower companies are steadily growing! However, because they are small, it takes a long time for them to innovate. They usually have to ask for crowdfunding or charge slightly more for their products just so they can afford to fund their research and development.'
    }
  }
}
</script>

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
