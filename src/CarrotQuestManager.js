import Snippets from './Snippets'

const CarrotQuestManager = {
  carrotQuest(args) {
    const snippets = Snippets.tags(args)

    const script = () => {
      const scriptEl = document.createElement('script')
      scriptEl.innerHTML = snippets.script
      return scriptEl
    }

    return {
      script,
    }
  },

  initialize({ carrotQuestId }) {
    const carrotQuest = this.carrotQuest({
      id: carrotQuestId,
    })

    document.head.appendChild(carrotQuest.script())
  },
}

module.exports = CarrotQuestManager
