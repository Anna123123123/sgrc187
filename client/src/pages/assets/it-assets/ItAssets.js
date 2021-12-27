import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAssets } from '../../../redux/itAssets/itAssets.action'
import { ItAssetsTable } from './ItAssetsTable/ItAssetsTable'
import { ItAssetsForm } from './ItAssetsForm/ItAssetsForm'
// import {ItAssetsCalculate} from './ItAssetsCalculate/ItAssetsCalculate'
// import { ItAssetsEvaluation } from './ItAssetsEvaluation/ItAssetsEvaluation'
import './ItAssets.styles.scss'




export const ItAssets = () => {
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getAssets())
    }, [dispatch, currentId])



    return (
        <div className="it-assets-container">
            <h1>ИТ-активы</h1>
            <ItAssetsTable setCurrentId={setCurrentId} />
            <ItAssetsForm currentId={currentId} setCurrentId={setCurrentId} />

            {/* <h1>Процедура категорирования </h1>

            <p style={{ marginTop: "20px", marginBottom: "20px" }}><b>Объекты КИИ</b> - ИС, ИТС и АСУ ТП</p>
            <p style={{ marginTop: "20px", marginBottom: "20px" }}><b>Субъекты КИИ</b> - организации из одной категории (10 направлений)</p>
            <p style={{ marginTop: "20px", marginBottom: "20px" }}><b>Критические процессы</b> - процессы, нарушение и (или) прекращение которых может привести к негативным социальным, политическим, экономическим, экологическим последствиям, последствиям для обеспечения обороны страны, безопасности государства и правопорядка.</p>
            <p style={{ marginTop: "20px", marginBottom: "20px" }}><b>Объекты КИИ</b> и <b>критические процессы</b>  неразрывно между собой связаны</p>
            <p style={{ marginTop: "20px", marginBottom: "20px" }}><b>В перечень объектов КИИ</b>, подлежащих категорированию, включаются только те объекты КИИ, которые обрабатывают информацию, необходимую для автоматизации критических процессов и (или) осуществляют их управление, контроль или мониторинг, а, следовательно, они и подлежат категорированию.</p>
            <h1>Перечнь объектов КИИ</h1> */}

            {/* <ItAssetsEvaluation /> */}

            {/* <ItAssetsCalculate/> */}

        </div>
    )
}