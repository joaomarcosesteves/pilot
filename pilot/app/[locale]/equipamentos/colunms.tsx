
  "use client"

  import { ColumnDef } from "@tanstack/react-table"
  
  // This type is used to define the shape of our data.
  // You can use a Zod schema here if you want.
  export type Equip = {
    id: number
    company: string
    imei: number
    car: string
    owner: string
    model: string
    lasth: string
    status: boolean
  }
  
  export const columns: ColumnDef<Equip>[] = [
    {
      accessorKey: "company",
      header: "Cliente",
    },
    {
      accessorKey: "imei",
      header: "IMEI",
    },
    {
      accessorKey: "car",
      header: "Veiculo",
    },
    {
      accessorKey: "owner",
      header: "Fabricante",
    },
    {
      accessorKey: "model",
      header: "Modelo",
    },
    {
      accessorKey: "lasth",
      header: "Último Heartbeat",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const value = row.getValue("status")

        return (
          <>
          {value ? (
            <span className="text-xs px-2 py-1 rounded-lg bg-green-300 font-bold" >online</span>
          ):(
            <span className="text-xs px-2 py-1 rounded-lg bg-red-300 font-bold" >offline</span>
          )}
          </>
        )
      
      },
  },
]