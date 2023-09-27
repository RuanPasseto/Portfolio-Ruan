'use client'

import { useLoading } from "@/context/LoadingContext"
import { Loader2 } from "lucide-react"

export function Loadign(){
  const { isLoading } = useLoading()
  if(isLoading){
    return(
      <div className="fixed insert-0 z-50 flex items-center justify-center p-1 rounded-lg
        bg-gray-200 cursor-pointer opacity-50">
          <Loader2 className=" animate-spin text-purple-600 text-9xl"/>
      </div>
    )
  }
  return(
    <div className="hidden" />
  )
}