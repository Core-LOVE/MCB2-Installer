let blocksets = {}

let ignored_stones = Object.keys({
    'minecraft:stone': true,
    'minecraft:cobblestone': true,
    'minecraft:smooth_stone': true,
    'darkerdepths:aridrock': true,
    'blockus:bluestone': true,
    'minecraft:dripstone_block': true,
    'minecraft:basalt': true,
    'minecraft:granite': true,
    'blockus:marble': true,
    'minecraft:packed_mud': true,
    'minecraft:packed_mud': true,
    'darkerdepths:duskrock': true,
    'minecraft:deepslate': true,
    'minecraft:tuff': true,
    'minecraft:blackstone': true,
    'minecraft:netherrack': true,
    'minecraft:terracotta': true
})

let transform = {
    "bricks": "brick",
    "tiles": "tile"
}

let newset = (name, og) => {
    let arr = []

    og.forEach(element => {
        let new_element = `${element}${name}`

        if (Item.exists(new_element)) {
            arr.push(new_element)
        } else {
            for (let t in transform) {
                new_element = new_element.replace(t, transform[t])

                if (Item.exists(new_element)) {
                    arr.push(new_element)
                    continue
                }
            }
        }
    })

    return arr
}

let automate = (name, blockset) => {
    blocksets[name] = blockset

    // blocksets[`${name}_stairs`] = newset("_stairs", blockset)
    // blocksets[`${name}_slab`] = newset("_slab", blockset)
    // blocksets[`${name}_wall`] = newset("_wall", blockset)
}

automate("tuff", ['minecraft:tuff', 'minecraft:chiseled_tuff', 'minecraft:polished_tuff', 'minecraft:tuff_bricks', 'blockus:cracked_tuff_bricks', 'blockus:tuff_pillar', 'blockus:limestone_bricks', 'abyssal_decor:lion_statue_bottom'])
automate("marble", ['blockus:marble', 'blockus:polished_marble', 'blockus:marble_bricks', 'blockus:marble_tiles', 'blockus:chiseled_marble', 'blockus:marble_pillar', 'blockus:small_marble_bricks'])
automate("bluestone", ['blockus:bluestone', 'blockus:polished_bluestone', 'blockus:bluestone_bricks', 'blockus:bluestone_tiles', 'blockus:chiseled_bluestone', 'blockus:bluestone_pillar', 'blockus:small_bluestone_bricks'])
automate("limestone", ['darkerdepths:aridrock', 'darkerdepths:polished_aridrock', 'darkerdepths:aridrock_bricks', 'darkerdepths:chiseled_aridrock_bricks', 'darkerdepths:cracked_aridrock_bricks', 'blockus:small_limestone_bricks', 'blockus:limestone_pillar', 'quark:limestone_bricks'])
automate("dolomite", ['darkerdepths:duskrock', 'darkerdepths:polished_duskrock', 'darkerdepths:duskrock_bricks', 'darkerdepths:chiseled_duskrock_bricks', 'darkerdepths:cracked_duskrock_bricks', 'blockus:small_sandstone_bricks', 'blockus:sandstone_pillar', 'blockus:tuff_tiles'])

let stone = ['minecraft:stone', 'minecraft:andesite', 'minecraft:smooth_stone', 'supplementaries:stone_tile', 'minecraft:chiseled_stone_bricks', 'minecraft:stone_bricks', 'quark:limestone_pillar', 'minecraft:cracked_stone_bricks', 'quark:jasper_bricks', 'nomansland:polished_stone', 'mannequins:statue']
stone = stone.concat(['minecraft:cobblestone', 'blockus:diorite_bricks', 'nomansland:cobblestone_bricks', 'nomansland:cracked_cobblestone_bricks', 'blockus:chiseled_diorite_bricks', 'blockus:cobblestone_bricks', 'blockus:polished_diorite_pillar', 'minecraft:polished_diorite', 'sub_expansion:stone_stalagmite'])

automate("stone", stone)

let deepslate = ['minecraft:deepslate', 'minecraft:polished_deepslate', 'blockus:quartz_tiles', 'minecraft:deepslate_bricks', 'minecraft:chiseled_deepslate', 'minecraft:deepslate_tiles', 'blockus:deepslate_pillar', 'minecraft:cracked_deepslate_bricks']
deepslate = deepslate.concat(['minecraft:cobbled_deepslate', 'nomansland:cobbled_deepslate_bricks', 'oreganized:gargoyle', 'sub_expansion:deepslate_stalagmite'])

automate("deepslate", deepslate)

automate("granite", ['minecraft:polished_granite', 'blockus:polished_granite_pillar', 'blockus:granite_bricks', 'minecraft:granite', 'blockus:end_tiles', 'blockus:cracked_granite_bricks', 'blockus:chiseled_granite_bricks', 'blockus:small_viridite_bricks'])

automate("basalt", [
    'minecraft:basalt', 'minecraft:polished_basalt', 'minecraft:smooth_basalt', 'caverns_and_chasms:basalt_bricks',
    'caverns_and_chasms:chiseled_basalt_bricks', 'caverns_and_chasms:basalt_tiles', 'blockus:rough_basalt', 'blockus:small_phantom_purpur_bricks'
])

