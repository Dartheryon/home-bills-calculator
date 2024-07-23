import {useState, ChangeEvent, FormEvent} from 'react';

export type TformState = {
  bill: string
  dateFrom: Date | string
  dateTo: Date | string
  dueDate: Date | string
  peopleP1: number
  peopleP2: number
  peopleP3: number
  personInChargeP2: string
  streetLevelRetail: number
  total: number
}


const UseForm = () => {
  const initialState: TformState = {
    bill: '',
    dateFrom:'',
    dateTo:'',
    dueDate:'',
    peopleP1: 2,
    peopleP2: 4,
    peopleP3: 1,
    personInChargeP2: 'Don Jorge',
    streetLevelRetail: 150000,
    total: 0
  }
  const [formState, setFormState] = useState<TformState>(initialState);
  const dates = ['dateFrom', 'dateTo', 'dueDate']
  
  const validateErrors = () => {
    
  }
  
  const handleFormChange = (e:ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    let newValue:Date | string = value
    let newDate: Date
    
    if(dates.includes(name)){
      newDate = new Date(value)
      newValue = newDate
    }
    
    setFormState({
      ...formState,
      [name]: newValue
    })
  }
  
  const calculate = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    validateErrors()
  }
  
  
  return {
    formState,
    handleFormChange,
    calculate
  }
}
export default UseForm
