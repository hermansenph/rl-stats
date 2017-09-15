/* global data */
function createLeaderBoardArray(stats, gameMode) {
  var leaderBoardArray = []
  var leaderBoardObject = {}
  for (var i = 0; i < stats.length; i++) {
    if (gameMode === 'Solo Duel') {
      leaderBoardObject = {
        mmr: stats[i].rankedSeasons[5][10].rankPoints,
        name: stats[i].displayName
      }
    }
    if (gameMode === 'Doubles') {
      leaderBoardObject = {
        mmr: stats[i].rankedSeasons[5][11].rankPoints,
        name: stats[i].displayName
      }
    }
    if (gameMode === 'Solo Standard') {
      leaderBoardObject = {
        mmr: stats[i].rankedSeasons[5][12].rankPoints,
        name: stats[i].displayName
      }
    }
    if (gameMode === 'Standard') {
      leaderBoardObject = {
        mmr: stats[i].rankedSeasons[5][13].rankPoints,
        name: stats[i].displayName
      }
    }
    leaderBoardArray.push(leaderBoardObject)
  }
  leaderBoardArray.sort(function (a, b) {
    return parseFloat(b.mmr) - parseFloat(a.mmr)
  })
  return leaderBoardArray
}

function leaderBoardButtons() {
  var createDiv = document.createElement('div')
  var createSoloDuel = document.createElement('button')
  var createDoubles = document.createElement('button')
  var createSoloStandard = document.createElement('button')
  var createStandard = document.createElement('button')
  createSoloDuel.className = 'button'
  createDoubles.className = 'button'
  createSoloStandard.className = 'button'
  createStandard.className = 'button'
  createSoloDuel.setAttribute('type', 'button')
  createDoubles.setAttribute('type', 'button')
  createSoloStandard.setAttribute('type', 'button')
  createStandard.setAttribute('type', 'button')
  createDiv.id = 'buttons'
  createSoloDuel.id = 'solo-duel'
  createDoubles.id = 'doubles'
  createSoloStandard.id = 'solo-standard'
  createStandard.id = 'standard'
  createSoloDuel.textContent = 'Solo Duel'
  createDoubles.textContent = 'Doubles'
  createSoloStandard.textContent = 'Solo Standard'
  createStandard.textContent = 'Standard'
  createDiv.appendChild(createSoloDuel)
  createDiv.appendChild(createDoubles)
  createDiv.appendChild(createSoloStandard)
  createDiv.appendChild(createStandard)
  return createDiv
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

var writeLeaderBoard = function updateLeaderBoard(event) {
  var leaderBoardList = createLeaderBoardArray(data, event.target.textContent)
  var leaderBoardDOM = document.querySelector('#leader-board')
  var createDiv = document.createElement('div')
  createDiv.id = 'leader-board-rows'
  var leaderBoardDiv = document.querySelector('#leader-board-rows')
  if (document.querySelector('#buttons') === null) {
    leaderBoardDOM.appendChild(leaderBoardButtons())
    var $buttons = document.querySelector('#buttons')
    $buttons.addEventListener('click', writeLeaderBoard)
    leaderBoardDOM.appendChild(createDiv)
  }
  if (event.target.textContent !== null) {
    clearLeaderBoard(leaderBoardDiv)
    leaderBoardDiv.appendChild(leaderBoardHeader())
    for (var i = 0; i < leaderBoardList.length; i++) {
      leaderBoardDiv.appendChild(leaderBoardRow(leaderBoardList[i], i))
    }
  }
}

addEventListener('load', writeLeaderBoard)

var $search = document.querySelector('#search-top')
var $leaderboard = document.querySelector('#leader-board')
var $playerStats = document.querySelector('#player-stats')

function removeElement(element) {
  element.className = 'hidden'
  element.innerHTML = ''
}

function clearLeaderBoard(div) {
  div.innerHTML = ''
}

function clearPlayerStats() {
  $playerStats.innerHTML = ''
}

function createPlayerName() {
  var $playerName = document.createElement('p')
  $playerName.textContent = $search.value
  $playerName.id = 'player-name'
  $playerStats.appendChild($playerName)
}

function createStatHeader() {
  var createTable1 = document.createElement('table')
  var create$tr1 = document.createElement('tr')
  var create$th1 = document.createElement('th')
  var create$th2 = document.createElement('th')
  createTable1.className = 'table'
  createTable1.id = 'player-stats-points'
  create$th1.textContent = 'Stat'
  create$th2.textContent = 'Score'
  create$tr1.appendChild(create$th1)
  create$tr1.appendChild(create$th2)
  createTable1.appendChild(create$tr1)
  return createTable1
}

function createMMRHeader() {
  var createTable2 = document.createElement('table')
  var create$tr2 = document.createElement('tr')
  var create$th3 = document.createElement('th')
  var create$th4 = document.createElement('th')
  createTable2.className = 'table'
  createTable2.id = 'player-stats-rank'
  create$th3.textContent = 'Game Mode'
  create$th4.textContent = 'MMR'
  create$tr2.appendChild(create$th3)
  create$tr2.appendChild(create$th4)
  createTable2.appendChild(create$tr2)
  return createTable2
}

function createStatScore(statistics, i) {
  var create$tr1 = document.createElement('tr')
  var create$td1 = document.createElement('td')
  var create$td2 = document.createElement('td')
  var statArray = [
    'Wins',
    'Goals',
    'MVPs',
    'Saves',
    'Shots',
    'Assists',
    statistics.stats.wins,
    statistics.stats.goals,
    statistics.stats.mvps,
    statistics.stats.saves,
    statistics.stats.shots,
    statistics.stats.assists
  ]
  create$td1.textContent = statArray[i]
  create$td2.textContent = statArray[(i + 6)]
  create$tr1.appendChild(create$td1)
  create$tr1.appendChild(create$td2)
  return create$tr1
}

function createStatMMR(statistics, i) {
  var create$tr1 = document.createElement('tr')
  var create$td1 = document.createElement('td')
  var create$td2 = document.createElement('td')
  var statArray = [
    'Solo Duel',
    'Doubles',
    'Solo Standard',
    'Standard',
    statistics.rankedSeasons[5][10].rankPoints,
    statistics.rankedSeasons[5][11].rankPoints,
    statistics.rankedSeasons[5][12].rankPoints,
    statistics.rankedSeasons[5][13].rankPoints
  ]
  create$td1.textContent = statArray[i]
  create$td2.textContent = statArray[(i + 4)]
  create$tr1.appendChild(create$td1)
  create$tr1.appendChild(create$td2)
  return create$tr1
}

var searchPlayer = function (displayName, players) {
  for (var i = 0; i < players.length; i++) {
    if (displayName === players[i].displayName) {
      return players[i]
    }
  }
}

function generateData(event) {
  if (event.keyCode === 13) {
    var searchName = $search.value
    var player = searchPlayer(searchName, data)
    if (player !== undefined) {
      var $tableStats = document.querySelector('#player-stats')
      removeElement($leaderboard)
      clearPlayerStats()
      createPlayerName()
      var $tableStatsPoints = createStatHeader()
      var $tableStatsMMR = createMMRHeader()
      $tableStats.appendChild($tableStatsPoints)
      $tableStats.appendChild($tableStatsMMR)
      for (var num = 0; num < 6; num++) {
        $tableStatsPoints.appendChild(createStatScore(player, num))
      }
      for (num = 0; num < 4; num++) {
        $tableStatsMMR.appendChild(createStatMMR(player, num))
      }
    }
  }
}

$search.addEventListener('keydown', generateData)
