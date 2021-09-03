import { BaseDataBase } from "./BaseDataBase";
import { User } from "../classes/User";

export class UserDataBase extends BaseDataBase {

    private TABLE_NAME = "user"
    
    async create(user: User) {
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert(user)
    }

    async getAll() {
        return BaseDataBase.connection(this.TABLE_NAME)
        .select()

    }
}