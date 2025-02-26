export type BlockState = 'InCreation' | 'Validated'
export type Block = {
    hash: String | string, 
    value: String | string,
    id: String | string,
    state: BlockState
}