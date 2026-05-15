BlockEvents.rightClicked(event => {
    const { block } = event
    const data = block.entityData

    if (block.id == "amendments:liquid_cauldron" && data && data.fluid.id == "nomansland:resin_oil") {
        // let properties = block.properties

        // if (+properties.level > 0) {
        //     let new_level = (+properties.level) - 1

        //     properties.put("level", new_level.toString())
        //     data.fluid.count = new_level

        //     block.set("amendments:liquid_cauldron", properties)
        //     spawner.setEntityData(data)
        // }
    }
})