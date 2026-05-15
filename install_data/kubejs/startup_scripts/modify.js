const $FoodBuilder = Java.loadClass('net.minecraft.world.food.FoodProperties$Builder')

let blastResistant = [
    "minecraft:copper_ore",
    "minecraft:gold_ore",
    "minecraft:iron_ore",
    "minecraft:lapis_ore",
    "minecraft:redstone_ore",
    "minecraft:diamond_ore",
    "minecraft:coal_ore"
]

BlockEvents.modification(e => {
    e.modify('minecraft:glow_lichen', block => {
        block.lightEmission = 0
    })

    blastResistant.forEach(id => {
        e.modify(id, block => {
            block.explosionResistance = 3600000.0
        })
    })
})

const lessFood = {
    'minecraft:apple': 1,
    'minecraft:golden_apple': 7,
    'minecraft:enchanted_golden_apple': 8,
    'minecraft:melon_slice': 1,
    'minecraft:sweet_berries': 1,
    'minecraft:carrot': 1,
    'minecraft:baked_potato': 3,
    'minecraft:poisonous_potato': 1,
    'minecraft:beef': 2,
    'minecraft:cooked_beef': 4,
    'minecraft:porkchop': 2,
    'minecraft:cooked_porkchop': 4,
    'minecraft:cooked_chicken': 4,
    'minecraft:cooked_mutton': 4,
    'minecraft:rabbit': 1,
    'minecraft:cooked_rabbit': 2,
    'minecraft:rotten_flesh': 1,
    'minecraft:spider_eye': 1,
    'minecraft:cooked_cod': 3,
    'minecraft:cooked_salmon': 4,
    'minecraft:bread': 4,
    'minecraft:mushroom_stew': 4,
    'minecraft:rabbit_stew': 6,
    'minecraft:golden_apple': 8,
    'minecraft:enchanted_golden_apple': 9,

    'farmersdelight:pumpkin_slice': 1,
    'spawn:roasted_sunflower_seeds': 1,
    'nomansland:pine_nuts': 1,
    'nomansland:trail_mix': 2,
    'yungscavebiomes:prickly_peach': 1,
    'spawn:dates': 2,
    'nomansland:grilled_mushrooms': 3,
    'abundant_atmosphere:puffball_cutlet': 2,
    'nomansland:raw_horse': 1,
    'nomansland:horse_steak': 2,
    'nomansland:raw_venison': 2,
    'nomansland:cooked_venison': 3,
    'nomansland:frog_leg': 1,
    'nomansland:cooked_frog_leg': 2,
    'hungrywaters:piranha_raw': 1,
    'hungrywaters:piranha_cooked': 3,
    'nomansland:billhook_bass': 2,
    'nomansland:cooked_billhook_bass': 4,
    'quark:cooked_crab_leg': 4,
    'nomansland:honeyed_apple': 4,
    'farmersdelight:wheat_dough': 1,
    'farmersdelight:raw_pasta': 1,
    'nomansland:hardtack': 4,
    'incision:eyeballyolk': 3,
    'farmersdelight:dog_food': 1,
    'farmersdelight:salmon_roll': 2,
    'farmersdelight:cod_roll': 2,
    'farmersdelight:kelp_roll': 4,
}

const convertFoodTo = {
    'minecraft:milk_bucket': 'minecraft:bucket'
}

let bowl_food = [
    'farmersdelight:stuffed_pumpkin', 'farmersdelight:baked_cod_stew', 'farmersdelight:fish_stew', 'farmersdelight:beef_stew', 'minecraft:mushroom_stew', 'minecraft:rabbit_stew',
    'farmersdelight:noodle_soup', 'farmersdelight:chicken_soup', 'farmersdelight:vegetable_soup', 'farmersdelight:pumpkin_soup', 'minecraft:beetroot_soup', 'farmersdelight:roast_chicken',
    'farmersdelight:honey_glazed_ham', 'farmersdelight:shepherds_pie', 'farmersdelight:cooked_rice', 'farmersdelight:rice_roll_medley_block', 'farmersdelight:pasta_with_meatballs', 'farmersdelight:squid_ink_pasta',
    'farmersdelight:bacon_and_eggs', 'farmersdelight:vegetable_noodles', 'farmersdelight:bone_broth', 'farmersdelight:steak_and_potatoes', 'farmersdelight:ratatouille', 'farmersdelight:grilled_salmon',
    'farmersdelight:fruit_salad', 'farmersdelight:mixed_salad', 'farmersdelight:nether_salad', 'farmersdelight:tomato_sauce', 'farmersdelight:fried_rice', 'farmersdelight:dog_food',
    'incubation:scrambled_eggs'
]

