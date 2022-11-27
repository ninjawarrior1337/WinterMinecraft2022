import * as event from "../event";
import {findSlot} from "../lib"

// Put your code here

const getAllPeripheral = (name: string) => {
    return peripheral.getNames().filter(s => s.includes(name))
}

const input = peripheral.wrap("minecraft:barrel_0") as InventoryPeripheral
const outputs = getAllPeripheral("millstone")

function main() {
    while(true) {
        const s = findSlot("minecraft:cobblestone", input)
        if(s != -1) {
            for(let [_, o] of ipairs(outputs)) {
                input.pushItems(o, s, 1)
            }
        }
        os.sleep(1)
    }
}

export default main