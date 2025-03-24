import Banner1 from '@/components/banner1'
import BestRated from '@/components/best_rated'
import CollectionCarousel from '@/components/collections'
import Destinations from '@/components/destinations'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Offers from '@/components/offers'
import StayLikeStars from '@/components/stars'
import Stats from '@/components/stats'
import Tempnav from '@/components/tempnav'
import Titlescreen from '@/components/title'
import TrendingSection from '@/components/trending'
import React from 'react'

export default function Landing() {
  return (
    <section>
      <Nav/>
      <Titlescreen/>
      <Destinations/>
      <Offers/>
      <TrendingSection/>
      {/*<Banner1/>*/}
      <CollectionCarousel/>
      <Features/>
      <BestRated/>
      <StayLikeStars/>
      <Stats/>
      <Footer/>
    </section>
  )
}
