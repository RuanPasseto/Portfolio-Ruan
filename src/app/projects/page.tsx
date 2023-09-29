/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/Button";

export default function Projects(){
  return(
    <div className="min-h-screen pt-10">
      <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-16 lg:ml-10">Projetos</h1>
      <div className="
        flex flex-col gap-6 lg:grid lg:grid-cols-2
        justify-start items-start p-5">
          <div className="flex flex-col w-full justify-center items-center border-2 border-blue-600 rounded-md shadow-inner">
            <img src="Tic2.png" alt="" className="rounded-md lg:w-full border-2 shadow-inner border-slate-300 hover:brightness-90"/>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <h2 className="text-lg font-sans font-bold text-blue-600">TIC- Creche Nossa senhora da conceição</h2>
            <p className="text-sm lg:text-base text-justify">
              Projeto academico de gerenciamento de patrimonio para a creche Nossa senhora da conceição.
              Desenvolvido utilizando TypeScript, Node.Js, Postgresql, ReactJs e Next.js 
            </p>
            <Button variant="ghost" className="rounded-lg underline text-blue-600">
              <a href="https://github.com/RuanPasseto/Tic-Creche" target="_blank">Meu projeto aqui</a>
            </Button>
          </div>
          <div className="border-b-2 border-zinc-800 mx-10 lg:mx-20 w-auto"/>
      </div>
    </div>
  )
}