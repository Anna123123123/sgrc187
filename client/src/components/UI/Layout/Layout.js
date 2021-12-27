import { DefaultLayout } from './styles'
import { MainContent } from '../MainContent/MainContent';
import { Sidebar } from '../Sidebar/Sidebar';
import { SidebarMenu } from '../Sidebar/SidebarMenu/SidebarMenu';

export const Layout = ({ children, ...rest }) => {
    return (
        <DefaultLayout>
            <Sidebar />
            <SidebarMenu />
            <MainContent>
                {children}
            </MainContent>
        </DefaultLayout>
    )
}