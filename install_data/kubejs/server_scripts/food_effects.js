const default_var = (val, def) => {
    if (val == -1) {
        return def
    }

    if (!val) {
        return def
    }

    return val
}

const default_vals = {
    timer: 15,
    ampl: 0,
    visual: false,
    hide: false
}

const convert_data = (data) => {
    let new_data = {}

    for (const effect_id in data) {
        let effect_data = data[effect_id]

        for (const item_id in effect_data) {
            let settings = effect_data[item_id]

            if (!new_data[item_id]) {
                new_data[item_id] = []
            }

            new_data[item_id].push({
                id: effect_id,
                timer: (default_var(settings[0], default_vals["timer"]) + 0.5) * 20,
                ampl: default_var(settings[1], default_vals["ampl"]),
                visual: default_var(settings[2], default_vals["visual"]),   
                hide: default_var(settings[3], default_vals["hide"]),    
            })
        }
    }

    return new_data
}

const effects_data = convert_data(JsonIO.read("kubejs/food_effects.json"))

ItemEvents.foodEaten(event => {
    const {player, item} = event

    let data = effects_data[item.id]

    if (!data) {
        return
    }

    // console.log(item.id, data.id, data.timer, data.ampl, data.visual, data.hide)

    data.forEach(settings => {
        player.potionEffects.add(settings.id, settings.timer, settings.ampl, settings.visual, settings.hide)
    })
})