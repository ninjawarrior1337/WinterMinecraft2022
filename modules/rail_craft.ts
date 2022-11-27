import { findMultiItemSlot, findSlot } from "../lib"

const chest = peripheral.find("inventory", p => p.includes("minecraft:chest"))[0] as InventoryPeripheral
const depot = peripheral.find("inventory", p => p.includes("create:depot"))[0] as InventoryPeripheral
const deployer = peripheral.find("inventory", p => p.includes("create:deployer"))[0] as InventoryPeripheral

function main() {
    for(;;) {
        const stoneSlot = findSlot("minecraft:stone_slab", chest)
        if(!depot.getItemDetail(1) && stoneSlot !== -1) {
            chest.pushItems(peripheral.getName(depot), stoneSlot, 1, 1)
        }
        const ironSlot = findMultiItemSlot(["minecraft:iron_nugget", "create:zinc_nugget"], chest)
        if(ironSlot !== -1) {
            chest.pushItems(peripheral.getName(deployer), ironSlot)
        }
    }
}

export default main