<template>
  <v-row class="section-container" align="center" justify="center">
    <div
      class="floating-emoji emoji-top-left"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      📊
    </div>
    <div
      class="floating-emoji emoji-bottom-right"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      📉
    </div>
    <v-col cols="12" md="10" data-aos="fade-up" class="text-center">
      <h2 class="display-2 font-weight-bold mb-10">
        Data proving monopolies actually exist
      </h2>

      <v-row>
        <v-col cols="12">
          <v-card class="pa-6 fill-height" color="#2E1414">
            <h3 class="headline mb-4">Smartphone Market Share (US)</h3>
            <p>
              Apple holds about 63% of the mobile vendor market share. Samsung
              holds ~20.68%. Two companies control 83% of the entire market.
            </p>
            <div
              class="chart-placeholder mt-6 d-flex flex-column align-center justify-center"
            >
              <div
                id="mobile_vendor-US-monthly-202504-202604"
                style="max-width: 100%; overflow-x: auto;"
              ></div>
              <!-- You may change the values of width and height above to resize the chart -->
              <p class="mt-4 text-body-2">
                Source:
                <a
                  href="https://gs.statcounter.com/vendor-market-share/mobile/united-states-of-america"
                  >StatCounter Global Stats - Device Vendor Market Share</a
                >
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" class="mt-6">
          <v-card
            class="pa-6 fill-height d-flex flex-column justify-center"
            color="#2E1414"
          >
            <p class="text-h6">
              "When you are trying to buy a phone, the obvious choice becomes
              the iPhone, since that is what everybody else is using... Apple
              makes it impossible for companies from industries working
              alongside the mobile industry to grow and succeed."
            </p>
          </v-card>
        </v-col>
      </v-row>

      <v-icon size="64" class="bounce-arrow mt-10">mdi-arrow-down</v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://www.statcounter.com/js/fusioncharts.js',
          type: 'text/javascript'
        },
        {
          src:
            'https://gs.statcounter.com/chart.php?mobile_vendor-US-monthly-202504-202604',
          type: 'text/javascript'
        }
      ]
    }
  }
}
</script>

<style scoped>
.section-container {
  min-height: 100vh;
  padding: 5rem 0;
}
.chart-placeholder {
  border-radius: 8px;
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
