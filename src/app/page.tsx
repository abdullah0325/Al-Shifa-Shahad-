import Catigaries from '@/components/catigory'
import Contact from '@/components/contact'
import Hero from '@/components/heero'
import Promotion from '@/components/promotions'
import Services from '@/components/services'
import Image from 'next/image'

export default function Home() {
  return (
    
    <div>

<Hero/>
<Catigaries/>
<Promotion/>
<Services/>
<Contact/>
      
    </div>
  )
}
