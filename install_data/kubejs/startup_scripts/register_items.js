const $Item$Properties = Java.loadClass("net.minecraft.world.item.Item$Properties")
const $HorseshoesItem = Java.loadClass('net.hyper_pigeon.horseshoes.items.HorseshoesItem')
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

StartupEvents.registry('armor_material', event => {
    event.create('kubejs:heels').defense({"boots": 1, "leggings": 1, "chestplate": 1, "helmet": 0, "body": 1})
})

StartupEvents.registry("item", (event) => {
    event.create("minecraft:nether_star_powder")
    .glow(true)

    let resource = new $ResourceLocation.fromNamespaceAndPath("horseshoes", "textures/entity/horse/armor/iron_horseshoes.png")

    event.create("minecraft:slag")
    event.create("nomansland:redstone")

    event.createCustom('horseshoes:horseshoes', () => new $HorseshoesItem(0, 0, new $Item$Properties().stacksTo(1), resource))
    event.createCustom('horseshoes:frozen_horseshoes', () => new $HorseshoesItem(0, 0, new $Item$Properties().stacksTo(1), resource))
    event.createCustom('horseshoes:aquatic_horseshoes', () => new $HorseshoesItem(0, 0, new $Item$Properties().stacksTo(1), resource))

    event.create("modpack:chisel", "pickaxe").tier("stone")

    event.create('modpack:energy_drink')
    .useAnimation('drink')
    .food(foodBuilder => {
        foodBuilder.nutrition(1)
        foodBuilder.saturation(1)
    })

    event.create('modpack:heels', 'boots')
        .texture("modpack:item/heels")
        .material("kubejs:heels")
})