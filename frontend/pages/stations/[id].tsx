import React from 'react'
import NavBar from '@/components/NavBar'

export const getStaticPaths = async () =>{
const res = await fetch("http://localhost:8080/stations?limit=457")
const data =  await res.json()

const paths = data.data.map((station:any) => {
  return {
    params: {id: station.id.toString()}
  }
  })

  return {
    paths,
    fallback: false
  }
}

const Station = ({station}) => {

    return (
      <>
      <NavBar/>
      <h1>{station.nimi}</h1>
      <h4>{station.osoite}</h4>
      <h4>{station.kapasiteet}</h4>
      </>
    )
  }

export const getStaticProps = async (context:any) =>{

    const id = context.params.id

    const res = await fetch(`http://localhost:8080/stations/${id}`)
    const data =  await res.json()

    return {
      props: {
        station:data
      }
}}

export default Station