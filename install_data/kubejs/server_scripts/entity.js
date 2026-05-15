EntityEvents.spawned(e => {
    const entity = e.entity

    if (entity.item && entity.item.id === 'dsides_creeper:lurker_fragment') {
        e.cancel()
    }

    if (entity.item && entity.item.id === 'minecraft:glowstone_dust') {
        e.cancel()
    }
})