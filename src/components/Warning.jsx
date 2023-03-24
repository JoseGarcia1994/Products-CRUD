import axios from "axios";


const Warning = ({eliminateProduct, deleteCancel, deleteProduct}) => {

    

    return (
        <div className="warning__container">
          <div className="warning">
						<h2 className="warning__title">Are you sure you want to delete? <br/>{eliminateProduct?.name}</h2>
            <button className="warning__btn" type="submit" onClick={ () => deleteProduct(eliminateProduct)}>Delete</button>
            <button className="warning__btn" type="submit" onClick={ () => deleteCancel()}>Cancel</button>
          </div>
        </div>
    );
};

export default Warning;