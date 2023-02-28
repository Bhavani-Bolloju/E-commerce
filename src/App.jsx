import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;

// const [data, setData] = useState(null);

// useEffect(() => {
//   const fakeData = async function () {
//     const res = await fetch(
//       "https://dummyjson.com/products/category/groceries"
//     );

//     const data = await res.json();
//     setData(data.products);
//   };

//   fakeData();
// }, []);

// console.log(data);
