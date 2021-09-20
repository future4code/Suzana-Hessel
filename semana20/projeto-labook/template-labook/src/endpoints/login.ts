import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { user } from "../types/user";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 406;
      throw new Error('"email" and "password" must be provided');
    }

    const user: user = await selectUserByEmail(email)

    if (!user) {
      res.statusCode = 401;
      throw new Error("Invalid credentials");
    }

    const passwordIsCorrect: boolean = await compare(password, user.password);

    if (!passwordIsCorrect) {
      res.statusCode = 401;
      throw new Error("Invalid credentials");
    }

    const token: string = generateToken({
      id: user.id,
      role: user.role,
    });

    res.status(200).send({ message: "Logged in user!", token });
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message)
  }
};
