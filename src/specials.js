const specials = [
    {
        id: 1,
        title: 'Greek Salad',
        description: 'A fresh and healthy salad made with tomatoes, cucumbers, onions, peppers, olives, and feta cheese.',
        price: '$12.99',
        getImage: () => require('./images/greeksalad.jpg')
    },
    {
        id: 2,
        title: 'Margherita',
        description: 'A classic Italian pizza with tomato sauce, mozzarella cheese, and basil leaves.',
        price: '$14.99',
        getImage: () => require('./images/margherita.jpg')
    },
    {
        id: 3,
        title: 'Focaccia',
        description: 'An Italian flatbread with olive oil and various toppings like herbs, cheese, or vegetables.',
        price: '$10.99',
        getImage: () => require('./images/focaccia.jpg')
    },
    {
        id: 4,
        title: 'Carbonara',
        description: 'A pasta dish made with eggs, bacon, Pecorino Romano cheese, and black pepper.',
        price: '$15.99',
        getImage: () => require('./images/carbonara.jpg')
    },
    {
        id: 5,
        title: 'Bolognese',
        description: 'A meat-based sauce originating from Bologna, Italy, commonly served with pasta.',
        price: '$15.99',
        getImage: () => require('./images/bolognese.jpg')
    },
    {
        id: 6,
        title: 'Lasagna',
        description: 'A layered pasta dish made with meat sauce, cheese, and lasagna noodles.',
        price: '$14.99',
        getImage: () => require('./images/lasagna.jpg')
    },
    {
        id: 7,
        title: 'Tiramisu',
        description: 'A popular Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.',
        price: '$10.99',
        getImage: () => require('./images/tiramisu.jpg')
    },
    {
        id: 8,
        title: 'Gelato',
        description: 'An Italian ice cream made with milk, sugar, and various flavors like chocolate, strawberry, or pistachio.',
        price: '$10.99',
        getImage: () => require('./images/gelato.jpg')
    },
    {
        id: 9,
        title: 'Saganaki Feta',
        description: 'A Greek dish made with fried feta cheese, typically served with lemon juice and pita bread.',
        price: '$9.99',
        getImage: () => require('./images/saganaki.jpg')
    },
    {
        id: 10,
        title: 'Moussaka',
        description: 'A Greek casserole dish made with eggplant, ground meat, tomato sauce, and béchamel sauce.',
        price: '$12.99',
        getImage: () => require('./images/moussaka.jpg')
    }
]

export default specials;