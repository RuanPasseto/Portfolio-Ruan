'use client'

import * as Tab from '@radix-ui/react-tabs'
import { TabItem } from '../TabItem'
import { useState } from 'react'

export function Tabs(){
  const [currentTab, setCurrentTab] = useState('tab1')
  return(
    <Tab.Root value={currentTab} onValueChange={(e) => setCurrentTab(e)}>
      <Tab.List className='mt-6 flex flex-col lg:flex-row items-center gap-5'> 
        <TabItem  route='/#home' value='tab1'description='Home' isSelected={currentTab === 'Tab1'} />
        <TabItem  route='/#about-me' value='tab2' description='Sobre mim' isSelected={currentTab === 'Tab2'}  />
        <TabItem  route='/projects' value='tab3' description='projetos' isSelected={currentTab === 'Tab3'} />
        <TabItem  route='/#contact' value='tab4' description='Contatos' isSelected={currentTab === 'Tab4'}  />
      </Tab.List>
    </Tab.Root>
  )
}