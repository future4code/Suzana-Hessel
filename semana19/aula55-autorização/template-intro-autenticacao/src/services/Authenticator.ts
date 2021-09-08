import { config } from "dotenv"
import { sign, verify } from "jsonwebtoken"
import { authenticationData } from "../types"

config()

export class Authenticator{

    public generateToken = (
        payload: authenticationData
    )=>{
        return sign(
            payload,
            process.env.JWT_KEY,
            { expiresIn: "id"}
        )
    }

    public getTokenData = (
        token: string
    ): authenticationData | null => {

        try{

            const tokenData = verify(token, process.env.JWT_KEY) as authenticationData

            return {
                id: tokenData.id
            }
        }catch (error) {
            console.log(error)

            return null
        }
    }
}

//outra forma

// import * as jwt from "jsonwebtoken";

//   const expiresIn = "1min";
//   const generateToken(input: AuthenticationData): string {
//     const token = jwt.sign(
//       {
//         id: input.id,
//       },
//       process.env.JWT_KEY as string,
//       {
//         expiresIn
//       }
//     );
//     return token;
//   }
// }

