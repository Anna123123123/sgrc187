import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEquipments, updateEquipments } from '../../../../redux/equipments/equipments.action'

export const EquipmentsForm = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    const [inputs, handleInputs] = useState({
        id_for_scan: '',
        title: '',
        critical_status: '',
        domen: '',
        operation_system: '',
        virtual_machine: '',
        type_of_endpoint: '',
        status_working: '', //Работает, тестовый, наэтапе внедрения
        owner_proccess: '', //[] должен быть
        security_administrator: '',
        security_auditor: '',
        control_manager_compliance: '',
        tags: '',
        location: '',
        placement: '',
        organisation: '',
        comments: ''
    })
    const person = useSelector(state => currentId ? state.activityList.activities.find(p => p._id === currentId) : null)

    useEffect(() => {
        if (person) handleInputs(person)
    }, [person])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (currentId) {
            dispatch(updateEquipments(currentId, inputs))
            clear()
        } else {
            dispatch(addEquipments(inputs))
            clear()
        }
    }


    const clear = () => {
        setCurrentId(null)
        handleInputs(
            {
                id_for_scan: '',
                title: '',
                critical_status: '',
                domen: '',
                operation_system: '',
                virtual_machine: '',
                type_of_endpoint: '',
                status_working: '', //Работает, тестовый, наэтапе внедрения
                owner_proccess: '', //[] должен быть
                security_administrator: '',
                security_auditor: '',
                control_manager_compliance: '',
                tags: '',
                location: '',
                placement: '',
                organisation: '',
                comments: ''
            }
        )
    }

    return (
        <div className="container">
            <h2>{currentId ? 'Изменить данные об  оборудовании' : 'Создать новое оборудование'}</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="id_for_scan">
                    {/* Оборудование для сканирования: */}
                    Идентификатор оборудования:
                    </label>
                    <input value={inputs.id_for_scan} name="id_for_scan" onChange={(e) => handleInputs({ ...inputs, id_for_scan: e.target.value })}>
                        {/* <option hidden defaultValue>Выберите</option> */}
                    </input>
                </div>

                <div className='form-group'>
                    <label htmlFor="title">Имя устройства:</label>
                    <input
                        name='title'
                        value={inputs.id}
                        type='text'
                        id='title'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, title: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="critical_status">Критичность:</label>
                    <select value={inputs.critical_status} name="critical_status" onChange={(e) => handleInputs({ ...inputs, critical_status: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        <option>Критический</option>
                        <option>Высокий</option>
                        <option>Средний</option>
                        <option>Низкий</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="domen">Домен\Рабочая группа:</label>
                    <select value={inputs.domen} name="domen" onChange={(e) => handleInputs({ ...inputs, domen: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        {/* <option>Да</option>
                        <option>Нет</option> */}
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="operation_system">Операционная система:</label>
                    <input
                        name='operation_system'
                        value={inputs.operation_system}
                        type='text'
                        id='operation_system'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, operation_system: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="virtual_machine">Виртуальная машина:</label>
                    <select value={inputs.virtual_machine} name="virtual_machine" onChange={(e) => handleInputs({ ...inputs, virtual_machine: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        <option>Да</option>
                        <option>Нет</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="type_of_endpoint">Тип узла:</label>
                    <select value={inputs.type_of_endpoint} name="type_of_endpoint" onChange={(e) => handleInputs({ ...inputs, type_of_endpoint: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        <option>FTP-сервер Linux</option>
                        <option>FTP-сервер Windows</option>
                        <option>IP-камера</option>
                        <option>IP-телефон</option>
                        <option>Proxy-сервер</option>
                        <option>Веб-сервер Linux</option>
                        <option>Веб-сервер Windows</option>
                        <option>Группа</option>
                        <option>Другое</option>
                        <option>Защищенный микрокомпьютер</option>
                        <option>Контроллер домена Active Directory</option>
                        <option>Межсетевой экран</option>
                        <option>Мобильное устройство</option>
                        <option>Нераспознанный узел</option>
                        <option>Ноутбук</option>
                        <option>Почтовый сервер</option>
                        <option>Принтер / МФУ</option>
                        <option>Рабочая станция Linux</option>
                        <option>Рабочая станция OS X</option>
                        <option>Рабочая станция Windows</option>
                        <option>Роутер</option>
                        <option>Сервер Linux / Unix</option>
                        <option>Сервер Windows</option>
                        <option>Сервер базы данных</option>
                        <option>Сервер межсетевого экранирования</option>
                        <option>Сервер печати</option>
                        <option>Сервер приложений</option>
                        <option>Сервер терминального доступа</option>
                        <option>Сервер удаленного доступа</option>
                        <option>Сервер унифицированных коммуникаций</option>
                        <option>Сеть</option>
                        <option>Сканер</option>
                        <option>Файловый сервер</option>
                    </select>
                </div>


                <div className='form-group'>
                    <label htmlFor="status_working">Статус:</label>
                    <select value={inputs.status_working} name="status_working" onChange={(e) => handleInputs({ ...inputs, status_working: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        <option>В процессе внедрения</option>
                        <option>Рабочий</option>
                        <option>Тестовый</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="owner_proccess">Владелец актива:</label>
                    <select value={inputs.owner_proccess} name="owner_proccess" onChange={(e) => handleInputs({ ...inputs, owner_proccess: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>

                    </select>
                </div>


                <div className='form-group'>
                    <label htmlFor="security_administrator">Администратор безопасности:</label>
                    <select value={inputs.security_administrator} name="security_administrator" onChange={(e) => handleInputs({ ...inputs, security_administrator: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>

                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="security_auditor">Аудитор безопасности:</label>
                    <select value={inputs.security_auditor} name="security_auditor" onChange={(e) => handleInputs({ ...inputs, security_auditor: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>

                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="control_manager_compliance">Менеджер по контролю соответствия:</label>
                    <select value={inputs.control_manager_compliance} name="control_manager_compliance" onChange={(e) => handleInputs({ ...inputs, control_manager_compliance: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>

                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="tags">Теги:</label>
                    <input
                        name='tags'
                        value={inputs.tags}
                        type='text'
                        id='tags'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, tags: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="location">Локация:</label>
                    <input
                        name='location'
                        value={inputs.location}
                        type='text'
                        id='location'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, location: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="placement">Помещение:</label>
                    <input
                        name='placement'
                        value={inputs.placement}
                        type='text'
                        id='placement'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, placement: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="organisation">Бизнес-подразделение\Организация:</label>
                    <input
                        name='organisation'
                        value={inputs.placement}
                        type='text'
                        id='organisation'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, organisation: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="comments">Комментарий:</label>
                    <input
                        name='comments'
                        value={inputs.placement}
                        type='text'
                        id='comments'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, comments: e.target.value })} />
                </div>

                <div className='form-group'>
                    <button type="submit">
                        {currentId ? 'Изменить' : 'Создать'}
                    </button>
                </div>
            </form>
        </div>
    )
}