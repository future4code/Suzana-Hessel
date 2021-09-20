import { v4 } from "uuid"

export class IdGenerator{
    public generateid = () =>  v4()
}

//ou
// export function generateId(): string {
//     return v4();
//   }