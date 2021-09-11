import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import VanillaTilt from 'vanilla-tilt';
class Basket extends React.Component {
    render() {
        const { basket, onStepProduct, onDeleteProduct } = this.props;
        return (
            <div className="new">
                {basket.map((v) => {
                    return <div>
                        <div className="card">
                            <div className="imgBx">
                                <img src={v.main_image.path.original} alt="" />
                            </div>
                            <div className="contentBx">
                                <h2>{v.description}</h2>
                                <button onClick={onStepProduct(v.id, -1)}>-</button>
                                <span>{v.count}</span>
                                <button onClick={onStepProduct(v.id, 1)}>+</button>
                            </div>
                        </div>
                        <div>{v.total}сом</div>
                        <div onClick={onDeleteProduct(v.id)}>Убрать</div>
                    </div >
                })}
            </div>
        )
    }
}
export default Basket;