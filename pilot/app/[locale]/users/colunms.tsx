
  "use client"

  import { ColumnDef } from "@tanstack/react-table"
  
  // This type is used to define the shape of our data.
  // You can use a Zod schema here if you want.
  export type User = {
      "id": number,
      "firstName": string,
      "lastName": string,
      "maidenName": string,
      "age": number,
      "gender": string,
      "email": string,
      "phone": string,
      "birthDate": string,
  }
  
  export const columns: ColumnDef<User>[] = [
    {
      accessorKey: "firstName",
      header: "Nome",
    },
    {
      accessorKey: "age",
      header: "Idade",
    },
    {
      accessorKey: "gender",
      header: "Gênero",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Telefone",
    },
    {
      accessorKey: "birthDate",
      header: "Data de Nascimento",
    },
]