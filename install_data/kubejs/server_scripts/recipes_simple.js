const removals = [
    'minecraft:torch',
    'nomansland:torch_from_resin'
]

const removals_cache = {id: removals[0]}

ServerEvents.recipes(event => {
    removals.forEach(item => {
        removals_cache['id'] = item
        event.remove(removals_cache)
    })

    // SHAPED
    event.shaped('8x minecraft:torch', [
        ' C ', 
        ' B ',
        ' A '  
    ], {
        A: 'minecraft:stick', 
        B: 'nomansland:resin',
        C: '#minecraft:coals'
    })

    event.shaped('2x minecraft:torch', [
        '   ', 
        ' C ',
        ' A '  
    ], {
        A: 'minecraft:stick', 
        C: '#minecraft:coals'
    })


    event.shaped('minecraft:tnt', [
        'AB ', 
        'BA ',
        '   '  
    ], {
        A: '#minecraft:smelts_to_glass', 
        B: 'minecraft:gunpowder'
    })

    // event.shaped('16x additionaladditions:glow_stick', [
    //     '  A', 
    //     ' A ',
    //     'A  '  
    // ], {
    //     A: 'minecraft:redstone'
    // })

    event.shaped('12x minecraft:scaffolding', [
        'ABA', 
        'A A',
        'A A'  
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:string'
    })

    event.shaped('4x nomansland:dross_tiles', [
        'AB ', 
        'BA ',
        '   '  
    ], {
        A: 'minecraft:packed_mud',
        B: 'nomansland:silt'
    })

    event.shaped('minecraft:oak_boat', [
        'A A', 
        'AAA',
        '   '  
    ], {
        A: '#minecraft:planks',
    })

    event.shaped('modpack:chisel', [
        '   ', 
        ' A ',
        ' B '  
    ], {
        A: 'minecraft:copper_ingot',
        B: 'minecraft:stick'
    })

    event.shaped('gladius:crystal_butterfly', [
        'A  ', 
        'ABA',
        '  A'  
    ], {
        A: 'heart_crystals:heart_crystal_shard',
        B: 'minecraft:emerald'
    })


    event.shaped('6x minecraft:arrow', [
        ' A ', 
        ' B ',
        ' C '  
    ], {
        A: 'minecraft:flint',
        B: 'minecraft:stick',
        C: 'minecraft:feather'
    })

    event.shaped('6x launchers_and_arrows:homing_arrow', [
        ' A ', 
        'CBC',
        ' C '  
    ], {
        A: 'minecraft:flint',
        B: 'minecraft:stick',
        C: 'minecraft:feather'
    })

    event.shaped('6x launchers_and_arrows:linear_arrow', [
        ' A ', 
        ' B ',
        ' C '  
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:stick',
        C: 'minecraft:feather'
    })

    event.shaped('launchers_and_arrows:burst_arrow', [
        ' A ', 
        ' B ',
        ' C '  
    ], {
        A: 'nomansland:explosive',
        B: 'minecraft:stick',
        C: 'minecraft:feather'
    })

    event.shaped('6x minecraft:spectral_arrow', [
        ' A ', 
        ' B ',
        ' C '  
    ], {
        A: 'minecraft:glow_ink_sac',
        B: 'minecraft:stick',
        C: 'minecraft:feather'
    })

    event.shaped('4x nomansland:incendiary_arrow', [
        ' A ', 
        ' B ',
        ' C '  
    ], {
        A: 'minecraft:blaze_powder',
        B: 'minecraft:stick',
        C: 'minecraft:feather'
    })


    event.shaped('4x nomansland:mundane_tiles', [
        'AB ', 
        'BA ',
        '   '  
    ], {
        A: 'minecraft:cobblestone',
        B: 'minecraft:cobbled_deepslate'
    })

    event.shaped('8x farmersdelight:safety_net', [
        'AA ', 
        'AA ',
        '   '  
    ], {
        A: 'minecraft:lead',
    })

    event.shaped('farmersdelight:basket', [
        'A A', 
        'B B',
        'ABA'  
    ], {
        A: 'minecraft:bamboo',
        B: 'minecraft:rabbit_hide'
    })

    event.shaped('all_with_you:backpack', [
        'ACA', 
        'ABA',
        'AAA'  
    ], {
        A: 'minecraft:sugar_cane',
        B: 'minecraft:rabbit_hide',
        C: 'minecraft:string'
    })

    event.shaped('2x minecraft:gravel', [
        'AB ', 
        'BA ',
        '   '  
    ], {
        A: 'minecraft:flint',
        B: 'nomansland:pebbles'
    })

    event.shaped('minecraft:cobblestone', [
        'AAA', 
        'AAA', 
        'AAA', 
    ], {
        A: 'nomansland:pebbles',
    })

    event.shaped('darkerdepths:ash_block', [
        'AAA', 
        'AAA', 
        'AAA', 
    ], {
        A: 'supplementaries:ash',
    })

    event.shaped('12x darts:dart', [
        ' A ', 
        ' B ', 
        ' C ', 
    ], {
        A: 'minecraft:flint',
        B: 'minecraft:cactus',
        C: 'minecraft:cactus_flower'
    })


    event.shaped('minecraft:grindstone', [
        'BAB', 
        'C C', 
        '   ', 
    ], {
        A: '#c:stones',
        B: 'minecraft:iron_ingot',
        C: 'minecraft:stick'
    })

    event.shaped('overgeared:alloy_furnace', [
        'AAA', 
        'A A', 
        'AAA', 
    ], {
        A: '#minecraft:stone_tool_materials',
    })

    event.shaped('overgeared:nether_alloy_furnace', [
        'BBB', 
        'BCB', 
        'AAA', 
    ], {
        A: 'minecraft:iron_ingot',
        B: '#minecraft:stone_tool_materials',
        C: '#minecraft:coals'
    })

    event.shaped('minecraft:campfire', [
        'BB ', 
        'AA ', 
        '   ', 
    ], {
        A: '#minecraft:planks',
        B: 'minecraft:stick'
    })

    event.shaped('blockus:legacy_stonecutter', [
        'BAB', 
        'BBB', 
        'BBB', 
    ], {
        A: 'minecraft:iron_ingot',
        B: '#minecraft:stone_tool_materials',
    })

    
    event.shaped('minecraft:redstone_block', [
        'AAA', 
        'AAA', 
        'AAA', 
    ], {
        A: 'nomansland:redstone',
    })

    event.shaped('minecraft:rooted_dirt', [
        'AAA', 
        'AAA', 
        'AAA', 
    ], {
        A: '#modpack:roots',
    })

    event.shaped('recharged:prism', [
        'ABA', 
        'BBB', 
        'ABA', 
    ], {
        A: 'minecraft:redstone',
        B: 'minecraft:prismarine_crystals',
    })


    event.shaped('minecraft:recovery_compass', [
        'ACA', 
        'ABA', 
        'AAA', 
    ], {
        A: 'heart_crystals:heart_crystal_shard',
        B: 'minecraft:compass',
        C: 'quark:soul_bead'
    })


    // event.shaped('unstable_timepiece:unstable_timepiece', [
    //     'ACA', 
    //     'ABA', 
    //     'AAA', 
    // ], {
    //     A: 'heart_crystals:heart_crystal_shard',
    //     B: 'minecraft:clock',
    //     C: 'quark:soul_bead'
    // })


    event.shaped('oreganized:asbestos_ore', [
        'AAA', 
        'AAA', 
        'AAA', 
    ], {
        A: 'oreganized:raw_asbestos'
    })
    
    event.shaped('spartanshieldsunofficial:wooden_basic_shield', [
        ' A ', 
        'ABA', 
        ' A ', 
    ], {
        A: '#minecraft:planks',
        B: 'minecraft:stick',
    })

    event.shaped('spartanshieldsunofficial:stone_basic_shield', [
        ' A ', 
        'ABA', 
        ' A ', 
    ], {
        A: 'minecraft:flint',
        B: 'minecraft:stick',
    })

    event.shaped('spartanshieldsunofficial:copper_basic_shield', [
        ' A ', 
        'ABA', 
        ' A ', 
    ], {
        A: 'minecraft:copper_ingot',
        B: 'minecraft:stick',
    })
    

    event.shaped('quark:crate', [
        'AAA', 
        'A A', 
        'AAA', 
    ], {
        A: '#minecraft:wooden_slabs',
    })


    event.shaped('quark:blossom_bookshelf', [
        'AAA', 
        'BBB', 
        'AAA', 
    ], {
        A: 'quark:blossom_planks',
        B: 'minecraft:book'
    })

    event.shaped('quark:azalea_bookshelf', [
        'AAA', 
        'BBB', 
        'AAA', 
    ], {
        A: 'quark:azalea_planks',
        B: 'minecraft:book'
    })

    event.shaped('quark:ancient_bookshelf', [
        'AAA', 
        'BBB', 
        'AAA', 
    ], {
        A: 'blockus:white_oak_planks',
        B: 'minecraft:book'
    })

    event.shaped('quark:spruce_bookshelf', [
        'AAA', 
        'BBB', 
        'AAA', 
    ], {
        A: 'spawn:date_planks',
        B: 'minecraft:book'
    })

    event.shaped('quark:acacia_bookshelf', [
        'AAA', 
        'BBB', 
        'AAA', 
    ], {
        A: 'spawn:rotten_planks',
        B: 'minecraft:book'
    })


    event.shaped('minecraft:totem_of_undying', [
        ' A ', 
        'BCB', 
        ' B ', 
    ], {
        A: 'minecraft:nether_star_powder',
        B: 'heart_crystals:heart_crystal_shard',
        C: 'heart_crystals:heart_crystal'
    })


    event.shaped('heartstone:heartstone', [
        ' A ', 
        'ABA', 
        ' A ', 
    ], {
        A: 'minecraft:blaze_powder',
        B: 'heart_crystals:heart_crystal'
    })


    event.shaped('4x minecraft:tinted_glass', [
        ' A ', 
        'ABA', 
        ' A ', 
    ], {
        A: 'minecraft:quartz',
        B: 'minecraft:glass'
    })


    event.shaped('minecraft:dispenser', [
        'AAA', 
        'BCB', 
        'AAA', 
    ], {
        A: '#minecraft:stone_tool_materials',
        B: 'minecraft:copper_ingot',
        C: 'minecraft:redstone'
    })
    
    event.shaped('4x minecraft:packed_mud', [
        'AA ', 
        'AA ', 
        '   ', 
    ], {
        A: 'minecraft:mud',
    })


    event.shaped('minecraft:dropper', [
        'AAA', 
        'BCB', 
        'AAA', 
    ], {
        A: '#minecraft:stone_tool_materials',
        B: 'minecraft:copper_ingot',
        C: 'minecraft:lapis_lazuli'
    })

    event.shaped('supplementaries:relayer', [
        'AAA', 
        'BCB', 
        'AAA', 
    ], {
        A: '#minecraft:stone_tool_materials',
        B: 'minecraft:copper_ingot',
        C: 'minecraft:iron_ingot'
    })

    event.shaped('minecraft:observer', [
        'AAA', 
        'BCB', 
        'AAA', 
    ], {
        A: '#minecraft:stone_tool_materials',
        B: 'minecraft:copper_ingot',
        C: 'minecraft:quartz'
    })
    
    event.shaped('supplementaries:crystal_display', [
        'AAA', 
        'BCB', 
        'AAA', 
    ], {
        A: 'minecraft:cobbled_deepslate',
        B: 'minecraft:copper_ingot',
        C: 'minecraft:emerald'
    })

    event.shaped('4x caverns_and_chasms:winch', [
        'AAA', 
        'A A', 
        'AAA', 
    ], {
        A: 'minecraft:copper_ingot',
    })

    event.shaped('caverns_and_chasms:toolbox', [
        ' A ', 
        'A A', 
        'AAA', 
    ], {
        A: 'minecraft:copper_ingot',
    })

    event.shaped('9x minecraft:chain', [
        ' A ', 
        ' A ', 
        ' A ', 
    ], {
        A: 'minecraft:iron_ingot',
    })

    event.shaped('6x minecraft:lantern', [
        ' A ', 
        ' B ', 
        ' A ', 
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:torch'
    })

    event.shaped('8x abyssal_decor:iron_sconce', [
        'A A', 
        'AA ', 
        'A  ', 
    ], {
        A: 'minecraft:iron_ingot',
    })

    event.shaped('8x abyssal_decor:gold_sconce', [
        'A A', 
        'AA ', 
        'A  ', 
    ], {
        A: 'minecraft:gold_ingot',
    })

    event.shaped('9x supplementaries:goblet', [
        'A A', 
        'AAA', 
        ' A ', 
    ], {
        A: 'minecraft:iron_ingot',
    })

    // event.shaped('9x supplementaries:goblet', [
    //     'A A', 
    //     'AAA', 
    //     ' A ', 
    // ], {
    //     A: 'minecraft:iron_ingot',
    // })

    event.shaped('supplementaries:bubble_blower', [
        'ABA', 
        ' A ', 
        ' A ', 
    ], {
        A: 'minecraft:iron_ingot',
        B: 'supplementaries:soap'
    })

    event.shaped('minecraft:candle', [
        ' A ', 
        ' B ', 
        '   ', 
    ], {
        A: 'minecraft:string',
        B: 'minecraft:nether_wart'
    })

    event.shaped('farmersdelight:cutting_board', [
        '   ', 
        'AAA', 
        'BBB', 
    ], {
        A: '#minecraft:stone_tool_materials',
        B: '#minecraft:planks'
    })

    event.shaped('supplementaries:doormat', [
        '   ', 
        'AAA', 
        'BBB', 
    ], {
        A: 'minecraft:rabbit_hide',
        B: 'minecraft:wheat'
    })

    event.shaped('farmersdelight:rice_roll_medley_block', [
        ' D ', 
        'CCC',
        'BAB'  
    ], {
        A: 'minecraft:bowl',
        B: 'farmersdelight:cod_roll',
        C: 'farmersdelight:salmon_roll',
        D: 'farmersdelight:kelp_roll',
    })

    event.shaped('caverns_and_chasms:refractor', [
        ' C ', 
        'BCB',
        'AAA'  
    ], {
        A: 'minecraft:copper_ingot',
        B: 'minecraft:redstone_torch',
        C: 'heart_crystals:heart_crystal_shard'
    })

    event.shaped('caverns_and_chasms:resistor', [
        '   ', 
        'BCB',
        'AAA'  
    ], {
        A: 'minecraft:copper_ingot',
        B: 'minecraft:redstone_torch',
        C: 'minecraft:iron_ingot'
    })

    event.shaped('4x caverns_and_chasms:bouncer', [
        '   ', 
        'BCB',
        'A A'  
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:slime_ball',
        C: 'minecraft:leather'
    })

    event.shaped('8x caverns_and_chasms:ornate_glass', [
        'AAA', 
        'ABA',
        'AAA'  
    ], {
        A: 'minecraft:glass',
        B: 'minecraft:emerald',
    })


    event.shaped('immersive_weathering:charred_log', [
        'AAA', 
        'AAA',
        'AAA'  
    ], {
        A: 'minecraft:charcoal'
    })


    event.shaped('2x caverns_and_chasms:bejeweled_pearl', [
        ' A ', 
        'ABA',
        ' A '  
    ], {
        A: 'minecraft:lapis_lazuli',
        B: 'minecraft:ender_pearl',
    })

    event.shaped('4x caverns_and_chasms:tmt', [
        ' A ', 
        'ABA',
        ' A '  
    ], {
        A: 'minecraft:lapis_lazuli',
        B: 'minecraft:tnt',
    })


    event.shaped('exposure:camera', [
        'CAC', 
        'ABA',
        'CAC'  
    ], {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:prismarine_crystals',
        C: 'minecraft:leather'
    })


    event.shaped('caverns_and_chasms:trim_modifier_smithing_template', [
        ' A ', 
        'ABA',
        ' A '  
    ], {
        A: 'minecraft:emerald',
        B: '#minecraft:trim_templates',
    })

    event.shapeless('4x caverns_and_chasms:blunt_arrow', ['minecraft:arrow', 'minecraft:lapis_lazuli'])

    event.shapeless('4x quark:iron_ladder', ['minecraft:ladder', 'minecraft:iron_ingot'])

    event.shapeless('9x minecraft:charcoal', ['immersive_weathering:charred_log'])

    Color.DYE.forEach((color, dye) => {
        let bed = `minecraft:${color}_bed`

        event.shaped(bed, [
            'AAA', 
            'BBB', 
            'CCC', 
        ], {
            A: 'minecraft:leather',
            B: `minecraft:${color}_wool`,
            C: '#minecraft:planks'
        })

        event.remove({ id: bed })

        event.shapeless(`2x minecraft:${color}_candle`, [`minecraft:${color}_candle`, 'minecraft:gunpowder'])
    })

    // FOOD?
    event.shaped('nomansland:honeyed_apple', [
        'AAA', 
        'ABA', 
        'AAA', 
    ], {
        A: 'minecraft:honeycomb',
        B: 'minecraft:apple',
    })
    
    event.shapeless('farmersdelight:hamburger', ['minecraft:bread', 'minecraft:cooked_beef', 'farmersdelight:cabbage', 'farmersdelight:tomato'])
    event.shapeless('farmersdelight:bacon_sandwich', ['minecraft:bread', 'minecraft:cooked_porkchop', 'farmersdelight:cabbage', 'farmersdelight:tomato'])

    event.shapeless('farmersdelight:bacon_and_eggs', ['minecraft:cooked_porkchop', 'minecraft:cooked_porkchop', 'incubation:fried_egg', 'incubation:fried_egg', 'minecraft:bowl'])

    event.shapeless('farmersdelight:dog_food', ['minecraft:bowl', 'minecraft:rotten_flesh', '#minecraft:meat', 'minecraft:bone'])

    event.shapeless('4x farmersdelight:salmon_roll', ['farmersdelight:cooked_rice', 'minecraft:salmon'])
    event.shapeless('4x farmersdelight:cod_roll', ['farmersdelight:cooked_rice', 'minecraft:cod'])

    //
    // event.shapeless('8x gladius:flash_powder', ['supplementaries:ash', 'minecraft:glowstone_dust', 'minecraft:gunpowder'])
    event.shapeless('4x nomansland:pebbles', ['minecraft:cobblestone'])
    event.shapeless('minecraft:flint', ['nomansland:pebbles', 'nomansland:pebbles'])

    event.shapeless('2x minecraft:candle', ['minecraft:candle', 'minecraft:gunpowder'])

    event.shapeless('2x minecraft:torch', ['minecraft:torch', 'minecraft:gunpowder'])
    event.shapeless('2x minecraft:soul_torch', ['minecraft:soul_torch', 'minecraft:gunpowder'])
    event.shapeless('2x minecraft:redstone_torch', ['minecraft:redstone_torch', 'minecraft:gunpowder'])

    event.shapeless('2x minecraft:lantern', ['minecraft:lantern', 'minecraft:gunpowder'])
    event.shapeless('2x minecraft:soul_lantern', ['minecraft:soul_lantern', 'minecraft:gunpowder'])
    event.shapeless('2x redstonelantern:redstone_lantern', ['redstonelantern:redstone_lantern', 'minecraft:gunpowder'])

    event.shapeless('2x minecraft:campfire', ['minecraft:campfire', 'minecraft:gunpowder'])
    event.shapeless('2x minecraft:soul_campfire', ['minecraft:soul_campfire', 'minecraft:gunpowder'])

    event.shapeless('9x supplementaries:ash', ['darkerdepths:ash_block'])
    event.shapeless('9x nomansland:redstone', ['minecraft:redstone_block'])
    event.shapeless('9x oreganized:raw_asbestos', ['oreganized:asbestos_ore'])
    
    event.shapeless('minecraft:trapped_chest', ['minecraft:chest', 'minecraft:tripwire_hook'])

    event.shapeless('nomansland:cave_weeds', ['darkerdepths:petrified_roots'])
    event.shapeless('darkerdepths:petrified_roots', ['nomansland:cave_weeds'])

    event.shapeless('minecraft:gunpowder', ['#minecraft:coals', 'oreganized:raw_asbestos'])
    event.shapeless('3x minecraft:gunpowder', ['#minecraft:coals', 'minecraft:bone_meal', 'oreganized:raw_asbestos'])

    event.shapeless('6x farmersdelight:wheat_dough', ['minecraft:wheat', 'minecraft:milk_bucket', '#c:eggs'])

    event.shapeless('minecraft:bundle', ['#modpack:cloth', 'minecraft:string'])

    event.shapeless('2x minecraft:stick', ['#minecraft:saplings'])

    event.shapeless('6x minecraft:glow_ink_sac', ['minecraft:glowstone_dust', 'minecraft:lapis_lazuli'])

    event.shapeless('8x minecraft:torch', [
        "minecraft:stick",
        'nomansland:resin',
        '#minecraft:coals'
    ])

    // SIGNS
    // let signs = Ingredient.of('#omphalos:wooden_signs').itemIds

    // for (const sign of signs) {
    //     let hanging = sign
    //     hanging = hanging.replace("sign", "hanging_sign")

    //     event.shapeless(sign, [hanging])
    //     event.shapeless(hanging, [sign])
    // }

    // let way_signs = Ingredient.of('#supplementaries:way_signs').itemIds

    // for (const way_sign of way_signs) {
    //     event.remove({ output: way_sign })
    // }

    // CONVERTABLES
    event.shapeless('minecraft:soul_torch', ['minecraft:torch', '#minecraft:soul_fire_base_blocks'])
    event.shapeless('minecraft:soul_lantern', ['minecraft:lantern', '#minecraft:soul_fire_base_blocks'])
    event.shapeless('minecraft:soul_campfire', ['minecraft:campfire', '#minecraft:soul_fire_base_blocks'])

    event.shapeless('2x minecraft:redstone_torch', ['minecraft:torch', 'minecraft:redstone'])
    event.shapeless('2x redstonelantern:redstone_lantern', ['minecraft:lantern', 'minecraft:redstone'])

    const tools = (material, input) => {
        event.shaped(material + '_sword', [
            ' A ',
            ' A ',
            ' B '
        ], {A: input, B: 'minecraft:stick'})

        event.shaped(material + '_pickaxe', [
            'AAA',
            ' B ',
            ' B '
        ], {A: input, B: 'minecraft:stick'})

        event.shaped(material + '_axe', [
            'AA ',
            'AB ',
            ' B '
        ], {A: input, B: 'minecraft:stick'})

        event.shaped(material + '_hoe', [
            'AA ',
            ' B ',
            ' B '
        ], {A: input, B: 'minecraft:stick'})

        event.shaped(material + '_shovel', [
            ' A ',
            ' B ',
            ' B '
        ], {A: input, B: 'minecraft:stick'})
    }

    tools("minecraft:wooden", 'minecraft:flint')
    tools("overgeared:copper", 'minecraft:copper_ingot')

    // REPLACE
    event.replaceInput({ input: 'minecraft:obsidian' }, 'minecraft:obsidian', 'frame_changer:obsidian')

    event.replaceInput({ output: 'minecraft:repeater' }, 'minecraft:stone', 'minecraft:copper_ingot')
    event.replaceInput({ output: 'minecraft:comparator' }, 'minecraft:stone', 'minecraft:copper_ingot')

    event.replaceInput({ output: 'exposure:black_and_white_film' }, 'minecraft:iron_ingot', 'caverns_and_chasms:silver_ingot')
    event.replaceInput({ output: 'exposure:black_and_white_film' }, 'minecraft:iron_nugget', 'minecraft:emerald')
    event.replaceInput({ output: 'exposure:high_sensitivity_black_and_white_film' }, 'minecraft:iron_ingot', 'caverns_and_chasms:silver_ingot')
    event.replaceInput({ output: 'exposure:high_sensitivity_black_and_white_film' }, 'minecraft:iron_nugget', 'minecraft:emerald')

    event.replaceInput({ output: 'exposure:color_film' }, 'minecraft:gold_nugget', 'minecraft:emerald')
    event.replaceInput({ output: 'exposure:high_sensitivity_color_film' }, 'minecraft:gold_nugget', 'minecraft:emerald')

    event.replaceInput({ input: 'minecraft:leather' }, 'minecraft:leather', '#modpack:cloth')

    // SHAPELESS
    event.shapeless('4x nomansland:explosive', ['minecraft:tnt'])

    // REMOVE TYPES
    event.remove({ type: "minecraft:crafting_decorated_pot"})
    event.remove({ type: "minecraft:crafting_special_bundlecoloring"})
    
    let items = Ingredient.of('#minecraft:slabs').itemIds

    for (const item of items) {
        event.remove({ output: item })
    }

    items = Ingredient.of('#minecraft:stairs').itemIds

    for (const item of items) {
        event.remove({ output: item })
    }

    items = Ingredient.of('#minecraft:walls').itemIds

    for (const item of items) {
        event.remove({ output: item })
    }

    items = Ingredient.of('#minecraft:trapdoors').itemIds

    for (const item of items) {
        event.remove({ output: item })
    }

    items = Ingredient.of('#c:fences').itemIds

    for (const item of items) {
        event.remove({ output: item })
    }

    items = Ingredient.of('#supplementaries:flags').itemIds

    for (const item of items) {
        event.remove({ output: item })
    }
})