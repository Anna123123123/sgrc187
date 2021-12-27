import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { EquipmentsTable } from './EquipmentsTable/EquipmentsTable'
import { EquipmentsForm } from './EquipmentsForm/EquipmentsForm'
import { getEquipments } from '../../../redux/equipments/equipments.action'


export const Equipments = () => {
    const dispatch = useDispatch()

    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getEquipments())
    }, [dispatch, currentId])

    return (
        <>
            <h1>Оборудование</h1>
            <EquipmentsTable setCurrentId={setCurrentId} />
            <EquipmentsForm currentId={currentId} setCurrentId={setCurrentId} />
        </>
    )
}