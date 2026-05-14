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
    // Record new answer
    state.answers[scenarioId] = scoreValue
    // Add new score
    state.marketScore += scoreValue
  }
}
