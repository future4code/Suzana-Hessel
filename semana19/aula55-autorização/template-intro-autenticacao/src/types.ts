export type user = {
   id: string
   email: string
   name: string
   nickname: string
   password: string
}

//para tipar o código pode usar interface além de type

export interface authenticationData {
   id: string

}

//outra forma
// type AuthenticationData = {
//   id: string;
// }