import {ChangeEvent, FormEvent} from 'react';
import {TformState} from '../hooks/useForm.ts';

type TFormProps = {
  formState: TformState,
  handleFormChange: (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => void,
  calculate: (e: FormEvent<HTMLFormElement>) => void
}

const Form = ({
                formState,
                handleFormChange,
                calculate,
              }: TFormProps) => {
  
  return (
      <div className="md:w-1/2 mx-5">
        <form className="flex flex-col" onSubmit={calculate}>
          <label htmlFor="bills">
            Servicio público
          </label>
          <select
              name="bill"
              id="bill"
              className=" border-1 border-cyan-900"
              value={formState.bill}
              onChange={handleFormChange}
          >
            <option>-- Selecciona una opción --</option>
            f
            <option value="energy">Energía</option>
            <option value="water">Acueducto</option>
          </select>
          
          <label htmlFor="dateFrom">
            Período facturado desde:
          </label>
          <input
              className=" border-1 border-cyan-900 bg-emerald-50"
              type="date"
              name="dateFrom"
              id="dateFrom"
              onChange={handleFormChange}
          />
          
          <label htmlFor="dateTo">
            Período facturado hasta:
          </label>
          <input
              className=" border-1 border-cyan-900 bg-emerald-50"
              type="date"
              name="dateTo"
              id="dateTo"
              onChange={handleFormChange}
          />
          
          <label htmlFor="total">
            Total a pagar:
          </label>
          <input
              className=" border-1 border-cyan-900 bg-emerald-50"
              type="number"
              name="total"
              id="total"
              value={formState.total.toString()}
              onChange={handleFormChange}
          />
          <label htmlFor="dueDate">
            Fecha de vencimiento:
          </label>
          <input
              className=" border-1 border-cyan-900 bg-emerald-50"
              type="date"
              name="dueDate"
              id="dueDate"
              onChange={handleFormChange}
          />
          
          <label htmlFor="peopleP1">
            Personas en el piso 1:
          </label>
          <input
              className=" border-1 border-cyan-900 bg-emerald-50"
              type="number"
              name="peopleP1"
              id="peopleP1"
              value={formState.peopleP1.toString()}
              onChange={handleFormChange}
          />
          
          <label htmlFor="peopleP2">
            Personas en el piso 2:
          </label>
          <input
              className=" border-1 border-cyan-900 bg-emerald-50"
              type="number"
              name="peopleP2"
              id="peopleP2"
              value={formState.peopleP2.toString()}
              onChange={handleFormChange}
          />
          
          <label htmlFor="peopleP3">
            Personas en el piso 3:
          </label>
          <input
              className=" border-1 border-cyan-900 bg-emerald-50"
              type="number"
              name="peopleP3"
              id="peopleP3"
              value={formState.peopleP3.toString()}
              onChange={handleFormChange}
          />
          
          <label htmlFor="personInChargeP2">
            Encargado del piso 2:
          </label>
          <input
              className=" border-1 border-cyan-900 bg-emerald-50"
              type="text"
              name="personInChargeP2"
              id="personInChargeP2"
              value={formState.personInChargeP2}
              onChange={handleFormChange}
          />
          
          <label htmlFor="streetLevelRetail">
            Pago de agua del local:
          </label>
          <input
              className=" border-1 border-cyan-900 bg-emerald-50"
              type="number"
              name="streetLevelRetail"
              id="streetLevelRetail"
              value={formState.streetLevelRetail}
              onChange={handleFormChange}
          />
          
          <input type="submit" value="Calcular"/>
        </form>
      </div>
  )
}
export default Form
