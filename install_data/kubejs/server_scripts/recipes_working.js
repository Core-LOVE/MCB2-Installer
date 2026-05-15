const uncrafting = {
    // '#minecraft:anvil': ['minecraft:iron_block', 'minecraft:iron_ingot'],
    'minecraft:chain': ['minecraft:iron_nugget'],
    'minecraft:cauldron': ['3x minecraft:iron_nugget'],
    'farmersdelight:cooking_pot': ['2x minecraft:iron_nugget'],
    'farmersdelight:skillet': ['2x minecraft:iron_nugget'],
    // 'supplementaries:goblet': ['2x caverns_and_chasms:silver_nugget', 'caverns_and_chasms:silver_ingot'],
    
    '#modpack:froglight': [ChanceResult.of('minecraft:magma_cream', 0.5)],

    '#modpack:lanterns': ['2x minecraft:iron_nugget', ChanceResult.of('supplementaries:ash', 0.5)],
    // 'heart_crystals:heart_lantern': ['caverns_and_chasms:silver_ingot', ChanceResult.of('heart_crystals:heart_crystal', 0.5)],

    'minecraft:chain': ['minecraft:iron_nugget'],
    'minecraft:sea_lantern': ['2x minecraft:prismarine_shard', '2x minecraft:prismarine_crystals'],
    'minecraft:redstone_lamp': ['2x minecraft:redstone', 'supplementaries:ash'],
    
    'minecraft:cauldron': ['3x minecraft:iron_ingot'],
    // 'supplementaries:goblet': ['5x caverns_and_chasms:silver_nugget'],
    'supplementaries:hourglass': ['minecraft:gold_ingot', 'minecraft:glass'],

    'supplementaries:globe': ['minecraft:gold_ingot', '3x minecraft:lapis_lazuli', '2x minecraft:emerald', 'minecraft:diamond'],
    'minecraft:bell': ['2x minecraft:gold_ingot', 'minecraft:gold_nugget'],
    
    'farmersdelight:cooking_pot': ['3x minecraft:iron_ingot'],
    'farmersdelight:skillet': ['2x minecraft:iron_ingot'],

    'minecraft:painting': ['farmersdelight:canvas'],
    'minecraft:item_frame': ['minecraft:leather'],

    'supplementaries:blackboard': ['minecraft:blackstone'],

    'supplementaries:notice_board': ['minecraft:paper'],
    'supplementaries:clock_block': ['minecraft:clock'],
    'supplementaries:pulley_block': ['minecraft:iron_ingot'],

    'minecraft:jukebox': [ChanceResult.of('minecraft:diamond', 0.5)],
    'minecraft:note_block': ['minecraft:redstone'],
    'supplementaries:speaker_block': ['minecraft:emerald'],
    'minecraft:beehive': ['2x minecraft:honeycomb'],
    'minecraft:lightning_rod': ['2x minecraft:copper_ingot'],
    
    'minecraft:flower_pot': ['minecraft:brick'],
    'supplementaries:urn': ['3x supplementaries:ash_brick'],

    '#modpack:timber_frames': ['4x minecraft:stick'],
    '#minecraft:signs': ['minecraft:stick'],
    '#minecraft:hanging_signs': ['minecraft:chain'],

    'farmersdelight:canvas_sign': ['minecraft:stick', 'farmersdelight:canvas'],
    'farmersdelight:hanging_canvas_sign': ['minecraft:chain', 'farmersdelight:canvas'],

    'supplementaries:doormat': ['minecraft:wheat'],

    'supplementaries:present': ['4x minecraft:paper'],
    'supplementaries:trapped_present': ['supplementaries:present', 'minecraft:tripwire_hook'],
    'supplementaries:bamboo_spikes': ['2x minecraft:bamboo'],

    'farmersdelight:basket': ['3x farmersdelight:canvas'],

    'minecraft:repeater': ['minecraft:redstone_torch', ChanceResult.of('minecraft:redstone', 0.5)],
    'minecraft:comparator': ['minecraft:redstone_torch', ChanceResult.of('minecraft:quartz', 0.5)],
    'quark:redstone_randomizer': ['minecraft:redstone_torch', ChanceResult.of('minecraft:prismarine_crystals', 0.5)],
    'minecraft:target': ['2x minecraft:redstone'],

    'supplementaries:crank': ['3x minecraft:copper_ingot', 'overgeared:copper_nugget'],
    'minecraft:lever': ['minecraft:stick'],

    'minecraft:tripwire_hook': ['minecraft:stick', ChanceResult.of('minecraft:iron_ingot', 0.5)],
    'minecraft:daylight_detector': ['minecraft:quartz', 'minecraft:glass'],
    'supplementaries:wind_vane': ['minecraft:iron_ingot', 'minecraft:redstone', ChanceResult.of('minecraft:iron_bars', 0.5)],

    'supplementaries:turn_table': ['minecraft:copper_ingot', 'minecraft:redstone'],
    'supplementaries:spring_launcher': ['3x minecraft:iron_ingot', 'minecraft:slime_ball'],
    'minecraft:piston': ['minecraft:iron_ingot', 'minecraft:redstone'],

    'supplementaries:cannon': ['minecraft:dispenser', 'minecraft:iron_ingot'],

    'minecraft:hopper': ['2x minecraft:iron_ingot'],
    'supplementaries:faucet': ['2x minecraft:iron_ingot', 'minecraft:stick'],

    'overgeared:nether_alloy_furnace': ['supplementaries:ash'],
    'overgeared:alloy_furnace': ['supplementaries:ash'],
    'farmersdelight:cutting_board': ['2x minecraft:stick'],

    'supplementaries:relayer': ['minecraft:iron_ingot', 'minecraft:redstone'],
    'minecraft:observer': ['minecraft:quartz', 'minecraft:redstone'],

    'supplementaries:crystal_display': ['minecraft:quartz'],

    // 'oreganized:gargoyle': ['oreganized:gargoyle'],
    'supplementaries:bellows': ['minecraft:leather'],

    // 'spelunkery:wooden_rail': ['minecraft:stick'],

    'minecraft:rail': ['3x minecraft:iron_nugget', 'minecraft:stick'],
    'minecraft:powered_rail': ['3x minecraft:gold_nugget', 'minecraft:stick'],
    'minecraft:detector_rail': ['3x minecraft:iron_nugget', 'minecraft:stone_pressure_plate', 'minecraft:stick'],
    'minecraft:activator_rail': ['3x minecraft:iron_nugget', 'minecraft:redstone', '2x minecraft:stick'],

    'minecraft:hopper_minecart': ['minecraft:minecart', 'minecraft:hopper'],
    'minecraft:furnace_minecart': ['minecraft:minecart', 'overgeared:nether_alloy_furnace'],
    'minecraft:chest_minecart': ['minecraft:minecart', 'minecraft:chest'],
    'minecraft:tnt_minecart': ['minecraft:minecart', 'minecraft:tnt'],
    'supplementaries:dispenser_minecart': ['minecraft:minecart', 'minecraft:dispenser'],

    'minecraft:armor_stand': ['3x minecraft:stick'],
    // 'unflavoured_pipes:copper_pipe': ['3x minecraft:copper_ingot', 'minecraft:redstone'],
    
    // 'weatherdetector:weather_detector': ['minecraft:copper_ingot', 'minecraft:glass'],

    'minecraft:bucket': ['minecraft:iron_ingot'],
    'minecraft:fishing_rod': ['3x minecraft:stick', 'minecraft:string'],
    'supplementaries:wrench': ['2x minecraft:copper_ingot'],
    'supplementaries:key': ['minecraft:gold_ingot', 'minecraft:gold_nugget'],

    'supplementaries:slingshot': ['3x minecraft:stick', 'minecraft:rabbit_hide', 'minecraft:string'],
    'minecraft:minecart': ['2x minecraft:iron_ingot'],

    'minecraft:flint_and_steel': ['minecraft:flint', ChanceResult.of('minecraft:iron_ingot', 0.5)],

    // 'supplementaries:bubble_blower': ['caverns_and_chasms:silver_ingot'],
    'minecraft:shears': ['minecraft:iron_ingot'],
    'quark:abacus': ['2x minecraft:stick', 'minecraft:quartz'],

    'minecraft:firework_rocket': ['minecraft:paper', 'supplementaries:ash'],
    
    'minecraft:book': ['minecraft:paper'],
    'minecraft:writable_book': ['minecraft:paper', 'minecraft:feather'],
    'map_atlases:atlas': ['4x minecraft:paper'],
    'minecraft:map': ['3x minecraft:paper'],
    'supplementaries:slice_map': ['3x minecraft:paper'],
    'minecraft:filled_map': ['3x minecraft:paper'],

    // 'oreganized:silver_mirror': ['3x minecraft:gold_ingot', 'caverns_and_chasms:silver_ingot'],

    'minecraft:name_tag': ['minecraft:string'],
    'minecraft:lead': ['supplementaries:rope'],
    'supplementaries:flute': ['minecraft:bamboo'],
    
    'quark:seed_pouch': ['minecraft:rabbit_hide', 'minecraft:string'],

    'minecraft:compass': ['2x minecraft:iron_ingot', 'minecraft:redstone'],
    'minecraft:recovery_compass': ['4x minecraft:echo_shard', 'minecraft:redstone'],
    'minecraft:clock': ['2x minecraft:gold_ingot', 'minecraft:redstone'],

    'supplementaries:confetti_popper': ['minecraft:paper', 'minecraft:gunpowder'],
    'quark:forgotten_hat': ['minecraft:leather', 'minecraft:string'],

    'minecraft:carrot_on_a_stick': ['minecraft:fishing_rod', 'minecraft:carrot'],
    'minecraft:warped_fungus_on_a_stick': ['minecraft:fishing_rod', 'minecraft:warped_fungus'],

    // 'minecraft:obsidian': ['5x modpack:obsidian_shard', ChanceResult.of('modpack:obsidian_shard', 0.5)],
    // 'frame_changer:obsidian': ['4x modpack:obsidian_shard', ChanceResult.of('modpack:obsidian_shard', 0.5)],


    '#minecraft:planks': ['minecraft:stick'],
    '#minecraft:wooden_stairs': ['minecraft:stick'],
    '#minecraft:wooden_slabs': ['minecraft:stick'],
    '#minecraft:wooden_fences': ['minecraft:stick'],
    '#c:fences/wooden': ['minecraft:stick'],
    '#minecraft:wooden_doors': ['minecraft:stick'],
    '#minecraft:wooden_trapdoors': ['minecraft:stick'],
    '#minecraft:wooden_pressure_plates': ['minecraft:stick'],
    '#minecraft:wooden_buttons': ['minecraft:stick'],
    // '#forge:stone': ['twigs:pebble'],

    '#minecraft:beds': ['minecraft:stick', 'minecraft:string', 'minecraft:rabbit_hide'],
    // '#thecomfortzone:pillows': ['minecraft:feather'],
    // '#sleep_tight:hammocks': ['2x minecraft:string'],
    '#minecraft:candles': ['minecraft:string', ChanceResult.of('supplementaries:ash', 0.5)],

    '#minecraft:banners': ['minecraft:stick', 'minecraft:string'],
    '#supplementaries:flags': ['minecraft:stick', 'minecraft:string'],

    'minecraft:slag': ['5x minecraft:iron_nugget', '5x overgeared:copper_nugget', '5x minecraft:gold_nugget'],

    'minecraft:nether_star': ['9x minecraft:nether_star_powder', ChanceResult.of('minecraft:nether_star_powder', 0.25)],
    'nomansland:redstone': ['2x minecraft:redstone', ChanceResult.of('minecraft:redstone', 0.5)],

    'minecraft:leather': ['4x minecraft:rabbit_hide'],

    '#minecraft:logs': ['4x minecraft:stick', ChanceResult.of('minecraft:stick', 0.5), ChanceResult.of('nomansland:resin', 0.75)]
}

