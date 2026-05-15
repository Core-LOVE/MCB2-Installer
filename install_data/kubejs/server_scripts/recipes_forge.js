let alloying = {
    'minecraft:raw_iron': 'minecraft:iron_ingot',
    'minecraft:raw_copper': 'minecraft:copper_ingot',
    'minecraft:raw_gold': 'minecraft:gold_ingot',

    'minecraft:raw_iron_block': 'minecraft:iron_block',
    'minecraft:raw_copper_block': 'minecraft:copper_block',
    'minecraft:raw_gold_block': 'minecraft:gold_block',
}

let alloying_x2 = {
    'minecraft:iron_ore': "minecraft:iron_ingot",
    'minecraft:copper_ore': "minecraft:copper_ingot",
    'minecraft:gold_ore': "minecraft:gold_ingot",
    'minecraft:coal_ore': "minecraft:coal",
    'minecraft:emerald_ore': "minecraft:emerald",
    'minecraft:diamond_ore': "minecraft:diamond",
    'minecraft:lapis_ore': 'minecraft:lapis_lazuli',
}

let json_cache = {  
    "type": "overgeared:alloy_smelting",
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

ServerEvents.recipes(event => {
    const alloy_shapeless = (output, input) => {
        json_cache["type"] = "overgeared:alloy_smelting"

        json_cache["ingredients"] = getIngredientsList(input)
        json_cache["result"] = getItemStack(output)

        event.custom(json_cache)
    }

    const alloy_shaped = (output, pattern, input) => {
        json_cache["type"] = "overgeared:shaped_alloy_smelting"
        
        json_cache["pattern"] = pattern
        json_cache["key"] = getShapedIngredientsList(input)
        json_cache["result"] = getItemStack(output)

        event.custom(json_cache)
    }

    for (let i in alloying){
        let result = alloying[i]

        alloy_shapeless(result, [i])
        alloy_shapeless('4x ' + result, [i, i, i, i])     
    }

    for (let i in alloying_x2){
        let result = alloying_x2[i]

        alloy_shapeless('5x ' + result, [i, i, i, i])     
    }
})