import { v4 } from "uuid"


// export const generateId = (): string => v4()


export class IdGenerator {
  generateId(): string{
	  return v4();
  }
}