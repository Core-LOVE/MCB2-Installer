let woodsets = [
    "minecraft:oak",
    "minecraft:spruce",
    "minecraft:birch",
    "minecraft:acacia",
    "minecraft:jungle",
    "minecraft:dark_oak",
    "minecraft:mangrove",
    "minecraft:cherry",
    "minecraft:warped",
    "minecraft:crimson",
    "spawn:date",
    "spawn:rotten",
    "quark:azalea",
    "quark:blossom",
    "blockus:white_oak",
    'caverns_and_chasms:azalea',
    'nomansland:willow',
    'nomansland:walnut',
    'nomansland:maple',
    "minecraft:bamboo"
]

let blocks = [
    "_fence",
    "_door",
    "_sign",
    "_button",
    "_pressure_plate"
]

let count = {
    "_fence": 3,
    "_door": 3,
    "_sign": 3,
    "_button": 8,
    "_pressure_plate": 4,
}

let tables = {
    "quark:azalea": 'artistry:stone_table',
    "nomansland:willow": 'artistry:aspen_table',
    "nomansland:maple": 'artistry:calcite_table',
    "nomansland:walnut": 'artistry:andesite_table',
    "spawn:rotten": 'artistry:rotten_table',
    "spawn:date": 'artistry:granite_table',
    "quark:blossom": 'artistry:polished_blackstone_table',
    "blockus:white_oak": 'artistry:diorite_table',
    'caverns_and_chasms:azalea': 'artistry:tuff_table'
}

let variants = [

]

ServerEvents.recipes(event => {
    let simplify_cut = (name, input, mult) => {
        let real_name = name.replace(/.+:/, "")

        if (Item.exists(`artistry:${real_name}_table`)) {
            event.stonecutting(Item.of(`artistry:${real_name}_table`, 3 * mult), input)
        } else {
            let table = Item.of(tables[name], 3 * mult)

            event.stonecutting(table, input)
        }

        event.stonecutting(Item.of(`minecraft:stick`, 4 * mult), input)
        event.stonecutting(Item.of('blockus:wooden_frame', 4 * mult), input) 
        event.stonecutting(Item.of('supplementaries:timber_frame', 4 * mult), input)     
    }

    let simplify = (name, input, mult) => {
        if (!Item.exists(input)) {
            return
        }

        simplify_cut(name, input, 1 * mult)

        blocks.forEach(block => {
            event.stonecutting(Item.of(name + block, count[block] * mult), input)
        }) 
    }

    woodsets.forEach(name => {
        simplify(name, (name + "_planks"), 1)

        if (name == "minecraft:bamboo") {
            simplify(name, (name + "_block"), 4)
            simplify(name, (name.replace(":", ":stripped_") + "_block"), 4)
        } else {
            simplify(name, (name + "_log"), 4)
            simplify(name, (name.replace(":", ":stripped_") + "_log"), 4)
            simplify(name, (name + "_wood"), 4)  
            simplify(name, (name.replace(":", ":stripped_") + "_wood"), 4)  

            simplify(name, (name + "_stem"), 4)
            simplify(name, (name.replace(":", ":stripped_") + "_stem"), 4)
            simplify(name, (name + "_hyphae"), 4)  
            simplify(name, (name.replace(":", ":stripped_") + "_hyphae"), 4)
        }
    })
})