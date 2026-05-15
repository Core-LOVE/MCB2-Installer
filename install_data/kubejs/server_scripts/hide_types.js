// ServerEvents.tags(`item`, event => {
//     let slabs = Ingredient.of('#minecraft:slabs').itemIds

//     for (const slab of slabs) {
//         event.add(`c:hidden_from_recipe_viewers`, slab)
//     }

//     let stairs = Ingredient.of('#minecraft:stairs').itemIds

//     for (const stair of stairs) {
//         event.add(`c:hidden_from_recipe_viewers`, stair)
//     }

//     let walls = Ingredient.of('#minecraft:walls').itemIds

//     for (const wall of walls) {
//         event.add(`c:hidden_from_recipe_viewers`, wall)
//     }
// })

// let addModifier = (event, tag, name) => {
//     event.addBlockModifier(tag).modifyLoot(ItemFilter.ANY, (item) => {
//         let output = item

//         if (item.id.includes(name)) {
//             let new_id = item.id.replace(name, "")

//             if (new_id.includes("brick") && !new_id.includes("bricks")) {
//                 new_id = new_id.replace("brick", "bricks")
//             }
        
//             if (Item.exists(new_id)) {
//                 output = Item.of(new_id)
//             } else {
//                 new_id = new_id + "_planks"

//                 if (Item.exists(new_id)) {
//                     output = Item.of(new_id)
//                 }
//             }

//             console.log(new_id)
//         }

//         return output
//     })
// }

// LootJS.modifiers(event => {
//     addModifier(event, "#minecraft:stairs", "_stairs")
//     addModifier(event, "#minecraft:slabs", "_slab")
//     addModifier(event, "#minecraft:walls", "_wall")
// })