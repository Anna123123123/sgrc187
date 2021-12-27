import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import { deleteActivities } from '../../../../redux/activities/activities.action'
import { Loader } from '../../../../components/Loader/Loader'




export const ActivitiesTable = ({ setCurrentId }) => {
    const fetchData = useSelector(state => state.activityList)
    const { loading, error, activities } = fetchData
    const dispatch = useDispatch()


    return (
        loading ? <Loader /> : error ? (
            <h2>{error}</h2>
        ) : !activities.length > 0 ? (
            <h3 style={{ color: "blue" }}>Успешно.Информации о бизнес-процессах нет. Требуется добавить.</h3>
        ) : (
            <div style={{ overflow: 'scroll' }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Идентификатор</th>
                            <th>Категория бизнес-процессов</th>
                            <th>Подкатегория бизнес-процессов</th>
                            <th>Наименование процесса</th>
                            <th>Владелец процесса</th>
                            <th>Администратор безопасности</th>
                            <th>Аудитор безопасности</th>
                            <th>Менеджер по контролю соответствия</th>
                            <th>Описание процесса</th>
                            <th>Социальная значимость</th>
                            <th>Политическая значимость</th>
                            <th>Экономическая значимость</th>
                            <th>Экологическая значимость</th>
                            <th>Оборонная значимость</th>
                            <th>Обоснование критичности</th>
                            <th>Критичность</th>
                            <th>Изменить</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map((activity) => {
                            return (
                                <tr key={activity._id}>
                                    <td>{activity.id}</td>
                                    <td>{activity.category}</td>
                                    <td>{activity.sub_category}</td>
                                    <td>{activity.title}</td>
                                    <td>{activity.owner_proccess}</td>
                                    <td>{activity.security_administrator}</td>
                                    <td>{activity.security_auditor}</td>
                                    <td>{activity.control_manager_compliance}</td>
                                    <td>{activity.description}</td>
                                    <td>{activity.social_mark}</td>
                                    <td>{activity.politic_mark}</td>
                                    <td>{activity.economic_mark}</td>
                                    <td>{activity.eco_mark}</td>
                                    <td>{activity.military_mark}</td>
                                    <td>{activity.justification}</td>
                                    <td>{activity.critical_status}</td>
                                    <td><button type="button" onClick={() => setCurrentId(activity._id)}>Изменить</button></td>
                                    <td><button type="button" onClick={() => dispatch(deleteActivities(activity._id))}>
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