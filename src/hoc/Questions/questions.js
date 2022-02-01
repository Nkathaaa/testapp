import {Container,Row,Col,Dropdown,DropdownButton} from "react-bootstrap";
import React, { useState } from 'react';
import style from "./questions.module.css"
export default function Questions(){
const questions=[
    {
        question:"What is the largest continent in terms of land mass?",
        possibleAnswers:[
            {answerInfo:"Africa",isCorrect:false},
            {answerInfo:"Asia",isCorrect:true},
            {answerInfo:"Europe",isCorrect:false},
            {answerInfo:"North America",isCorrect:false},
        ]
    },
    {
        question:"What is the largest continent in terms of population?",
        possibleAnswers:[
            {answerInfo:"Africa",isCorrect:false},
            {answerInfo:"Asia",isCorrect:true},
            {answerInfo:"Europe",isCorrect:false},
            {answerInfo:"North America",isCorrect:false},
        ]
    },
    {
        question:"What is the largest continent in terms of population?",
        possibleAnswers:[
            {answerInfo:"Africa",isCorrect:false},
            {answerInfo:"Asia",isCorrect:true},
            {answerInfo:"Europe",isCorrect:false},
            {answerInfo:"North America",isCorrect:false},
        ]
    }

]

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
//state of present question 
const[presentQuestion,setPresentQuestion]=useState(0)

const[score,setScore]=useState(0)

const[showScore,setShowScore]=useState(false)
    
const handleActionOnSelect=(isCorrect)=>{
    if(isCorrect){
        setScore(score+1)
    }
    let nextQuestion=presentQuestion+1
    if(nextQuestion<questions.length){
        setPresentQuestion(nextQuestion)
    }else{
        setShowScore(true)
    }


}
return (
  <div>
     
 <div className={style.signIn}>
     <div class="container-fluid h-75">       
            <Row>   
                
                    

                    <Col md={12}>
               
                    

                        <div>
                            {showScore ? (<div class="mt-5 text-center h3">
                                
                               <p className="h2 text-center"> <strong>Thanks Name </strong></p>
                                <p>You responded correctly to {score} out of {questions.length} questions</p>
                                </div>):(
                                <div className="text-center"> 
                                    <span>{presentQuestion+1}/{questions.length}</span>
                                    <div class="mt-5  h2"><strong>{questions[presentQuestion].question}</strong></div>
                                    {questions[presentQuestion].possibleAnswers.map((answer)=>(
                                    <button class="btn btn-light text-dark btn-lg m-5" onClick={()=>handleActionOnSelect(answer.isCorrect)}>{answer.answerInfo}</button>
                                    ))}
                                
                                 </div>
                            )}
                        </div>
                    
              
              
                     
                      

             
                    </Col>
            
            </Row>
      

        </div>
      </div>
      </div>
   
)

}