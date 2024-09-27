import * as bcrypt from "bcryptjs";

// export const hash = async (plainText: string): Promise<string> => {
//   const rounds = Number(process.env.BCRYPT_COST);
//   const salt = await bcrypt.genSalt(rounds);
//   return bcrypt.hash(plainText, salt);
// };

// export const compare = async (
//     plainTtext: string,
//     cypherText: string
// ): Promise<boolean> => {
//     return bcrypt.compare(plainTtext, cypherText)
// }

export class HashManager {
    
   async hash(text: string): Promise<string>{

        const cost = 5;
        const salt = await bcrypt.genSalt(cost);
        const cypherText = await bcrypt.hash(text, salt);

        return cypherText;
    }

    async compare(plaintext: string, hash: string): Promise<boolean>{
        const hashCompare: boolean = await bcrypt.compare(plaintext, hash);
        return hashCompare;
    }
}