var leaderBoardArray = []

function writeLeaderboard(array) {
  for (var i = 0; i < array.length; i++) {
    var leaderBoardObject = {
      mmr: array[i].rankedSeasons[5][10].rankPoints,
      name: array[i].displayName,
    }
    leaderBoardArray.push(leaderBoardObject)
  }
  leaderBoardArray.sort(function (a,b) {
    return parseFloat(b.mmr) - parseFloat(a.mmr)
  })
  leaderboardUl()
}

function leaderboardUl() {
  var createUl = document.createElement('ul')
  var createPlace = document.createElement('li')
  var createPlayer = document.createElement('li')
  var createScore = document.createElement('li')
  createUl.className = 'row'
  createPlace.className = 'place'
  createPlayer.className = 'player'
  createScore.className = 'score'
  createPlace.textContent = 'RANK'
  createPlayer.textContent = 'NAME'
  createScore.textContent = 'MMR'
  createUl.appendChild(createPlace)
  createUl.appendChild(createPlayer)
  createUl.appendChild(createScore)
  document.querySelector('#leader-board').appendChild(createUl)
  for (var i = 0; i < leaderBoardArray.length; i++) {
    leaderboardList(i)
  }
}

function leaderboardList(i) {
  var createUl = document.createElement('ul')
  var createPlace = document.createElement('li')
  var createPlayer = document.createElement('li')
  var createScore = document.createElement('li')
  createUl.className = 'row'
  createPlace.className = 'place'
  createPlayer.className = 'player'
  createScore.className = 'score'
  createPlace.textContent = i + 1
  createPlayer.textContent = leaderBoardArray[i].name
  createScore.textContent = leaderBoardArray[i].mmr
  createUl.appendChild(createPlace)
  createUl.appendChild(createPlayer)
  createUl.appendChild(createScore)
  document.querySelector('#leader-board').appendChild(createUl)
}

addEventListener('load', writeLeaderboard(data))
