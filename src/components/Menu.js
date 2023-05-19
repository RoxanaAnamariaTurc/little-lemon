import { H1 } from "./About";
import styled from '@emotion/styled';
import { appetizers, mains, desserts, drinks } from "../menu";
import food from '../images/food.jpg';
import drink from '../images/drink.jpg';


const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 10px;

    img{
        grid-column: 1 / 4;
        width: 100%;
        height: 30rem;
        box-shadow: 5px 7px var(--yellow);
        object-fit: cover;
    }
`
const DrinksSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column: 1/4;
    background-color:  #b4bfb4;
    border-radius: 30px 30px 0 0;
    padding: 10px;

     div{
        border-radius: 10px;
    }
`

const FoodSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color:  #b4bfb4;
    border-radius: 30px 30px 0 0;
    padding: 10px;

    div{
        border-radius: 10px;
    }

`

const H3 = styled.h3`
    grid-column: 1 / -1;
    background-color: #b4bfb4;
`

const Menu = () =>
{

    return (
        <>
            <H1>Menu</H1>
            <hr />
            <Main>
                <img src={food} alt='food-banner' />
                <FoodSection>
                    <H3>Appetizers</H3>
                    {appetizers.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </FoodSection>
                <FoodSection>
                    <H3>Mains</H3>
                    {mains.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    ))}

                </FoodSection>
                <FoodSection>
                    <H3>Desserts</H3>
                    {desserts.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    ))}

                </FoodSection>
                <img src={drink} alt='drinks-banner' />
                <DrinksSection>
                    <H3>Drinks</H3>
                    {drinks.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </DrinksSection>
            </Main>
        </>
    )
}


export default Menu;