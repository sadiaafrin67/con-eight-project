import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const Phone = () => {
  const [phone, setPhone] = useState({});

  const { id } = useParams();

//   console.log('id diye aschiii',id)

  const phones = useLoaderData();

//    console.log('phones diye aschi',phones)
  useEffect(() => {
    const findPhone = phones?.find((phone) => (phone.id === id));

    setPhone(findPhone);

  }, [id, phones]);

//   console.log('hook phone diye aschi' ,phone);

  return (
    <div>
      <Card phone={phone}></Card>
    </div>
  );
};

export default Phone;
