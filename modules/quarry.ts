import * as event from "../event"
type QuarryState = [boolean, boolean];

const QUARRY_STATES = {
    "BACK": [false, false],
    "FORWARD": [false, true],
    "DOWN": [true, true],
    "UP": [true, false]
} as Record<string, QuarryState>;

function setState(state: QuarryState) {
    redstone.setOutput("left", state[0])
    redstone.setOutput("right", state[1])
}

function waitRedstone() {
    event.pullEvent("redstone")
}

function computeTime(dist: number) {
    const rpm = 64
    const tps = 20
    const linToRPM = 512

    return Math.abs(dist) * linToRPM / (rpm * tps)
}

export default function main() {
    for(;;) {
        setState(QUARRY_STATES["DOWN"])
        waitRedstone()
        waitRedstone()
        setState(QUARRY_STATES["UP"])
        waitRedstone()
        waitRedstone()
        setState(QUARRY_STATES["FORWARD"])
        sleep(computeTime(4))
    }
}