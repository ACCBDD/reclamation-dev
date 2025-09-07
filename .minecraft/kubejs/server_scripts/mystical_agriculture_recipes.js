ServerEvents.recipes(event => {

    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            62,
            128,
            78
        ],
        "ingredients": [
            {
                "item": "mysticalagriculture:fire_essence"
            },
            {
                "item": "mysticalagriculture:air_essence"
            },
            {
                "item": "mysticalagriculture:water_essence"
            },
            {
                "item": "mysticalagriculture:earth_essence"
            },
            {
                "item": "mysticalagriculture:inferium_essence"
            },
            {
                "item": "mysticalagriculture:inferium_essence"
            },
            {
                "item": "mysticalagriculture:inferium_essence"
            }
        ],
        "power": 500,
        "result": {
            "count": 1,
            "item": "mysticalagriculture:prudentium_essence"
        }
    })
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            62,
            128,
            78
        ],
        "ingredients": [
            {
                "item": "mysticalagriculture:fire_essence"
            },
            {
                "item": "mysticalagriculture:air_essence"
            },
            {
                "item": "mysticalagriculture:water_essence"
            },
            {
                "item": "mysticalagriculture:earth_essence"
            },
            {
                "item": "mysticalagriculture:inferium_block"
            },
            {
                "item": "mysticalagriculture:inferium_block"
            },
            {
                "item": "mysticalagriculture:inferium_block"
            }
        ],
        "power": 3000,
        "result": {
            "count": 1,
            "item": "mysticalagriculture:prudentium_block"
        }
    })

    event.replaceInput({id: 'mysticalagriculture:prosperity_ingot'},
        'minecraft:iron_ingot',
        'naturesaura:infused_iron')

    event.replaceInput({id: 'mysticalagriculture:inferium_seeds'},
        'minecraft:wheat_seeds',
        '#forge:seeds')

    event.replaceInput({id: 'mysticalagriculture:prosperity_seed_base'},
        'minecraft:wheat_seeds',
        '#forge:seeds')

    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "mysticalagriculture:prudentium_block"
            },
            {
                "item": "mysticalagriculture:ice_essence"
            },
            {
                "item": "mysticalagriculture:nether_essence"
            }
        ],
        "mana": 60000,
        "output": {
            "count": 2,
            "item": "mysticalagriculture:tertium_essence"
        }
    })
    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
            {
                "item": "mysticalagriculture:prudentium_block"
            },
            {
                "item": "mysticalagriculture:nether_essence"
            },
            {
                "item": "mysticalagriculture:ice_essence"
            }
        ],
        "mana": 100000,
        "result": {
            "item": "mysticalagriculture:tertium_essence",
            "count": 2
        }
    })
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "mysticalagriculture:tertium_block"
        },
        "pedestalItems": [],
        "output": "mysticalagriculture:imperium_essence",
        "source": 10000
    })
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 20000,
        "consumptionRate": 100,
        "drainRate": 100,
        "input": {
            "item": "mysticalagriculture:imperium_essence"
        },
        "output": {
            "item": "mysticalagriculture:supremium_essence"
        },
        "upgradeLevel": 4
    })

    //mekanism alt recipes
    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                "item": "mysticalagriculture:inferium_essence"
            }
        },
        "output": {
            "amount": 10,
            "infuse_type": "reclamation:inferium"
        }
    })
    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                "item": "mysticalagriculture:prudentium_essence"
            }
        },
        "output": {
            "amount": 10,
            "infuse_type": "reclamation:prudentium"
        }
    })
    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                "item": "mysticalagriculture:tertium_essence"
            }
        },
        "output": {
            "amount": 10,
            "infuse_type": "reclamation:tertium"
        }
    })
    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                "item": "mysticalagriculture:imperium_essence"
            }
        },
        "output": {
            "amount": 10,
            "infuse_type": "reclamation:imperium"
        }
    })
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {
            "amount": 40,
            "tag": "reclamation:inferium"
        },
        "itemInput": {
            "ingredient": {
                "tag": "reclamation:elemental_essence"
            }
        },
        "output": {
            "item": "mysticalagriculture:prudentium_essence"
        }
    })
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {
            "amount": 40,
            "tag": "reclamation:prudentium"
        },
        "itemInput": {
            "ingredient": {
                "item": "botania:manasteel_nugget"
            }
        },
        "output": {
            "item": "mysticalagriculture:tertium_essence"
        }
    })
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {
            "amount": 40,
            "tag": "reclamation:tertium"
        },
        "itemInput": {
            "ingredient": {
                "item": "ars_nouveau:source_gem"
            }
        },
        "output": {
            "item": "mysticalagriculture:imperium_essence"
        }
    })
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {
            "amount": 40,
            "tag": "reclamation:imperium"
        },
        "itemInput": {
            "ingredient": {
                "item": "bloodmagic:infusedslate"
            }
        },
        "output": {
            "item": "mysticalagriculture:supremium_essence"
        }
    })

    //soulstone
    event.shaped('8x mysticalagriculture:soulstone_cobble', [
        'CCC',
        'CSC',
        'CCC'
    ], {
        C: 'minecraft:cobblestone',
        S: 'mysticalagriculture:soulium_dust'
    })
    event.shaped('8x mysticalagriculture:soulstone', [
        'CCC',
        'CSC',
        'CCC'
    ], {
        C: 'minecraft:stone',
        S: 'mysticalagriculture:soulium_dust'
    })

    //fertilizer
    event.remove({id: 'mysticalagriculture:mystical_fertilizer'})
    event.remove({id: 'mysticalagriculture:mystical_fertilizer_better'})
    event.shaped('2x mysticalagriculture:mystical_fertilizer', [
        'PFP',
        'FGF',
        'PFP'
    ], {
        P: 'mysticalagriculture:prudentium_essence',
        F: 'mysticalagriculture:fertilized_essence',
        G: 'embers:ember_crystal'
    })

    //remove infusion
    event.remove({input: '#mysticalagriculture:infusion_crystals'})
    event.remove({id: 'mysticalagriculture:prudentium_essence_uncraft'})
    event.remove({id: 'mysticalagriculture:tertium_essence_uncraft'})
    event.remove({id: 'mysticalagriculture:imperium_essence_uncraft'})
    event.remove({id: 'mysticalagriculture:supremium_essence_uncraft'})

    function altarRecipeSides(one, two, three, four, corners, output) {
        event.custom({
            "type": "mysticalagriculture:infusion",
            "ingredients": [
                {
                    "item": corners
                },
                {
                    "item": one
                },
                {
                    "item": corners
                },
                {
                    "item": two
                },
                {
                    "item": corners
                },
                {
                    "item": three
                },
                {
                    "item": corners
                },
                {
                    "item": four
                }
            ],
            "input": {
                "item": "mysticalagriculture:prosperity_seed_base"
            },
            "result": {
                "item": output
            }
        })
    }

    function altarRecipe(corners, sides, output) {
        altarRecipeSides(sides, sides, sides, sides, corners, output)
    }

    const seeds = ['stone', 'dirt', 'deepslate', 'nether', 'ice', 'wood',
     'sky_stone', 'copper', 'dye', 'nature', 'iron', 'lead', 'gold', 'silver', 'coal', 'mystical_flower', 'zinc', 'tin', 'soulium',
      'nether_quartz', 'amethyst', 'glowstone', 'redstone', 'lapis_lazuli', 'silicon', 'certus_quartz', 'sky_stone', 'steel', 'uranium', 'osmium', 'fluorite', 'prismarine',
      'diamond', 'emerald', 'netherite']
    seeds.forEach(id => {
        event.remove({id: 'mysticalagriculture:seed/infusion/'+id})
    })
    altarRecipe("mysticalagriculture:prudentium_essence", "minecraft:stone", "mysticalagriculture:stone_seeds")
    altarRecipe("mysticalagriculture:prudentium_essence", "minecraft:dirt", "mysticalagriculture:dirt_seeds")
    altarRecipeSides("minecraft:oak_sapling", "enchanted:alder_sapling", "enchanted:rowan_sapling", "enchanted:hawthorn_sapling", "mysticalagriculture:prudentium_essence", "mysticalagriculture:wood_seeds")
    altarRecipe("mysticalagriculture:prudentium_essence", "minecraft:deepslate", "mysticalagriculture:deepslate_seeds")
    altarRecipe("mysticalagriculture:prudentium_essence", "minecraft:blue_ice", "mysticalagriculture:ice_seeds")
    altarRecipe("mysticalagriculture:prudentium_essence", "mysticalagriculture:nether_agglomeratio", "mysticalagriculture:nether_seeds")

    altarRecipe("mysticalagriculture:tertium_essence", "ae2:sky_stone_block", "mysticalagriculture:sky_stone_seeds")
    altarRecipe("mysticalagriculture:tertium_essence", "mysticalagriculture:dye_agglomeratio", "mysticalagriculture:dye_seeds")
    altarRecipe("mysticalagriculture:tertium_essence", "mysticalagriculture:nature_essence", "mysticalagriculture:nature_seeds")
    altarRecipeSides("minecraft:copper_block", "naturesaura:infused_iron", "naturesaura:tainted_gold", "naturesaura:infused_iron", "mysticalagriculture:tertium_essence", "mysticalagriculture:copper_seeds")
    altarRecipeSides("minecraft:iron_block", "botania:manasteel_ingot", "embers:dawnstone_ingot", "botania:manasteel_ingot", "mysticalagriculture:tertium_essence", "mysticalagriculture:iron_seeds")
    altarRecipeSides("embers:lead_block", "embers:lead_ingot", "create:andesite_alloy", "embers:lead_ingot", "mysticalagriculture:tertium_essence", "mysticalagriculture:lead_seeds")
    altarRecipeSides("minecraft:gold_block", "naturesaura:tainted_gold", "embers:dawnstone_ingot", "naturesaura:tainted_gold", "mysticalagriculture:tertium_essence", "mysticalagriculture:gold_seeds")
    altarRecipeSides("embers:silver_block", "botania:manasteel_ingot", "embers:silver_aspectus", "botania:manasteel_ingot", "mysticalagriculture:tertium_essence", "mysticalagriculture:silver_seeds")
    altarRecipe("mysticalagriculture:tertium_essence", "minecraft:coal_block", "mysticalagriculture:coal_seeds")
    altarRecipeSides("botania:glimmering_livingwood", "botania:rune_earth", "botania:rune_mana", "botania:rune_water", "mysticalagriculture:tertium_essence", "mysticalagriculture:mystical_flower_seeds")
    altarRecipeSides("create:zinc_block", "create:brass_ingot", "embers:zinc_crystal_seed", "create:brass_ingot", "mysticalagriculture:tertium_essence", "mysticalagriculture:zinc_seeds")
    altarRecipeSides("mekanism:block_tin", "mekanism:clump_tin", "mekanism:dust_tin", "mekanism:clump_tin", "mysticalagriculture:tertium_essence", "mysticalagriculture:tin_seeds")
    altarRecipeSides("nethersdelight:rich_soul_soil", "minecraft:soul_soil", "minecraft:soul_sand", "minecraft:soul_soil", "mysticalagriculture:tertium_essence", "mysticalagriculture:soulium_seeds")

    altarRecipeSides("minecraft:quartz_block", "minecraft:crimson_fungus", "ars_nouveau:abjuration_essence", "minecraft:warped_fungus", "mysticalagriculture:imperium_essence", "mysticalagriculture:nether_quartz_seeds")
    altarRecipeSides("minecraft:budding_amethyst", "ars_nouveau:earth_essence", "ars_nouveau:source_gem_block", "ars_nouveau:earth_essence", "mysticalagriculture:imperium_essence", "mysticalagriculture:amethyst_seeds")
    altarRecipeSides("minecraft:glowstone", "botania:mana_powder", "ars_nouveau:jar_of_light", "botania:mana_powder", "mysticalagriculture:imperium_essence", "mysticalagriculture:glowstone_seeds")
    altarRecipeSides("minecraft:redstone_block", "botania:mana_powder", "ars_nouveau:manipulation_essence", "botania:mana_powder", "mysticalagriculture:imperium_essence", "mysticalagriculture:redstone_seeds")
    altarRecipeSides("minecraft:lapis_block", "mekanism:dust_lapis_lazuli", "bloodmagic:waterscribetool", "mekanism:dust_lapis_lazuli", "mysticalagriculture:imperium_essence", "mysticalagriculture:lapis_lazuli_seeds")
    altarRecipeSides("ae2:flawed_budding_quartz", "ae2:formation_core", "ae2:singularity", "ae2:annihilation_core", "mysticalagriculture:imperium_essence", "mysticalagriculture:certus_quartz_seeds")
    altarRecipeSides("mekanism:block_steel", "mekanism:enriched_carbon", "ars_nouveau:fire_essence", "mekanism:enriched_carbon", "mysticalagriculture:imperium_essence", "mysticalagriculture:steel_seeds")
    altarRecipeSides("mekanism:block_uranium", "mekanism:yellow_cake_uranium", "mekanism:uranium_hexafluoride_bucket", "mekanism:yellow_cake_uranium", "mysticalagriculture:imperium_essence", "mysticalagriculture:uranium_seeds")
    altarRecipeSides("mekanism:block_osmium", "mekanism:enriched_refined_obsidian", "ars_nouveau:conjuration_essence", "mekanism:enriched_refined_obsidian", "mysticalagriculture:imperium_essence", "mysticalagriculture:osmium_seeds")
    altarRecipeSides("mekanism:block_fluorite", "bloodmagic:defaultcrystal", "mekanism:hdpe_stick", "bloodmagic:defaultcrystal", "mysticalagriculture:imperium_essence", "mysticalagriculture:fluorite_seeds")
    altarRecipeSides("minecraft:prismarine_bricks", "minecraft:prismarine_crystals", "ars_nouveau:water_essence", "minecraft:prismarine_crystals", "mysticalagriculture:imperium_essence", "mysticalagriculture:prismarine_seeds")

    altarRecipeSides("minecraft:diamond_block", "naturesaura:break_prevention", "ars_elemental:mark_of_mastery", "enchanted:mystic_unguent", "mysticalagriculture:supremium_essence", "mysticalagriculture:diamond_seeds")
    altarRecipeSides("minecraft:emerald_block", "croptopia:greenbean", "botania:gaia_ingot", "croptopia:greenonion", "mysticalagriculture:supremium_essence", "mysticalagriculture:emerald_seeds")
    altarRecipeSides("minecraft:netherite_block", "enchanted:drop_of_luck", "bloodmagic:ingot_hellforged", "enchanted:refined_evil", "mysticalagriculture:supremium_essence", "mysticalagriculture:netherite_seeds")
})