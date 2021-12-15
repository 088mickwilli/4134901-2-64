import React,{ useState,useEffect } from "react";

function Hook() {
    const [color, setColor] = useState("red");
    const [count, SetCount] = useState(0);
    const [multi, SetMulti] = useState(1);
    const [car, setCar] = useState({
        brand: "Mazda",
        year: "2021",
        color: "red",
    });
    
const updateCarColor = ()=>{
    setCar((preState)=>{
        return { preState,color:"green"}
    });
};

useEffect(() => {
    document.title = `change Stage ${count} : ${color}`;
    // setTimeout(()=> {
    SetMulti(()=> count * 2);
    // },1000);
},[count]);

    return (
    <>
    <p>Color is {color}</p>
    <button onClick={() => SetCount("blue")}>Change</button>

    <p>Count is {count}</p>
    <p>multi of count is {multi}</p>
    <button onClick={() => SetCount(count + 1)}>Inc</button>

    <p>{car.brand} Car Color is {car.color}</p>
    <button onClick={updateCarColor}>Color</button>
    </>
    );
}

export default Hook;