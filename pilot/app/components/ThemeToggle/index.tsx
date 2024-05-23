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
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    console.log('theme', theme)
  }, [theme])

  const handleCheck = () => {
    //setChecked(!checked);
  };


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
        setTheme('')
        const novotema = String(tema)
        const str = novotema.concat('dark')
        const newtheme = str
        console.log(novotema)
      
        setTheme(tema)
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
        <Label htmlFor="theme-mode" checked={checked} onChange={() => handleCheck()} >Dark Mode</Label>
        <Switch id="theme-mode" />
      </div>

        {themes.map(theme => {
          const color = theme.split('-', 2)
          const dark = color.length > 1 
          const hx = theme_background[theme]

          return (
            <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
              <div 
                className={`w-6 h-6 rounded-full mr-4 ${dark ? `bg-gradient-to-r from-black to-${color[1]}-600` : `${hx}` } `} 
                //className='w-6 h-6 rounded-full bg-gradient-to-r from-black to-[blue] mr-4' 
              />
              {theme}
            </DropdownMenuItem>
          )  
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
