import {useState, ChangeEvent} from 'react';

export type TformState = {
  bill: string
  dateFrom: Date | string
  dateTo: Date | string
  total: number
  dueDate: Date | string
  peopleP1: number
  peopleP2: number
  peopleP3: number
  personInChargeP2: string
  streetLevelRetail: number
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
    streetLevelRetail: 0,
    total: 0
  }
  const [formState, setFormState] = useState<TformState>(initialState);
  
  const dates = ['dateFrom', 'dateTo', 'dueDate']
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
  
  return {
    formState,
    handleFormChange
  }
}
export default UseForm
