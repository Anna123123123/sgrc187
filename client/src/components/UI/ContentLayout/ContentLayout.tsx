import { PageTitle } from '../../PageTitle/PageTitle'
import './ContentLayout.styles.scss'

export const ContentLayout: React.FC = ({ children }) => {
  return (
    <>
      <PageTitle />
      <div className='page-content-inner'>
        <div className='demo-card is-dark'>
          <div className='content'>{children}</div>
        </div>
      </div>
    </>
  )
}
