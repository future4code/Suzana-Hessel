import { BaseDataBase } from "../BaseDataBase";
import { User } from "../../classes/User";

export class UserDataBase extends BaseDataBase {

    private static tableName = "labecommerce_users"

    private toUser = (input: any): User => new User(
        input.id,
        input.name,
        input.email,
        input.age
    )
    
    createUser = (user: User) =>  
        BaseDataBase.connection(UserDataBase.tableName)
        .insert(user)
    

    getAllUsers = async () => {
        const result = await BaseDataBase
        .connection(UserDataBase.tableName)
        return result.map(this.toUser)
    }

    getUserByEmail = async (email: string) => {
        const [result] = await BaseDataBase
        .connection(UserDataBase.tableName)
        .where({email})

        if(result) return this.toUser(result)
    }
}