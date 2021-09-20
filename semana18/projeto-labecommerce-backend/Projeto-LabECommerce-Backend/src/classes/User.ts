export class User {
    private name: string
    private email: string
    private age: number
    private id?: string

    constructor(
        userName: string,
        userEmail: string,
        userAge: number,
        userId?: string
    ) {
        this.name = userName
        this.email = userEmail
        this.age = userAge
        this.id = userId
    }

    public getName(): string {
        return this.name
    }

    public getEmail(): string {
        return this.email
    }

    public getAge(): number {
        return this.age
    }

    // public getId(): string {
    //     return this.id
    // }
}