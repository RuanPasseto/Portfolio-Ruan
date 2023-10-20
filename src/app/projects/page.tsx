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
            <img src="Fincheck.jpeg" alt="" className="rounded-md lg:w-full border-2 shadow-inner border-slate-300 hover:brightness-90"/>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <h2 className="text-lg font-sans font-bold text-blue-600">FincheckAPI</h2>
            <p className="text-sm lg:text-base text-justify">
              API de um sistema de controle de finanças feito em Node.js, nestJs, Typescript, prisma, docker
              e Postgresql.
            </p>
            <Button variant="ghost" className="rounded-lg underline text-blue-600">
              <a  target="_blank">Em Desenvolvimento</a>
            </Button>
          </div>
          <div className="border-b-2 border-zinc-800 mx-10 lg:mx-20 w-auto"/>
      </div>

      <div className="
        flex flex-col gap-6 lg:grid lg:grid-cols-2
        justify-start items-start p-5">
          <div className="flex flex-col w-full justify-center items-center border-2 border-blue-600 rounded-md shadow-inner">
            <img src="WaiterApp.jpeg" alt="" className="rounded-md lg:w-full border-2 shadow-inner border-slate-300 hover:brightness-90"/>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <h2 className="text-lg font-sans font-bold text-blue-600">WaiterApp-API</h2>
            <p className="text-sm lg:text-base text-justify">
              API de um projeto de pedidos para restaurantes feito em Node.js, Express, Typescript, MongoDb.
            </p>
            <Button variant="ghost" className="rounded-lg underline text-blue-600">
              <a href="https://github.com/RuanPasseto/WaiterApp-API" target="_blank">Repositório do projeto</a>
            </Button>
          </div>
          <div className="border-b-2 border-zinc-800 mx-10 lg:mx-20 w-auto"/>
      </div>

      <div className="
        flex flex-col gap-6 lg:grid lg:grid-cols-2
        justify-start items-start p-5">
          <div className="flex flex-col w-full justify-center items-center border-2 border-blue-600 rounded-md shadow-inner">
            <img src="WaiterApp.jpeg" alt="" className="rounded-md lg:w-full border-2 shadow-inner border-slate-300 hover:brightness-90"/>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <h2 className="text-lg font-sans font-bold text-blue-600">WaiterApp-Web</h2>
            <p className="text-sm lg:text-base text-justify">
              Versão web do WaiterApp, onde os pedidos feitos na versão mobile aparecem e podem ser atualizados para
              Na fila, Em preparo e finalizado. Feito em ReactJs, Typescript e Styled components.
            </p>
            <Button variant="ghost" className="rounded-lg underline text-blue-600">
              <a href="https://github.com/RuanPasseto/WaiterApp-Web" target="_blank">Repositório do projeto</a>
            </Button>
          </div>
          <div className="border-b-2 border-zinc-800 mx-10 lg:mx-20 w-auto"/>
      </div>

      <div className="
        flex flex-col gap-6 lg:grid lg:grid-cols-2
        justify-start items-start p-5">
          <div className="flex flex-col w-full justify-center items-center border-2 border-blue-600 rounded-md shadow-inner">
            <img src="WaiterApp.jpeg" alt="" className="rounded-md lg:w-full border-2 shadow-inner border-slate-300 hover:brightness-90"/>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <h2 className="text-lg font-sans font-bold text-blue-600">WaiterApp-Mobile</h2>
            <p className="text-sm lg:text-base text-justify">
              Versão Mobile do WaiterApp onde em acesso a todos os produtos do restaurante e onde o garçom pode 
              realizar os pedidos e identificar de qual mesa pertence cada pedido e envia para a versão web.
              Feito com React Native, Typescript e Styled Components.
            </p>
            <Button variant="ghost" className="rounded-lg underline text-blue-600">
              <a href="https://github.com/RuanPasseto/WaiterApp-Mobile" target="_blank">Repositório do projeto</a>
            </Button>
          </div>
          <div className="border-b-2 border-zinc-800 mx-10 lg:mx-20 w-auto"/>
      </div>

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
              <a href="https://github.com/RuanPasseto/Tic-Creche" target="_blank">Repositório do projeto</a>
            </Button>
          </div>
          <div className="border-b-2 border-zinc-800 mx-10 lg:mx-20 w-auto"/>
      </div>
    </div>
  )
}