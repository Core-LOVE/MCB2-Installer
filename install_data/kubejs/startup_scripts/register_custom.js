const $RestoneDustBlock = Java.loadClass('katebulka.digamma.content.block.RedstoneDustBlock')
const $Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
const $Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
const $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')

let redstonedustblock

StartupEvents.registry("block", (event) => {
    redstonedustblock = event.createCustom("modpack:redstone_dust_block", () => new $RestoneDustBlock($Properties.ofFullCopy($Blocks.SAND)))
})

StartupEvents.registry("item", (event) => {
    event.createCustom("modpack:redstone_dust_block", () => new $BlockItem(redstonedustblock.get(), new $IProperties()))
})