import {useState} from 'react';
import Form from '../components/Form.tsx';
import DataPresentation from '../components/DataPresentation.tsx';
import Header from '../components/Header.tsx';
import useForm from '../hooks/useForm.ts';

const Home = () => {
  const {formState, handleFormChange, calculate} = useForm()
  
  const [message, setMessage] = useState<string>('');
  
  
  return (
      <>
        <div className="container mt-20 mx-auto">
          <Header />
          <div className='md:flex mt-10'>
          <Form formState={formState} handleFormChange={handleFormChange} calculate={calculate}/>
          <DataPresentation message={message}/>
          </div>
        </div>
      </>
  )
}
export default Home
