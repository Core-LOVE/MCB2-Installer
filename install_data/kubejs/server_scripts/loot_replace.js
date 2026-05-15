const replace_overworld = {
    'minecraft:iron_ingot': 'minecraft:slag',
    'minecraft:gold_ingot': 'minecraft:raw_gold',
    'minecraft:copper_ingot': 'minecraft:raw_copper',

    'minecraft:iron_nugget': 'minecraft:slag',
    'minecraft:gold_nugget': 'minecraft:flint',

    'minecraft:leather_helmet': 'minecraft:chainmail_helmet',
    'minecraft:leather_chestplate': 'minecraft:chainmail_chestplate',
    'minecraft:leather_leggings': 'minecraft:chainmail_leggings',
    'minecraft:leather_boots': 'minecraft:chainmail_boots',

    'minecraft:iron_helmet': 'minecraft:chainmail_helmet',
    'minecraft:iron_chestplate': 'minecraft:chainmail_chestplate',
    'minecraft:iron_leggings': 'minecraft:chainmail_leggings',
    'minecraft:iron_boots': 'minecraft:chainmail_boots',

    'minecraft:golden_helmet': 'minecraft:chainmail_helmet',
    'minecraft:golden_chestplate': 'minecraft:chainmail_chestplate',
    'minecraft:golden_leggings': 'minecraft:chainmail_leggings',
    'minecraft:golden_boots': 'minecraft:chainmail_boots',

    'minecraft:diamond_helmet': 'minecraft:chainmail_helmet',
    'minecraft:diamond_chestplate': 'minecraft:chainmail_chestplate',
    'minecraft:diamond_leggings': 'minecraft:chainmail_leggings',
    'minecraft:diamond_boots': 'minecraft:chainmail_boots',


    'minecraft:stone_sword': 'nomansland:explosive',
    'minecraft:stone_shovel': 'supplementaries:slingshot',
    'minecraft:stone_pickaxe': 'yo_hooks:gold_grappling_hook',
    'minecraft:stone_axe': 'climbing_pick:climbing_pick',
    'minecraft:stone_hoe': 'atlatl:atlatl',

    'minecraft:golden_sword': 'nomansland:explosive',
    'minecraft:golden_shovel': 'supplementaries:slingshot',
    'minecraft:golden_pickaxe': 'gladius:golden_wand',
    'minecraft:golden_axe': 'climbing_pick:climbing_pick',
    'minecraft:golden_hoe': 'atlatl:atlatl',
    
    'minecraft:iron_sword': 'quark:pickarang',
    'minecraft:iron_shovel': 'supplementaries:slingshot',
    'minecraft:iron_pickaxe': 'yo_hooks:gold_grappling_hook',
    'minecraft:iron_axe': 'supplementaries:cannonball',
    'minecraft:iron_hoe': 'supplementaries:quiver',
    
    'minecraft:diamond_sword': 'gladius:golden_wand',
    'minecraft:diamond_pickaxe': 'quark:pickarang',
    'minecraft:diamond_axe': 'climbing_pick:climbing_pick',
    'minecraft:diamond_shovel': 'minecraft:crossbow',
    'minecraft:diamond_hoe': 'minecraft:crossbow',

    'minecraft:leather_horse_armor': 'farmersdelight:horse_feed',
    'minecraft:iron_horse_armor': 'minecraft:saddle',
    'minecraft:golden_horse_armor': 'horseshoes:horseshoes',
    'minecraft:diamond_horse_armor': 'horseshoes:horseshoes',


    'minecraft:iron_block': 'minecraft:slag', 
    'minecraft:gold_block': 'minecraft:raw_gold', 
    'minecraft:redstone_block': 'nomansland:redstone', 
    'minecraft:emerald_block': 'minecraft:emerald', 
    'minecraft:lapis_block': 'minecraft:lapis_lazuli',  
    'minecraft:diamond_block': 'minecraft:slag', 
    'minecraft:copper_block': 'minecraft:raw_copper'
}

const replace_nether = {
    'minecraft:saddle': 'gladius:flamewalkers'
}

const replace_biomes = {
    "minecraft:cherry_grove": {
        "minecraft:arrow": 'heart_crystals:cupids_arrow'
    },

    "#c:is_aquatic": {
        'minecraft:arrow': 'gladius:prismarine_arrow',
        'minecraft:bow': 'launchers_and_arrows:rainshot_bow',
        'horseshoes:horseshoes': 'horseshoes:aquatic_horseshoes'
    },

    "#c:is_cold/overworld": {
        'horseshoes:horseshoes': 'horseshoes:frozen_horseshoes'  
    }
}

const replace_loot = (event, ar, biomes) => {
    for (const key in ar) {
        event.addTableModifier(/.*/).replaceLoot(key, ar[key], true).matchBiome(biomes)
    }
}

LootJS.modifiers(event => {
    replace_loot(event, replace_overworld, "#minecraft:is_overworld")
    replace_loot(event, replace_nether, "#minecraft:is_nether")

    for (const key in replace_biomes) {
        replace_loot(event, replace_biomes[key], key)
    }

    event.addTableModifier(LootType.CHEST).modifyLoot(ItemFilter.ENCHANTED, item => {
        item.remove("minecraft:enchantments")
        
        return item
    })
})