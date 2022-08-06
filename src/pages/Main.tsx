import React from 'react'
import CardSection from '../components/CardSection'
import Categories from '../components/Categories'
import Companies from '../components/Companies'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Main = () => {
  return (
    <>
    <Hero/>
    <CardSection/>
    <Categories/>
    <Companies/>
    <Footer/>
    </>
  )
}

export default Main