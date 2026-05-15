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
            })
        }
    }

    return new_data
}

const effects_data = convert_data(JsonIO.read("kubejs/food_effects.json"))

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

const get_effect_text = (settings) => {
    let mult = 50

    let translatable = "effect." + settings.id.replace(":", ".")
    let timer = new Date(settings.timer * mult).toISOString().substring(14, 19)

    if (settings.timer >= 72000) {
        timer = new Date(settings.timer * mult).toISOString().substring(11, 16)
    }

    let ampl = settings.ampl

    if (ampl > 0) {
        ampl = " " + romanize(ampl + 1)
    } else {
        ampl = ""
    }

    return Text.of(`[effect:${settings.id}] `)
    .append(Text.translate(translatable))

    .append(Text.of(ampl).color("yellow"))

    .append(Text.of(" (" + timer + ")").color("gray"))
}

ItemEvents.modifyTooltips(event => {
    for (const item_id in effects_data) {
        let texts = []
        let data = effects_data[item_id]

        data.forEach(settings => {
            texts.push(get_effect_text(settings))
        })

        event.add(item_id, texts)
    }
})