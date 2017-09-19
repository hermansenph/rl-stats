/* global data */
function createLeaderBoardArray(dataModel, gameMode) {
  var leaderBoardArray = []
  var leaderBoardObject = {}
  for (var i = 0; i < dataModel.length; i++) {
    if (gameMode === 'Solo Duel') {
      leaderBoardObject = {
        mmr: dataModel[i].rankedSeasons[5][10].rankPoints,
        name: dataModel[i].displayName
      }
    }
    if (gameMode === 'Doubles') {
      leaderBoardObject = {
        mmr: dataModel[i].rankedSeasons[5][11].rankPoints,
        name: dataModel[i].displayName
      }
    }
    if (gameMode === 'Solo Standard') {
      leaderBoardObject = {
        mmr: dataModel[i].rankedSeasons[5][12].rankPoints,
        name: dataModel[i].displayName
      }
    }
    if (gameMode === 'Standard') {
      leaderBoardObject = {
        mmr: dataModel[i].rankedSeasons[5][13].rankPoints,
        name: dataModel[i].displayName
      }
    }
    if (gameMode === 'Wins') {
      leaderBoardObject = {
        mmr: dataModel[i].stats.wins,
        name: dataModel[i].displayName
      }
    }
    if (gameMode === 'Goals') {
      leaderBoardObject = {
        mmr: dataModel[i].stats.goals,
        name: dataModel[i].displayName
      }
    }
    if (gameMode === 'MVPs') {
      leaderBoardObject = {
        mmr: dataModel[i].stats.mvps,
        name: dataModel[i].displayName
      }
    }
    if (gameMode === 'Saves') {
      leaderBoardObject = {
        mmr: dataModel[i].stats.saves,
        name: dataModel[i].displayName
      }
    }
    if (gameMode === 'Shots') {
      leaderBoardObject = {
        mmr: dataModel[i].stats.shots,
        name: dataModel[i].displayName
      }
    }
    if (gameMode === 'Assists') {
      leaderBoardObject = {
        mmr: dataModel[i].stats.assists,
        name: dataModel[i].displayName
      }
    }
    leaderBoardArray.push(leaderBoardObject)
  }
  leaderBoardArray.sort(function (a, b) {
    return parseFloat(b.mmr) - parseFloat(a.mmr)
  })
  return leaderBoardArray
}

