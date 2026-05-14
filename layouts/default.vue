<template>
  <v-app dark>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.v-application,
.v-application [class*='display-'],
.v-application [class*='text-'],
.v-application .headline,
.v-application .title,
.v-application .subtitle-1,
.v-application .subtitle-2,
.v-application .body-1,
.v-application .body-2,
.v-application .caption,
.v-application .overline {
  font-family: 'Inter', sans-serif !important;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.theme--dark.v-application {
  background-color: #551616 !important;
}

.floating-emoji {
  position: absolute;
  font-size: 5rem;
  opacity: 0.15;
  z-index: 0;
  pointer-events: none;
  filter: grayscale(0.5) sepia(1) hue-rotate(310deg) saturate(2); /* Tints emojis slightly reddish to match palette */
}

@media screen and (max-width: 960px) {
  .floating-emoji {
    display: none;
  }
}

.section-container {
  position: relative;
  overflow: hidden; /* Prevents emojis from causing horizontal scrollbars */
}

.emoji-top-left {
  top: 15%;
  left: 3%;
}
.emoji-top-right {
  top: 15%;
  right: 3%;
}
.emoji-bottom-left {
  bottom: 15%;
  left: 4%;
}
.emoji-bottom-right {
  bottom: 15%;
  right: 4%;
}
.emoji-center-left {
  top: 50%;
  left: 2%;
}
.emoji-center-right {
  top: 50%;
  right: 2%;
}
</style>
