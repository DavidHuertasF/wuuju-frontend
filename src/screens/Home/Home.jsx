import './Home.scss'

const Home = ({ setActiveTab }) => {
  console.log(setActiveTab)
  return (
    <div className="home_container">
      <div className='banner_container'>
         <img
        src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691507793/Wuuju/jkjtlegwp3cnlkcp8qyl.png"
        alt=""
      />
       <img
        src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691507254/Wuuju/jgbbregmbjvpexgjlnlp.svg"
        alt=""
      /></div>

      <p></p>{' '}
      <p className='text-big'>
        Aquí podrás calcular fácilmente tus compras y envíos. Gracias por hacer
        Wuuju posible.<span className="text-red">{' TE LLEVAMOS AQUÍ <3'}</span>
      </p>
      <button onClick={() => setActiveTab('stores')}>EMPEZAR</button>
    </div>
  )
}

export default Home
