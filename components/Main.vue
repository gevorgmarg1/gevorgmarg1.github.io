<template>
  <v-container fluid class="pa-0">
    <Intro />
    <Stakeholders />

    <Scenario
      id="scenario1"
      title="First Scenario"
      description="You are buying a new phone. The iPhone is slightly more expensive, but all your friends have iPhones and use iMessage."
      :options="[
        {
          text: 'Buy the iPhone for convenience and social compatibility',
          score: -1
        },
        {
          text:
            'Buy an Android phone to support competition, even if it means no iMessage',
          score: 1
        },
        {
          text:
            'Buy a used/refurbished phone to avoid directly funding monopolies',
          score: 0
        }
      ]"
      :emojis="['📱', '🍏', '💬']"
    />
    <Rights />
    <Scenario
      id="scenario2"
      title="Second Scenario"
      description="You need a cloud storage solution. Google Drive comes pre-installed and is free, but a smaller startup offers a more private, paid alternative."
      :options="[
        { text: 'Use Google Drive because it is free and easy', score: -1 },
        {
          text:
            'Pay for the smaller startup to support privacy and competition',
          score: 1
        },
        { text: 'Use a local hard drive instead', score: 0 }
      ]"
      :emojis="['☁️', '💾', '🔒']"
    />
    <DataView />

    <Scenario
      id="scenario3"
      title="Third Scenario"
      description="A massive tech company is buying out a promising new startup that created an innovative app."
      :options="[
        {
          text:
            'This is great, the startup founders get rewarded for their hard work',
          score: -1
        },
        {
          text: 'This is bad, it kills competition and absorbs innovation',
          score: 1
        },
        {
          text: 'It depends on what the large company does with the app',
          score: 0
        }
      ]"
      :emojis="['🚀', '💼', '🤝']"
    />

    <EthicalIssues />
    <Scenario
      id="scenario4"
      title="Fourth Scenario"
      description="You want to sell a product online. Amazon takes a large cut but guarantees a huge audience. Setting up your own store means starting from zero."
      :options="[
        {
          text: 'Sell on Amazon. It\'s the best business decision.',
          score: -1
        },
        {
          text: 'Set up an independent store to avoid relying on Amazon.',
          score: 1
        },
        { text: 'Do both to balance reach and independence.', score: 0 }
      ]"
      :emojis="['📦', '🏪', '🚚']"
    />

    <Actions />

    <Scenario
      id="scenario5"
      title="Fifth Scenario"
      description="As a consumer, do you feel an ethical responsibility to seek out and support smaller startups?"
      :options="[
        {
          text: 'No, I just want the best product for the cheapest price.',
          score: -1
        },
        {
          text: 'Yes, I actively try to avoid Big Tech when possible.',
          score: 1
        },
        { text: 'I try to, but sometimes it is too inconvenient.', score: 0 }
      ]"
      :emojis="['🛒', '🤔', '💡']"
    />

    <Results />
    <AboutProject />
  </v-container>
</template>

<script>
import Intro from '@/components/Intro'
import Stakeholders from '@/components/Stakeholders'
import Scenario from '@/components/Scenario'
import DataView from '@/components/DataView'
import EthicalIssues from '@/components/EthicalIssues'
import Rights from '@/components/Rights'
import Actions from '@/components/Actions'
import Results from '@/components/Results'
import AboutProject from '@/components/AboutProject'

export default {
  components: {
    Intro,
    Stakeholders,
    Rights,
    Scenario,
    DataView,
    EthicalIssues,
    Actions,
    Results,
    AboutProject
  }
}
</script>

<style scoped></style>
