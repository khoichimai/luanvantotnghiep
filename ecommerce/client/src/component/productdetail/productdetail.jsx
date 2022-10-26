import React,{useState} from 'react'
import './productdetail.css'
import Select from 'react-select'
import {Divider} from '@mui/material'
const options = [
    { value: '7.5', label: '7.5' },
    { value: '8', label: '8' },
    { value: '8.5', label: '8.5' },
    { value: '9', label: '9' },
    { value: '9.5', label: '9.5' },
    { value: '10', label: '10' },
    { value: '10.5', label: '10.5' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
];
const Productdetail = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div className="productdetail_section">
            <div className="productdetail_container">
                <div className="left_productdetail">
                    <img src="./airjordan1chicagoreimagined.jpg" alt="productdetail_img" />
                    <div className="productdetail_btn">
                        <button className="productdetail_btn">Add to Cart</button>
                    </div>
                </div>
                <div className="right_productdetail">
                    <h3>Air Jordan 1 Chicago</h3>
                    <Divider/>
                    <h4>Chọn size:</h4>
                    <div className="productdetail_select">
                        <Select defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options} />
                    </div>
                    <h4>Giá:<span className="price">3500000VNG</span></h4>
                    <p className="description">Air Jordan 1 Chicago : <span>đây là đôi giày .................</span></p>
                </div>
            </div>
        </div>
    )
}

export default Productdetail