import Vue from 'vue'

export const state = () => ({
  marketScore: 0,
  answers: {}
})

export const mutations = {
  addAnswer(state, { scenarioId, scoreValue }) {
    // If the user already answered this scenario, subtract the old score first
    if (state.answers[scenarioId] !== undefined) {
      state.marketScore -= state.answers[scenarioId]
    }
    // Use Vue.set so Vue 2 can track new property additions reactively
    Vue.set(state.answers, scenarioId, scoreValue)
    // Add new score
    state.marketScore += scoreValue
  }
}
