import PhoneCard from "../PhoneCard/PhoneCard";


const Phones = ({phones}) => {
    
    // console.log(Phones)
    return (
        <div>
           <h2 className="text-2xl text-center py-7">All Categories Phones</h2> 

           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10">
            {
                phones?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
            }
           </div>
        </div>
    );
};

export default Phones;