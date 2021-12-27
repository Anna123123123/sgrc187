import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { BsChevronRight } from "react-icons/bs";
import './VerticalMenu.styles.scss'

import { Link } from 'react-router-dom'

export const VerticalMenu = () => {
    return (

        <div className="vertical-menu">
            <SimpleBar style={{ height: '100%' }}>
                <div className="h-100 simplebar">
                    <div className="menu">
                        <label htmlFor="menu_bar01">Общие сведения <BsChevronRight /></label>
                        <input type="checkbox" id="menu_bar01" className="accordion" />
                        <ul id="links01">
                            <li><Link to="/overview/entity">Организация и подразделения</Link></li>
                        </ul>
                        <label htmlFor="menu_bar02">Активы <BsChevronRight /></label>
                        <input type="checkbox" id="menu_bar02" className="accordion" />
                        <ul id="links02">
                            <li><Link to="/assets/personnel">Персонал</Link></li>

                            <li><Link to="/assets/equipments">Оборудование</Link></li>

                            <li><Link to="/assets/it-assets">ИТ-активы</Link></li>

                            <li><Link to="/assets/activities">Бизнес-процессы</Link></li>
                        </ul>
                        <label htmlFor="menu_bar03">Отчеты <BsChevronRight /></label>
                        <input type="checkbox" id="menu_bar03" className="accordion" />
                        <ul id="links03">
                            <li><Link to="/workflow/process-grading">Рабочие процессы</Link></li>
                            <li><Link to="/workflow/categorization-commission">Приказ о создании комиссии</Link></li>
                        </ul>
                    </div>
                </div>
            </SimpleBar>
        </div>

    )
}