ItemEvents.pickedUp((event) => {
    event.server.runCommandSilent(`fieldguide grant ${event.player.name} only item:${event.item.id}`)
})

PlayerEvents.inventoryChanged(event => {
    const player = event.player
    const item = player.getMainHandItem()

    // if (item.id === 'minecraft:netherite_scrap') {
    //     player.getItemInHand(hand).count--
    // }
})