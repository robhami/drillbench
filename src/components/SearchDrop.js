import React, {Component} from 'react'
import Select from 'react-select'

class SearchDrop extends Component {
 render() {
    const {widgets, onChange} = this.props
 
       return (
            <div>
              <Selectlist widgets={widgets} />
              <Selectlist2 widgets={widgets} onChange={onChange}/>
           </div>      
        )     
  }    
}

const Selectlist = (props) => {
  const ddvalues=props.widgets.map((drop,i)=>{
    return (
      <option key={i}>{drop.name}</option>
     ) 
  }) 

  return (

    <select>{ddvalues}</select>
    )
}

const Selectlist2 = (props) => {
  const onChange=props.onChange
  const ddvalues2=props.widgets.map((x) => (
       {       
        value: x.name,
        label: x.name,
        id: x.id
       } 

    ));
 console.log(ddvalues2)
  return (
    <Select 
        id="testSelect"
        isMulti
        data-value=""
        options={ddvalues2} 
        onChange={onChange}
        />
    )
}




export default SearchDrop ; 
