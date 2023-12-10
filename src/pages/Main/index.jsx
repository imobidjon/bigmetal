import React from 'react'
import { About, Fifth, FirstSection, Katalog, TopMahsulotlar } from './Sections'

export default function Main() {
  return (
    <div>
        <FirstSection />
        <TopMahsulotlar />
        <Katalog />
        <About />
        <Fifth />
    </div>
  )
}
