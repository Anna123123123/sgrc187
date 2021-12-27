import { useSelector } from 'react-redux'
// import './PersonnelTable.styles.scss'
import { useDispatch } from 'react-redux'
import { personnelTableDelete } from '../../../../redux/personnel/personnel.action'
import { Loader } from '../../../../components/Loader/Loader'


export const PersonnelTable = ({ setCurrentId }) => {


    const fethedPersonnel = useSelector(state => state.personnelList)
    const { loading, error, personnel } = fethedPersonnel
    const dispatch = useDispatch()

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    return (
        loading ? <h1><Loader /></h1> : error ? (
            <h2>{error}</h2>
        ) : !personnel.length > 0 ? (
            <h1>Информации о пользователях нет.</h1>
        ) : (
            <div style={{ overflow: 'scroll' }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Организация</th>
                            <th>ID</th>
                            <th>ФИО</th>
                            <th>Username</th>
                            <th>Должность</th>
                            <th>E-mail</th>
                            <th>Домен</th>
                            <th>Связанное оборудование</th>
                            <th>Уровень привилегии</th>
                            <th>Администратор безопасности</th>
                            <th>Количество инцидентов</th>
                            <th>Изменить</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personnel.map((person, key) => {
                            return (
                                <tr key={person._id}>
                                    <td>{person.companie.map((company, key) => {
                                        return <p key={company._id}>{company.title}</p>
                                    })}</td>
                                    <td>{person.id}</td>
                                    <td>{person.realname}</td>
                                    <td>{person.personname}</td>
                                    <td>{person.position}</td>
                                    <td>{person.email}</td>
                                    <td>{person.domain}</td>
                                    <td>{person.related_hardware}</td>
                                    <td>{person.privilege_level}</td>
                                    <td>{person.is_security_administrator}</td>
                                    <td>{person.number_of_incidents}</td>
                                    <td><button type="button" onClick={() => setCurrentId(person._id)}>Изменить</button></td>
                                    <td><button type="button" onClick={() => dispatch(personnelTableDelete(person._id))}>
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