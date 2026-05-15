let $ModConfig = Java.loadClass("com.evandev.reliable_remover.config.ModConfig")
let blacklisted = $ModConfig.get().blacklistedItems

ServerEvents.tags('item', event => {
    blacklisted.forEach(id => {
        if (Item.exists(id)) {
            event.removeAllTagsFrom(id)
            event.add("c:hidden_from_recipe_viewers", id)
            // console.log(id)
        }
    })
})