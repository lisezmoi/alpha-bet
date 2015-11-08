'use strict'

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
  const getAllUsers = () => users.map(user => ({
    id: user.id,
    bets: user.bets,
    face: user.face,
    amount: user.amount,
  }))
  const add = socket => {
    if (!get(socket.id)) {
      users.push({
        id: socket.id,
        socket: socket,
        bets: [],
        face: randomFace(),
        amount: 100,
        betHistory: [],
        gameEnded: false,
      })
    }
    return usersApi
  }
  const rm = id => {
    const user = get(id)
    if (user) {
      users.splice(users.indexOf(user), 1)
    }
    return usersApi
  }
  const addBet = (id, letter) => {
    const user = get(id)
    if (!user || user.gameEnded) {
      return usersApi
    }
    if (user.bets.indexOf(letter) === -1) {
      // user.bets.push(letter)
      user.bets = [letter]
      user.betHistory = []
    }
    return usersApi
  }
  const rmBet = (id, letter) => {
    const user = get(id)
    if (user && user.bets.indexOf(letter) > -1) {
      user.bets.splice(user.bets.indexOf(letter), 1)
      user.betHistory = []
    }
    return usersApi
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
    users.forEach(user => {
      const diff = user.bets.reduce((amount, bet) => {
        if (!lineStats[bet]) return amount - Math.random() * 2
        const appearsEvery = freqs.total / freqs.letters[bet]
        const expectedFrequency = lineLen / appearsEvery
        const frequency = lineStats[bet]
        const frequencyScore = frequency / expectedFrequency
        let diff = 0
        if (frequencyScore < 1) {
          diff = frequencyScore / 50
        } else {
          diff = Math.pow(frequencyScore, 0.9)
        }
        return amount + diff * (1 - (7 / appearsEvery))
      }, 0)

      // Update the user object
      if (diff !== 0) {
        user.amount = user.amount + diff
        if (user.amount < 0) {
          user.amount = 0 // end
        }
        user.betHistory.unshift(diff)
        user.betHistory = user.betHistory.slice(0, 40)
      }
    })
    return usersApi
  }
  const usersApi = {
    get: get,
    add: add,
    rm: rm,
    users: users,
    addBet: addBet,
    rmBet: rmBet,
    getAllBets: getAllBets,
    getAllUsers: getAllUsers,
    updateAmounts: updateAmounts,
  }
  return usersApi
}
