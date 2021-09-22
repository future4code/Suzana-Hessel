import { connection } from "../connection"
import { usersTable, user } from "../types/user"


export const selectUserByEmail = async (
    email: string
): Promise<user> => {
    try {
        const result = await connection(usersTable)
        .select("*")
        .where({ email })

        return {
            id: result[0].id ,
            name: result[0].name ,
            email: result[0].email,
            password: result[0].password ,
            role: result[0].USER_ROLES
        }
    }catch (error) {
        throw new Error (error.sqlMessage || error.message)
    }
}