function leaderBoardMMRButtons() {
  var createDiv = document.createElement('div')
  var createSoloDuel = document.createElement('button')
  var createDoubles = document.createElement('button')
  var createSoloStandard = document.createElement('button')
  var createStandard = document.createElement('button')
  createSoloDuel.className = 'mmrButton'
  createDoubles.className = 'mmrButton'
  createSoloStandard.className = 'mmrButton'
  createStandard.className = 'mmrButton'
  createSoloDuel.setAttribute('type', 'button')
  createDoubles.setAttribute('type', 'button')
  createSoloStandard.setAttribute('type', 'button')
  createStandard.setAttribute('type', 'button')
  createDiv.className = 'buttons'
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

function leaderBoardStatButtons() {
  var createDiv = document.createElement('div')
  var createWins = document.createElement('button')
  var createGoals = document.createElement('button')
  var createMVPs = document.createElement('button')
  var createSaves = document.createElement('button')
  var createShots = document.createElement('button')
  var createAssists = document.createElement('button')
  createWins.className = 'statButton'
  createGoals.className = 'statButton'
  createMVPs.className = 'statButton'
  createSaves.className = 'statButton'
  createShots.className = 'statButton'
  createAssists.className = 'statButton'
  createWins.setAttribute('type', 'button')
  createGoals.setAttribute('type', 'button')
  createMVPs.setAttribute('type', 'button')
  createSaves.setAttribute('type', 'button')
  createShots.setAttribute('type', 'button')
  createAssists.setAttribute('type', 'button')
  createDiv.className = 'buttons'
  createWins.id = 'wins'
  createGoals.id = 'goals'
  createMVPs.id = 'mvps'
  createSaves.id = 'saves'
  createShots.id = 'shots'
  createAssists.id = 'assists'
  createWins.textContent = 'Wins'
  createGoals.textContent = 'Goals'
  createMVPs.textContent = 'MVPs'
  createSaves.textContent = 'Saves'
  createShots.textContent = 'Shots'
  createAssists.textContent = 'Assists'
  createDiv.appendChild(createWins)
  createDiv.appendChild(createGoals)
  createDiv.appendChild(createMVPs)
  createDiv.appendChild(createSaves)
  createDiv.appendChild(createShots)
  createDiv.appendChild(createAssists)
  return createDiv
}

function leaderBoardHeader(text) {
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
  createScore.textContent = 'SCORE'
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
  showElement($leaderboard)
  removeElement($playerStats)
  var leaderBoardList = createLeaderBoardArray(data, event.target.textContent)
  var leaderBoardDOM = document.querySelector('#leader-board')
  var createDiv = document.createElement('div')
  createDiv.id = 'leader-board-rows'
  var leaderBoardDiv = document.querySelector('#leader-board-rows')
  if (document.querySelector('.buttons') === null) {
    leaderBoardDOM.appendChild(leaderBoardStatButtons())
    leaderBoardDOM.appendChild(leaderBoardMMRButtons())
    var $buttons = document.querySelectorAll('.buttons')[0]
    var $buttons2 = document.querySelectorAll('.buttons')[1]
    $buttons.addEventListener('click', writeLeaderBoard)
    $buttons2.addEventListener('click', writeLeaderBoard)
    leaderBoardDOM.appendChild(createDiv)
  }
  if (event.target.textContent !== null && (event.target.className === 'statButton' || event.target.className === 'mmrButton')) {
    clearLeaderBoard(leaderBoardDiv)
    leaderBoardDiv.appendChild(leaderBoardHeader(event.target.textContent))
    for (var i = 0; i < leaderBoardList.length; i++) {
      leaderBoardDiv.appendChild(leaderBoardRow(leaderBoardList[i], i))
    }
  }
}

addEventListener('load', writeLeaderBoard)

var $search = document.querySelector('#search-top')
var $searchCompare = ''
var $leaderboard = document.querySelector('#leader-board')
var $playerStats = document.querySelector('#player-stats')
var $siteLogo = document.querySelector('#site-logo')

$siteLogo.addEventListener('click', writeLeaderBoard)

function removeElement(element) {
  element.className = 'hidden'
  element.innerHTML = ''
}

function showElement(element) {
  element.className = ''
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

function addComparisonSearch() {
  var create$input = document.createElement('input')
  var create$div = document.createElement('div')
  var create$img = document.createElement('img')
  create$input.id = 'search-bottom'
  create$div.id = 'compare-search'
  create$img.id = 'search-icon'
  create$input.setAttribute('type', 'text')
  create$input.setAttribute('placeholder', 'Comparison')
  create$img.setAttribute('src', 'images/search-icon.png')
  create$div.appendChild(create$input)
  create$div.appendChild(create$img)
  return create$div
}

function createStatScoreComparison(statistics, i) {
  var create$td1 = document.createElement('td')
  var statArray = [
    statistics.stats.wins,
    statistics.stats.goals,
    statistics.stats.mvps,
    statistics.stats.saves,
    statistics.stats.shots,
    statistics.stats.assists
  ]
  create$td1.textContent = statArray[i]
  return create$td1
}

function createStatMMRComparison(statistics, i) {
  var create$td1 = document.createElement('td')
  var statArray = [
    statistics.rankedSeasons[5][10].rankPoints,
    statistics.rankedSeasons[5][11].rankPoints,
    statistics.rankedSeasons[5][12].rankPoints,
    statistics.rankedSeasons[5][13].rankPoints
  ]
  create$td1.textContent = statArray[i]
  return create$td1
}

function createComparisonHeader(playerName) {
  var create$th = document.createElement('th')
  var create$button = document.createElement('button')
  create$button.setAttribute('type', 'button')
  create$button.className = 'removePlayer'
  create$button.textContent = '(x)'
  create$th.textContent = playerName.displayName
  create$th.appendChild(create$button)
  return create$th
}

function generateData(event) {
  if (event.keyCode === 13) {
    var searchName = $search.value
    var player = searchPlayer(searchName, data)
    if (player !== undefined) {
      var $tableStats = document.querySelector('#player-stats')
      removeElement($leaderboard)
      showElement($playerStats)
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
      document.querySelector('#player-stats').appendChild(addComparisonSearch())
      $searchCompare = document.querySelector('#search-bottom')
      $searchCompare.addEventListener('keydown', generateComparison)
    }
  }
}

function generateComparison(event) {
  if (event.keyCode === 13) {
    var searchName = $searchCompare.value
    var player = searchPlayer(searchName, data)
    var $tableStats = document.querySelector('#player-stats-points')
    var $tableMMR = document.querySelector('#player-stats-rank')
    var $tableStatsRow = $tableStats.querySelectorAll('tr')
    var $tableMMRRow = $tableMMR.querySelectorAll('tr')
    if (player !== undefined && $tableStatsRow[0].querySelectorAll('th')[10] === undefined) {
      var $tableCompareHeader = createComparisonHeader(player)
      $tableStatsRow[0].appendChild($tableCompareHeader.cloneNode(true))
      $tableMMRRow[0].appendChild($tableCompareHeader.cloneNode(true))
      for (var num = 0; num < 6; num++) {
        $tableStatsRow[(num + 1)].appendChild(createStatScoreComparison(player, num))
      }
      for (num = 0; num < 4; num++) {
        $tableMMRRow[(num + 1)].appendChild(createStatMMRComparison(player, num))
      }
      $tableStats.addEventListener('click', removeComparison)
      $tableMMR.addEventListener('click', removeComparison)
    }
  }
}

function removeComparison(event) {
  var $tableStats = document.querySelector('#player-stats-points')
  var $tableMMR = document.querySelector('#player-stats-rank')
  var stat$th = $tableStats.querySelectorAll('th')
  var mmr$th = $tableMMR.querySelectorAll('th')
  var stat$tr = $tableStats.querySelectorAll('tr')
  var mmr$tr = $tableMMR.querySelectorAll('tr')
  for (var i = 0; i < stat$th.length; i++) {
    if (event.target.parentElement.textContent === document.querySelectorAll('th')[i].textContent) {
      stat$tr[0].removeChild(stat$th[i])
      mmr$tr[0].removeChild(mmr$th[i])
      for (var num = 1; num < stat$tr.length; num++) {
        stat$tr[num].removeChild(stat$tr[num].querySelectorAll('td')[i])
      }
      for (num = 1; num < mmr$tr.length; num++) {
        mmr$tr[num].removeChild(mmr$tr[num].querySelectorAll('td')[i])
      }
    }
  }
}

$search.addEventListener('keydown', generateData)
