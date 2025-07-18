import os, json

plants = ['stone', 'dirt', 'deepslate', 'nether', 'ice', 'wood',
          'sky_stone', 'copper', 'dye', 'nature', 'iron', 'lead', 'gold', 'silver', 'coal', 'mystical_flower', 'zinc', 'tin', 'soulium',
          'nether_quartz', 'amethyst', 'glowstone', 'redstone', 'lapis_lazuli', 'silicon', 'certus_quartz', 'sky_stone', 'steel', 'uranium', 'osmium', 'fluorite', 'prismarine',
          'diamond', 'emerald', 'netherite']

for plant in plants:
    os.makedirs(os.path.dirname(f"output/myst_agri/{plant}.json"), exist_ok=True)
    with open(f"output/myst_agri/{plant}.json", "w") as out:
        plant_json = {
            "cloneable": False,
            "growth_bonus": 0.025,
            "growth_chance": 0.65,
            "harvest_stage": 3,
            "mods": [],
            "products": [
                {
                    "chance": 0.75,
                    "item": f"mysticalagriculture:{plant}_essence",
                    "max": 1,
                    "min": 1,
                    "required": True
                },
                {
                    "chance": 0.1,
                    "item": "mysticalagriculture:fertilized_essence",
                    "max": 1,
                    "min": 1
                }
            ],
            "requirement": {
                "light_tolerance_factor": 0.5,
                "max_light": 16,
                "min_light": 10,
                "soil_acidity": {
                    "type": "equal",
                    "tolerance_factor": 0,
                    "value": "highly_acidic"
                },
                "soil_humidity": {
                    "type": "equal",
                    "tolerance_factor": 0,
                    "value": "arid"
                },
                "soil_nutrients": {
                    "type": "equal",
                    "tolerance_factor": 0,
                    "value": "very_high"
                }
            },
            "seeds": [
                {
                    "grass_drop_chance": 0.0,
                    "item": f"mysticalagriculture:{plant}_seeds",
                    "override_planting": True,
                    "seed_drop_bonus": 0.0,
                    "seed_drop_chance": 0.0
                }
            ],
            "spread_chance": 0,
            "stages": [
                2,
                4,
                6,
                8,
                10,
                12,
                14,
                16
            ]
        }
        json.dump(plant_json, out, ensure_ascii=False, indent=2)
