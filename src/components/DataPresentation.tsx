
type TDataPresentationProps = {
  message: string
}

const DataPresentation = ({message}:TDataPresentationProps) => {
  return (
      <div className='flex flex-col'>
        DataPresentation
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores assumenda commodi, dolores doloribus earum eligendi error ex, hic inventore ipsam labore libero possimus quisquam quos vel voluptates. Animi, dicta?
        </p>
      </div>
  )
}
export default DataPresentation
