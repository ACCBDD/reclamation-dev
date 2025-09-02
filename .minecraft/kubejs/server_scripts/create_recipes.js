ServerEvents.recipes(event => {

    //andesite alloy uses lead
    event.remove({id: 'create:crafting/materials/andesite_alloy'})
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
    event.remove({id: 'create:mixing/andesite_alloy'})
    event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
    event.shaped('create:andesite_alloy', [
            'GA',
            'AG'
        ], {
            G: '#forge:nuggets/lead',
            A: 'minecraft:andesite'
        }
    )
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:andesite"
            },
            {
                "tag": "forge:nuggets/lead"
            }
        ],
        "results": [
            {
                "item": "create:andesite_alloy"
            }
        ]
    })

    //disable mechanical press plate recipes
    event.remove({id: 'create:pressing/brass_ingot'})
    event.remove({id: 'create:pressing/iron_ingot'})
    event.remove({id: 'create:pressing/copper_ingot'})
    event.remove({id: 'create:pressing/gold_ingot'})

    //remove blaze burner recipe
    event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})

    //disable metals from washing
    event.remove({id: 'create:crushing/diorite'})
    event.remove({id: 'create:crushing/diorite_recycling'})
    event.remove({id: 'create:splashing/soul_sand'})
    event.remove({id: 'create:splashing/red_sand'})
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "minecraft:red_sand"
            }
        ],
        "results": [
            {
                "chance": 0.05,
                "item": "minecraft:dead_bush"
            }
        ]
    })
    event.remove({id: 'create:splashing/gravel'})
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "minecraft:gravel"
            }
        ],
        "results": [
            {
                "chance": 0.25,
                "item": "minecraft:flint"
            }
        ]
    })

    //mechanical pump recipe
    event.remove({id: 'create:crafting/kinetics/mechanical_pump'})
    event.shaped('create:mechanical_pump', [
            'ACA',
            'PEP',
            'ACA'
        ], {
            E: 'embers:mechanical_pump',
            P: 'create:fluid_pipe',
            A: 'create:andesite_alloy',
            C: 'create:cogwheel'
        }
    )

    //rose quartz
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:glowstone"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "amount": 100,
                "fluid": "theurgy:sal_ammoniac"
            }
        ],
        "results": [
            {
                "item": "create:rose_quartz"
            }
        ]
    })

    //sal ammoniac crystal
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "enchanted:icy_needle"
            },
            {
                "amount": 750,
                "fluid": "theurgy:sal_ammoniac",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": "theurgy:sal_ammoniac_crystal"
            }
        ]
    })

    const crushing_resource_recipes = [
        "create:crushing/crimsite_recycling",
        "create:crushing/crimsite",
        "create:crushing/ochrum_recycling",
        "create:crushing/ochrum",
        "create:crushing/veridium_recycling",
        "create:crushing/veridium",
        "create:crushing/tuff_recycling",
        "create:crushing/tuff",
        "create:crushing/asurine_recycling",
        "create:crushing/asurine"
    ]
    crushing_resource_recipes.forEach(id => {
        event.remove({id: id})
    })

    //plate stuff
    function melt_and_plate(item, fluid, plate) {
        event.custom({
            "type": "create:mixing",
            "heatRequirement": "superheated",
            "ingredients": [
                {
                    "item": item
                }
            ],
            "results": [
                {
                    "amount": 90,
                    "fluid": fluid
                }
            ]
        })

        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {
                    "amount": 90,
                    "fluid": fluid
                }
            ],
            "results": [
                {
                    "item": plate
                }
            ]
        })
    }

    melt_and_plate("minecraft:iron_ingot", "embers:molten_iron", "embers:iron_plate")
    melt_and_plate("minecraft:copper_ingot", "embers:molten_copper", "embers:copper_plate")
    melt_and_plate("embers:lead_ingot", "embers:molten_lead", "embers:lead_plate")
    melt_and_plate("embers:silver_ingot", "embers:molten_silver", "embers:silver_plate")
    melt_and_plate("embers:dawnstone_ingot", "embers:molten_dawnstone", "embers:dawnstone_plate")
    melt_and_plate("minecraft:gold_ingot", "embers:molten_gold", "create:golden_sheet")
    melt_and_plate("create:brass_ingot", "embers:molten_brass", "create:brass_sheet")

    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {
            "amount": 80,
            "tag": "mekanism:redstone"
        },
        "itemInput": {
            "ingredient": {
                "item": "minecraft:quartz"
            }
        },
        "output": {
            "item": "create:rose_quartz"
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "B": {
                "item": "minecraft:iron_bars"
            },
            "P": {
                "item": "embers:iron_plate"
            },
            "F": {
                "item": "botania:fel_pumpkin"
            },
            "R": {
                "item": "botania:rune_fire"
            },
            "C": {
                "item": "botania:rune_wrath"
            },
            "S": {
                "item": "mekanism:ingot_steel"
            },
            "N": {
                "item": "minecraft:netherrack"
            }
        },
        "pattern": [
            "BBBBB",
            "BPFPB",
            "BRBCB",
            "SSNSS",
            "SNNNS"
        ],
        "result": {
            "count": 1,
            "item": "create:blaze_burner"
        }
    })
})