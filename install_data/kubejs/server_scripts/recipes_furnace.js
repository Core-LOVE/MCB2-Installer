let ignore = {
    'minecraft:raw_iron': true,
    'minecraft:raw_copper': true,
    'minecraft:raw_gold': true,

    'minecraft:raw_iron_block': true,
    'minecraft:raw_copper_block': true,
    'minecraft:raw_gold_block': true,

    'minecraft:iron_ore': true,
    'minecraft:copper_ore': true,
    'minecraft:gold_ore': true,
    'minecraft:coal_ore': true,
    'minecraft:emerald_ore': true,
    'minecraft:diamond_ore': true,
    'minecraft:lapis_ore': true,
    'minecraft:redstone_ore': true,

    'minecraft:deepslate_iron_ore': true,
    'minecraft:deepslate_copper_ore': true,
    'minecraft:deepslate_gold_ore': true,
    'minecraft:deepslate_coal_ore': true,
    'minecraft:deepslate_emerald_ore': true,
    'minecraft:deepslate_diamond_ore': true,
    'minecraft:deepslate_lapis_ore': true,
    'minecraft:deepslate_redstone_ore': true,

    'minecraft:nether_gold_ore': true,
    'minecraft:nether_quartz_ore': true,

    'minecraft:iron_shovel': true,
    'minecraft:iron_pickaxe': true,
    'minecraft:iron_axe': true,
    'minecraft:iron_hoe': true,
    'minecraft:iron_sword': true,

    'minecraft:golden_shovel': true,
    'minecraft:golden_pickaxe': true,
    'minecraft:golden_axe': true,
    'minecraft:golden_hoe': true,
    'minecraft:golden_sword': true,

    'quark:trowel': true,
}

let remainder = {
    'minecraft:milk_bucket': true
}

let json_cache = {  
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc", 
    "experience": 0,
    "cookingtime": 300,
    "remainder": [],
    "ingredients": [],  
    "result": {}
}

let getItemStack = (id) => {
    return Item.of(id).toJson()
}

let getIngredientStack = (id) => {
    return Ingredient.of(id).toJson()
}

let getIngredientsList = (input) => {
    let ret = []

    input.forEach(id => {
        ret.push(getIngredientStack(id))    
    })

    return ret
}

let getShapedIngredientsList = (input) => {
    let ret = {}

    for (const id in input) {
        ret[id] = getIngredientStack(input[id])
    }

    return ret
}

let getRemainders = (input) => {
    let ret = []

    input.forEach(id => {
        if (remainder[id]) {
            ret.push(true)
        } else {
            ret.push(false)
        }
    })

    return ret
}

let getShapedRemainders = (input) => {
    let ret = []

    for (const k in input) {
        let id = input[k]

        if (remainder[id]) {
            ret.push(true)
        } else {
            ret.push(false)
        }
    }

    return ret
}

