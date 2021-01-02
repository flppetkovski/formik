import React from 'react'
import { Formik, ErrorMessage, Field, FieldArray , Form, FormikConsumer} from "formik"
import * as Yup from "yup"
import TextError from "./TextError"
const initialValues = {
 name: "",
 email: "",
 channel: "",
 comments: "",
 address: "",
 social: {
   facebook:"",
   twitter: ""
 },
 phoneNumbers: ["",""],
 phNumbers:[""]
}
const onSubmit = values => console.log(values) 


const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  channel: Yup.string().required("Required!"),
})

function Yform() {
  

 return (
<div className="form-control">
<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}  >
   <Form >
   <div>
   <label htmlFor="name">Name</label>
   <Field type="text" name="name" id="name"  />
 <ErrorMessage name="name"  component={TextError}/>
<div className="form-control">

     <label htmlFor="name">E-mail</label>
   <Field type="email" name="email" id="email" />
    <ErrorMessage name="email">
    {errorMsg => <div className="error"> {errorMsg} </div>} 
    </ErrorMessage>
</div>
</div>
     
<div className="form-control">

<label htmlFor="name">Channel</label>
   <Field type="text" name="channel"  id="channel" />
    <ErrorMessage name="channel"/>
</div>


<div className="form-control">
<label htmlFor="comments">Comments</label>
   <Field as="textarea" name="comments"  id="comments" />
    <ErrorMessage name="channel"/>
</div>

<div className="form-control"> 
  <label htmlFor="address">Address</label>
  <Field name="address">
  {props => {
const {field, meta} = props
return (
<div>
<input id="address" type="text" {...field}/>
{meta.error && meta.touched ? <div>{meta.error}</div>: null}
</div>
)
}}
  </Field>
 </div>

<div className="form-control">
<label htmlFor="facebook">Facebook Profile</label>
   <Field type="text" name="social.facebook"  id="facebook" />
    <ErrorMessage name="social"/>
</div>


<div className="form-control">
<label htmlFor="facebook">Twitter Profile</label>
   <Field type="text" name="social.twitter"  id="twitter" />
    <ErrorMessage name="social"/>
</div>



<div className="form-control">
<label htmlFor="phonePr">Primary Phone Number</label>
   <Field type="text" name="phoneNumbers[0]"  id="phonePr" />
    <ErrorMessage name="phoneNumbers"/>
</div>

<div className="form-control">
<label htmlFor="phoneSe">Secondary Phone Number</label>
   <Field type="text" name="phoneNumbers[1]"  id="phoneSe" />
    <ErrorMessage name="phoneNumbers"/>
</div>



<div className="form-control">
<label >List of phone numbers</label>
  <FieldArray name="phNumbers">
  {(fieldArrayProps)=> {
const {push, remove, form} = fieldArrayProps
const {values} = form
const {phNumbers} = values
return (<div>
  {phNumbers.map((phNumber, index)=> (
    <div key={index}>
    <Field name={`phNumbers[${index}]`}/>
    {index > 0 &&      
    
      <button type="button" onClick={()=>{remove(index)}}> - </button>
    }
    <button type="button" onClick={()=>{push("")}}> + </button>
    </div>
    ) )}
  </div>)
  }}
  </FieldArray>
</div>


   <button type="submit" >Submit</button>
   </Form>
   </Formik>
  </div>
 )

}

export default Yform
