const sounds = [
    'minecraft:music.overworld.plains',
    'minecraft:music.overworld.topsoil',

    'minecraft:music.caves',
    'minecraft:music.nether',

    'minecraft:music.nether.erodedyard',

    "minecraft:music_disc.retold",
    "minecraft:music_disc.heyhey",
    "minecraft:music_disc.certitudes",

    "minecraft:ambient.flooded_cove",
    "minecraft:ambient.erodedyard",
]

StartupEvents.registry('sound_event', event => {
    sounds.forEach(sound => {
        event.create(sound)
    })
})