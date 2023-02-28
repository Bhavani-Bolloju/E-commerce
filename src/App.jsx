import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/section/HeroSection";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <HeroSection />
      </main>
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
