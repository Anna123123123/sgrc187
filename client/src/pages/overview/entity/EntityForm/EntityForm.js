import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEntity, updateEntity } from '../../../../redux/entity/entity.action'
import './EntityForm.styles.scss'

export const EntityForm = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    const [inputs, handleInputs] = useState({
        title: '',
        field_activity: ''
    })

    const entity = useSelector(state => currentId ? state.entityList.find(p => p._id === currentId) : null)

    useEffect(() => {
        if (entity) handleInputs(entity)
    }, [entity])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (currentId) {
            dispatch(updateEntity(currentId, inputs))
            clear()
        } else {
            dispatch(addEntity(inputs))
            clear()
        }
    }


    const clear = () => {
        setCurrentId(null)
        handleInputs(
            {
                title: '',
                field_activity: ''
            }
        )
    }

    return (
        <div className="container">
            <h2>{currentId ? 'Изменить данные об организации' : 'Создать новую организацию'}</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="title">Название</label>
                    <input
                        name='title'
                        value={inputs.title}
                        type='text'
                        id='title'
                        autoComplete="off"
                        placeholder="Название организации"
                        onChange={(e) => handleInputs({ ...inputs, title: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor="field_activity">Сфера деятельности</label>
                    <input
                        name='field_activity'
                        value={inputs.field_activity}
                        type='text'
                        id='field_activity'
                        autoComplete="off"
                        placeholder="Сфера действия"
                        onChange={(e) => handleInputs({ ...inputs, field_activity: e.target.value })} />
                    <p>Например:</p>
                    <ul>
                        <li>система здравоохранения</li>
                        <li>наука</li>
                        <li>транспорт</li>
                        <li>связь</li>
                        <li>энергетика</li>
                        <li>банковская сфера (иная сфера
                        финансового рынка)</li>
                        <li>топливно-энергетический комплекс</li>
                        <li>атомная энергетика</li>
                        <li>оборонная сфера</li>
                        <li>ракетно-космическая сфера</li>
                        <li>горно-добывающая сфера</li>
                        <li>металлургическая промышленность</li>
                        <li>химическая промышленность</li>
                        <li>иное</li>
                    </ul>
                </div>

                <div className='form-group'>
                    <button type="submit">
                        Создать организацию
                        </button>
                </div>
                {/* <p>Сфера деятельности:</p>
                <p>Наименование объекта:</p>
                <p>Планируемый срок категорирования</p>
                <p>Контакты организации</p>
                <i>Генеральный директор - {`user.fullname`}.
                    Телефон - {`user.telephone`}. Исполнительное лицо: {`user.fullname`} {`user.telephone`}</i> */}
            </form>
        </div>
    )
}