import Certificate from '@/components/General/Certificate';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useData } from 'store';

export default function View() {

  const [client, setclient] = useState(false)

  const {data} = useData()

  const router = useRouter()

  useEffect(() => {
    setclient(true)
  }, [])

  useEffect(() => {
    router.isReady && data == null && router.push('/certificate/all/single')
  }, [router.isReady])

  return (
    <div className='flex flex-col justify-center items-center'>
    
    {client && <PDFDownloadLink document={<Certificate />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading && 'Loading document...'
      }
    </PDFDownloadLink>}

    {client && <PDFViewer width={1700} height={1000}>
      <Certificate name={data?.[router?.query?.id[0]]?.name} prize={data?.[router?.query?.id[0]]?.['result_'+router?.query?.id[1]]} 
      dept={data?.[router?.query?.id[0]]?.dept} year={data?.[router?.query?.id[0]]?.year} event={data?.[router?.query?.id[0]]?.['event_'+router?.query?.id[1]]} 
      id={data?.[router?.query?.id[0]]?.['cert_'+router?.query?.id[1]]}/>
    </PDFViewer>}
    </div>
  )
}
