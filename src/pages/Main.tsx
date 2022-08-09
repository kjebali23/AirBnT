import React from 'react'
import CardSection from '../components/CardSection'
import Categories from '../components/Categories'
import Companies from '../components/Companies'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Suggestion from '../components/Suggestion'

const Main = () => {
  return (
    <div className="bg-slate-50">
    <Hero/>
    <CardSection/>
    <Categories/>
    <Companies/>
    <Suggestion/>
    <Footer/>
    </div>
  )
}

export default Main