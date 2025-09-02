ServerEvents.recipes(event => {
    event.shaped('4x bloodmagic:soulsnare', [
        'S S',
        ' F ',
        'S S'
    ], {
        F: 'naturesaura:token_sorrow',
        S: 'minecraft:string'
    })

    event.remove({id: 'bloodmagic:blood_altar'})
    event.shaped('bloodmagic:altar', [
        'SWS',
        'SFS',
        'TTT'
    ], {
        T: 'naturesaura:tainted_gold',
        S: 'minecraft:blackstone',
        F: 'minecraft:furnace',
        W: 'bloodmagic:basemonstersoul'
    })

    event.remove({id: 'bloodmagic:altar/weakbloodorb'})
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 2000,
        "consumptionRate": 5,
        "drainRate": 1,
        "input": {
            "item": "botania:mana_pearl"
        },
        "output": {
            "item": "bloodmagic:weakbloodorb"
        },
        "upgradeLevel": 0
    })

    event.remove({id: 'bloodmagic:soul_forge'})
    event.shaped('bloodmagic:soulforge', [
        'M M',
        'SBS',
        'SIS'
    ], {
        B: 'bloodmagic:blankslate',
        S: 'minecraft:blackstone',
        M: 'botania:manasteel_ingot',
        I: 'naturesaura:infused_stone'
    })

    event.remove({id: 'bloodmagic:soulforge/pettytartaricgem'})
    event.custom({
        "type": "bloodmagic:soulforge",
        "drain": 1.0,
        "input0": {
            "tag": "forge:dusts/redstone"
        },
        "input1": {
            "tag": "forge:ingots/gold"
        },
        "input2": {
            "item": "botania:mana_glass"
        },
        "input3": {
            "item": "embers:dawnstone_ingot"
        },
        "minimumDrain": 1.0,
        "output": {
            "item": "bloodmagic:soulgempetty"
        }
    })

    event.remove({id: 'bloodmagic:arc/reversion/weak_blood_orb'})
    event.custom({
        "type": "bloodmagic:arc",
        "consumeingredient": true,
        "input": {
            "item": "bloodmagic:weakbloodorb"
        },
        "inputsize": 1,
        "mainoutputchance": 0.0,
        "output": {
            "item": "botania:mana_pearl"
        },
        "tool": {
            "tag": "bloodmagic:arc/reverter"
        }
    })

    event.custom({
        "type": "bloodmagic:arc",
        "consumeingredient": false,
        "input": {
            "item": "minecraft:glowstone"
        },
        "inputFluid": {
            "amount": 1000,
            "fluid": "bloodmagic:life_essence_fluid"
        },
        "inputsize": 1,
        "mainoutputchance": 0.0,
        "output": {
            "item": "minecraft:lapis_lazuli",
            "count": 9
        },
        "tool": {
            "tag": "bloodmagic:arc/cuttingfluid"
        }
    })

    event.custom({
        "type": "bloodmagic:arc",
        "consumeingredient": false,
        "input": {
            "item": "minecraft:redstone"
        },
        "inputFluid": {
            "amount": 500,
            "fluid": "bloodmagic:life_essence_fluid"
        },
        "inputsize": 1,
        "mainoutputchance": 0.0,
        "output": {
            "item": "minecraft:quartz",
            "count": 9
        },
        "tool": {
            "tag": "bloodmagic:arc/cuttingfluid"
        }
    })

    event.custom({
        "type": "bloodmagic:arc",
        "consumeingredient": false,
        "input": {
            "item": "minecraft:lapis_block"
        },
        "inputFluid": {
            "amount": 3000,
            "fluid": "bloodmagic:life_essence_fluid"
        },
        "inputsize": 1,
        "mainoutputchance": 0.0,
        "output": {
            "item": "minecraft:amethyst_shard",
            "count": 4
        },
        "tool": {
            "tag": "bloodmagic:arc/cuttingfluid"
        }
    })

    event.custom({
        "type": "bloodmagic:arc",
        "consumeingredient": false,
        "input": {
            "item": "minecraft:amethyst_block"
        },
        "inputFluid": {
            "amount": 10000,
            "fluid": "bloodmagic:life_essence_fluid"
        },
        "inputsize": 1,
        "mainoutputchance": 0.0,
        "output": {
            "item": "minecraft:diamond",
            "count": 1
        },
        "tool": {
            "tag": "bloodmagic:arc/cuttingfluid"
        }
    })
    event.custom({
        "type": "bloodmagic:arc",
        "consumeingredient": false,
        "input": {
            "item": "minecraft:diamond"
        },
        "inputFluid": {
            "amount": 20000,
            "fluid": "bloodmagic:life_essence_fluid"
        },
        "inputsize": 1,
        "mainoutputchance": 0.0,
        "output": {
            "item": "minecraft:emerald",
            "count": 1
        },
        "tool": {
            "tag": "bloodmagic:arc/cuttingfluid"
        }
    })

    event.remove({id: 'bloodmagic:altar/weakbloodorb'})
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 10000,
        "consumptionRate": 20,
        "drainRate": 1,
        "input": {
            "item": "naturesaura:ancient_sapling"
        },
        "output": {
            "item": "ars_nouveau:red_archwood_sapling"
        },
        "upgradeLevel": 2
    })

    event.custom({
        "type": "bloodmagic:soulforge",
        "drain": 666,
        "input0": {
            "item": "minecraft:bone"
        },
        "input1": {
            "item": "bloodmagic:demonslate"
        },
        "input2": {
            "item": "bloodmagic:vengefulcrystal"
        },
        "input3": {
            "item": "botania:rune_wrath"
        },
        "minimumDrain": 1000,
        "output": {
            "item": "minecraft:wither_skeleton_skull"
        }
    })

    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 80000,
        "consumptionRate": 50,
        "drainRate": 100,
        "input": {
            "item": "minecraft:tide_armor_trim_smithing_template"
        },
        "output": {
            "item": "minecraft:netherite_upgrade_smithing_template"
        },
        "upgradeLevel": 4
    })

    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 20000,
        "consumptionRate": 50,
        "drainRate": 100,
        "input": {
            "item": "minecraft:golden_apple"
        },
        "output": {
            "item": "minecraft:chorus_flower"
        },
        "upgradeLevel": 2
    })

    function revert_rune(input, slate) {
        event.custom({
            "type": "bloodmagic:arc",
            "addedoutput": [
                {
                    "type": {
                        "count": 1,
                        "item": slate
                    },
                    "chance": 0.0,
                    "mainchance": 1.0
                }
            ],
            "consumeingredient": false,
            "input": {
                "item": "bloodmagic:"+input
            },
            "inputsize": 1,
            "mainoutputchance": 0.0,
            "output": {
                "item": "bloodmagic:blankrune"
            },
            "tool": {
                "tag": "bloodmagic:arc/reverter"
            }
        })
    }

    revert_rune("speedrune", "bloodmagic:blankslate")
    revert_rune("sacrificerune", "bloodmagic:reinforcedslate")
    revert_rune("selfsacrificerune", "bloodmagic:reinforcedslate")
    revert_rune("dislocationrune", "bloodmagic:infusedslate")
    revert_rune("altarcapacityrune", "bloodmagic:infusedslate")
    revert_rune("bettercapacityrune", "bloodmagic:demonslate")
    revert_rune("accelerationrune", "bloodmagic:demonslate")
    revert_rune("chargingrune", "bloodmagic:demonslate")
    event.custom({
        "type": "bloodmagic:arc",
        "consumeingredient": false,
        "input": {
            "item": "bloodmagic:orbcapacityrune"
        },
        "inputsize": 1,
        "mainoutputchance": 0.0,
        "output": {
            "item": "bloodmagic:blankrune"
        },
        "tool": {
            "tag": "bloodmagic:arc/reverter"
        }
    })
})