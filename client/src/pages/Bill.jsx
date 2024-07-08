import DropDown from "../atomComponents/DropDown";
import BillCard from "../atomComponents/BillCard";


const bills = [
    {
        id: 'Supeco',
        logoUrl: 'https://www.supeco.net/wp-content/uploads/2019/04/logo-carr%C3%A9.jpg',
        store: 'Supeco', 
        date: '7/2/2024',
        amountData: {
            title: 'total paid: ', 
            amount: 13.47, 
            currency: '€', 
            unit: 'kg'
        }
    },
    {
        id: 'Lidl',
        logoUrl: 'https://www.kloepfel-engineering.com/wp-content/uploads/2018/08/Lidl-Logo-1024x1024.jpg',
        store: 'Lidl', 
        date: '6/28/2024',
        amountData: {
            title: 'total paid: ', 
            amount: 10.25, 
            currency: '€', 
            unit: 'kg'
        }
    },
    {
        id: 'Mercadona',
        logoUrl: 'https://us-tuna-sounds-images.voicemod.net/c8258e8d-bd86-472b-8050-bcf88db21f18-1694559838816.png',
        store: 'Mercadona', 
        date: '6/28/2024',
        amountData: {
            title: 'total paid: ', 
            amount: 19.71, 
            currency: '€', 
            unit: 'kg'
        }
    },
]

function Bill() {
    return(
        <section className='bill'>
            <DropDown content={{ label:'All bills', length: bills.length, cards: bills?.map(bill => <BillCard data={bill} key={bill.id}/>) }}/>
            <DropDown content={{ label:'Supeco', length: 0 }}/>
            <DropDown content={{ label:'Lidl', length: 0 }}/>
            <DropDown content={{ label:'Mercadona', length: 0 }}/>
        </section>
    )
};

export default Bill;
