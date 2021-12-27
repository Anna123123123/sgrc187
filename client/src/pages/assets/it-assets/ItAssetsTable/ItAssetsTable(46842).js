import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from '../../../../components/Loader/Loader'
import { Modal } from '../../../../components/Modal/Modal'
import { deleteAssets } from '../../../../redux/itAssets/itAssets.action'


export const ItAssetsTable = ({ setCurrentId }) => {
    const fethedAssets = useSelector(state => state.assetsList)
    const { error, loading, assets } = fethedAssets
    const dispatch = useDispatch()

    // const deletePerson = (id) => {
    //     if (window.confirm('Удалить пользователя?')) {
    //         dispatch(deleteAssets(id))
    //         window.alert('Действие выполнено. Обновите страницу.')
    //     } else {
    //         window.alert('Действие было отменено')
    //     }
    // }
   
    const [showModal, setShowModal] = useState(false)

    const showCalcModal = () => {
        setShowModal(prev => !prev)
    }

    const tableAssets = (
        <>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        <div style={{ overflow: 'scroll' }}>
                                <table style={{ width: "100%" }} className="table">
                                    <thead>
                                        <tr>
                                            <th>Идентификатор</th>
                                            <th>Наименование</th>
                                            <th>Критичность</th>
                                            <th>Локация</th>
                                            <th>Владелец актива</th>
                                            <th>Администратор безопасности</th>
                                            <th>Аудитор безопасности</th>
                                            <th>Менеджер по контролю соответствия</th>
                                            <th>Описание</th>
                                            <th>Объект КИИ</th>
                                            <th>Тип</th>
                                            <th>Адреса размещения объекта</th>
                                            <th>КПП подразделений</th>
                                            <th>Сфера деятельности</th>
                                            <th>Назначение объекта</th>
                                            <th>Архитектура объекта</th>
                                            <th>Значение показателя</th>
                                            <th>Дата категорирования</th>
                                            <th>Изменить</th>
                                            <th>Удалить</th>
                                            <th>Рассчитать</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assets.map((asset) => {
                                            return (
                                                <tr key={asset._id}>
                                                    <td>{asset.id}</td>
                                                    <td>{asset.title}</td>
                                                    <td>{asset.status_critical}</td>
                                                    <td>{asset.location}</td>
                                                    <td>{asset.owner_asset}</td>
                                                    <td>{asset.sec_administrator}</td>
                                                    <td>{asset.sec_auditor}</td>
                                                    <td>{asset.manager_compliance}</td>
                                                    <td>{asset.description}</td>
                                                    <td>{asset.is_kii}</td>
                                                    <td>{asset.type}</td>
                                                    <td>{asset.adress}</td>
                                                    <td>{asset.kpp_object}</td>
                                                    <td>{asset.sphere_activity}</td>
                                                    <td>{asset.purpose_obj}</td>
                                                    <td>{asset.architecture}</td>
                                                    <td>{asset.category_critical}</td>
                                                    <td>{asset.date}</td>
                                                    <td><button type="button" onClick={() => setCurrentId(asset._id)}>Изменить</button></td>
                                                    <td><button type="button" onClick={() => dispatch(deleteAssets(asset._id))}>
                                                        Удалить
                        </button></td>
                                                    <td><button type="button" onClick={ showCalcModal}>
                                                        Рассчитать
                        </button></td>
                                                    
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
     </>)
    
    return (
        
        loading
            ? <Loader />
            : error
                ? (
                    <h2>{error}</h2>
                )
                : !assets.length > 0
                    ? (
                        <h3 style={{ color: "#b3b3b3" }}>Успешно.Информации нет. Требуется добавить.</h3>
                    )
                    : tableAssets
    )
}