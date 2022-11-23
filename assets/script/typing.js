const textDisplay = document.getElementById('name')
const phrases = ['Pluz', 'Nitisarath Phuttiphaphong', 'An aspiring Programmer','のは でした']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false
function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }
    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }
    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const time = isEnd ? 2000 : isDeleting ? 40 : 50
  setTimeout(loop, time)
}

loop()
