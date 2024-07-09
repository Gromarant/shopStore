const pricePerKg = (unit, price, content) => unit === 'L' || unit === 'kg'
    ?   (price/content).toFixed(2)
    :   ((price/content) * 1000).toFixed(2);

const logoStore = (store) => store === 'Mercadona'
    ?   'https://us-tuna-sounds-images.voicemod.net/c8258e8d-bd86-472b-8050-bcf88db21f18-1694559838816.png'
    : store === 'Lidl' 
        ?   'https://www.kloepfel-engineering.com/wp-content/uploads/2018/08/Lidl-Logo-1024x1024.jpg'
    : store === 'Supeco'
        ?   'https://www.supeco.net/wp-content/uploads/2019/04/logo-carr%C3%A9.jpg'
        :   'https://th.bing.com/th/id/OIP.oe8oTZVYxRB8PfdOpq1EIgHaFj?w=1360&h=1020&rs=1&pid=ImgDetMain';

export {
    pricePerKg,
    logoStore
};