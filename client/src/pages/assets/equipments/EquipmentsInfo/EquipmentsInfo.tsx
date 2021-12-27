import {FC} from 'react'
import { useParams } from 'react-router-dom'

export const EquipmentsInfo:FC = () => {
  const { id }:any = useParams()

  return (
    <>
      <h1>Here is some information about our Equipment {id}</h1>
    </>
  )
}
