'use client'

import { Button } from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useLoading } from "@/context/LoadingContext";
import { notifyWarn} from "@/components/Toaster";



export function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const {toggleLoading} = useLoading()
 

  function handleCleanForm(){
    setName('')
    setEmail('')
    setMessage('')
  }

  const form: any = useRef()

  const handleSendEmail = (e:any) => {
    e.preventDefault();
    if(!name){
      return notifyWarn('Não é possivel entrar em contato sem o nome')
    }
    if(!email){
      return notifyWarn('Não é possivel entrar em contato sem o email')
    }
    if(!message){
      return notifyWarn('Não é possivel entrar em contato sem a mensagem')
    }

    toggleLoading(true)
      emailjs.sendForm('service_cmt8qw9', 'template_d571obv', form.current!, 'XjUpz1I4X8kv-dBty')
        .then((result) => {
            handleCleanForm();
        }, (error) => {
            console.log(error.text);
        });
  };
  



  return (
    <div>
      <h1 className="font-bold font-sans text-2xl lg:ml-10 mb-8 lg:text-3xl self-start">Fale comigo</h1>
      <div className="flex flex-col gap-6 justify-start items-center pb-20 p-5">
        <div className="flex flex-col gap-5 w-full justify-center items-center lg:max-w-[50%] lg:items-center">
          <h2>
            Preencha o formulario para entrar em contato comigo pelo email
            {' '} <span className="font-bold">ruanpasseto@gmail.com</span>
          </h2>
          <form id="contact-form" ref={form} onSubmit={handleSendEmail} className="flex flex-col gap-5 w-full justify-center items-center lg:max-w-full lg:items-center">
          <Input id="name" name="from_name" label="Nome" value={name} onChange={(e: any) => setName(e.target.value)}/>
          <Input type="email"id="email" name="reply_email" label="Email" value={email} onChange={(e: any) => setEmail(e.target.value)}/>
          <TextArea id="message" name="message" label="Mensagem" value={message} onChange={(e:any) => setMessage(e.target.value)}/>
          </form>
        </div>
        <div className="flex w-full gap-5 lg:max-w-[50%] lg:items-center">
          <Button variant="outline" onClick={handleCleanForm}>
            Limpar
          </Button>
          <Button variant="primary" type="submit" form="contact-form">
            Enviar
          </Button>
        </div>
      </div>
    </div>
  )
}