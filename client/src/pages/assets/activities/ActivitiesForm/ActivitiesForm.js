import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addActivities, updateActivities } from '../../../../redux/activities/activities.action'


export const ActivitiesForm = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()

    const [inputs, handleInputs] = useState({
        id: '',
        category: '',
        sub_category: '',
        title: '',
        owner_proccess: '', //[] должен быть
        security_administrator: '',
        security_auditor: '',
        control_manager_compliance: '',
        description: '',
        social_mark: '',
        politic_mark: '',
        economic_mark: '',
        eco_mark: '',
        military_mark: '',
        justification: '',
        critical_status: ''
    })
    const person = useSelector(state => currentId ? state.activityList.activities.find(p => p._id === currentId) : null)

    useEffect(() => {
        if (person) handleInputs(person)
    }, [person])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (currentId) {
            dispatch(updateActivities(currentId, inputs))
            clear()
        } else {
            dispatch(addActivities(inputs))
            clear()
        }
    }


    const clear = () => {
        setCurrentId(null)
        handleInputs(
            {
                id: '',
                category: '',
                sub_category: '',
                title: '',
                critical_status: '',
                owner_proccess: '', //[] должен быть
                security_administrator: '',
                security_auditor: '',
                control_manager_compliance: '',
                description: ''
            }
        )
    }

    return (
        <div className="container">
            <h2>{currentId ? 'Изменить данные о  бизнес-процессе' : 'Создать новый бизнес-процесс'}</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="id">Идентификатор:</label>
                    <input
                        name='id'
                        value={inputs.id}
                        type='text'
                        id='id'
                        autoComplete="off"
                        placeholder="Например ВР-20"
                        onChange={(e) => handleInputs({ ...inputs, id: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="category">Категория бизнес-процесса:</label>
                    <select value={inputs.category} name="category" onChange={(e) => handleInputs({ ...inputs, category: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        <option>Управленческий</option>
                        <option>Технологический</option>
                        <option>Производственный</option>
                        <option>Финансово-экономический</option>
                        <option>Иной</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="sub_category">Подкатегория бизнес-процесса:</label>
                    <select value={inputs.sub_category} name="sub_category" onChange={(e) => handleInputs({ ...inputs, sub_category: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        <option>Административно-хозяйственное обеспечение</option>
                        <option>Администрирование и ИТ</option>
                        <option>Аудит</option>
                        <option>Внешние инвестиции</option>
                        <option>Взаимодействие с акционерами</option>
                        <option>Внутренний контроль и аудит</option>
                        <option>Закупки</option>
                        <option>Исследования и разработки</option>
                        <option>Логистика и доставка</option>
                        <option>Маркетинг</option>
                        <option>Налоговый и бухгалтерский учет</option>
                        <option>Обеспечение безопасности (физической, экономической, информационной)</option>
                        <option>Обслуживание клиентов / населения</option>
                        <option>Поддержка клиентов</option>
                        <option>Продажи</option>
                        <option>Производство</option>
                        <option>Работа с дилерами и контрагентами</option>
                        <option>СЭД</option>
                        <option>Сервисы и услуги</option>
                        <option>Стратегическое управление</option>
                        <option>Управление кадрами</option>
                        <option>Финансовое управление</option>
                        <option>Иное</option>
                    </select>
                </div>



                <div className='form-group'>
                    <label htmlFor="title">Наименование процесса:</label>
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
                    <label htmlFor="owner_proccess">Владелец процесса:</label>
                    <input
                        name='owner_proccess'
                        value={inputs.owner_proccess}
                        type='text'
                        id='owner_proccess'
                        autoComplete="off"
                        placeholder="Например ВР-20"
                        onChange={(e) => handleInputs({ ...inputs, owner_proccess: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="security_administrator">Администратор безопасности:</label>
                    <input
                        name='security_administrator'
                        value={inputs.security_administrator}
                        type='text'
                        id='security_administrator'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, security_administrator: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="security_auditor">Аудитор безопасности:</label>
                    <input
                        name='security_auditor'
                        value={inputs.security_auditor}
                        type='text'
                        id='security_auditor'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, security_auditor: e.target.value })} />
                </div>



                <div className='form-group'>
                    <label htmlFor="control_manager_compliance">Менеджер по контролю соответствия:</label>
                    <input
                        name='control_manager_compliance'
                        value={inputs.control_manager_compliance}
                        type='text'
                        id='control_manager_compliance'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, control_manager_compliance: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="description">Описание процесса (доп. информация):</label>
                    <textarea 
                     name='description'
                        value={inputs.description}
                        type='text'
                        id='description'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, description: e.target.value })}
                />
                </div>
                

      
                <div className='form-group'>
                    <label htmlFor="social_mark">Социальная значимость:</label>
                    <select value={inputs.social_mark} name="social_mark" onChange={(e) => handleInputs({ ...inputs, social_mark: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        <option>ДА</option>
                        <option>НЕТ</option>
                    </select>
                </div>
              
                <div className='form-group'>
                    <label htmlFor="politic_mark">Политическая значимость:</label>
                    <select value={inputs.politic_mark} name="politic_mark" onChange={(e) => handleInputs({ ...inputs, politic_mark: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        <option>ДА</option>
                        <option>НЕТ</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="economic_mark">Экономическая значимость:</label>
                    <select value={inputs.economic_mark} name="economic_mark" onChange={(e) => handleInputs({ ...inputs, economic_mark: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        <option>ДА</option>
                        <option>НЕТ</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="eco_mark">Экологическая значимость:</label>
                    <select value={inputs.eco_mark} name="eco_mark" onChange={(e) => handleInputs({ ...inputs, eco_mark: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        <option>ДА</option>
                        <option>НЕТ</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="military_mark">Оборонная значимость:</label>
                    <select value={inputs.military_mark} name="military_mark" onChange={(e) => handleInputs({ ...inputs, military_mark: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        <option>ДА</option>
                        <option>НЕТ</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="justification">Обоснование критичности:</label>
                    <textarea
                        name='justification'
                        value={inputs.justification}
                        type='text'
                        id='justification'
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleInputs({ ...inputs, justification: e.target.value })} />
                </div>
               
                
                <div className='form-group'>
                    <label htmlFor="critical_status">Критичность:</label>
                    <select value={inputs.title} name="critical_status" onChange={(e) => handleInputs({ ...inputs, critical_status: e.target.value })}>
                        <option hidden defaultValue>Выберите</option>
                        <option>Критический</option>
                        <option>Высокий</option>
                        <option>Средний</option>
                        <option>Низкий</option>
                        <option>Некритический</option>
                    </select>
                </div>

                {/* Добавить ссылку на контакты к людям */}

                {/* <div className='form-group'>
                    <label htmlFor="id">Входит в группу:</label>
                    Все теже поля что и у категории бизнес процесса
                </div> */}

                {/* <div className='form-group'>
                    <label htmlFor="id">Связанные инциденты:</label>
                    Все теже поля что и у категории бизнес процесса
                </div> */}

                <div className='form-group'>
                    <button type="submit">
                        {currentId ? 'Изменить' : 'Создать'}
                    </button>
                </div>
            </form>
        </div>
    )
}