bowl_food.forEach(id => {
    convertFoodTo[id] = 'minecraft:bowl'
})

let foodEatSpeed = {}
let level_one = ['minecraft:apple', 'farmersdelight:pumpkin_slice', 'minecraft:melon_slice', 'spawn:roasted_sunflower_seeds', 'nomansland:pine_nuts', 'nomansland:walnuts', 'minecraft:carrot', 'minecraft:potato', 'minecraft:beetroot', 'minecraft:beef', 'nomansland:raw_horse', 'minecraft:porkchop', 'minecraft:mutton', 'nomansland:raw_venison', 'minecraft:chicken', 'minecraft:rabbit', 'nomansland:frog_leg', 'minecraft:cod', 'minecraft:salmon', 'nomansland:billhook_bass', 'minecraft:tropical_fish', 'minecraft:pufferfish', 'incubation:fried_egg', 'minecraft:bread', 'minecraft:rotten_flesh', 'minecraft:spider_eye', 'farmersdelight:cabbage', 'farmersdelight:tomato', 'farmersdelight:onion', 'farmersdelight:pie_crust', 'farmersdelight:raw_pasta', 'farmersdelight:wheat_dough', 'incision:eyeballyolk']
let level_second = ['minecraft:golden_apple', 'minecraft:golden_carrot', 'minecraft:baked_potato', 'minecraft:poisonous_potato', 'minecraft:cooked_beef', 'nomansland:horse_steak', 'minecraft:cooked_porkchop', 'minecraft:cooked_mutton', 'nomansland:cooked_venison', 'minecraft:cooked_chicken', 'minecraft:cooked_rabbit', 'nomansland:cooked_frog_leg', 'minecraft:cooked_cod', 'minecraft:cooked_salmon', 'farmersdelight:kelp_roll']

level_one.forEach(id => {
    foodEatSpeed[id] = 1.85
})

level_second.forEach(id => {
    foodEatSpeed[id] = 1.6
})

ItemEvents.modification(event => {
    let edibles = Ingredient.all.stacks
        .toList()
        .stream()
        .filter((item) => Item.of(item).components.has('food'))
        .toList()

    edibles.forEach(id => {
        event.modify(id, item => {
            let foodComponent = item.get('food')
            let originalNutrition = foodComponent.nutrition()
            let originalSaturation = foodComponent.saturation()

            let identifier = id.id;

            if (lessFood[identifier]) {
                originalNutrition = lessFood[identifier]
            }

            let food = {
                nutrition: originalNutrition,
                saturation: originalSaturation,
                eatSeconds: 1.6,
                effects: []
            }

            if (foodEatSpeed[identifier]) {
                food["eatSeconds"] = foodEatSpeed[identifier]
            } else {
                food["eatSeconds"] = 1.35
            }

            if (convertFoodTo[identifier]) {
                food["usingConvertsTo"] = convertFoodTo[identifier]
            }

            item.setFood(food)
        })
    })

    let flint = [
        "minecraft:wooden_sword",
        "minecraft:wooden_pickaxe",
        "minecraft:wooden_hoe",
        "minecraft:wooden_axe",
        "minecraft:wooden_shovel"
    ]

    flint.forEach(item => {
        event.modify(item, i => {
            i.setUnbreakable()
        })
    })

    event.modify('nomansland:resin', item => {
        item.burnTime = 40
    })

    event.modify([
        'all_with_you:backpack',
    ], item => {
        item.rarity = "common"
    })

    event.modify([
        'caverns_and_chasms:monocle',
        'caverns_and_chasms:unicorn_horn',
        'caverns_and_chasms:caviar',
        'caverns_and_chasms:trim_modifier_smithing_template',
        'caverns_and_chasms:lost_goat_horn'
    ], item => {
        item.rarity = "uncommon"
    })
})

// StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event => {
//     event.remove(item => item.id == 'minecraft:bundle')
// })