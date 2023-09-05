import React,{useState} from "react";
import { users } from "./mock";



const  App2 =()=> {

   const [data,setData] = useState(users);
   const [search,setSearch]=useState("");
   const [select,setSelect]=useState("");
  const [values,setValues]=useState({
    name: "",
    status:""
  })

  //getting multiple input values
  const onChange=(e)=>{
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
  };

  //search
  const onSearch = (e)=>{
    const filtered = users.filter((value)=>`${value[search]}`.toLowerCase().includes(e.target.value.toLowerCase()));
    setData(filtered);
  }

  //search by category
  const onSelect =(e)=>{
    setSearch(e.target.value);
  };

  //delete
  const onDelete =(ids)=>{
    const filtered = data.filter((value)=>value.id!==ids);
    setData(filtered);
  }

  //create
  const onCreate =()=>{
    const newData=[
      ...data,
      {
        id: data.length+1,
        name: values.name,
        status: values.status,
      }
      
    ]
    setData(newData)
  };

  //update
  const onUpdate=({id,name,status},isSave)=>{
    if(isSave){
      setSelect(null)
    }else{
      setValues({
        name: name,
        status:status
      })
      setSelect({id,name,status})
    }
    
  }

        return (
          <div>
            <select onChange={onSelect} >
              <option value='id' >id</option>
              <option value='name' >name</option>
              <option value='status' >status</option>
            </select>
            <input onChange={onSearch} type="text" placeholder="search..." />
            <br/>
            {/* <input name="name" onChange={onChange} type="text" placeholder="Your name..."/>
            <input name="status" onChange={onChange} type="text" placeholder="Your status..."/>
            <button onClick={onCreate}>Create</button> */}

            <table border={1} width='70%'>
              <thead>
                <tr key='id' >
                  <th>Id</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(({id,name,status})=>{
                    return (
                      <tr>
                        <td>{id}</td>
                        <td>
                          {
                            select?.id===id?<input value={values.name} name="name" onChange={onChange} type="text"/>:name
                          }
                        </td>
                        <td>
                          {
                            select?.id===id?<input value={values.status} name="status" onChange={onChange} type="text"/>:status
                          }
                        </td>
                        <td>
                          <button onClick={()=>onDelete(id)} >delete</button>
                          <button onClick={()=>onUpdate({id,name,status},select?.id===id)} >
                            {select?.id===id? 'save':'edit'}
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
           </div>
        )
    }
export default App2
