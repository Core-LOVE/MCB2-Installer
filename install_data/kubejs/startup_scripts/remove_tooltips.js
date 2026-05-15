let $Component = Java.loadClass('net.minecraft.network.chat.Component')

let blacklist = [
	"tooltip.spartanshieldsunofficial",
    "tooltip.launchers_and_arrows.modifier",
    "tooltip.launchers_and_arrows.empty",
    "info.fb.",
    "blockitem.blockus.legacy",
    "PE Alpha",
    "tooltip.darkerdepths.press_shift",
    "tooltip.darkerdepths.legacy.shift_desc"
]

global.tooltips = (event) => {
    try {
        let tooltip = event.getToolTip()
        
        // console.log(tooltip)

        event.getToolTip().removeIf((element) => {
            let json = element.toJson()
            let result = false

            if (json.toString() != "") {
                let obj = json.toString() + ""

                // console.log(obj)

                blacklist.forEach(id => {
                    if (obj.includes(id)) {
                        result = true
                    }
                })
            }

            return result
        })
    } catch (error) {
        console.error(error.message);
    } finally {

    }
}

NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.ItemTooltipEvent", event => {
    global.tooltips(event)
})