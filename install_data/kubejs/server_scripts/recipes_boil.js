let json_cache_boil = {  
  "type": "concoction:cauldron_brewing",
  "group": "food",
  "category": "misc",
  "state" : {
    "Name": "minecraft:water_cauldron",
    "Properties": {
      "level": "3"
    }
  },
  "ingredients": [],
  "result": {
    "interactionType": "bowl"
  }
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

let fixRecipe = () => {
    let count = json_cache_boil["result"].asJsonObject.get("count")
    json_cache_boil["result"]["addProperty(java.lang.String,java.lang.String)"]("count", count + "")
}

ServerEvents.recipes(event => {
    const brewing_none = (output, input) => {
        json_cache_boil["type"] = "concoction:cauldron_brewing"

        json_cache_boil["ingredients"] = getIngredientsList(input)
        json_cache_boil["result"] = getItemStack(output)
        json_cache_boil["result"]["addProperty(java.lang.String,java.lang.String)"]("interactionType", "hand")

        fixRecipe(json_cache_boil)
       
        event.custom(json_cache_boil)
    }

    const brewing_bowl = (output, input) => {
        json_cache_boil["type"] = "concoction:cauldron_brewing"

        json_cache_boil["ingredients"] = getIngredientsList(input)
        json_cache_boil["result"] = getItemStack(output)
        json_cache_boil["result"]["addProperty(java.lang.String,java.lang.String)"]("interactionType", "bowl")

        fixRecipe()

        event.custom(json_cache_boil)
    }

    const brewing_interaction = (output, interaction, input) => {
        json_cache_boil["type"] = "concoction:cauldron_brewing"

        json_cache_boil["ingredients"] = getIngredientsList(input)
        json_cache_boil["result"] = getItemStack(output)
        json_cache_boil["result"]["addProperty(java.lang.String,java.lang.String)"]("interactionType", interaction)

        fixRecipe(json_cache_boil)
       
        event.custom(json_cache_boil)
    }

    brewing_bowl('minecraft:mushroom_stew', ['minecraft:brown_mushroom', 'minecraft:red_mushroom'])
    brewing_bowl('farmersdelight:cooked_rice', ['farmersdelight:rice'])
    brewing_bowl('minecraft:beetroot_soup', ['minecraft:beetroot', 'farmersdelight:cabbage', 'minecraft:carrot', 'farmersdelight:onion'])
    brewing_bowl('minecraft:rabbit_stew', ['minecraft:baked_potato', 'minecraft:cooked_rabbit', 'minecraft:carrot', 'farmersdelight:cabbage'])
    brewing_bowl('farmersdelight:tomato_sauce', ['farmersdelight:tomato', 'farmersdelight:tomato'])
    brewing_bowl('farmersdelight:noodle_soup', ['farmersdelight:cabbage', 'farmersdelight:raw_pasta', 'minecraft:dried_kelp', 'incubation:fried_egg'])
    brewing_bowl('farmersdelight:beef_stew', ['minecraft:beef', 'minecraft:carrot', 'minecraft:potato'])
    brewing_bowl('farmersdelight:fish_stew', ['#c:foods/raw_fish', 'farmersdelight:tomato_sauce', 'farmersdelight:onion', 'minecraft:carrot'])
    brewing_bowl('farmersdelight:baked_cod_stew', ['minecraft:cooked_cod', 'incubation:fried_egg', 'farmersdelight:tomato_sauce', 'farmersdelight:cabbage'])

    brewing_bowl('farmersdelight:vegetable_noodles', ['farmersdelight:raw_pasta', 'minecraft:carrot', 'minecraft:brown_mushroom', 'farmersdelight:cabbage'])
    brewing_bowl('farmersdelight:vegetable_soup', ['minecraft:beetroot', 'minecraft:potato', 'minecraft:carrot', 'farmersdelight:cabbage'])
    brewing_bowl('farmersdelight:squid_ink_pasta', ['farmersdelight:raw_pasta', 'minecraft:ink_sac', 'farmersdelight:tomato', '#c:foods/raw_fishes'])
    brewing_bowl('farmersdelight:chicken_soup', ['minecraft:carrot', 'farmersdelight:onion', 'farmersdelight:cabbage', 'minecraft:chicken'])
    brewing_bowl('farmersdelight:bone_broth', ['abundant_atmosphere:poreshroom', 'abundant_atmosphere:catsbane', 'minecraft:bone_meal', 'minecraft:bone'])  
    brewing_bowl('farmersdelight:pumpkin_soup', ['farmersdelight:cabbage', 'farmersdelight:pumpkin_slice', 'minecraft:pumpkin_seeds', 'minecraft:porkchop'])  
    brewing_bowl('farmersdelight:ratatouille', ['minecraft:beetroot', 'farmersdelight:onion', 'farmersdelight:tomato', 'minecraft:carrot'])  

    brewing_bowl('farmersdelight:fried_rice', ['farmersdelight:rice', 'minecraft:egg', 'minecraft:carrot', 'farmersdelight:onion'])

    brewing_none('spawn:blue_footed_boots', ['minecraft:iron_boots', 'minecraft:slime_ball', 'nomansland:frog_leg', 'minecraft:lapis_lazuli'])

    brewing_none('supplementaries:candy', ['minecraft:sugar', 'minecraft:sugar', 'minecraft:sugar', 'minecraft:paper'])
})