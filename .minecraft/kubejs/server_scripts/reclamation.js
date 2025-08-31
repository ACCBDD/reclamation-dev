EntityEvents.spawned(event => {
  let entity = event.entity;

  // Check if we are spawning a chicken with passengers
  if (entity.type == 'minecraft:chicken' && !entity.passengers.isEmpty()) {

    // detach all passengers
    entity.passengers.forEach(p => {
      p.stopRiding();
    });

    // cancel the spawning event for the chicken
    event.cancel();
  }
})

ServerEvents.loaded(event => {
  if (event.server.persistentData.gameRules) return
  event.server.gameRules.set("doTraderSpawning", false)
  event.server.runCommandSilent('difficulty hard')

  event.server.persistentData.gameRules = true
})