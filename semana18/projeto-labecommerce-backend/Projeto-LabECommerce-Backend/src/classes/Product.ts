export class Product {
    private id: string
    private name: string
    private description: string
    private price: number

    constructor(
        userId: string,
        userName: string,
        userDescription: string,
        userPrice: number
    ) {
        this.id = userId
        this.name = userName
        this.description = userDescription
        this.price = userPrice
    }

    public getName(): string {
        return this.id
    }

    public getEmail(): string {
        return this.name
    }

    public getAge(): string {
        return this.description
    }

    public getId(): number {
        return this.price
    }
}