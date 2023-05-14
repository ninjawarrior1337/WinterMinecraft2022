import { findSlot } from "./lib"
import splits from "./modules/splits"
import railcraft from "./modules/rail_craft"
import quarry from "./modules/quarry"

const programs = {
    "railcraft": railcraft,
    "splits": splits,
    "quarry": quarry
}

print("What program would you like to run?")
print("Available: ")
for(const p in programs) {
    print(p)
}
print("---------")
const selection = read()
print(`Running: ${selection}`)
programs[selection]()