let convert = (dict) => {
    let newdict = {}

    for (let tool in dict) {
        let arr = dict[tool]

        arr.forEach(element => {
            newdict[element] = tool
        })
    }
    
    return newdict
}

let tools = convert({
    '#modpack:obsidian_breakers': [
        'minecraft:obsidian',
        'frame_changer:obsidian'
    ],

    '#c:tools/shear': [
        'supplementaries:confetti_popper',
        'minecraft:lead',
        'minecraft:writable_book',
        'minecraft:book',
        'map_atlases:atlas',
        'minecraft:map',
        'supplementaries:slice_map',
        'minecraft:filled_map',
        'minecraft:brush',
        'quark:seed_pouch',
        'supplementaries:present',
        'supplementaries:trapped_present',
        'supplementaries:notice_board',
        'minecraft:leather',
        'supplementaries:doormat'
    ],

    '#minecraft:axes': [
        'minecraft:fishing_rod',
        'minecraft:carrot_on_a_stick',
        'minecraft:warped_fungus_on_a_stick',
        'supplementaries:slingshot',

        'farmersdelight:canvas_sign',
        'farmersdelight:hanging_canvas_sign',
        '#modpack:torches',
        'supplementaries:bamboo_spikes',

        'minecraft:beehive',

        'farmersdelight:basket',
        '#modpack:timber_frames',
        // '#twigs:tables',
        '#minecraft:signs',
        '#minecraft:hanging_signs',

        '#minecraft:planks',
        '#minecraft:wooden_stairs',
        '#minecraft:wooden_slabs',
        '#minecraft:wooden_fences',
        '#c:fences/wooden',
        '#minecraft:wooden_doors',
        '#minecraft:wooden_trapdoors',
        '#minecraft:wooden_pressure_plates',
        '#minecraft:wooden_buttons',

        'minecraft:item_frame',
        '#minecraft:beds',
        'minecraft:firework_rocket',
        '#supplementaries:flags',
        '#minecraft:banners',
        'supplementaries:flute',
        'minecraft:armor_stand',
        'supplementaries:bellows'
    ]
})

ServerEvents.tags('item', event => {
    event.add('modpack:froglight', ['minecraft:ochre_froglight', 'minecraft:verdant_froglight', 'minecraft:pearlescent_froglight'])

    event.add('modpack:torches', ['minecraft:torch', 'minecraft:soul_torch', 'minecraft:redstone_torch'])
    event.add('modpack:lanterns', ['minecraft:lantern', 'minecraft:soul_lantern'])

    event.add('modpack:timber_frames', ['supplementaries:timber_frame', 'supplementaries:timber_brace', 'supplementaries:timber_cross_brace'])
   
})

ServerEvents.recipes(event => {
    // SIMPLE
    // event.recipes.farmersdelight.cutting('minecraft:leather', '#forge:tools/knives', ['3x minecraft:rabbit_hide', ChanceResult.of('minecraft:rabbit_hide', 0.5)])

    // UNCRAFTING
    for (let item in uncrafting){
        let tool = tools[item] || 'quark:hammer'

        // console.log(item, tool, uncrafting[item])

        event.recipes.farmersdelight.cutting(item, tool, uncrafting[item])
    }
}) 