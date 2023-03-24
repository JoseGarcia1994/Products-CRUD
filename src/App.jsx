import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import ProductsList from './components/ProductsList'
import Form from './components/Form'
import Warning from './components/Warning'

function App() {

  const [allProducts, setAllProducts] = useState([])
  const [updateProduct, setUpdateProduct] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [warning, setWarning] = useState(false)
  const [ eliminateProduct, setEliminateProduct ] = useState(null)

  // Read

  useEffect(() => {
    getProducts()
    
  }, [])

  const getProducts = () => {
    axios
        .get("https://products-crud.academlo.tech/products/")
        .then( (resp) => setAllProducts(resp.data))
        .catch( error => console.error(error))
  }

  // Create

  const createProduct = (product) => {
    axios
        .post("https://products-crud.academlo.tech/products/", product)
        .then( () => getProducts())
        .catch( error => console.error(error))
  }

   // Update

   const productSelected = productData => {
    setUpdateProduct(productData)
   }

   const updatedProduct = productData => {

    axios
        .put(`https://products-crud.academlo.tech/products/${productData.id}/`, productData)
        .then( () => {
          getProducts()
          setUpdateProduct(null)
        })
        .catch( error => console.error(error))
   }


  // Delete

  const deleteProduct = eliminateProduct => {
    axios
        .delete(`https://products-crud.academlo.tech/products/${eliminateProduct.id}/`)
        .then( () => {
            getProducts()
            setWarning()
            setEliminateProduct(null)
        })
        .catch( error => console.error(error))
  }

  const getWarning = (product) => {
    setWarning(true)
    setEliminateProduct(product)
  }


  const deleteCancel = () => {
    setWarning(false)
    setEliminateProduct(null)
  }

  return (
    <div className="App">

      <div className='nav__bar'>
        <h2 className='nav__title'>Products</h2>
        <button className='nav__btn' onClick={ () => setShowForm(!showForm) }>+Add Product</button>
      </div>
      
      {
        showForm && <Form 
        addProduct ={data => createProduct(data)}
        selectedProduct={ updateProduct }
        uProduct={ data => updatedProduct(data) }
        setShowForm={setShowForm}
        /> 
      }
      
      <div className='card__container'>
        <ProductsList 
          productData={ allProducts }
          selectProduct={ (product) => productSelected(product) }
          getWarning={getWarning}
          setShowForm={setShowForm}
        /> 
      </div>

        {
          warning && <Warning 
          eliminateProduct={eliminateProduct}
          deleteCancel={deleteCancel}
          deleteProduct={deleteProduct}
          />
        }
      
    
    </div>
  )
}

export default App
