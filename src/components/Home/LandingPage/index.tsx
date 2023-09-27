import { Button } from "@/components/Button";

/* eslint-disable @next/next/no-img-element */
export default function LandingPage(){
  return(
    <div className=" flex flex-col justify-center items-center h-screen gap-6 lg:grid grid-cols-2 ">
    <div className="hidden lg:flex justify-center items-center">
      <img src="PageImage3.png" alt="" className="rounded-md w-2/3 "/>
    </div>
    <div className="flex flex-col gap-6">
    <h1 className="font-sans font-extrabold text-3xl self-start">Oi meu nome é Ruan</h1>
    <p className="text-sm">
      Bem vindo ao meu portfolio. 
      Aqui você encontra um pouco da minha jornada e meu Portifolio
    </p>
    <div className="flex flex-col gap-6 lg:flex-row">
    <Button variant="outline">
      Sobre Mim
    </Button>
    <Button variant="primary">
      Conheça meus Projetos
    </Button>
    </div>
    
  </div>
    </div>
    
  )
}