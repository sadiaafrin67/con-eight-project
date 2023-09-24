import swal from 'sweetalert';


const Card = ({phone}) => {

    const { id, image, phone_name, brand_name, price, rating } = phone || {};

    const handleAddToFav = () => {
        console.log(phone)

        const addFavarouteArray = []

        const favarouteItem = JSON.parse(localStorage.getItem('favaroute'))

        // jokhne kono card thakbena 
        if(!favarouteItem){
           addFavarouteArray.push(phone)

           localStorage.setItem('favaroute', JSON.stringify(addFavarouteArray))
           swal("Good job!", "You successfully add it", "success");
        }
        else{


            const isExist = favarouteItem.find(phone => phone.id == id)
            
            if(!isExist){
                addFavarouteArray.push(...favarouteItem, phone)

            localStorage.setItem('favaroute', JSON.stringify(addFavarouteArray))
            swal("Good job!", "You successfully add it", "success");   
        }
        else{
            swal("Oopps!", "You already added it", "warning"); 
        }
    }

        // localStorage.setItem('test', "sadia")
    }

    return (
        <div  className="flex justify-center items-center h-screen">
          
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}

            alt="img"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>
          
          <a className="inline-block" href="#">
            <button onClick={handleAddToFav}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to favaroutes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>

        </div>
    );
};

export default Card;