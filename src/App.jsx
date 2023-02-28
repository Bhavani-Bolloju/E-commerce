import React, { useEffect, useState } from "react";

function App() {
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

  return (
    <div>
      {/* {data &&
        data.map((product) => (
          <div>
            <p>{product.title}</p>
            {product.images.map((item) => (
              <img src={item} />
            ))}
          </div>
        ))} */}
    </div>
  );
}

export default App;