ServerEvents.recipes(event => {
    const forge_shapeless = (output, input) => {
        json_cache["type"] = "overgeared:nether_alloy_smelting"

        json_cache["ingredients"] = getIngredientsList(input)
        json_cache["result"] = getItemStack(output)
        json_cache["remainder"] = getRemainders(input)

        event.custom(json_cache)
    }

    const forge_shaped = (output, pattern, input) => {
        json_cache["type"] = "overgeared:shaped_nether_alloy_smelting"
        
        json_cache["pattern"] = pattern
        json_cache["key"] = getShapedIngredientsList(input)
        json_cache["result"] = getItemStack(output)
        json_cache["remainder"] = getShapedRemainders(input)
        
        event.custom(json_cache)
    }

    const forge_tools = (material, input) => {
        forge_shaped(material + '_sword', [
            ' A ',
            ' A ',
            ' B '
        ], {A: input, B: 'minecraft:stick'})

        forge_shaped(material + '_pickaxe', [
            'AAA',
            ' B ',
            ' B '
        ], {A: input, B: 'minecraft:stick'})

        forge_shaped(material + '_axe', [
            'AA ',
            'AB ',
            ' B '
        ], {A: input, B: 'minecraft:stick'})

        forge_shaped(material + '_hoe', [
            'AA ',
            ' B ',
            ' B '
        ], {A: input, B: 'minecraft:stick'})

        forge_shaped(material + '_shovel', [
            ' A ',
            ' B ',
            ' B '
        ], {A: input, B: 'minecraft:stick'})

        forge_shaped(material + '_chestplate', [
            'A A',
            'AAA',
            'AAA'
        ], {A: input})
		
	     forge_shaped(material + '_boots', [
            '   ',
            'A A',
            'A A'
        ], {A: input})
		
		 forge_shaped(material + '_helmet', [
            '   ',
            'AAA',
            'A A'
        ], {A: input})
		
		forge_shaped(material + '_leggings', [
            'AAA',
            'A A',
            'A A'
        ], {A: input})
    }

    // TOOLS
    forge_tools('minecraft:iron', 'minecraft:iron_ingot')
    forge_tools('minecraft:diamond', 'minecraft:diamond')
    forge_tools('minecraft:golden', 'minecraft:gold_ingot')

    // BEFORE CONVERT
    // let smelting = (output, i) => {
    //     forge_shapeless(output, i)
    //     forge_shapeless(output.withCount(count * 3), [i, i, i])
    // }

    // smelting('minecraft:short_dry_grass', 'minecraft:short_grass')
    // smelting('minecraft:short_dry_grass', 'nomansland:oat_grass')
    // smelting('minecraft:short_dry_grass', 'nomansland:short_beachgrass')

    // CONVERT SMELTING
    event.forEachRecipe({ type: 'minecraft:smelting' }, rp => {
        let ingredients = rp.originalRecipeIngredients
        let output = rp.originalRecipeResult

        // console.log(rp.cookingtime)

        let i = ingredients[0]
        let first = i.first

        if (ignore[first.id]) {
            return
        }

        let count = output.count

        forge_shapeless(output, ingredients)
        forge_shapeless(output.withCount(count * 3), [i, i, i])
    })

    // RECIPES
    forge_shaped('gladius:gilded_dagger', [
        '  A', 
        'BA ',
        'CB '  
    ], {
        C: 'minecraft:stick',
        B: 'minecraft:gold_ingot',
        A: 'heart_crystals:heart_crystal_shard'
    })

    forge_shaped('6x caverns_and_chasms:large_arrow', [
        ' A ', 
        ' A ',
        ' B '  
    ], {
        B: 'minecraft:feather',
        A: 'minecraft:iron_ingot'
    })

    forge_shaped('quark:hammer', [
        'AAA', 
        'ABA',
        ' B '  
    ], {
        B: 'minecraft:stick',
        A: 'minecraft:iron_ingot'
    })

    forge_shaped('quark:trowel', [
        'B A', 
        'AAA',
        '   '  
    ], {
        B: 'minecraft:stick',
        A: 'minecraft:gold_ingot'
    })

    forge_shaped('minecraft:bucket', [
        'A A', 
        ' A ',
        '   '  
    ], {
        A: 'minecraft:iron_ingot'
    })

    forge_shaped('yo_hooks:gold_grappling_hook', [
        ' BB', 
        ' AB',
        'C  '  
    ], {
        A: 'minecraft:lead',
        C: 'minecraft:stick',
        B: 'minecraft:copper_ingot'
    })

    forge_shaped('climbing_pick:climbing_pick', [
        '  C', 
        ' AC',
        'B  '  
    ], {
        C: 'minecraft:iron_ingot',
        A: 'minecraft:stick',
        B: 'minecraft:copper_ingot'
    })

    forge_shaped('minecraft:cauldron', [
        'A A', 
        'A A', 
        'AAA', 
    ], {
        A: 'minecraft:iron_ingot',
    })

    forge_shaped('6x caverns_and_chasms:storage_duct', [
        'A A', 
        'A A', 
        'A A', 
    ], {
        A: 'minecraft:iron_ingot',
    })

    forge_shaped('minecraft:spyglass', [
        'A A', 
        'AAA', 
        'B B', 
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:glass'
    })

    forge_shaped('minecraft:shield', [
        ' A ', 
        'ABA', 
        ' A ', 
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:stick',
    })

    forge_shaped('spartanshieldsunofficial:golden_basic_shield', [
        ' A ', 
        'ABA', 
        ' A ', 
    ], {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:stick',
    })

    forge_shaped('spartanshieldsunofficial:diamond_basic_shield', [
        ' A ', 
        'ABA', 
        ' A ', 
    ], {
        A: 'minecraft:diamond',
        B: 'minecraft:stick',
    })

    forge_shaped('4x supplementaries:cog_block', [
        'AAA', 
        'ABA', 
        'AAA', 
    ], {
        A: 'minecraft:copper_ingot',
        B: 'minecraft:redstone',
    })

    forge_shaped('4x caverns_and_chasms:roller_door', [
        'AA ', 
        'AA ', 
        '   ', 
    ], {
        A: 'minecraft:iron_ingot',
    })

    // forge_shaped('8x fiberopticcables:fiber_optic_cable', [
    //     'ABA', 
    //     'BAB', 
    //     'ABA', 
    // ], {
    //     A: 'minecraft:copper_ingot',
    //     B: 'overgeared:copper_nugget',
    // })

    // forge_shaped('2x fiberopticcables:fiber_optic_transformer', [
    //     'BAB', 
    //     'DCD', 
    //     'BAB', 
    // ], {
    //     A: 'minecraft:iron_ingot',
    //     B: 'minecraft:flint',
    //     C: 'recharged:prism',
    //     D: 'nomansland:redstone'
    // })
    
    forge_shaped('4x caverns_and_chasms:packing_container', [
        'AAA', 
        'A A', 
        'AAA', 
    ], {
        A: 'minecraft:iron_ingot',
    })

    forge_shaped('oreganized:scribe', [
        '  B', 
        ' A ', 
        'A  ', 
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:diamond',
    })

    forge_shaped('supplementaries:faucet', [
        '  B', 
        'AAA', 
        '  A', 
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:stick',
    })

    forge_shaped('smart_observer:smart_observer', [
        'AAA', 
        'ABA', 
        'AAA', 
    ], {
        A: 'minecraft:netherrack',
        B: 'minecraft:observer',
    })

    forge_shaped('minecraft:shears', [
        'A  ', 
        ' A ', 
        '   ', 
    ], {
        A: 'minecraft:iron_ingot',
    })

    forge_shaped('gladius:flamberge', [
        'BAB', 
        'BAB', 
        ' C ', 
    ], {
        A: 'minecraft:diamond',
        B: 'minecraft:blaze_powder',
        C: 'minecraft:stick'
    })

    forge_shaped('4x nomansland:spike_trap', [
        '   ', 
        'BBB', 
        'AAA', 
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:iron_nugget',
    })

    forge_shaped('gladius:golden_wand', [
        'ABA', 
        'ACA', 
        'AAA', 
    ], {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:gold_nugget',
        C: 'minecraft:string'
    })
    
    // RAILS 
    forge_shaped('minecraft:minecart', [
        '   ', 
        'A A', 
        'AAA', 
    ], {
        A: 'minecraft:iron_ingot',
    })

    forge_shaped('18x minecraft:rail', [
        'A A', 
        'ABA', 
        'A A', 
    ], {
        A: 'minecraft:iron_nugget',
        B: 'minecraft:stick',
    })

    forge_shaped('8x minecraft:powered_rail', [
        'A A', 
        'ABA', 
        'ACA', 
    ], {
        A: 'minecraft:gold_nugget',
        B: 'minecraft:stick',
        C: 'minecraft:redstone'
    })

    forge_shaped('8x minecraft:detector_rail', [
        'A A', 
        'ABA', 
        'ACA', 
    ], {
        A: 'minecraft:iron_nugget',
        B: 'minecraft:stone_pressure_plate',
        C: 'minecraft:redstone'
    })

    forge_shaped('8x minecraft:activator_rail', [
        'A A', 
        'ABA', 
        'ACA', 
    ], {
        A: 'minecraft:iron_nugget',
        B: 'minecraft:stick',
        C: 'minecraft:redstone'
    })

    forge_shaped('8x caverns_and_chasms:halt_rail', [
        'ADA', 
        'ABA', 
        'ACA', 
    ], {
        A: 'minecraft:iron_nugget',
        B: 'minecraft:stick',
        C: 'minecraft:redstone',
        D: 'minecraft:iron_ingot',
    })

    // COOKING
    forge_shapeless('8x farmersdelight:sweet_berry_cookie', ['minecraft:sweet_berries', 'farmersdelight:wheat_dough'])
    forge_shapeless('8x farmersdelight:honey_cookie', ['minecraft:honeycomb', 'farmersdelight:wheat_dough'])
    forge_shapeless('8x minecraft:cookie', ['minecraft:cocoa_beans', 'farmersdelight:wheat_dough'])

    forge_shapeless('4x nomansland:maple_tart', ['minecraft:sweet_berries', 'nomansland:resin', 'nomansland:trail_mix', 'farmersdelight:wheat_dough'])

    forge_shaped('minecraft:cake', [
        'DDD', 
        'BCB',
        'AAA'  
    ], {
        A: 'farmersdelight:wheat_dough',
        B: 'minecraft:sugar',
        C: 'minecraft:egg',
        D: 'minecraft:sweet_berries'
    })
    
    forge_shaped('farmersdelight:apple_pie', [
        'DDD', 
        'BCB',
        ' A '  
    ], {
        A: 'farmersdelight:pie_crust',
        B: 'minecraft:sugar',
        C: 'minecraft:egg',
        D: 'minecraft:apple'
    })

    // forge_shaped('farmersdelight:apple_pie', [
    //     'DDD', 
    //     'BCB',
    //     ' A '  
    // ], {
    //     A: 'farmersdelight:pie_crust',
    //     B: 'minecraft:sugar',
    //     C: 'minecraft:egg',
    //     D: 'minecraft:apple'
    // })

    forge_shaped('farmersdelight:chocolate_pie', [
        'DDD', 
        'BCB',
        ' A '  
    ], {
        A: 'farmersdelight:pie_crust',
        B: 'minecraft:sugar',
        C: 'minecraft:egg',
        D: 'minecraft:cocoa_beans'
    })

    forge_shaped('minecraft:pumpkin_pie', [
        'DDD', 
        'BCB',
        ' A '  
    ], {
        A: 'farmersdelight:pie_crust',
        B: 'minecraft:sugar',
        C: 'minecraft:egg',
        D: 'farmersdelight:pumpkin_slice'
    })

    forge_shaped('farmersdelight:honey_glazed_ham_block', [
        'DDD', 
        'BCE',
        ' A '  
    ], {
        A: 'minecraft:bowl',
        B: 'minecraft:sweet_berries',
        C: 'minecraft:porkchop',
        D: 'minecraft:honeycomb',
        E: 'abundant_atmosphere:puffball_slice'
    })

    forge_shaped('farmersdelight:roast_chicken_block', [
        'EFG', 
        'BCD',
        'BAD'  
    ], {
        A: 'minecraft:bowl',
        B: 'minecraft:carrot',
        C: 'minecraft:chicken',
        D: 'minecraft:potato',
        E: 'farmersdelight:onion',
        F: 'minecraft:egg',
        G: 'minecraft:bread'
    })

    forge_shaped('farmersdelight:stuffed_pumpkin_block', [
        'BCD', 
        'EFG',
        ' A '  
    ], {
        A: 'minecraft:pumpkin',
        B: 'minecraft:brown_mushroom',
        C: 'abundant_atmosphere:puffball_slice',
        D: 'minecraft:carrot',
        E: 'minecraft:potato',
        F: 'minecraft:beef',
        G: 'minecraft:sweet_berries'
    })


    forge_shaped('spawn:coastal_crab_claw', [
        'ACA', 
        'CBC',
        'ACA'  
    ], {
        A: 'minecraft:prismarine_shard',
        B: 'supplementaries:bubble_blower',
        C: 'minecraft:prismarine_crystals',
    })


    forge_shapeless('minecraft:flint_and_steel', ['minecraft:flint', 'minecraft:iron_ingot'])

    forge_shapeless('4x minecraft:name_tag', ['minecraft:iron_ingot', 'minecraft:ink_sac', 'minecraft:paper'])
    forge_shapeless('16x minecraft:name_tag', ['minecraft:iron_ingot', 'supplementaries:antique_ink', 'minecraft:paper'])
    
    forge_shapeless('minecraft:leather', ['minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh'])

    forge_shapeless('farmersdelight:bacon_and_eggs', ['minecraft:porkchop', 'minecraft:egg', 'minecraft:bowl'])
    forge_shapeless('farmersdelight:pasta_with_meatballs', ['farmersdelight:raw_pasta', 'minecraft:beef', 'farmersdelight:tomato', 'minecraft:egg', 'minecraft:bowl'])
    forge_shapeless('farmersdelight:pasta_with_meatballs', ['farmersdelight:raw_pasta', 'minecraft:beef', 'farmersdelight:tomato', 'minecraft:egg', 'minecraft:bowl'])
       
    // NO MORE SMELTING
    let remove_types = [
        "minecraft:smelting",
        "minecraft:blasting",
        "minecraft:smoking",
        "accents:sewing",
        "farmersdelight:cooking",
        "amendments:cauldron_crafting",
        "additionaladditions:brewing",
        "overgeared:forging",
        "overgeared:rock_knapping",
        "overgeared:fletching",
        "overgeared:item_to_tooltype",
        "overgeared:cooling",
        "overgeared:grinding",
        "overgeared:casting"
    ]

    remove_types.forEach(type => {
        event.remove({ type: type })
    })
})
