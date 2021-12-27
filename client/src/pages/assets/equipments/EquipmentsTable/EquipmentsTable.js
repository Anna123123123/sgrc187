import { useSelector, useDispatch } from 'react-redux'
import { Loader } from '../../../../components/Loader/Loader'
import { deleteEquipments } from '../../../../redux/equipments/equipments.action'


export const EquipmentsTable = ({ setCurrentId }) => {
    const fetchData = useSelector(state => state.equipmentsList)
    const { loading, error, equipments } = fetchData
    const dispatch = useDispatch()


    return (
        loading ? <h1><Loader/></h1> : error ? (
            <h2>{error}</h2>
        ) : !equipments.length > 0 ? (
            <h3 style={{ color: "blue" }}>Успешно.Информации об оборудовании нет. Требуется добавить.</h3>
        ) : (
<div style={{overflow:'scroll'}}>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID оборудования</th>
                        <th>Имя устройства</th>
                        <th>Критичность</th>
                        <th>Домен\Рабочая группа</th>
                        <th>Операционная система</th>
                        <th>Виртуальная мащина</th>
                        <th>Тип узла</th>
                        <th>Статус</th>
                        <th>Владелец актива</th>
                        <th>Администратор безопасности</th>
                        <th>Аудитор безопасности</th>
                        <th>Менеджер по контролю соответствия</th>
                        <th>Теги</th>
                        <th>Локация</th>
                        <th>Помещение</th>
                        <th>Бизнес-подразделение\Организация</th>
                        <th>Комментарий</th>
                        <th>Изменить</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {equipments.map((equipments) => {
                        return (
                            <tr key={equipments._id}>
                                <td>{equipments.id_for_scan}</td>
                                <td>{equipments.title}</td>
                                <td>{equipments.critical_status}</td>
                                <td>{equipments.domen}</td>
                                <td>{equipments.operation_system}</td>
                                <td>{equipments.virtual_machine}</td>
                                <td>{equipments.type_of_endpoint}</td>
                                <td>{equipments.status_working}</td>
                                <td>{equipments.owner_proccess}</td>
                                <td>{equipments.security_administrator}</td>
                                <td>{equipments.security_auditor}</td>
                                <td>{equipments.control_manager_compliance}</td>
                                <td>{equipments.tags}</td>
                                <td>{equipments.location}</td>
                                <td>{equipments.placement}</td>
                                <td>{equipments.organisation}</td>
                                <td>{equipments.comments}</td>
                                <td>
                                    <button type="button" onClick={() => setCurrentId(equipments._id)}>Изменить</button></td>
                                <td><button type="button" onClick={() => dispatch(deleteEquipments(equipments._id))}>
                                    Удалить
                                    </button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        )
    )
}