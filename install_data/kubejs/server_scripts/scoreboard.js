ServerEvents.loaded(event => {
    event.server.runCommandSilent('scoreboard objectives add modpackTotalScore xp')
})