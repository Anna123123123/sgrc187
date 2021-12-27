import axios from 'axios'
import { saveAs } from 'file-saver';
import { ContentLayout } from '../../../components/UI/ContentLayout/ContentLayout';

export const CategorizationCommission = () => {
    const state = {}
    const createAndDownloadPDF = () => {
        axios.post('categorization-commission', state)
            .then(() => axios.get('categorization-commission', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'newPdf.pdf');
            })
    }

    return (
        <ContentLayout>
            <div>
                <h1>Создать приказ комиссии</h1>
                <button onClick={createAndDownloadPDF}>Создать приказ комиссии</button>
            </div>
        </ContentLayout>
    )
}