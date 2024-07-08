import EditBtn from "./EditBtn";
import LabelAmount from "./LabelAmount";
import Logo from "./Logo";

function BillCard({data}) {
    const { logoUrl, store, date, amountData} = data;
    const { title, amount, currency, unit } = amountData;

    return(
        <>
            <article className='billCard'>
                <Logo img={logoUrl}/>
                <h1>{store}</h1>
                <p>{date}</p>
                <LabelAmount data={{title, amount, currency,  unit}}/>
                <EditBtn/>
            </article>
        </>
    )
};

export default BillCard;