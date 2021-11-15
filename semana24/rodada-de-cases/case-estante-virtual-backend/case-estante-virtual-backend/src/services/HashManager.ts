import * as bcrypt from "bcryptjs";

class hashManager {
    
   async hash(textToHide: string): Promise<string>{

        const cost = Number(process.env.BCRYPT_COST!);
        const salt = await bcrypt.genSalt(cost);
        const cypherText = await bcrypt.hash(textToHide, salt);

        return cypherText;
    }

    async compare(plaintext: string, hash: string): Promise<boolean>{
        const hashCompare:boolean = await bcrypt.compare(plaintext, hash);
        return hashCompare;
    }
}