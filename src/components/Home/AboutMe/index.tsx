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
      justify-start items-start h-screen p-5 mb-5
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
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col w-full gap-6 border-l-2 border-gray-400">
          <div className="pl-4">
            <div className=" relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full"/>
              <h2 className="font-semibold text-lg font-sans">Eu</h2>
              <p className="text-sm">
              Dentro do mundo do desenvolvimento desde setembro de 2020. 
              Sempre com vontade de aprender novas tecnologias e enfrentar novos desafios.
              
              </p>
            </div>
            
            <div className="pl-4">
            <div className=" relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full"/>
              <h2 className="font-semibold text-lg font-sans">Dev FrontEnd</h2>
              <p className="text-sm">
              Desenvolvedor FrontEnd com foco no desenvolvimento web, tendo desenvolvido projetos em TypeScript e JavaScript no FrontEnd, 
              utilizando ReactJs, Next.js, HTML e CSS, e também no BackEnd com Node.js e Nest.js. 
              Buscando sempre utilizar o máximo do meu conhecimento e habilidades para desenvolver meus projetos com a maior qualidade possível.
              </p>
            </div>

            <div className="pl-4">
            <div className=" relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full"/>
              <h2 className="font-semibold text-lg font-sans">Estudante</h2>
              <p className="text-sm">
              Cursando o 4º semestre de Engenharia de Software, aprendendo também React Native para desenvolvimento mobile e 
              também estudando sobre UI/UX Design para melhorar a qualidade dos meus projetos.
              </p>
            </div>

            <div className="pl-4">
            <div className=" relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full"/>
              <h2 className="font-semibold text-lg font-sans">Experiências</h2>
              <p className="text-sm">
                Em julho de 2023, tive a oportunidade de participar do programa de estágios da Act - Ciência, Tecnologia e Inovação, 
                onde tive contato com a rotina de trabalho no meio do desenvolvimento. 
                Lá atuei como desenvolvedor FrontEnd utilizando as tecnologias: TypeScript, ReactJs, Next.js, Tailwind e Chakra UI. 
                Além disso, também tive contato e desenvolvi um pouco no BackEnd utilizando as tecnologias: Node.js, Express, Docker e Prisma. 
                Por fim, também tive vivência com a rotina de metodologias ágeis.
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