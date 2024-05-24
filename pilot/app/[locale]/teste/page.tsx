import { Metadata } from "next"

import { Card } from "@/components/ui/card"

import { IoMdPersonAdd } from "react-icons/io";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default async function DashboardPage() {


 // await new Promise(resolve => setTimeout(resolve, 5000))


  return (
    <>
    <div className="flex w-full">
        <div className="flex-col flex w-full mt-20">
          <div className=" space-y-4 p-8 pt-6">
          <Card className="col-span-3 bg-secondary p-8">
            <div className="flex items-start justify-between space-y-2">
              <div className="flex flex-col gap-1 mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Pagina </h2>
              </div>
            </div>
          </Card>
          </div>
        </div>
    </div>
        
    </>
  )
}