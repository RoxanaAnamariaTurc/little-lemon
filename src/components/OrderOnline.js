import { H1 } from './About';
import { appetizers, mains, desserts, drinks } from '../menu';
import styled from '@emotion/styled';
import { H3 } from './Menu';
import Basket from './Basket';
import { useState } from 'react';

const Button = styled.button`
    width: 100px;
    height: 35px;
    background-color: var(--yellow);
    color: var(--green);

    &:hover{
        background-color: var(--green);
        color:var(--yellow);
        cursor: pointer;
    }

`
export const OrderSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    background-color:  #b4bfb4;
    border-radius: 30px 30px 0 0;
    padding: 10px;

    img{
        width: 50%;
        border-radius: 10px;
    }
`

const OrderOnline = () =>
{

    const [basketItems, setBasketItems] = useState([]);

    const addItemToBasket = (item) =>
    {
        const existingItem = basketItems.find((basketItem) => basketItem.id === item.id);
        if (existingItem)
        {
            setBasketItems((prevItems) =>

                prevItems.map((basketItem) =>

                    basketItem.id === item.id ? { ...basketItem, quantity: basketItem.quantity + 1 } : basketItem
                )
            )
        } else
        {
            setBasketItems((prevItems) => [...prevItems, { ...item, quantity: 1, title: item.title }])
        }
    }

    return (
        <>
            <H1>Order Online</H1>
            <OrderSection>
                <H3>
                    Appetizers
                </H3>
                {appetizers.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <Button onClick={() => addItemToBasket(item)}>Add to order</Button>
                    </div>
                ))}
            </OrderSection>
            <OrderSection>
                <H3>Mains</H3>
                {mains.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <Button onClick={() => addItemToBasket(item)}>Add to order</Button>
                    </div>
                ))}
            </OrderSection>
            <OrderSection>
                <H3>Desserts</H3>
                {desserts.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <Button onClick={() => addItemToBasket(item)}>Add to order</Button>
                    </div>
                ))}
            </OrderSection>
            <OrderSection>
                <H3>Drinks</H3>
                {drinks.map((item) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <Button onClick={() => addItemToBasket(item)}>Add to order</Button>
                    </div>
                ))}
            </OrderSection>

            <Basket items={basketItems} />

        </>
    )
}


export default OrderOnline;