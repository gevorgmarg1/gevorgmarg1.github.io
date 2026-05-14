<template>
  <v-row class="section-container" align="center" justify="center">
    <div
      class="floating-emoji emoji-top-left"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      ❓
    </div>
    <div
      v-if="emojis[0]"
      class="floating-emoji emoji-bottom-right"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      {{ emojis[0] }}
    </div>
    <div
      v-if="emojis[1]"
      class="floating-emoji emoji-center-left"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      {{ emojis[1] }}
    </div>
    <v-col cols="12" md="8" data-aos="fade-up" class="text-center">
      <v-card class="pa-10 rounded-xl" color="#2E1414" elevation="6">
        <h2 class="display-1 mb-6">{{ title }}</h2>
        <p class="text-h6 mb-8">{{ description }}</p>

        <v-row justify="center" class="mb-6">
          <v-col v-for="(option, index) in options" :key="index" cols="12">
            <v-btn
              block
              large
              color="white"
              class="mb-3 py-6 option-btn"
              :class="{
                'black--text': selected === index,
                'white--text': selected !== index
              }"
              :outlined="selected !== index"
              @click="selectOption(index)"
            >
              {{ option.text }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card>

      <v-icon size="64" class="bounce-arrow mt-10">mdi-arrow-down</v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    options: { type: Array, required: true },
    emojis: { type: Array, default: () => [] }
  },
  data() {
    return {
      selected: null
    }
  },
  methods: {
    selectOption(index) {
      this.selected = index
      this.$store.commit('addAnswer', {
        scenarioId: this.id,
        scoreValue: this.options[index].score
      })
    }
  }
}
</script>

<style scoped>
.section-container {
  min-height: 100vh;
  padding: 5rem 0;
}
.option-btn {
  height: auto !important;
  min-height: 54px;
}
.option-btn ::v-deep .v-btn__content {
  white-space: normal !important;
  text-align: center;
  flex: 1 1 auto;
  line-height: 1.4;
  padding: 12px 0;
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
