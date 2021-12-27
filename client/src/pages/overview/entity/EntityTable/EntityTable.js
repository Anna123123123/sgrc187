import { useSelector } from 'react-redux'
import './EntityTable.styles.scss'
import { useDispatch } from 'react-redux'
import { deleteEntity } from '../../../../redux/entity/entity.action'
import TableV1 from '../../../../components/Table/v1/TableV1'

export const EntityTable = ({ setCurrentId }) => {
    const entityFetched = useSelector(state => state.entityList)
    const dispatch = useDispatch()

    const tableTitle = ['Название', 'Сфера деятельности', 'Изменить', 'Удалить']

    return (
        !entityFetched.length > 0 ? (
            <p>Организаций в списке нету. Добавьте новую.</p>
        ) : (
            <TableV1
                th={tableTitle.map(el => <th>{el}</th>)}
                tr={entityFetched.map((user) => {
                    return (
                        <tr key={user._id}>
                            <td>{user.title}</td>
                            <td>{user.field_activity
                            }</td>
                            <td><button type="button" onClick={() => setCurrentId(user._id)}>Изменить</button></td>
                            <td>
                                <button type="button" onClick={() => dispatch(deleteEntity(user._id))}>
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    )
                })}
            />

            // <table className="table">
            //     <thead>
            //         <tr>
            //             <th>Название</th>
            //             <th>Сфера деятельности</th>
            //             <th>Изменить</th>
            //             <th>Удалить</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //          {entityFetched.map((user) => {
            //             return (
            //                 <tr key={user._id}>
            //                     <td>{user.title}</td>
            //                     <td>{user.field_activity
            //                     }</td>
            //                     <td><button type="button" onClick={() => setCurrentId(user._id)}>Изменить</button></td>
            //                     <td>
            //                         <button type="button" onClick={() => dispatch(deleteEntity(user._id))}>
            //                             Удалить
            //                         </button>
            //                     </td>
            //                 </tr>
            //             )
            //         })}
            //     </tbody>
            // </table>
        )
    )
}