ServerEvents.recipes(event => {
    //disable cringe blocks
    event.remove({id: 'naturesaura:time_changer'})
    event.remove({id: 'naturesaura:weather_changer'})
    event.remove({type: 'naturesaura:animal_spawner'})

    event.remove({id: 'naturesaura:spawn_lamp'})
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "ILI",
            "SGE",
            "ILI"
        ],
        "key": {
            "I": {
                "tag": "forge:ingots/iron"
            },
            "L": {
                "item": "minecraft:glass"
            },
            "S": {
                "item": "naturesaura:token_terror"
            },
            "G": {
                "item": "minecraft:glowstone"
            },
            "E": {
                "item": "botania:ender_air_bottle",
            }
        },
        "result": {
            "item": "naturesaura:spawn_lamp"
        }
    })

    event.remove({ id: 'naturesaura:tree_ritual/eye'})
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:spider_eye"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "naturesaura:gold_leaf"
            },
            {
                "item": "naturesaura:gold_leaf"
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": "naturesaura:eye"
        },
        "time": 250
    })

    event.remove({ id: 'naturesaura:tree_ritual/nature_altar'})
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:poppy"
            },
            {
                "item": "minecraft:dandelion"
            },
            {
                "item": "minecraft:grass"
            },
            {
                "item": "minecraft:apple"
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": "naturesaura:nature_altar"
        },
        "time": 500
    })

    //herbivorous absorber
    event.remove({ id: 'naturesaura:flower_generator'})
    event.shaped('naturesaura:flower_generator', [
            'PJP',
            'IFI',
            'PIP'
        ], {
            P: 'naturesaura:ancient_planks',
            J: 'naturesaura:token_joy',
            I: 'naturesaura:infused_iron',
            F: '#botania:mystical_flowers'
        }
    ).id("reclamation:naturesaura/flower_generator")

    //ancient sapling
    event.remove({id: 'naturesaura:tree_ritual/ancient_sapling'})
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:oak_sapling"
            },
            {
                "item": "minecraft:dandelion"
            },
            {
                "item": "minecraft:poppy"
            },
            {
                "tag": "forge:seeds"
            },
            {
                "item": "minecraft:sugar_cane"
            },
            {
                "item": "naturesaura:gold_leaf"
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": "naturesaura:ancient_sapling",
            "count": 2
        },
        "time": 200
    }).id('naturesaura:tree_ritual/ancient_sapling')

    //new crumbling catalyst recipe
    event.remove({ id: 'naturesaura:tree_ritual/crushing_catalyst'})
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "naturesaura:gold_brick"
            },
            {
                "item": "naturesaura:gold_brick"
            },
            {
                "item": "botania:livingrock"
            },
            {
                "item": "botania:livingrock"
            },
            {
                "item": "minecraft:flint"
            },
            {
                "item": "minecraft:flint"
            },
            {
                "item": "naturesaura:token_joy"
            },
            {
                "item": "naturesaura:token_joy"
            }
        ],
        "sapling": {
            "item": "minecraft:spruce_sapling"
        },
        "output": {
            "item": "naturesaura:crushing_catalyst"
        },
        "time": 500
    }).id("reclamation:naturesaura/crushing_catalyst")

    //lead ingots
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "naturesaura:infused_iron"
            },
            {
                "item": "naturesaura:infused_iron"
            },
            {
                "item": "minecraft:nether_brick"
            },
            {
                "item": "minecraft:nether_brick"
            }
        ],
        "sapling": {
            "item": "minecraft:spruce_sapling"
        },
        "output": {
            "item": "embers:raw_lead",
            "count": 2
        },
        "time": 200
    }).id("reclamation:embers/lead_ingot")
    event.custom({
        "type": "theurgy:incubation",
        "conditions": [
            {
                "type": "forge:not",
                "value": {
                 "type": "forge:tag_empty",
                 "tag": "forge:ingots/lead"
                }
            }
        ],
        "incubation_time": 100,
        "mercury": {
            "item": "theurgy:mercury_shard"
        },
        "result": {
            "count": 1,
            "item": "embers:lead_ingot"
        },
        "salt": {
            "item": "theurgy:alchemical_salt_mineral"
        },
        "sulfur": {
            "item": "theurgy:alchemical_sulfur_lead"
        }
    })
    event.remove({id: 'theurgy:incubation/ingots_lead_from_alchemical_sulfur_lead'})

    //cinder flour
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "minecraft:netherrack"
        },
        "output": {
            "item": "create:cinder_flour"
        },
        "catalyst": {
            "item": "naturesaura:crushing_catalyst"
        },
        "aura": 4000,
        "time": 200
    }).id("reclamation:create/cinder_flour")

    //nerf transmutation catalyst
    event.remove({id: "naturesaura:altar/gilded_blackstone"})
    event.remove({id: "naturesaura:altar/egg"})
    event.remove({id: "naturesaura:altar/milk"})
    event.remove({id: "naturesaura:altar/warped_fungus"})
    event.remove({id: "naturesaura:altar/crimson_fungus"})
    event.remove({id: "naturesaura:tree_ritual/conversion_catalyst"})
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "naturesaura:gold_leaf"
            },
            {
                "item": "naturesaura:gold_brick"
            },
            {
                "item": "embers:dawnstone_ingot"
            },
            {
                "item": "naturesaura:tainted_gold"
            },
            {
                "item": "botania:manasteel_ingot"
            },
            {
                "item": "botania:manasteel_ingot"
            }
        ],
        "sapling": {
            "item": "minecraft:jungle_sapling"
        },
        "output": {
            "item": "naturesaura:conversion_catalyst"
        },
        "time": 200
    }).id("reclamation:naturesaura/conversion_catalyst")

    //more conversion recipes
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "minecraft:netherrack"
        },
        "output": {
            "item": "minecraft:crimson_nylium"
        },
        "catalyst": {
            "item": "naturesaura:conversion_catalyst"
        },
        "aura": 2000,
        "time": 200
    })
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "minecraft:crimson_nylium"
        },
        "output": {
            "item": "minecraft:warped_nylium"
        },
        "catalyst": {
            "item": "naturesaura:conversion_catalyst"
        },
        "aura": 2000,
        "time": 200
    }).id("reclamation:naturesaura/altar")

    //offering table
    event.remove({id: "naturesaura:offering_table"})
    event.custom({
        "type": "embers:alchemy",
        "aspects": [
            {
                "tag": "embers:aspectus/dawnstone"
            },
            {
                "tag": "embers:aspectus/lead"
            },
            {
                "tag": "embers:aspectus/iron"
            }
        ],
        "inputs": [
            {
                "item": "naturesaura:token_fear"
            },
            {
                "item": "naturesaura:token_joy"
            },
            {
                "item": "botania:runic_altar"
            }
        ],
        "output": {
            "item": "naturesaura:offering_table"
        },
        "tablet": {
            "item": "naturesaura:infused_iron"
        }
    }).id("reclamation:naturesaura/offering_table")

    //calling spirit
    event.remove({id: "naturesaura:calling_spirit"})
    event.custom({"type": "enchanted:witch_cauldron",
        "cookingColor": [
            49,
            21,
            74
        ],
        "finalColor": [
            73,
            13,
            130
        ],
        "ingredients": [
            {
                "item": "naturesaura:aura_bottle",
                "nbt": {
                    "stored_type": "naturesaura:nether"
                }
            },
            {
                "item": "naturesaura:aura_bottle",
                "nbt": {
                    "stored_type": "naturesaura:overworld"
                }
            },
            {
                "item": "naturesaura:tainted_gold"
            },
            {
                "item": "enchanted:whiff_of_magic"
            }
        ],
        "power": 2000,
        "result": {
            "item": "naturesaura:calling_spirit",
            "count": 4
        }
    }).id("reclamation:naturesaura/calling_spirit")
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "naturesaura:birth_spirit"
        },
        "output": {
            "item": "naturesaura:calling_spirit"
        },
        "aura": 50000,
        "time": 200
    }).id("reclamation:naturesaura/calling_spirit_altar")

    event.remove({id: "naturesaura:altar/infused_stone"})
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "botania:livingrock"
        },
        "output": {
            "item": "naturesaura:infused_stone"
        },
        "aura": 7500,
        "time": 40
    })

    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "minecraft:deepslate"
        },
        "output": {
            "item": "minecraft:obsidian"
        },
        "aura": 25000,
        "time": 40
    })

    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:brown_petal"
            },
            {
                "item": "botania:gray_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:cow",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:red_petal"
            },
            {
                "item": "botania:pink_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:pig",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:white_petal"
            },
            {
                "item": "botania:pink_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:sheep",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:chicken",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:gray_petal"
            },
            {
                "item": "botania:white_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:goat",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:black_petal"
            },
            {
                "item": "botania:blue_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:squid",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:green_petal"
            },
            {
                "item": "botania:lime_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:turtle",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:red_petal"
            },
            {
                "item": "botania:cyan_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:salmon",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:brown_petal"
            },
            {
                "item": "botania:orange_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:cod",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:white_petal"
            },
            {
                "item": "botania:light_gray_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:llama",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:pink_petal"
            },
            {
                "item": "botania:green_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:axolotl",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:brown_petal"
            },
            {
                "item": "botania:yellow_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:frog",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "ars_elemental:anima_essence"
            },
            {
                "item": "croptopia:elderberry"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:allay",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "minecraft:crying_obsidian"
            },
            {
                "item": "minecraft:chiseled_polished_blackstone"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:piglin_brute",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:yellow_petal"
            },
            {
                "item": "botania:orange_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:camel",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:orange_petal"
            },
            {
                "item": "botania:white_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:fox",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "ars_nouveau:air_essence"
            },
            {
                "item": "ars_nouveau:earth_essence"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "ars_nouveau:whirlisprig",
        "aura": 60000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "ars_nouveau:water_essence"
            },
            {
                "item": "ars_nouveau:earth_essence"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "ars_nouveau:starbuncle",
        "aura": 60000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "ars_nouveau:fire_essence"
            },
            {
                "item": "ars_nouveau:earth_essence"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "ars_nouveau:drygmy",
        "aura": 60000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "ars_nouveau:air_essence"
            },
            {
                "item": "ars_nouveau:fire_essence"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:witch",
        "aura": 60000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "botania:light_gray_petal"
            },
            {
                "item": "botania:gray_petal"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "minecraft:wolf",
        "aura": 30000,
        "time": 40
    })
    event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "ars_nouveau:air_essence"
            },
            {
                "item": "ars_nouveau:water_essence"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "entity": "ars_elemental:siren_entity",
        "aura": 60000,
        "time": 40
    })

    //osmium
    event.custom({
        "type": "naturesaura:offering",
        "input": {
            "item": "minecraft:iron_ingot"
        },
        "start_item": {
            "item": "bloodmagic:infusedslate"
        },
        "output": {
            "item": "mekanism:ingot_osmium",
            "Count": 1
        }
    })

    //croptopia saplings
    function sapling_recipe(type, v, h, sapling) {
        event.custom({
            "type": "naturesaura:tree_ritual",
            "ingredients": [
                {
                    "item": "croptopia:"+v
                },
                {
                    "item": "croptopia:"+v
                },
                {
                    "item": "croptopia:"+h
                },
                {
                    "item": "croptopia:"+h
                },
                {
                    "item": "mysticalagriculture:nature_essence"
                },
                {
                    "item": "mysticalagriculture:nature_essence"
                },
                {
                    "item": "mysticalagriculture:nature_essence"
                },
                {
                    "item": "mysticalagriculture:nature_essence"
                }
            ],
            "sapling": {
                "item": "minecraft:"+sapling+"_sapling"
            },
            "output": {
                "item": "croptopia:"+type+"_sapling"
            },
            "time": 250
        })
    }
    const trees = [
        ['almond', 'onion', 'coffee_beans', 'oak'],
        ['apricot', 'saguaro', 'tomato', 'oak'],
        ['avocado', 'cabbage', 'rutabaga', 'birch'],
        ['banana', 'sweetpotato', 'corn', 'jungle'],
        ['cashew', 'blackbean', 'banana', 'oak'],
        ['cherry', 'strawberry', 'tomato', 'cherry'],
        ['cinnamon', 'mustard', 'ginger', 'spruce'],
        ['coconut', 'walnut', 'corn', 'jungle'],
        ['date', 'yam', 'blackberry', 'jungle'],
        ['dragonfruit', 'saguaro', 'strawberry', 'birch'],
        ['fig',  'blueberry', 'bellpepper', 'acacia'],
        ['grapefruit', 'grape', 'honeydew', 'acacia'],
        ['kumquat', 'tomatillo', 'greenonion', 'jungle'],
        ['lemon', 'tomatillo', 'mustard', 'jungle'],
        ['lime', 'kiwi', 'lemon', 'birch'],
        ['mango', 'bellpepper', 'raspberry', 'jungle'],
        ['nectarine', 'orange', 'peach', 'oak'],
        ['nutmeg', 'peanut', 'cashew', 'birch'],
        ['orange', 'basil', 'mango', 'birch'],
        ['peach', 'strawberry', 'cantaloupe', 'oak'],
        ['pear', 'saguaro', 'radish', 'acacia'],
        ['pecan', 'almond', 'onion', 'oak'],
        ['persimmon', 'chile_pepper', 'rutabaga', 'oak'],
        ['plum', 'yam', 'oat', 'oak'],
        ['starfruit', 'banana', 'mango', 'jungle'],
        ['walnut', 'rice', 'soybean', 'oak']
    ]
    trees.forEach(entry => {
        sapling_recipe(entry[0], entry[1], entry[2], entry[3])
    })
})