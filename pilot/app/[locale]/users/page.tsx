import { Metadata } from "next"

import { columns, User } from "./colunms";

import { DataTable } from "@/app/components/table/data-table";
import Bars from '@/app/components/bar';
import { Card } from "@/components/ui/card"

import { IoMdPersonAdd } from "react-icons/io";
import { Suspense } from "react";

async function getData(): Promise<User[]> {
   const data = await fetch('https://dummyjson.com/users', {
    method: 'GET',
   })
    .then(res => {
       // console.log('RES',res.status)
        return res.json()
    })
    .catch(err => {
        console.log(err)
        return false
    });

  return data.users  
}

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default async function DashboardPage() {
  const data = await getData()

 // await new Promise(resolve => setTimeout(resolve, 5000))


  return (
    <>
    <div className="flex w-full">
    <Suspense fallback={<div>Loading...</div>}>
      {/* <Bars /> */}

        <div className="flex-col flex w-full">
          <div className=" space-y-4 p-4 sm:p-8 pt-6">
          <Card className="col-span-3 bg-secondary p-8">
            <div className="flex items-start justify-between space-y-2">

              <div className="flex flex-col gap-1 mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Usuarios</h2>
                <span className="text-base font-normal tracking-tight">Gerenciamento de usuarios</span>
              </div>

            </div>

            <div className="grid gap-4">          
            
              <DataTable columns={columns} data={data} />
              
            </div>

          </Card>
          </div>
        </div>
        </Suspense>   
    </div>
    </>
  )
}