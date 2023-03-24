import 'boxicons'

const ProductsList = ({productData, selectProduct, getWarning, setShowForm}) => {
    return (
      
      <>
        {
          productData?.map( product => {
            return (               
              <div key={product.id} className="card">
                
                <div className="card__title">
                  <h2>{product?.name}</h2>
                </div>

                <div className='card__info'>
                  <p className='card__category-p'><span className='card__category'>Category:</span> {product.category}</p>
                  <p className='card__price-p'><span className='card__price'>Price:</span> ${product.price}</p>
                </div>

                <div className="card__btn-container">
                  <button className='card__btn' onClick={ () => getWarning(product)}><box-icon type='solid' name='trash' color="rgb(158, 78, 78)"></box-icon></button>
                  <button className='card__btn' onClick={ () => {
                    selectProduct(product) 
                    setShowForm(true)
                    }}><box-icon type='solid' name='edit-alt' color="rgb(138, 138, 39)"></box-icon></button>
                </div>
                
              </div>
              
            )
          })
        }
      </>
                
      
    );
};

export default ProductsList;