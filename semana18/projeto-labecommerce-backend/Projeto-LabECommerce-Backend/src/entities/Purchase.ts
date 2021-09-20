export class Purchase { 

    constructor (
        readonly userId: string,
        readonly productId: string,
        readonly quantity: string,
        readonly total: string

    ){}
}