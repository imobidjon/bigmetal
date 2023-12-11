import React from 'react'
import { About, Companies, Contact, Fifth, FirstSection, KatalogSection, TopMahsulotlar } from './Sections'

export default function Main() {
  return (
    <div>
        <FirstSection />
        <TopMahsulotlar />
        <KatalogSection />
        <About />
        <Fifth />
        <Companies />
        <Contact />
    </div>
  )
}
