ServerEvents.recipes(event => {
    //mana pool recipes to remove
    const remove_pool_ids = ['beetroot_seeds_to_melon_seeds', 'glowstone_dust_to_redstone', 'glow_berries_to_apple', 'carrot_to_beetroot_seeds', 'sweet_berries_to_glow_berries', 'cocoa_beans_to_wheat_seeds', 'potato_to_carrot', 'redstone_to_glowstone_dust', 'apple_to_sweet_berries', 'melon_seeds_to_pumpkin_seeds', 'wheat_seeds_to_potato']
    const remove_rune_ids = ['air', 'water', 'fire', 'earth', 'winter', 'lust', 'gluttony', 'greed', 'sloth', 'wrath', 'envy', 'pride']
    const remove_flower_ids = ['entropinnyum', 'munchdew']

    remove_pool_ids.forEach(id => {
        event.remove({ id: 'botania:mana_infusion/'+id})
    })

    remove_flower_ids.forEach(id => {
        event.remove({ id: 'botania:petal_apothecary/'+id})
    })

    event.remove({ id: 'botania:mana_spreader'})
    event.shaped('botania:mana_spreader', [
            'WWW',
            'GP ',
            'WWW'
        ], {
            W: '#botania:livingwood_logs',
            P: '#botania:petals',
            G: 'minecraft:gold_ingot'
        }
    )

    event.replaceInput({id: 'botania:lens_weight'},
        'minecraft:prismarine_crystals',
        'minecraft:sand')

    event.replaceInput({id: 'botania:mana_gun'},
        'botania:mana_diamond',
        'minecraft:flint_and_steel')

    event.custom({
        "type": "botania:pure_daisy",
        "input": {
            "type": "block",
            "block": "minecraft:snow_block"
        },
        "output": {
            "name": "minecraft:ice"
        }
    })

    //rune recipes
    remove_rune_ids.forEach(id => {
        event.remove({ id: 'botania:runic_altar/'+id})
    })
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "tag": "botania:mana_dusts"
            },
            {
                "tag": "botania:manasteel_ingots"
            },
            {
                "tag": "minecraft:wool_carpets"
            },
            {
                "item": "minecraft:bamboo"
            },
            {
                "item": "minecraft:string"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 2,
            "item": "botania:rune_air"
        }
    })
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "tag": "botania:mana_dusts"
            },
            {
                "tag": "botania:manasteel_ingots"
            },
            {
                "item": "minecraft:bone_meal"
            },
            {
                "item": "enchanted:water_artichoke"
            },
            {
                "item": "minecraft:fishing_rod"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 2,
            "item": "botania:rune_water"
        }
    })
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "tag": "botania:mana_dusts"
            },
            {
                "tag": "botania:manasteel_ingots"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "create:andesite_alloy"
            },
            [
                {
                    "item": "minecraft:brown_mushroom"
                },
                {
                    "item": "minecraft:red_mushroom"
                }
            ]
        ],
        "mana": 5200,
        "output": {
            "count": 2,
            "item": "botania:rune_earth"
        }
    })
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "tag": "botania:mana_dusts"
            },
            {
                "tag": "botania:manasteel_ingots"
            },
            {
                "item": "minecraft:nether_brick"
            },
            {
                "item": "minecraft:nether_wart"
            },
            {
                "item": "embers:ember_shard"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 2,
            "item": "botania:rune_fire"
        }
    })
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "botania:rune_water"
            },
            {
                "item": "botania:rune_earth"
            },
            {
                "item": "minecraft:snow_block"
            },
            {
                "item": "minecraft:snow_block"
            },
            {
                "tag": "minecraft:wool"
            },
            {
                "item": "minecraft:mushroom_stew"
            }
        ],
        "mana": 8000,
        "output": {
            "count": 2,
            "item": "botania:rune_winter"
        }
    })
    function sin_rune(rune1, rune2, output) {
        event.custom({
            "type": "botania:runic_altar",
            "ingredients": [
                {
                    "item": "botania:rune_"+rune1
                },
                {
                    "item": "botania:rune_"+rune2
                },
                {
                    "item": "botania:terrasteel_nugget"
                },
                {
                    "item": "bloodmagic:infusedslate"
                }
            ],
            "mana": 10000,
            "output": {
                "count": 2,
                "item": "botania:rune_"+output
            }
        })
    }
    sin_rune('summer', 'air', 'lust')
    sin_rune('winter', 'fire', 'gluttony')
    sin_rune('spring', 'water', 'greed')
    sin_rune('autumn', 'air', 'sloth')
    sin_rune('winter', 'earth', 'wrath')
    sin_rune('winter', 'water', 'envy')
    sin_rune('summer', 'fire', 'pride')

    //orechid
    //deepslate iron - 250, gold - 125, copper - 75
    //stone iron - 29371, gold - 2647, copper - 7000
    function orechid(input, output, weight) {
        event.custom({
            "type": "botania:orechid",
            "input": {
                "type": "block",
                "block": input
            },
            "output": {
                "type": "block",
                "block": output
            },
            "weight": weight
        })
    }
    orechid('minecraft:deepslate', 'mekanism:deepslate_tin_ore', 200)
    orechid('minecraft:deepslate', 'mekanism:deepslate_osmium_ore', 175)
    orechid('minecraft:deepslate', 'mekanism:deepslate_uranium_ore', 100)
    orechid('minecraft:deepslate', 'mekanism:deepslate_fluorite_ore', 100)
    orechid('minecraft:deepslate', 'create:deepslate_zinc_ore', 50)
    orechid('minecraft:deepslate', 'embers:deepslate_lead_ore', 200)
    orechid('minecraft:deepslate', 'embers:deepslate_silver_ore', 125)
    orechid('minecraft:stone', 'mekanism:tin_ore', 20000)
    orechid('minecraft:stone', 'mekanism:osmium_ore', 4000)
    orechid('minecraft:stone', 'mekanism:uranium_ore', 2500)
    orechid('minecraft:stone', 'mekanism:fluorite_ore', 2000)
    orechid('minecraft:stone', 'create:zinc_ore', 7000)
    orechid('minecraft:stone', 'embers:lead_ore', 10000)
    orechid('minecraft:stone', 'embers:silver_ore', 2000)
    orechid('minecraft:stone', 'minecraft:copper_ore', 30000) //raise copper weight

    //fel pumpkin
    event.remove({id: "botania:fel_pumpkin"})
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "minecraft:pumpkin"
            },
            {
                "item": "minecraft:rotten_flesh"
            },
            {
                "item": "minecraft:bone"
            },
            {
                "item": "minecraft:string"
            },
            {
                "item": "minecraft:gunpowder"
            }
        ],
        "mana": 4000,
        "output": {
            "count": 1,
            "item": "botania:fel_pumpkin"
        }
    })

    //flax to feather
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "input": {
            "item": "supplementaries:flax"
        },
        "mana": 50,
        "output": {
            "item": "minecraft:feather"
        }
    })

    //rose of oblivion
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "input": {
            "item": "minecraft:wither_rose"
        },
        "mana": 5000,
        "output": {
            "item": "naturesaura:end_flower"
        }
    })

    //botania flower seeds
    const flower_colors = ['black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue', 'light_gray', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow']
    flower_colors.forEach(color => {
        event.custom({
            "type": "botania:runic_altar",
            "ingredients": [
                {
                    "item": "botania:"+color+"_petal"
                },
                {
                    "tag": "forge:seeds"
                },
                {
                    "item": "botania:rune_earth"
                }
            ],
            "mana": 2000,
            "output": {
                "item": "agricraft:seed",
                "nbt": {
                    "genes": {
                        "fertility":{"dom":1,"rec":1},
                        "gain":{"dom":1,"rec":1},
                        "growth":{"dom":1,"rec":1},
                        "mutativity":{"dom":1,"rec":1},
                        "resistance":{"dom":10,"rec":10},
                        "species":{"dom":"botania:"+color+"_mystical_flower","rec":"botania:"+color+"_mystical_flower"},
                        "strength":{"dom":1,"rec":1}
                    }
                }
            }
        })
    })

    //better generation flowers
    event.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
            {
                "tag": "botania:petals/red"
            },
            {
                "tag": "botania:petals/red"
            },
            {
                "tag": "botania:petals/gray"
            },
            {
                "tag": "botania:petals/gray"
            },
            {
                "tag": "botania:petals/white"
            },
            {
                "tag": "botania:petals/white"
            },
            {
                "item": "botania:rune_summer"
            },
            {
                "item": "botania:rune_fire"
            }
        ],
        "output": {
            "item": "botania:entropinnyum"
        },
        "reagent": {
            "tag": "botania:seed_apothecary_reagent"
        }
    })

    event.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
            {
                "tag": "botania:petals/red"
            },
            {
                "tag": "botania:petals/red"
            },
            {
                "tag": "botania:petals/lime"
            },
            {
                "tag": "botania:petals/lime"
            },
            {
                "tag": "botania:petals/green"
            },
            {
                "item": "botania:rune_spring"
            },
            {
                "item": "botania:rune_earth"
            }
        ],
        "output": {
            "item": "botania:munchdew"
        },
        "reagent": {
            "tag": "botania:seed_apothecary_reagent"
        }
    })

    event.remove({ id: 'botania:gaia_pylon'})
    event.shaped('botania:gaia_pylon', [
            ' A ',
            'ePe',
            ' E '
        ], {
            A: 'ars_elemental:anima_essence',
            P: 'botania:mana_pylon',
            e: 'botania:elementium_ingot',
            E: 'ars_nouveau:earth_essence'
        }
    )

    event.remove({ id: 'botania:mana_infusion/manasteel'})
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": "naturesaura:infused_iron"
        },
        "mana": 2500,
        "output": {
            "item": "botania:manasteel_ingot"
        }
    })
    event.remove({ id: 'botania:mana_infusion/manasteel_block'})
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": "naturesaura:infused_iron_block"
        },
        "mana": 21000,
        "output": {
            "item": "botania:manasteel_block"
        }
    })

    //duplicate skystone
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:conjuration_catalyst"
        },
        "input": {
            "item": "ae2:sky_stone_block"
        },
        "mana": 500,
        "output": {
            "item": "ae2:sky_stone_block",
            "count": 2
        }
    })

    event.remove({id: 'botania:petal_apothecary/vazkii_head'})

    event.replaceInput({id: 'botania:lens_mine'},
        'minecraft:lapis_lazuli',
        'embers:lead_plate')

    event.replaceInput({id: 'botania:exchange_rod'},
        'botania:rune_sloth',
        'embers:ember_crystal')

    //ender air without end
    event.shapeless('botania:ender_air_bottle', [
        '3x minecraft:ender_pearl',
        'minecraft:glass_bottle'
    ])

    //heart of the sea
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "botania:rune_water"
            },
            {
                "item": "botania:rune_winter"
            },
            {
                "item": "enchanted:creeper_heart"
            },
            {
                "item": "minecraft:nautilus_shell"
            },
            {
                "item": "minecraft:pufferfish"
            }
        ],
        "mana": 20000,
        "output": {
            "count": 1,
            "item": "minecraft:heart_of_the_sea"
        }
    })

    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": "botania:pink_petal"
        },
        "mana": 500,
        "output": {
            "item": "minecraft:pink_petals"
        }
    })
})