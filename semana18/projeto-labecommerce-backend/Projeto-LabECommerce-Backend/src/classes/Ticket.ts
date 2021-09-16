import { Product } from "./Product"

export class Ticket extends Product {
    private origin: string
    private destiny: string

    constructor(
        userId: string,
        userName: string,
        userDescription: string,
        userPrice: number,
        ticketOrigin: string,
        ticketDestiny: string
    ) {
        super(userId, userName, userDescription, userPrice)
        this.origin = ticketOrigin
        this.destiny = ticketDestiny
    }

    public getOrigin(): string {
        return this.origin
    }

    public getDestiny(): string {
        return this.destiny
    }
}