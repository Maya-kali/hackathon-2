import BestSelling from '@/components/bestSelling'
import BestSellingCard from '@/components/bestSellingCard'
import Categories from '@/components/categories'
import FeaturedProducts from '@/components/featuredProducts'
import Hero from '@/components/hero'
import Promotion from '@/components/promotion'
import Services from '@/components/services'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=' mx-auto max-w-[95%]'>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Promotion/>
      <Categories/>
      <BestSelling />
      
    </div>
  )
}
