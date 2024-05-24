"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function ModeToggle() {
  const { setTheme, themes, theme } = useTheme()
  const [mode, setMode] = useState(false)
  const [colors, setColors] = useState(
    themes.filter(tema => !tema.includes('dark'))
  )

  const handleCheck = () => {
    const dark = theme?.includes('dark')
   
    setMode(!mode);
  };

  // useEffect(() => {
  //   console.log(mode)

  //   if(mode){
  //     setTheme(theme + 'dark')
  //   }else{
  //     setTheme(theme)
  //   }
  // }, [mode])


  const theme_background = {
    Blue: 'bg-blue-600', 
    Light: 'bg-gray-300',
    Dark: 'bg-zinc-950',
    Rose: 'bg-rose-600',
    Green: 'bg-green-600', 
    Yellow: 'bg-yellow-600',
    Orange: 'bg-orange-600',
    Violet: 'bg-violet-600',
  };


  const sendTheme = (tema:string) => {
    if(mode){
      setTheme(tema + 'dark')
    }else{
      setTheme(tema)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only bg-[#2563eb]">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
      
      <div className="flex flex-col items-center space-x-2 my-4 gap-3">
        <Switch
          checked={mode}
          onCheckedChange={() => handleCheck()}
        />
      </div>

    


              {colors.map(th => {
                const hx = theme_background[th]
                return(
                  <DropdownMenuItem key={th} onClick={() => sendTheme(th)}>
                    <div 
                      className={`w-6 h-6 rounded-full mr-4 ${hx} `}  
                    />
                    {th}
                  </DropdownMenuItem>
                )
              })}


      </DropdownMenuContent>
    </DropdownMenu>
  )
}
