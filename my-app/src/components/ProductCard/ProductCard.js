import React, { useRef, useState} from 'react';
import './ProductCard.css';

const ProductCard = ({mainPhoto, productPrice}) => {

    const color = useRef(null);
    const amount = useRef(null);
    const scalesBtn = useRef(null);

    const [isDropDownShown, changeIsDropDownShown] = useState(false);
    const [isTickShown, setIsTickShown] = useState(false);
    const [radioSelected1, setRadioSelected1] = useState(true);
    const [radioSelected2, setRadioSelected2] = useState(false);
    const [radioSelected3, setRadioSelected3] = useState(false);

    const [shownPrice, recountShownPrice] = useState(productPrice);

    let showTick = () => {
        setIsTickShown(true);

        setTimeout(setIsTickShown, 1000, false);
    };

    let toggleDropdownMenu = () => {
        changeIsDropDownShown(!isDropDownShown);
    };

    let setProductColorTo = (colorName) => {
        color.current.innerText = colorName;
    };

    let decrementAmount = () => {
        if (amount.current.innerText === '1') {
            amount.current.innerText = 1;
        } else {
            amount.current.innerText = +amount.current.innerText - 1;
            recountShownPrice(+amount.current.innerText * productPrice);
        }
    };

    let incrementAmount = () => {
        amount.current.innerText = +amount.current.innerText + 1;
        recountShownPrice(+amount.current.innerText * productPrice);
    };

    let setProductVolumeTo = (volumeMultiplier) => {
        const currentPrice = +amount.current.innerText * productPrice;
        recountShownPrice(volumeMultiplier * currentPrice);

        switch (volumeMultiplier) {
            case 1:
                setRadioSelected1(true);
                setRadioSelected2(false);
                setRadioSelected3(false);
                break;
            case 2:
                setRadioSelected1(false);
                setRadioSelected2(true);
                setRadioSelected3(false);
                break;
            case 3:
                setRadioSelected1(false);
                setRadioSelected2(false);
                setRadioSelected3(true);
                break;
            default:
                setRadioSelected1(true);
                setRadioSelected2(false);
                setRadioSelected3(false);
        }

    };

    let closeSelect = () => {
        changeIsDropDownShown(false);
    };

    return (
        <div className='card' onMouseLeave={closeSelect}>
            <div className='card__header'>

                <div className='card__freshness'>
                    NEW
                </div>

                <div className='wrapper'>
                    <img src={mainPhoto} alt="Product" className='card__pic'/>
                </div>

                <div ref={scalesBtn} onClick={showTick} className={`card__scales ${isTickShown ? 'card__click' : ''}`}>

                </div>

            </div>

            <div className='card__middle'>

                <p className='card__caption'>
                    Шампунь
                </p>

                <span className='card__info'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </span>

            </div>

            <div className='card__select'>

                <div onClick={toggleDropdownMenu} className='card__list'>
                    <span ref={color} className='item'>Цвет</span><img src='img/arrDown.png' alt='arrow' className='arrow-down' />
                    <div className={`card__dropdown ${isDropDownShown ? '' : 'dn'} `}>
                        <span onClick={setProductColorTo.bind(this, 'Желтый')} className='item-l'>Желтый</span>
                        <span onClick={setProductColorTo.bind(this, 'Красный')} className='item-l'>Красный</span>
                        <span onClick={setProductColorTo.bind(this, 'Зеленый')} className='item-l'>Зеленый</span>
                    </div>
                </div>


                <p className='card__price'>
                    <span>{shownPrice}</span> грн
                </p>

            </div>

            <div className='card__volume'>

                <div onClick={setProductVolumeTo.bind(this, 1)} className='radio'>

                    <div className={`mark ${radioSelected1 ? 'mark-checked' : ''}`}>
                    </div>
                    <span className='radio-caption'>
                        100 мл
                    </span>

                </div>

                <div onClick={setProductVolumeTo.bind(this, 2)} className='radio'>

                    <div className={`mark ${radioSelected2 ? 'mark-checked' : ''}`}>
                    </div>
                    <span className='radio-caption'>
                        200 мл
                    </span>

                </div>

                <div onClick={setProductVolumeTo.bind(this, 3)} className='radio'>

                    <div className={`mark ${radioSelected3 ? 'mark-checked' : ''}`}>
                    </div>
                    <span className='radio-caption'>
                        300 мл
                    </span>

                </div>

            </div>

            <div className='card__footer'>

                <div className='card__amount'>
                    <button onClick={decrementAmount} className='plus-btn'>-</button>
                    <span ref={amount} className='amount'>1</span>
                    <button onClick={incrementAmount} className='minus-btn'>+</button>
                </div>

                <button className='card__buy'>КУПИТЬ</button>

            </div>

        </div>
    );
};

export default ProductCard;