automate("blackstone", ['minecraft:blackstone', 'minecraft:chiseled_polished_blackstone', 'minecraft:polished_blackstone', 'blockus:polished_blackstone_pillar', 'blockus:small_purpur_bricks', 'minecraft:polished_blackstone_bricks', 'minecraft:cracked_polished_blackstone_bricks', 'supplementaries:blackstone_tile'])
automate("obsidian", ['frame_changer:obsidian', 'frame_changer:polished_obsidian', 'blockus:obsidian_bricks', 'frame_changer:obsidian_bricks', 'frame_changer:chiseled_obsidian', 'frame_changer:obsidian_pillar', 'blockus:small_obsidian_bricks'])
automate("crying_obsidian", ['frame_changer:crying_chiseled_obsidian', 'frame_changer:crying_obsidian_pillar', 'frame_changer:crying_obsidian_bricks', 'frame_changer:crying_polished_obsidian', 'minecraft:crying_obsidian'])
automate("netherrack", ['blockus:polished_netherrack', 'minecraft:netherrack', 'blockus:nether_tiles', 'blockus:netherrack_bricks', 'minecraft:chiseled_nether_bricks', 'blockus:nether_brick_pillar', 'blockus:small_end_stone_bricks'])
automate("prismarine", ['minecraft:prismarine', 'blockus:prismarine_tiles', 'minecraft:prismarine_bricks', 'blockus:chiseled_prismarine', 'blockus:prismarine_pillar', 'blockus:polished_purpur', 'minecraft:dark_prismarine'])
automate("mud", ['minecraft:packed_mud', 'minecraft:mud_bricks', 'quark:mud_pillar', 'quark:carved_mud_bricks', 'quark:mud_brick_lattice', 'nomansland:earthen_tiles', 'nomansland:coarse_bricks'])

automate('dripstone', ['minecraft:dripstone_block', 'blockus:limestone_tiles', 'blockus:polished_dripstone', 'blockus:dripstone_bricks', 'blockus:cracked_dripstone_bricks', 'blockus:chiseled_dripstone', 'blockus:dripstone_pillar'])

automate('terracotta', [
    `minecraft:terracotta`,
    `quark:shingles`
])

automate('bricks', ['minecraft:bricks', 'blockus:large_bricks', 'abyssal_decor:chiseled_brick', 'abyssal_decor:brick_pillar', 'abyssal_decor:brick_mosaic'])

Color.DYE.forEach((color, dye) => {
    automate(`${color}_terracotta`, [
        `minecraft:${color}_terracotta`,
        `quark:${color}_shingles`
    ])
})

Color.DYE.forEach((color, dye) => {
    automate(`${color}_concrete`, [
        `minecraft:${color}_concrete`,
        `blockus:${color}_concrete_bricks`,
        `blockus:${color}_concrete_pillar`,
        `blockus:chiseled_${color}_concrete`,
        `blockus:${color}_colored_tiles`
    ])
})

// console.log("wtff")

ServerEvents.tags('item', event => {
    let append = (tag, og_name, name) => {
        if (blocksets[name]) {
            event.add(tag, blocksets[name])

            blocksets[og_name] = blocksets[og_name].concat(blocksets[name])
        }
    }

    for (let name in blocksets) {
        let blockset = blocksets[name]
        let tag = `modpack:${name}`

        event.add(tag, blockset)

        append(tag, name, `${name}_stairs`)
    }
})

let duplicates = []

ServerEvents.recipes(event => {
    event.remove({ type: 'minecraft:stonecutting' })
    
    let addition = (tag, name, count) => {
        if (blocksets[name]) {
            blocksets[name].forEach(block => {
                // console.log(block)

                if (!duplicates.includes(block)) {
                    event.stonecutting(Item.of(block, count), tag)
                    duplicates.push(block)
                }
            })
        }
    }

    for (let name in blocksets) {
        let blockset = blocksets[name]
        let tag = `#modpack:${name}`

        if (!name.includes("slab")) { addition(tag, `${name}_slab`, 2) }
        if (!name.includes("wall")) { addition(tag, `${name}_wall`, 3) }

        blockset.forEach(block => {
            // console.log(block)

            if (!duplicates.includes(block)) {
                if (!block.includes("stair") && !(ignored_stones.includes(block))) {
                    event.remove({ output: block })
                }

                event.stonecutting(block, tag)

                duplicates.push(block)
            }
        })
    }

    event.stonecutting('4x supplementaries:urn', "#modpack:mud") 
    event.stonecutting('2x minecraft:decorated_pot', "#modpack:mud")

    event.stonecutting('abundant_atmosphere:stone_door', "#modpack:stone")
    event.stonecutting('2x abundant_atmosphere:stone_trapdoor', "#modpack:stone")

    event.stonecutting('abundant_atmosphere:deepslate_door', "#modpack:deepslate")
    event.stonecutting('2x abundant_atmosphere:deepslate_trapdoor', "#modpack:deepslate")
})