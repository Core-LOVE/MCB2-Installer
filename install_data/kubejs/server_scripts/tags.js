let filters = [
    "stair",
    "slab",
    "wall",
    "sign",
    "chiseled",
    "polished",
    "tile",
    "_brick",
    "pillar",
    "bookshelf",
    "fence",
    "gate",
    "door",
    "ceiling",
    "_plant",
    "directional",
    "hack",
    "double_",
    "skull_candle",
    "tool_hook",
    "water_lily_pad",
    "liquid",
    "potted",
    "_plant",
    "skull_pile",
    "flash",
    "air",
    "water",
    "lava",
    "structure",
    "barrier",
    "amber",
    "mob",
    "wild",
    "light",
    "moving",
    "pane"
]

Color.DYE.forEach((color, dye) => {
    filters.push(color)
})

ServerEvents.tags('block', event => {
    event.add('minecraft:needs_wooden_tool', 'minecraft:copper_ore')

    event.add('minecraft:needs_stone_tool', 'minecraft:iron_ore')

    let all_blocks = Registry.of("minecraft:block").getKeys().toArray().filter(entry => {
        let item = entry.toString()
        let result = false

        filters.forEach(f => {
            if (item.includes(f)) {
                result = true
            }

            if (item.includes("small") && item.includes("_brick")) {
                result = true
            }
        })

        // console.log(item)

        if (result) {
            // console.log(item)
        }

        return result
    })

    event.add('fieldguide:blacklisted', all_blocks)

    event.remove('frame_changer:portal_frames', 'minecraft:obsidian')   

    event.remove('minecraft:needs_stone_tool', 'minecraft:copper_ore')   
    // event.remove('minecraft:incorrect_for_wooden_tool', 'minecraft:copper_ore')
    // event.remove('minecraft:incorrect_for_stone_tool', 'minecraft:iron_ore')
    // event.remove('minecraft:incorrect_for_gold_tool', 'minecraft:iron_ore')

    event.add('mineable/axe', 'minecraft:rooted_dirt')   

    event.add('modpack:copper_bulbs', ['minecraft:copper_bulb', 'minecraft:waxed_oxidized_copper_bulb', 'minecraft:waxed_copper_bulb', 'minecraft:waxed_oxidized_copper_bulb'])   

    event.add('nomansland:pots',
        [
            // 'nomansland:ancient_pot',
            // 'nomansland:large_ancient_pot',
        ]
    )   

    event.add('minecraft:climbable', 'blockus:wooden_frame')

    event.add('caverns_and_chasms:bounce_normal', [
        'caverns_and_chasms:silver_block', 'caverns_and_chasms:silver_bars', 'caverns_and_chasms:silver_chain'
    ])

    event.add('blockrunner:golden_blocks', [
        'minecraft:gold_block', 'caverns_and_chasms:golden_bars', 'caverns_and_chasms:golden_chain', 'minecraft:raw_gold_block', 'abyssal_decor:gold_sconce', 'goldenhopper:golden_hopper', 'minecraft:bell', 'caverns_and_chasms:lava_lamp'
    ])

    event.add('blockrunner:silver_blocks', '#caverns_and_chasms:bounce_normal')
    // event.add('architects_palette:green_fire_supporting', [
    //     'minecraft:waxed_oxidized_copper', 'minecraft:waxed_oxidized_chiseled_copper', 'minecraft:waxed_oxidized_copper_grate',
    //     'minecraft:waxed_oxidized_cut_copper', 'minecraft:waxed_oxidized_cut_copper_stairs', 'minecraft:waxed_oxidized_cut_copper_slab',
    //     'minecraft:waxed_oxidized_copper_door', 'minecraft:waxed_oxidized_copper_trapdoor', 'minecraft:waxed_oxidized_copper_bulb',
    //     'minecraft:copper_block', 'minecraft:chiseled_copper', 'minecraft:copper_grate', 'minecraft:cut_copper',
    //     'minecraft:cut_copper_stairs', 'minecraft:cut_copper_slab', 'minecraft:copper_door',
    //     'minecraft:copper_trapdoor', 'minecraft:copper_bulb', 'minecraft:oxidized_copper',
    //     'minecraft:oxidized_chiseled_copper', 'minecraft:oxidized_copper_grate', 'minecraft:oxidized_cut_copper',
    //     'minecraft:oxidized_cut_copper_stairs', 'minecraft:oxidized_cut_copper_slab', 'minecraft:oxidized_copper_door',
    //     'minecraft:oxidized_copper_trapdoor', 'minecraft:oxidized_copper_bulb', 'minecraft:waxed_copper_block',
    //     'minecraft:waxed_chiseled_copper', 'minecraft:waxed_copper_grate', 'minecraft:waxed_cut_copper',
    //     'minecraft:waxed_cut_copper_stairs', 'minecraft:waxed_cut_copper_slab', 'minecraft:waxed_copper_door',
    //     'minecraft:waxed_copper_trapdoor', 'minecraft:waxed_copper_bulb', 'supplementaries:cog_block', 'minecraft:lightning_rod'
    // ])
})

ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', [
        'blockus:soul_o_lantern', 'darkerdepths:amber_cluster', 'nomansland:petrified_log', 'minecraft:remains', 'modpack:energy_drink', 'omphalos:dead_coral_block', 'omphalos:coral_block', 'omphalos:bramble',
        'moonlight:spawn_box', 'caverns_and_chasms:coal_placed', 'caverns_and_chasms:charcoal_placed', 'caverns_and_chasms:eumus_brick_placed'
    ])

    event.add('fieldguide:blacklisted', '#c:hidden_from_recipe_viewers')

    event.get('minecraft:signs').getObjectIds().forEach(element => {
        if (!element.toString().includes("canvas")) {
            event.add('omphalos:wooden_signs', element)
        }
    })

    event.get('minecraft:hanging_signs').getObjectIds().forEach(element => {
        if (!element.toString().includes("canvas")) {
            event.add('omphalos:wooden_hanging_signs', element)
        }
    })

    event.add('modpack:campfires', ['minecraft:campfire', 'minecraft:soul_campfire'])

    event.add('padlocked:keys', 'supplementaries:key')

    event.add('supplementaries:throwable_bricks', 'nomansland:pebbles')

    event.add('modpack:roots', ['nomansland:cave_weeds', 'darkerdepths:petrified_roots'])
    event.add('modpack:cloth', ['minecraft:rabbit_hide', 'minecraft:leather'])

    event.add('modpack:stone_tools', ['overgeared:copper_shovel', 'overgeared:copper_pickaxe', 'overgeared:copper_axe', 'overgeared:copper_hoe', 'overgeared:copper_sword'])
    event.add('modpack:golden_tools', ['minecraft:golden_shovel', 'minecraft:golden_pickaxe', 'minecraft:golden_axe', 'minecraft:golden_hoe', 'minecraft:golden_sword'])
    event.add('modpack:golden_armor', ['minecraft:golden_helmet', 'minecraft:golden_chestplate', 'minecraft:golden_leggings', 'minecraft:golden_boots'])  

    event.add('c:tools/knife', 'minecraft:shears')

    event.removeAll('amendments:sets_on_fire')
    // event.removeAll('#amendments:sets_on_fire')

    // event.add('zipline:attachment', 'climbing_pick:climbing_pick')

    event.add('omphalos:terracotta', [
        `minecraft:terracotta`,
        `quark:shingles`,
        `quark:shingles_stairs`,   
        `quark:shingles_slab`,     
    ])

    event.add('omphalos:beveled_glass', 'blockus:beveled_glass')
    event.add('omphalos:beveled_glass_pane', 'blockus:beveled_glass_pane')
    
    Color.DYE.forEach((color, dye) => {
        event.add('omphalos:terracotta', [
            `minecraft:${color}_terracotta`,
            `quark:${color}_shingles`,
            `quark:${color}_shingles_stairs`,   
            `quark:${color}_shingles_slab`,     
        ])

        event.add('omphalos:hardened_clay', [`minecraft:${color}_terracotta`])
        event.add('omphalos:shingles', [`quark:${color}_shingles`])

        event.add('omphalos:concrete', [
            `minecraft:${color}_concrete`,
            `blockus:${color}_concrete_bricks`,
            `blockus:${color}_concrete_brick_stairs`, 
            `blockus:${color}_concrete_brick_slab`,
            `blockus:${color}_concrete_brick_wall`,   
            `blockus:${color}_colored_tiles`,
            `blockus:${color}_concrete_pillar`,
            `blockus:chiseled_${color}_concrete`,
        ])

        event.add('omphalos:concrete_bricks', [`blockus:${color}_concrete_bricks`])
        event.add('omphalos:concrete_tiles', [`blockus:${color}_colored_tiles`])
        event.add('omphalos:concrete_pillar', [`blockus:${color}_concrete_pillar`])
        event.add('omphalos:chiseled_concrete', [`blockus:chiseled_${color}_concrete`])

        event.add('omphalos:wool', [`minecraft:${color}_wool`])
        event.add('omphalos:wool_carpet', [`minecraft:${color}_carpet`])

        // event.add('omphalos:concrete_powder', [
        //     `minecraft:${color}_concrete_powder`,
        // ])

        event.add('omphalos:waxed_concrete_powder', [
            `oreganized:waxed_${color}_concrete_powder`,
        ])

        event.add('omphalos:beveled_glass', [
            `blockus:${color}_beveled_glass`,
        ])

        event.add('omphalos:beveled_glass_pane', [
            `blockus:${color}_beveled_glass_pane`,
        ]) 
    })

    event.add('minecraft:stone_tool_materials', ['minecraft:granite', 'blockus:marble', 'minecraft:basalt', 'blockus:bluestone', 'minecraft:tuff', 'minecraft:dripstone_block'])

    // let canvas_signs = Ingredient.of('#farmersdelight:canvas_signs').itemIds

    // for (const sign of canvas_signs) {
    //     let hanging = sign.replace("sign", "hanging_sign")

    //     console.log(`"${sign}": "${hanging}"`)
    // }
    // let burnable = Item.builtInRegistryHolder().getData(NeoForgeDataMaps.FURNACE_FUELS)

    // burnable.forEach(id => {
    //     event.add('omphalos:burnable', id)
    // })
})