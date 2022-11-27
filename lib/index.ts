export const findSlot = (item: string, per: InventoryPeripheral) => {
    return findMultiItemSlot([item], per)
}

export const findMultiItemSlot = (items: string[], per: InventoryPeripheral) => {
    for(const [k, v] of pairs(per.list())) {
        for(const i of items) {
            if(v.name === i) {
                return k
            }
        }
    }
    return -1
}