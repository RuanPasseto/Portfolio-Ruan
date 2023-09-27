'use client'
 
import * as AccordionRadix from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Accordion(){
  const [isAccordionOpen, setIsAccordionOpen] = useState('')

  return(
    <AccordionRadix.Root className='AccordionRoot' type='single' collapsible onValueChange={setIsAccordionOpen}>
      <AccordionRadix.Item className='AccordionItem' value='item-1'>
        <AccordionRadix.Trigger asChild>
          <div className='flex gap-5 cursor-pointer'>
            <h3 className='text-md font-bold font-sans text-purple-900'>
              Teste API
            </h3>
            <ChevronDown className={`transition ${isAccordionOpen && 'rotate-100'}`}/>
          </div>
        </AccordionRadix.Trigger>
        <AccordionRadix.Content asChild>
          <div className='p-5 rounded-lg border-2 mt-2 transition'>
            COLOCAR AQUI UMJ FORM OU ALGO PRA FAZER A CHAMADA DA API
          </div>
        </AccordionRadix.Content>
      </AccordionRadix.Item>
    </AccordionRadix.Root>
  )
}