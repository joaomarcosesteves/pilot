"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import { ModeToggle } from "../ThemeToggle"
  import { RiLogoutCircleRLine } from "react-icons/ri";

  import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"


const themes_background = [
    {
        light: [
            {   
                color: 'Default',
                theme: ':root',
                back: 'bg-gray-300',
            },
            {   
                color: 'Zinc',
                theme: '.Dark',
                back: 'bg-zinc-950',
            },
            {   
                color: 'Blue',
                theme: '.Blue',
                back: 'bg-blue-600',
            },
            {
                color: 'Rose',
                theme: '.Rose',
                back: 'bg-rose-600',
            },
            {   
                color: 'Green',
                theme: '.Green',
                back: 'bg-green-600',
            }, 
            {
                color: 'Yellow',
                theme: '.Yellow',
                back: 'bg-yellow-600',
            },
            {
                color: 'Orange',
                theme: '.Orange',
                back: 'bg-orange-600',
            },
            {
                color: 'Violet',
                theme: '.Violet',
                back: 'bg-violet-600',
            },
        ],
    },
]

export default function Profile(){
    const { setTheme, themes, theme } = useTheme()
    
    return(
        <div className="flex justify-end">
            
            <Sheet>
                <SheetTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>#</AvatarFallback>
                    </Avatar>
                </SheetTrigger>


                <SheetContent className="h-full flex flex-col" side={"right"}>
                    <SheetHeader>
                        <SheetTitle className="mb-4">Meus Dados</SheetTitle>
                    </SheetHeader>
                    <SheetDescription className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm">Nome:</span>
                            <span className='text-sm text-muted-foreground'>João Marcos Esteves</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm">Email:</span>
                            <span className='text-sm text-muted-foreground'>jmepereira2010@gmail.com</span>
                        </div>
                    </SheetDescription>
                        
                    <div className="flex flex-col  gap-4">

                        <Button variant="destructive" className="w-full rounded-lg shadow">
                            Sair
                            <RiLogoutCircleRLine className="text-white ml-2" />
                        </Button>
                    </div>

                </SheetContent>
            </Sheet>

        </div>
    )
}