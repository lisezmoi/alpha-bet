const FACES = [
  '( >д< )',
  '( ;¬_¬)',
  '(ಠ ∩ ಠ)',
  '<(`^´)>',
  '┐(ﾟ～ﾟ)┌',
  '╰|⊡_⊡|╯',
  '|(ᗒᗣᗕ)|',
  '[ ⊙～⊙]',
  '(*’･Д･)',
  '(||ﾟДﾟ}',
  '\/\/ ･ั_･ั)',
  '(_ŏ.ŏ)/',
  '[ ¤_¤]',
  '( •᷄⌓•᷅ )',
  '૮(‘▱๋’ )',
  '( °д’)/',
  '(╬ ಠ⌓ಠ)',
  '/ ⊙▃⊙/',
  '( ‾᷅⚰‾᷄ )',
  'ʕ•̀ o •́ ʔ',
  'ᘳᗒ.ᗕᘰ',
  'ヾ(`⌓´)ﾉﾞ',
  '┗|｀O´|┛',
  '2(°L°)',
  '( ¤.¤)',
  '┗( °⌓°)',
  '(°v° )',
  '[ °^°]/',
  '(c ಠ.ಠ)',
  '| ⊙v⊙|',
  '< ‾᷅.‾᷄ >',
]

const randomFace = () => (
  FACES[Math.floor(Math.random() * FACES.length)]
)

module.exports = () => {
  const users = []
  const get = id => (
    users.find(user => user.id === id)
  )
  const add = id => {
    if (!get(id)) {
      users.push({
        id: id,
        bets: [],
        face: randomFace(),
        amount: 100,
      })
    }
    return users
  }
  const rm = id => {
    const user = get(id)
    if (user) {
      users.splice(users.indexOf(user), 1)
    }
    return users
  }
  const addBet = (id, letter) => {
    const user = get(id)
    if (user && user.bets.indexOf(letter) === -1) {
      user.bets.push(letter)
    }
    return users
  }
  const rmBet = (id, letter) => {
    const user = get(id)
    if (user && user.bets.indexOf(letter) > -1) {
      user.bets.splice(user.bets.indexOf(letter), 1)
    }
    return users
  }
  const getAllBets = () => users.reduce((allBets, user, i) => {
    user.bets.forEach(letter => {
      if (!allBets[letter]) {
        allBets[letter] = []
      }
      allBets[letter].push(user.id)
    })
    return allBets
  }, {})
  const updateAmounts = (line, freqs) => {
    const lineLen = line.content.length
    const lineStats = line.content.split('').reduce((o, letter) => {
      if (!o[letter]) o[letter] = 0
      o[letter] += 1
      return o
    }, {})
    return users.map(user => {
      user.amount = user.bets.reduce((amount, bet) => {
        if (!lineStats[bet]) return amount - Math.random() * 2
        const appearsEvery = freqs.total / freqs.letters[bet]
        const expectedFrequency = lineLen / appearsEvery
        const frequency = lineStats[bet]
        const frequencyScore = frequency / expectedFrequency
        if (frequencyScore < 1) {
          return amount + (frequencyScore / 50)
        }
        if (frequencyScore < 10) {
          return amount + frequencyScore
        }
        return amount + Math.pow(frequencyScore, 0.7)
      }, user.amount)
      return user
    })
  }
  return {
    get: get,
    add: add,
    rm: rm,
    users: users,
    addBet: addBet,
    rmBet: rmBet,
    getAllBets: getAllBets,
    updateAmounts: updateAmounts,
  }
}
