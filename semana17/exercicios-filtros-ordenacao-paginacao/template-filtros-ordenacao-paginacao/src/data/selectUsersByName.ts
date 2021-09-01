import {connection} from "./connection";

export default async function selectUsersByName(name: string):Promise<any> {
    const result = await connection.raw(`
       SELECT name
       FROM aula48_exercicio
       WHERE ${name} = "${name}"
    `)  
    
 
    return result[0]
 }

//  export default async function selectAllUsers(name:string):Promise<any> {
//    const result = await connection.raw(`
//       SELECT * FROM aula48_exercicio
//       WHERE ${name} = "${name}"`)  
   

//    return result[0]
// }