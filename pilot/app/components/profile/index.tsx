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

  
import { SetStateAction, useState } from "react";


export default function Profile(){
    
    return(
        <div className="flex justify-end">
            
            <Sheet>
                <SheetTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>#</AvatarFallback>
                    </Avatar>
                </SheetTrigger>
                <SheetContent side={"right"}>
                    <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>

                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Ligh</TabsTrigger>
                            <TabsTrigger value="password">Dark</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">set light mode</TabsContent>
                        <TabsContent value="password">set Darks mode</TabsContent>
                    </Tabs>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}