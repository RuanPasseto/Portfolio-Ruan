'use client'

/* eslint-disable @next/next/no-img-element */
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "../../Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function AboutMe(){
  const router = useRouter()
  return(
    <div>
      <div className=" flex flex-col gap-6 lg:grid lg:grid-cols-2
      justify-start items-start h-screen p-5
      ">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="font-bold font-sans text-2xl">Sobre Mim</h1>
        <img src="me.jpeg" alt="" className="rounded-full w-44 h-w-44 shadow-xl"/>
        <div className="flex w-full justify-center items-center gap-1">
          <Link href="https://www.linkedin.com/in/ruan-passeto-3a0893197/" passHref={true} target="_blank">
            <Button variant="ghost" className="w-13 cursor-pointer hover:text-blue-600">
              <Linkedin/>
            </Button>
          </Link>
          <Link href="https://github.com/RuanPasseto" passHref={true} target="_blank">
          <Button variant="ghost" className="w-13 cursor-pointer hover:text-blue-600">
            <Github/>
          </Button>
          </Link>
          <Button variant="ghost" className="w-13 cursor-pointer hover:text-blue-600">
            <Instagram/>
          </Button>
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col w-full gap-6 border-l-2 border-gray-400">
          <div className="pl-4">
            <div className=" relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full"/>
              <h2 className="font-semibold text-lg font-sans">Eu</h2>
              <p className="text-sm">
              Dentro do mundo do desenvolvimento desde setembro de 2020. 
              Sempre com vontade de aprender novas tecnologias e enfrentar novos desafios
              
              </p>
            </div>
            
            <div className="pl-4">
            <div className=" relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full"/>
              <h2 className="font-semibold text-lg font-sans">Dev FrontEnd</h2>
              <p className="text-sm">
                Desenvolvedor FrontEnd com foco no desenvolvimento web a tendo desenvolvido projetos em Typescript e JavaScript no frontEnd
                utilizando ReactJs, Next.js, HTML e CSS e também no BackEnd com Node.js. Buscando sempre utilizar o maximo de meu conhecimento
                e habilidades para desenvolver meus projetos com a maior qualidade possivel.
              </p>
            </div>
            <div className="pl-4">
            <div className=" relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full"/>
              <h2 className="font-semibold text-lg font-sans">Estudande</h2>
              <p className="text-sm">
                Cursando o 4° semestre de Engenharia de software, aprendendo tambem React Native para desenvolvimentomobile e tambem estudando
                sobre UI/UX Design para melhorar a qualidade dos meus projetos.
              </p>
            </div>
          </div>
        </div>
        <Button onClick={() => router.push('/projects')} variant="ghost" className="underline rounded-lg text-blue-600">
          Conheça meus Projetos
        </Button>
      </div>
    </div>

  )
}