import { Request, Response } from "express";
import { CustomError, MissingDataError } from "../../errors/CustomError";
import { UserDataBase } from "../../data/users/UserDataBase";
import { User } from "../../classes/User";
import { IdGenerator } from "../../services/idGenerator";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userDB = new UserDataBase();

    const { name, email, age } = req.body;

    const user = await userDB.getUserByEmail(email);

    if (user) throw new CustomError(409, "Email already in use");

    const id = new IdGenerator().execute()

    if (!name || !email || !age) {
      throw new MissingDataError();
    }

    const newUser = new User(name, email, age);

    await userDB.createUser(newUser);

    res.status(201).send({ user: newUser });
  } catch (error) {
    if (error instanceof CustomError)
    res
       .status(error.errorStatusCode)
       .send(error.message)
 else
    res
       .status(500)
       .send("Internal error, please contact support")
  }
}
