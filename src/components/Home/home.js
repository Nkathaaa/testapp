import {useState} from 'react';
import FormField from '../widgets/FormFields/formfield';
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import{ yupResolver } from '@hookform/resolvers/yup'
import style from "./style.module.css"
import { Link } from 'react-router-dom';
import {Container,Row,Col,Dropdown,DropdownButton} from "react-bootstrap";
import Questions from '../../hoc/Questions/questions';




function Home() {

	
    const[fields,setFields]=useState({
        formdata:{
            name:{
                name:"name",
                label:"Enter Your Name",
                 type:"text",
                 element:"input"
  
              
            },
              
         email:{
                name:"username",
                label:"Enter email",
                type:"text",
                element:"input"
                 
                },
         test:{
                    element:"select",
                    name:"selectTest",
                    label:"Select test",
                    config:{
                        options:[
                    
                            {val:'test1',text:'Test1'},
                            {val:'test2',text:'Test2'},
                            {val:'test3',text:'Test3'},
                        ]
                    }
                }
              
            }
           
    })
  
    return (
     <div>
         
     <div className={style.signIn}>
         <div class="container-fluid h-75">       
                       
                            <h2 className="text-center mt-5"><strong>Technical Task</strong></h2>
                                     
                              <div className="">
                                 <div className='text-center mt-5'>    
                                     <FormField fields={fields.formdata.name}/>
                                  </div>   
                
                                     <div className='text-center mt-5'>
                                     <FormField fields={fields.formdata.test}/>
                                     </div>
                                     <div className="text-center mt-5">
                                   
                                   
                                    <Link to="/Questions">Start</Link>
                              </div>

                        
                            </div>
                    
    
            </div>
          </div>
          </div>
       
    )
}

export default Home
