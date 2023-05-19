import styled from "@emotion/styled";
import { H3 } from "./Menu";

const BasketTable = styled.table`
    border-collapse:collapse;
    width: 100%;

   td , th{
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
   }

`

const Basket = ({ items }) =>
{



    const handleTotal = () =>
    {
        let total = 0;
        items.forEach((item) =>
        {
            total += parseFloat(item.price.slice(1)) * item.quantity
        });
        return total.toFixed(2)
    }

    return (
        <>
            <H3>Your order</H3>
            <BasketTable>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </BasketTable>
            <section>

                <h4 style={{ textAlign: 'right' }}>Total price: ${handleTotal()}</h4>
            </section>
        </>
    )
}

export default Basket;