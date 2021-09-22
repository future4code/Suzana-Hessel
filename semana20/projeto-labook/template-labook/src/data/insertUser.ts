import { connection } from "../connection";
import { user, usersTable } from "../types/user";


export const insertUser = async (
    user: user
): Promise<void> => {

await connection.insert({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role
}).into(`${usersTable}`)


}