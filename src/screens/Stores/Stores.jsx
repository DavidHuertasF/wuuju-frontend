import './Stores.scss'

const Stores = ({ setActiveTab }) => {
  return (
    <div className="stores_container">
      <h1>¿Dónde venden lo que quieres?</h1>
      <p> Nuestros<span className='text-red'> {' Wuujulovers <3'}</span> suelen comprar en las siguientes tiendas.
      Selecciona una de éstas opciones para continuar</p>
      <div className='buttons_container'>

        <img src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691509392/Wuuju/coyge5hakiaypp4w4f5p.svg" alt="" />
        <div></div>
        <img src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691509392/Wuuju/pakkgthoplrdidegmhxj.svg" alt="" />
        <div></div>
        <img onClick={() => setActiveTab('link')} src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691509392/Wuuju/pcattptwnc7pbfvctfhw.svg" alt="" />
        <div></div>
        <img src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691509392/Wuuju/emastaw5m1kv1fenjrvr.svg" alt="" />
        <div></div>
        <img src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691509392/Wuuju/scnipbwwxjug3dnlsmlx.svg" alt="" />
        <div></div>
        <img src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691509392/Wuuju/rr2wvpaj7un0sgzax8se.svg" alt="" />
      </div>
      <button className='button-list'>OTRA</button>
    </div>
  )
}

export default Stores
