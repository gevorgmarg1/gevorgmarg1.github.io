<template>
  <v-row class="section-container" align="center" justify="center">
    <div
      class="floating-emoji emoji-center-left"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      🛒
    </div>
    <div
      class="floating-emoji emoji-top-right"
      data-aos="fade-down"
      data-aos-delay="400"
    >
      💸
    </div>

    <v-col cols="12" data-aos="fade-up" class="text-center">
      <h2 class="display-2 font-weight-bold mb-10">
        Possible actions that everyone can take
      </h2>

      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-8 text-left" color="#2E1414" elevation="4">
            <h3 class="headline mb-4">
              1. Always support large companies.
            </h3>
            <p class="mb-2">
              <strong>Utilitarianism:</strong>
              Maximizes immediate personal convenience, reliability, and
              financial utility. Large companies often provide the most
              feature-rich products at the lowest immediate cost.
            </p>
            <p class="mb-6">
              <strong>Virtue Ethics:</strong> Fails the moral duty to promote
              fairness. Unconditionally supporting monopolies is against the
              virtue of supporting community and equal opportunity, ultimately
              harming societal utility in the long run by killing innovation.
            </p>

            <h3 class="headline mb-4">
              2. Always support smaller businesses.
            </h3>
            <p class="mb-2">
              <strong>Deontology:</strong> Fulfills the duty to maintain fair
              competition and prevent the concentration of unchecked power.
              Virtue ethics views this as a courageous and just action,
              prioritizing long-term market health over short-term personal
              convenience.
            </p>
            <p class="mb-6">
              <strong>Utilitarianism:</strong> If the smaller product is
              significantly worse or more expensive, it might decrease immediate
              overall happiness for the user. It could also be seen as unfairly
              penalizing a large company that earned its success through merit.
            </p>

            <h3 class="headline mb-4">
              3. Sometimes, move with your best interest.
            </h3>
            <p class="mb-2">
              <strong>Ethical Egoism:</strong> Validates acting in one's own
              self-interest and financial comfort. Utilitarianism might also
              support this if a balanced approach creates sustainable personal
              outcomes without extreme inconvenience.
            </p>
            <p>
              <strong>Virtue Ethics:</strong> Acting purely out of self-interest
              (convenience/comfort) lacks moral worth because the action is not
              driven by a universal duty to fairness. It can be seen as egoistic
              and selfish, passively allowing monopolies to consolidate power.
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
