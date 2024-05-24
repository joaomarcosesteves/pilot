import { Metadata } from "next"

import { columns, Payment } from "@/app/components/table/colunms"
import { DataTable } from "@/app/components/table/data-table"
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

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
        "nome": "21 Tracker Monitoramento",
        "email": "financeiro@21tracker.com.br",
        "padrao": "Padr\u00e3o Streaming",
        "emp_id": 53
    },            
    {
        "nome": "3SAT",
        "email": "lucas.gasparello@3sat.com.br",
        "padrao": "Padr\u00e3o Streaming",
        "emp_id": 42
    },
    
    {
        "nome": "4bus",
        "email": "andre@4bus.com.br",
        "padrao": "Padr\u00e3o Streaming",
        "emp_id": 92
    },

    
    {
        "nome": "A DIFERENCA & FOVEA LTDA-ME",
        "email": "anderson@grupofovea.com.br",
        "padrao": "Padr\u00e3o Streaming",
        "emp_id": 212
    },

    
    {
        "nome": "Abrussi & Ramos Rastreamento Veicular",
        "email": "gfnrastreadores@gmail.com",
        "padrao": "Padr\u00e3o Streaming",
        "emp_id": 229
    },

    
    {
        "nome": "Agr\u00edcola Para\u00edso",
        "email": "spj@paraiso.agr.br",
        "padrao": "Padr\u00e3o Newtec",
        "emp_id": 1
    },

    {
        "nome": "Agrotech",
        "email": "fabricio@agrotechdc.com.br",
        "padrao": "Padr\u00e3o Newtec",
        "emp_id": 28
    },

    {
        "nome": "Agrovertical",
        "email": "vasquesjs@gmail.com",
        "padrao": "Padr\u00e3o Streaming",
        "emp_id": 29
    },

    {
        "nome": "Allcom",
        "email": "admin@allcom.com.br",
        "padrao": "Padr\u00e3o Newtec",
        "emp_id": 9
    },

    {
        "nome": "Allcom",
        "email": "cvolpato@allcomtelecom.com",
        "padrao": "Padr\u00e3o Streaming",
        "emp_id": 215
    },

    {
        "nome": "Allcom - Suporte",
        "email": "thiago.linhares@allcomtelecom.com",
        "padrao": "Padr\u00e3o Streaming",
        "emp_id": 54
    },

    {
        "nome": "Allrede",
        "email": "gabriel.pires@allrede.com.br",
        "padrao": "Padr\u00e3o Streaming",
        "emp_id": 126
    },

    {
        "nome": "Alltech Rastreamento Veicular",
        "email": "log@alltechrastreamento.com.br",
        "padrao": "Padr\u00e3o Streaming",
        "emp_id": 233
    },

    {
        "nome": "AMAZON TRACE",
        "email": "diego@amazontrace.com.br",
        "padrao": "Padr\u00e3o Streaming",
        "emp_id": 127
    },

    {
        "nome": "Ampla Integra\u00e7\u00e3o",
        "email": "otilio@amplaintegracao.com.br",
        "padrao": "Padr\u00e3o Streaming",
        "emp_id": 97
    },

    {
    "nome": "AndSat",
    "email": "adm@andsat.com.br",
    "padrao": "Padr\u00e3o Streaming",
        "emp_id": 160
    },

    {
    "nome": "ANTONIO ERIC CARVALHO DE SOUZA - ME",
    "email": "topsatjp@gmail.com",
    "padrao": "Padr\u00e3o Streaming",
        "emp_id": 118
    }
]
}

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default async function DashboardPage() {
  const data = await getData()
  //const t = useTranslations('Home')


  return (
    <>
    <div className="flex w-full">
      <Dialog>
        <div className="flex-col flex w-full">
          <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
          <Card className="col-span-3 bg-secondary p-4 sm:p-8">
            <div className="flex items-start justify-between space-y-2">


              <div className="flex flex-col gap-1 mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Clientes</h2>
                <span className="text-base font-normal tracking-tight">Gerenciamento de clientes</span>
              </div>


              <div className="flex items-center space-x-2">
                {/* <CalendarDateRangePicker /> */}
                
                <DialogTrigger asChild>
                  <Button className="flex gap-2">
                  <IoMdPersonAdd size={16} />
                    Novo Cliente
                  </Button> 
                </DialogTrigger>
              </div>
            </div>

            <div className="grid gap-4">             
              <DataTable columns={columns} data={data} />
            </div>

          </Card>
          </div>
        </div>


        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Novo Cliente</DialogTitle>
            <DialogDescription>
              Preencha todos os dados para cadastrar novo cliente.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label  className="sr-only">
                Nome
              </Label>
              <Input
                placeholder="Nome"
                type="text"
                id="name"
              />
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <Input
                placeholder="Email"
                type="email"
                id="email"
              />
            </div>
            
          </div>
          <DialogFooter className="sm:justify-start items-center flex">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button type="submit" size="sm" className="px-3">
              <span >Enviar</span>
              <IoIosSend size={16} />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
    </>
  )
}