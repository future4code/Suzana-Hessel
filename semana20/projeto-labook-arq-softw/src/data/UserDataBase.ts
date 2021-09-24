import { User, usersTable} from "../model/User";
import { connection } from "../connection";

export class UserDatabase {
  async save(user: User) {
    const userDB = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
    };

    await connection.insert(userDB).onConflict('id').merge().into(`${usersTable}`);

    return user;
  }

  async selectUserByEmail(email: string) {
    const result = await connection(usersTable).select("*").where({ email });

    const user: User = {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
        password: result[0].password,
        role: result[0].USER_ROLES,
    }

    return user
  }
}
