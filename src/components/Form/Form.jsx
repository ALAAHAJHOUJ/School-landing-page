import React, { useEffect, useRef, useState } from 'react'
import msgicon from '../../assets/msg-icon.png'
import locationIcon from '../../assets/location-icon.png'
import emailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import arrow from '../../assets/white-arrow.png'
import emailjs from '@emailjs/browser';
import './Form.css'


function Form() {
        const [state,setState]=useState("nothing")
        const [error,setError]=useState({})
        const champsNom=useRef()
        const champsTextarea=useRef()
        const champstelephone=useRef()
        const forms = useRef()


  
         //fonction finale pour l'envoi du formulaire
          const sendEmail = () => {

            setState("loading")
            emailjs
              .sendForm('service_6i6uqcr', 'template_i0iyat8',forms.current,{
                publicKey:"8kFD5uFBz3jScJZHP"
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                  setState("succes")
                },
                (error) => {
                  console.log('FAILED...', error.text);
                  setState("erreur")
                },
              );
          };






        //valider le formulaire avant l'envoi
        const valider=()=>{
            let envoyer=true
            const ExpressionTele=/^(?:\+212|0)(?:6|7)\d{8}$/
            console.log(ExpressionTele.test(champstelephone.current.value))


            if(champsNom.current.value.trim()==""){
                envoyer=false
                setError((prev)=>{return {...prev,"champsNom":"required field"}})
            }
            else {
                setError((prev)=>{return {...prev,"champsNom":undefined}})
            }
            

            if(champsTextarea.current.value.trim()==""){
                envoyer=false
                setError((prev)=>{return {...prev,"champsTextarea":"required field"}})
            }else{
                setError((prev)=>{return {...prev,"champsTextarea":undefined}})
            }


            if(champstelephone.current.value.trim()==""){
                envoyer=false
                setError((prev)=>{return {...prev,"champsTelephone":"required field"}})
            }
            else if(!ExpressionTele.test(champstelephone.current.value)) {
                setError((prev)=>{return {...prev,"champsTelephone":"Invalid Number"}})
                envoyer=false
            }
            else {
                setError((prev)=>{return {...prev,"champsTelephone":undefined}})
            }

            return envoyer
        }



        //fonction pour gerer tous (validation et envoi) cette fonction permet de tester si la validation finale est bonne
        const Envoyer=(e)=>{
          e.preventDefault()

          if(valider()==true){
              sendEmail()
          }
          else 
          {
              console.log("veuillez réssayer")
          }
        }


  
        return (
          <div className='contact'>
            <div className="contact-col">
                <h3>Send a message<img src={msgicon} alt='image de projet'></img></h3>
                <p>
                  feel free to reach out through contact form or find our contact 
                  information below.Your feedback,questions,and suggestions are 
                  important to us as we strivd to provide exceptional service
                  to our university community.
                </p>
                <ul>
                  <li><img alt='image de projet' src={emailIcon}></img>alaa.spread @gmail.com</li>
                  <li><img src={phoneIcon} alt='image de projet'></img>0619870021</li>
                  <li id='element3'><img alt='image de projet' src={locationIcon} className='image1'></img>77 Massachussets Ave ,Cambridge<br></br>MA 02139,United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form ref={forms}>
                    <label htmlFor="name">Your name</label>
                    <input name="senderEmail" ref={champsNom} type="text" id='name' placeholder='Enter your name' />
                    <span className='text-red-500 block mb-8'>{error.champsNom?error.champsNom:""}</span>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input ref={champstelephone} type="tel" id='phoneNumber' placeholder='Enter your Phone number' />
                    <span className='text-red-500 block mb-8'>{error.champsTelephone?error.champsTelephone:""}</span>
                    <label htmlFor="message">Write your message</label>
                    <textarea name="message" ref={champsTextarea} id="message" placeholder='write your message' cols={"30"} rows={"5"}></textarea>
                    <span className='text-red-500 block mb-8'>{error.champsTextarea?error.champsTextarea:""}</span>
                    <button onClick={Envoyer} type='submit' className='btn btndark'>Send<img alt='image de projet' src={arrow} className='image1'></img></button>
                </form>
                {
                state=="loading"?<span className='tester11 text-[20px] font-[600]'>Sending ...</span>:
                state=="succes"?<span className='tester11 font-[600] text-green-500 text-[20px]'>Sent with Succes</span>:
                state=="erreur"?<span className='tester11 text-[20px] text-red-600 font-[600]'>Error</span>:<></>
                }
            </div>
          </div>
  )
}


export default Form