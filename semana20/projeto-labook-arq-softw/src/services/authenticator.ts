import * as jwt from "jsonwebtoken"
// import { authenticationData } from "../types/user"

// export const generateToken = (
//    payload: authenticationData
// ): string => {
//    return jwt.sign(
//       payload,
//       process.env.JWT_KEY as string,
//       {
//          expiresIn: "1h"
//       }
//    )
// }

// export const getTokenData = (
//    token: string
// ): authenticationData => {
//    return jwt.verify(
//       token,
//       process.env.JWT_KEY as string
//    ) as authenticationData
// }

export interface AuthenticationData {
  id: string;
}

export class Authenticator {
   
  generateToken(info: AuthenticationData): string {
    const token = jwt.sign(
      { id: info.id },
      process.env.JWT_KEY as string,
      { expiresIn: "10 days" }
    );
    return token;
  }

  getTokenData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string);

    return payload as AuthenticationData;
  }
}

 