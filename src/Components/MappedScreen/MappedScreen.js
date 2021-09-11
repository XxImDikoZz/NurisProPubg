import "../Style.css";
import React from "react";
class MappedScreen extends React.Component {
   
    render() {
        const { data, term, PlusProduct } = this.props
        return (
            <>
                <div className="mapped">
                    {data.filter((elem) => {
                        if (term === "") {
                            return elem
                        } else if (elem.description.toLowerCase().includes(term.toLowerCase())) {
                            return elem
                        }
                    }).map((v) => {
                        const { id, ...vProps } = v
                        return (
                            <div className="card">
                                <div style={{ display: v.discount === null ? 'none' : 'inline-block' }} className="discount">{v.discount === null ? '' : `${v.discount}%`}</div>
                                <div className="imgBx">
                                    <img src={v.main_image.path.original} alt="" />
                                </div>
                                <div className="contentBx">
                                    <h2>{v.title}</h2>
                                    <div className="size">
                                        <h3>ЦЕНА :</h3>
                                        <span style={{ textDecoration: v.discount === null ? 'none' : 'line-through' }} >{v.price}$</span>
                                    </div>
                                    <div style={{ display: v.discount === null ? 'none' : 'inline-block' }} className="color">
                                        <h3>СКИДКА :</h3>
                                        <span>{v.price / 100 * (100 - v.discount)}$</span>
                                    </div>
                                    <button onClick={() => PlusProduct(v.id, 1)}>В Корзину</button>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </>
        );
    }
}

export default MappedScreen;