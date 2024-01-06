import './App.css';
import Home from './components/Home';

function App() {

  const cardData = [
    {
      name: "Nike",
      price: "5000",
      des: "Reference site about Lorem Ipsum, giving information on its origins",
      imgUrl: "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-6-300x300.png"
    },
    {
      name: "Puma",
      price: "6000",
      des: "Reference site about Lorem Ipsum, giving information on its origins",
      imgUrl: "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-14-300x300.png"
    },
    {
      name: "adddis",
      price: "7000",
      des: "Reference site about Lorem Ipsum, giving information on its origins",
      imgUrl: "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-12-300x300.png"
    },
    {
      name: "jordan",
      price: "3000",
      des: "Reference site about Lorem Ipsum, giving information on its origins",
      imgUrl: "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com_-300x300.png"
    },

    {
      name: "jordan",
      price: "3000",
      des: "Reference site about Lorem Ipsum, giving information on its origins",
      imgUrl: "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com_-300x300.png"
    }



  ]
  return (
    <>
      <div className='flex flex-wrap gap-4 justify-center mt-20'>
        {
          cardData.map((item, i) => (
            <Home allinfo={item} key={i} />
          ))
        }
      </div>
    </>
  );
}

export default App
