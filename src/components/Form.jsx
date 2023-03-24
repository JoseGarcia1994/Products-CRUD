import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import 'boxicons'
 

 
 const Form = ({addProduct, selectedProduct, uProduct, setShowForm }) => {

  const {register, handleSubmit, reset} = useForm()

  useEffect(() => {
    if (selectedProduct) {
      reset(selectedProduct)
    } else {
      emptyForm()
    }
  }, [selectedProduct])
  

  const submit = (data) => {
    if (selectedProduct) {
      uProduct(data)
      setShowForm(false)
    } else {
      addProduct(data)

      emptyForm()
      
    }

  }

  // Empty Form

  const emptyForm = () => {
    reset(
        {
            name: "",
            category: "",
            price: "",
            isAvailable: ""
        }
    )
  }

    return (

      <div className="form__container">
        
        <form onSubmit={handleSubmit(submit)} className="form">
       
          <div className="btn__exit-container">
            <button type="submit" className="btn__exit" onClick={ () => setShowForm(false)}><box-icon name='x' color="red"></box-icon></button>
          </div>

          <div className="input__container">
            <label htmlFor="name" className="input__title">Name:</label>
            <input type="text" id="name" className="input" {...register('name')}/>
          </div>

          <div className="input__container">
            <label htmlFor="category"  className="input__title">Category:</label>
            <input type="text" id="category" className="input" {...register('category')}/>
          </div>

          <div className="input__container">
            <label htmlFor="price"  className="input__title">Price:</label>
            <input type="text" id="price" className="input" {...register('price')}/>
          </div>

          <div className="input__container-radio"> 
            <label htmlFor="isavailable"  className="input__title">Available</label>
            <input type="checkbox" id="isavailable" className="input" {...register('isAvailable')}/>
          </div>

          <div className="btn__container">
            <button type="submit" className="btn">Add Product</button>
          </div>
          
            

        </form>
        
      </div>

      
    );
 };
 
 export default Form;