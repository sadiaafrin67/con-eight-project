import { useEffect, useState } from "react";

import FavarouteCard from "./FavarouteCard";


const Favaroutes = () => {

    const [favaroute, setFavaroute] = useState([])
    const [noData, setNoData] = useState('')
    const [isShow, setIsShow] = useState(false)
    const [toalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const favarouteItem = JSON.parse(localStorage.getItem('favaroute'))
        
        if(favarouteItem){
            setFavaroute(favarouteItem)

            const total = favarouteItem.reduce((preValue, currentValue) =>  preValue + currentValue.price, 0)
            // console.log(total)
            setTotalPrice(total)
        }
        else{
            setNoData('No Data Found')
        }

    }, [])

    const handleRemove = () => {
        localStorage.clear()
        setFavaroute([])
        setNoData('No Data Found')
    }

    // console.log('fav diye aslmmm',favaroute)
    console.log(isShow)

    return (
        <div>
            {
               noData ? <p className="flex justify-center items-center h-[80vh]">{noData}</p> 
               : 
               <div>

                {favaroute.length > 0 && (
                    <div>
                        <button onClick={() => handleRemove()} className="px-5 bg-green-200 block mx-auto my-6">Delete All Favaroute</button>

                        <h1 className=" flex items-center justify-center mx-auto py-6 text-2xl">Total Price: {toalPrice.toFixed(2)}</h1>
                    </div>
                )}

                <div  className="grid grid-cols-2 gap-5">
                  
                {
                    isShow ? favaroute.map(phone => <FavarouteCard key={phone.id} phone={phone}></FavarouteCard>)
                     : 
                     favaroute.slice(0, 2).map(phone => <FavarouteCard key={phone.id} phone={phone}></FavarouteCard>)    
                    }

                </div>

                {
                    favaroute.length > 2 && <button onClick={() => setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto my-6">{isShow ? 'Show Less' : 'Show More'}</button>
                }
               </div>
            }
        </div>
    );
};

export default Favaroutes;