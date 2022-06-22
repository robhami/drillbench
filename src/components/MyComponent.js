import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Units Converter' },
  { value: 'strawberry', label: 'BHA entry' },
  { value: 'vanilla', label: 'Parameter entry' }
]

const MyComponent = ({xonChange}) => {
 
    return (
      <div>
        <Select 
        id="testSelect"
        isMulti
        data-value=""
        options={options} 
        onChange={xonChange}
        

        />
     </div> 
      
    )     
}

const onChange = (data) => {
  console.log("Here is some data: ", data)
  Select.value=data
  console.log(Select)
}



export default MyComponent ; 
