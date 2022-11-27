export const findSlot = (item: string, per: InventoryPeripheral) => {
    for(const [k, v] of pairs(per.list())) {
        if(v.name === item) {
            return k
        }
    }
    return -1
}