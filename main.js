/* global data */
function createLeaderBoardArray(stats) {
  var leaderBoardArray = []
  for (var i = 0; i < stats.length; i++) {
    var leaderBoardObject = {
      mmr: stats[i].rankedSeasons[5][10].rankPoints,
      name: stats[i].displayName
    }
    leaderBoardArray.push(leaderBoardObject)
  }
  leaderBoardArray.sort(function (a, b) {
    return parseFloat(b.mmr) - parseFloat(a.mmr)
  })
  return leaderBoardArray
}

function leaderBoardHeader() {
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
  return createUl
}

function leaderBoardRow(player, i) {
  var createUl = document.createElement('ul')
  var createPlace = document.createElement('li')
  var createPlayer = document.createElement('li')
  var createScore = document.createElement('li')
  createUl.className = 'row'
  createPlace.className = 'place'
  createPlayer.className = 'player'
  createScore.className = 'score'
  createPlace.textContent = i + 1
  createPlayer.textContent = player.name
  createScore.textContent = player.mmr
  createUl.appendChild(createPlace)
  createUl.appendChild(createPlayer)
  createUl.appendChild(createScore)
  return createUl
}

var writeLeaderBoard = function updateLeaderBoard() {
  var leaderBoardList = createLeaderBoardArray(data)
  var leaderBoardDOM = document.querySelector('#leader-board')
  leaderBoardDOM.appendChild(leaderBoardHeader())
  for (var i = 0; i < leaderBoardList.length; i++) {
    leaderBoardDOM.appendChild(leaderBoardRow(leaderBoardList[i], i))
  }
}

addEventListener('load', writeLeaderBoard)

var $search = document.querySelector('#search-top')

$search.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    for (var i = 0; i < data.length; i++) {
      if ($search.value === data[i].displayName) {
        return data[i]
      }
    }
  }
})
