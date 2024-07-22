
export type TFormState = {
  bill: String
  dateFrom: String
  dateTo: String
  total: number
  dueDate: String
  peopleP1: number
  peopleP2: number
  peopleP3: number
  personInChargeP2: String
  streetLevelRetail: number
}

export type TFormAction = {
  type: "waterBill",
  payload:
}
export const formReducer = (
    state: TFormState,
    action
) => {

  if(action.type === )
}