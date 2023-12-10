import React from 'react'
import { About, Companies, Contact, Fifth, FirstSection, Katalog, TopMahsulotlar } from './Sections'

export default function Main() {
  return (
    <div>
        <FirstSection />
        <TopMahsulotlar />
        <Katalog />
        <About />
        <Fifth />
        <Companies />
        <Contact />
    </div>
  )
}
