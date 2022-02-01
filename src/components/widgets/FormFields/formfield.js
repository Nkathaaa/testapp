import React from 'react'
import {useForm} from "react-hook-form"
import style from "./formfield.module.css"
import * as yup from 'yup'
import{ yupResolver } from '@hookform/resolvers/yup'
//Loop through the fields
//render field in jsx
//hannlde validation
//handle saving/posting

function FormField({fields}) {
  
  const schema=yup.object().shape({
    username:yup.string().required(),
    password:yup.string().required().min(8),

  })

  const{ register,handleSubmit, formState: { errors }}=useForm({
    resolver:yupResolver(schema),
  }) 
 const onSubmit=(data)=> console.log(data)
   
 const renderTemplate=()=>{
   let formTemplate= ''
   for( let key in fields){
     switch(fields.element){
      case ("select"):
        formTemplate=(
          <div > 
            <select name={fields.name}>
              {fields.config.options.map((item,i)=>(
                <option key={i} value={item.val}>{item.text}</option>
                 
              ))}
            

            </select>
            
          </div>
        )
       break;
        case("input"):
        formTemplate=(
            <div className=''>
              <label>{fields.label}</label>
              <input name={fields.name} />
                      
            </div>
          )
          break;
        default:
          formTemplate=null 
     }
     return formTemplate
     

  
     }
   }
   
   //return formTemplate
  

   
 
 
 return (
        <div >
           {renderTemplate()}
        
        </div>
    )

}

export default FormField
