Platform.mods.kubejs.name = 'Reclamation'

StartupEvents.registry('block', event => {
  event.create('dried_earth') // Create a new block
    .displayName('Dried Earth') // Set a custom name
    .mapColor('terracotta_light_gray')
    .soundType('gravel') // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .tagBlock('minecraft:mineable/shovel')
    .tagBoth('minecraft:dirt')
    .tagBoth('minecraft:bamboo_plantable_on')

  event.create('dead_log') // Create a new block
    .displayName('Dead Log') // Set a custom name
    .mapColor('wood')
    .soundType('wood') // Set a material (affects the sounds and some properties)
    .hardness(2.0) // Set hardness (affects mining time)
    .resistance(2.0) // Set resistance (to explosions, etc)
    .instrument('bass')
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .tagBoth('minecraft:logs')
    .tagBoth('minecraft:logs_that_burn')
    .tagBlock('minecraft:mineable/axe')

  event.create('flimsy_planks') // Create a new block
    .displayName('Flimsy Planks') // Set a custom name
    .mapColor('wood')
    .soundType('wood') // Set a material (affects the sounds and some properties)
    .hardness(2.0) // Set hardness (affects mining time)
    .resistance(3.0) // Set resistance (to explosions, etc)
    .instrument('bass')
    .tagBoth('minecraft:planks')
    .tagBlock('minecraft:mineable/axe')
})

StartupEvents.registry('fluid', event => {
  event.create('hemoglobic_fluid')
    .thickTexture(0xFF0000)
    .bucketColor(0xFF0000)
    .displayName('Hemoglobic Fluid')
    .noBlock()
})

const $Gas = Java.loadClass('mekanism.api.chemical.gas.Gas')
const $GasBuilder = Java.loadClass('mekanism.api.chemical.gas.GasBuilder')
const $GasAttr = Java.loadClass('mekanism.api.chemical.gas.attribute.GasAttributes')
const $Fuel = $GasAttr.Fuel
const $FloatingLong = Java.loadClass('mekanism.api.math.FloatingLong')

StartupEvents.registry('mekanism:gas', event => {
  event.createCustom('reclamation:aerated_essence', () => new $Gas($GasBuilder.builder()
    .tint(0xDD2200)
    .with(new $Fuel(() => 20, () => $FloatingLong.create(400))))
  )
})