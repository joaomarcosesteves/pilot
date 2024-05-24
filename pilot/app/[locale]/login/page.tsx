import { Metadata } from "next"

import { columns, Payment } from "../components/table/colunms"
import { DataTable } from "../components/table/data-table"

import Bars from "../components/bar"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoIosSend } from "react-icons/io";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { IoMdPersonAdd } from "react-icons/io";
import Image from "next/image"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default async function Login() {

  return (
    <>
    <div className="flex w-full h-screen">

        <div className="flex w-full">
          <div className="flex-1 flex w-1/2 bg-foreground items-center justify-center">
                
                <div className="bg-border  p-14 rounded-3xl shadow-2xl w-full max-w-md flex flex-col items-center">
                    
                    <Image src="https://app.jimibrasil.com.br/assets/img/logo_jimi.png" alt="logo" width={180} height={180} className="mb-8" />

                    <form className="space-y-4 w-full mt-8 flex flex-col gap-2">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="username" placeholder="seu@email.com" type="text" className=" bg-foreground text-white p-4 mt-2"/>
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" placeholder="****" type="password" className="bg-foreground text-white p-4 mt-2" />
                        </div>
                        <Button className="w-full bg-background text-white hover:text-slate-800" type="submit">
                            Sign In
                        </Button>
                    </form>
                </div>

          </div>

          <div className="flex-1 flex w-1/2 bg-slate-600">

          </div>
        </div>

    </div>
    </>
  )
}