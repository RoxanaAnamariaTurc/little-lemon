import banner from '../images/banner.jpg';
import styled from '@emotion/styled';
import history from '../images/history.jpg';
import farm from '../images/farm.jpg';

const Img = styled.img`
width: 100%;
height: 35rem;
box-shadow: 5px 7px var(--yellow);
border-radius: 35px;
margin: 0;
object-fit: cover;
`

const P = styled.section`
    background-color: #b4bfb4;
    width: 100%;
    margin: auto;
    padding: 5px;
    text-align:center;
    font-family: var(--p);
    font-size: var(--p-size);
    color: var(--green);
    line-height: 2.5rem;
    font-weight: var(--p-weight);
`

const Section = styled.section`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    line-height: 2rem;
    background-color: #b4bfb4;
    column-gap: 10px;
    padding: 10px;


    article {
    display: grid;
    grid-template-rows: auto auto;
    border-radius: 15px;
    padding: 0.5rem;
    margin: 10px;
}

    h3{
        grid-row: 1;
        color: var(--green);
        text-align:center;
        font-family: var(--subheading);
        font-size: var(--p-size);
    }
 img{
        float:left;
        width: 360px;
        margin-right: 20px;
        margin-bottom: 10px;
        border-radius: 25px;
        box-shadow: 5px 7px var(--yellow);
    }

p{
  text-align: left;
  overflow: hidden;
}

 ::after {
    content: "";
    display: table;
    clear: both;
  }

`

export const H1 = styled.h1`
    color: var(--green);
    text-align: center;
    font-family: var(--subheading);
    font-size: var(--heading-size);
`

const About = () =>
{
    return (
        <>
            <H1>About us</H1>
            <section>
                <Img src={banner} alt="Mediterranean outdoors sitting" />
            </section>
            <section>
                <P>Welcome to Little Lemon Restaurant, where culinary excellence meets warm hospitality. Our cozy establishment is dedicated to serving exceptional dishes crafted with love and passion. Discover a delightful fusion of flavors, cozy ambiance, and attentive service that make dining with us an unforgettable experience.</P>
            </section>
            <Section>
                <article>
                    <h3>History and Background</h3>
                    <img src={history} alt="greek temple" />
                    <p>Little Lemon Restaurant was founded in 2010 by Chef John Doe with a vision to bring a unique dining experience to our community. What started as a humble neighborhood eatery has grown into a beloved culinary destination renowned for its innovative dishes and welcoming atmosphere. Over the years, we have built a loyal following of food enthusiasts who appreciate our commitment to quality and creativity.</p>
                </article>
                <article>
                    <h3>Culinary Philosophy</h3>
                    <img src={farm} alt="olive trees" />
                    <p>At Little Lemon Restaurant, we believe in the power of fresh, locally sourced ingredients. Our culinary philosophy revolves around creating dishes that showcase vibrant flavors while maintaining a balance between tradition and innovation. We take pride in meticulously crafting each plate, infusing it with a touch of creativity and a pinch of passion. From farm-to-table goodness to enticing flavor combinations, our menu is designed to delight and surprise your taste buds.</p>
                </article>
            </Section>

        </>
    )
}


export default About;