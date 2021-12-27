import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addAssets, updateAssets} from '../../../../redux/itAssets/itAssets.action'



export const ItAssetsForm = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()

    const [inputs, handleInputs] = useState({
        id: '',
        title:'',
        status_critical:'',
        location:'',
        owner_asset:'',
        sec_administrator:'',
        sec_auditor:'',
        manager_compliance:'',
        description:'',
        is_kii:'',
        type:'',
        adresss:'',
        kpp_object:'',
        sphere_activity:'',
        purpose_obj:'',
        architecture:'',
        category_critical:'',
        date:''
    })

    const asset = useSelector(state=> currentId ? state.assetsList.assets.find(p => p._id === currentId): null)
    

    useEffect(() => {
        if (asset) handleInputs(asset)
    }, [asset])
    
    const handleSubmit = (event) => {
        event.preventDefault()
       
            if (currentId) {
                dispatch(updateAssets(currentId, inputs))
                
                clear()
            } else {
                dispatch(addAssets(inputs))
                
                clear()
            }
        
    }


    const clear = () => {
        setCurrentId(null)
        handleInputs(
            {
                id: '',
                title:'',
                status_critical:'',
                location:'',
                owner_asset:'',
                sec_administrator:'',
                sec_auditor:'',
                manager_compliance:'',
                description:'',
                is_kii:'',
                type:'',
                adress:'',
                kpp_object:'',
                sphere_activity:'',
                purpose_obj:'',
                architecture:'',
                category_critical:'',
                date:''
            }
        )
    }

    return (
        <div className="container">
            <h2>{currentId ? 'Изменить данные о IT-актив' : 'Создать новый IT-актив'}</h2>
            <form onSubmit={handleSubmit}>
                
                <div className='form-group'>
                    <label htmlFor="id">Идентификатор:</label>
                    <input
                        name='id'
                        value={inputs.id}
                        type='text'
                        id='id'
                        autoComplete="off"
                        placeholder="ID пользователя"
                        onChange={(e) => handleInputs({ ...inputs, id: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="title">Наименование:</label>
                    <input
                        name='title'
                        value={inputs.title}
                        type='text'
                        id='title'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, title: e.target.value })} />
                </div>
                
                <div className='form-group'>
                    <label htmlFor="status_critical">Критичность:</label>
                    <select value={inputs.status_critical}  name="status_critical" onChange={(e) => handleInputs({ ...inputs, status_critical: e.target.value })}>
                    <option hidden defaultValue>Выберите</option>
                        <option>Критическая</option>
                        <option>Высокая</option>
                        <option>Средняя</option>
                        <option>Низкая</option>
                    </select>
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
                    <label htmlFor="location">Владелец актива:</label>
                    <input
                        name='owner_asset'
                        value={inputs.owner_asset}
                        type='text'
                        id='owner_asset'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, owner_asset: e.target.value })} />
                </div>
                <div className='form-group'>
                    <label htmlFor="location">Администратор безопасности:</label>
                    <input
                        name='sec_administrator'
                        value={inputs.sec_administrator}
                        type='text'
                        id='sec_administrator'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, sec_administrator: e.target.value })} />
                </div>
                <div className='form-group'>
                    <label htmlFor="location">Аудитор безопасности:</label>
                    <input
                        name='sec_auditor'
                        value={inputs.sec_auditor}
                        type='text'
                        id='sec_auditor'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, sec_auditor: e.target.value })} />
                </div>
               
                <div className='form-group'>
                    <label htmlFor="location">Менеджер по контролю соответствия:</label>
                    <input
                        name='manager_compliance'
                        value={inputs.manager_compliance}
                        type='text'
                        id='manager_compliance'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, manager_compliance: e.target.value })} />
                </div>
               
                <div className='form-group'>
                    <label htmlFor="location">Описание:</label>
                    <input
                        name='description'
                        value={inputs.description}
                        type='text'
                        id='description'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, description: e.target.value })} />
                </div>
                <div className='form-group'>
                    <label htmlFor="location">Объект КИИ:</label>
                    <input
                        name='is_kii'
                        value={inputs.is_kii}
                        type='text'
                        id='is_kii'
                        autoComplete="off"
                        placeholder="Да/Нет"
                        onChange={(e) => handleInputs({ ...inputs, is_kii: e.target.value })} />
                </div>
                
                <div className='form-group'>
                    <label htmlFor="type">Тип:</label>
                    <select value={inputs.type}  name="type" onChange={(e) => handleInputs({ ...inputs, type: e.target.value })}>
                    <option hidden defaultValue>Выберите</option>
                        <option>АСУ ТП</option>
                        <option>ИС</option>
                        <option>ИТС</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="adress">Адреса размещения объекта:</label>
                    <input
                        name='adress'
                        value={inputs.adress}
                        type='text'
                        id='adress'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, adress: e.target.value })} />
                </div>
                
                <div className='form-group'>
                    <label htmlFor="kpp_object">КПП подразделений (филиалов, представительств) субъекта КИИ, в которых размещены сегменты объекта:</label>
                    <input
                        name='kpp_object'
                        value={inputs.kpp_object}
                        type='text'
                        id='kpp_object'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, kpp_object: e.target.value })} />
                </div>
                
                <div className='form-group'>
                    <label htmlFor="sphere_activity">Сфера деятельности, в которой функционирует объект:</label>
                    <select value={inputs.sphere_activity}  name="sphere_activity" onChange={(e) => handleInputs({ ...inputs, sphere_activity: e.target.value })}>
                    <option hidden defaultValue>Выберите</option>
                        <option>Здравоохранение</option>
                        <option>Наука</option>
                        <option>Транспорт</option>
                        <option>Связь</option>
                        <option>Энергетика</option>
                        <option>Банковская сфера</option>
                        <option>Сферы финансового рынка</option>
                        <option>Топливно-энергетический комплекс</option>
                        <option>Атомная энергетика</option>
                        <option>Оборонная</option>
                        <option>Ракетно-космическая</option>
                        <option>Горнодобывающая</option>
                        <option>Металлургическая</option>
                        <option>Химическая промышленность</option>
                    </select>
                </div>
                
                <div className='form-group'>
                    <label htmlFor="purpose_obj">Назначение объекта:</label>
                    <input
                        name='purpose_obj'
                        value={inputs.purpose_obj}
                        type='text'
                        id='purpose_obj'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, purpose_obj: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="architecture">Архитектура объекта:</label>
                    <select value={inputs.architecture}  name="architecture" onChange={(e) => handleInputs({ ...inputs, architecture: e.target.value })}>
                    <option hidden defaultValue>Выберите</option>
                        <option>Одноранговая сеть</option>
                        <option>Клиент-серверная система</option>
                        <option>Технология "тонкий клиент"</option>
                        <option>Сеть передачи данных</option>
                        <option>Система диспетчерского управления и контроля</option>
                        <option>Распределенная система управления</option>
                        <option>Иная архитектура</option>
                    </select>
                </div>
            
                <div className='form-group'>
                    <label htmlFor="category_critical">Значение показателя: (нажмите, "рассчитать" для определение категории ЗОКИИ)</label>
                    <input value={inputs.category_critical}  name="category_critical" onChange={(e) => handleInputs({ ...inputs, category_critical: e.target.value })}>
                    </input>
                </div>

                <div className='form-group'>
                    <label htmlFor="date">Дата категорирования:</label>
                    <input
                        name='date'
                        value={inputs.date}
                        type='text'
                        id='date'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, date: e.target.value })} />
                </div>

                <div className='form-group'>
                    <button type="submit">
                        Создать
                        </button>
                </div>
            </form>
        </div>
    )
}