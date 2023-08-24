import QuotationInfo from '../QuotationInfo/QuotationInfo'
import './Quotation.scss'
import { useState } from 'react'

const Quotation = ({ data, setActiveTab, setData }) => {
  const [count, setcount] = useState(1)
  const [loading, setLoading] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false)

  function refreshPage () {
    window.location.reload(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const increment = () => {
    if (count === 5) return
    setcount(count + 1)
  }

  const decrement = () => {
    if (count === 1) return
    setcount(count - 1)
  }

  const getData = async (url) => {
    const apiData =
      'http://ec2-18-216-251-47.us-east-2.compute.amazonaws.com:8000/update_shipping_rates/?'
    const apiDataUrl = `${apiData}product_id=${data.id}&count=${count}`
    // Function to make the API call
    const fetchData = async () => {
      setLoading(true)
      // setError(null)
      let responseAditionalData
      try {
        console.log(apiDataUrl)
        const responseAditional = await fetch(apiDataUrl)
        responseAditionalData = await responseAditional.json()

        const calculateDataInfo = {
          calculateData: responseAditionalData
        }

        setData({ ...data, ...calculateDataInfo })
      } catch (err) {
        // setError('Link inválido o no disponible')
      } finally {
        await new Promise((resolve) => setTimeout(resolve, 5000))
        console.log(responseAditionalData)
        console.log(data.calculateData)
        setLoading(false)
      }
    }
    fetchData()
  }

  return (
    <div className="quotation_container">
      <p className="message_title">
        Wuuujuuuuu!!!. ¿Si lo viste? :O Lo hicimos de nuevoooooo. Un súper
        precio para un súper servicio.
      </p>
      <div className="quotation-info_container">
        <div className="quotation-info_container--left">
          <img
            className="img_final-price"
            src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691686892/Wuuju/ekh3pa6dkmhxqhlb6wmy.png"
            alt=""
          />
          <img
            className="product_image"
            src={data.aditionaldata.Imagen}
            alt=""
          />
          <p>Imagen de referencia *</p>
        </div>
        <div className="quotation-info_container--right">
          <div className="price_container">
            <p className="price">{data.calculateData.total_shopper_slow}</p>
            <p className="cop_text">cop</p>
            <p>?</p>
          </div>
          <p className="title_text">{data.name}</p>
          <div className="units_container">
            <div className="units-number">
              <img
                className="row_image_up"
                src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691688278/Wuuju/o3zx9pd62mrtkf9qneof.svg"
                alt=""
                onClick={() => {
                  increment()
                }}
              />
              <p className="number">{count}</p>
              <img
                className="row_image_down"
                src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691688278/Wuuju/o3zx9pd62mrtkf9qneof.svg"
                alt=""
                onClick={() => {
                  decrement()
                }}
              />
            </div>
            <p className="units_text">Unidades</p>
            <button
              disabled={loading}
              onClick={() => getData()}
              className="calculate_button"
            >
              {' '}
              calcular
            </button>
          </div>
          <div className="seller_container">
            <img
              src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691689083/Wuuju/bgjuusteyehfbgdnda8g.svg"
              alt=""
            />
            <div>
              <p>
                Vendido por <span>{data.aditionaldata['Sold by']}</span>
              </p>
              <p>
                Enviado por <span>{data.aditionaldata['Ships from']}</span>
              </p>
            </div>
            <div />
          </div>
        </div>
      </div>
      <div className="buttons_container">
        <button onClick={() => { refreshPage() }} className="button-green">Nueva cotización</button>
        <button className="button-red">ORDENAR AHORA</button>
        <button className="button-green">Agregar al carrito</button>
      </div>

      <p className="final-text">
        Si lo quieres, puedes ver el detalle del precio aquí.
      </p>
      <button onClick={openModal} className="more_button">
        ver más
      </button>

      <QuotationInfo isOpen={isModalOpen} onClose={closeModal}>
        <img
          className="title_image"
          src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691891928/Wuuju/f7y8myyikr4nd5n2thpg.png"
          alt=""
        />

        <p className="text_1">
          Échale un ojo al detalle de los costos de tu cotización.
        </p>

        <p className="text_2">
          Los valores están expresados en pesos colombianos COP, pero si lo
          quieres,
        </p>
        <p className="text_3">
          {' '}
          puedes ver su valor en dólares estadounidenses USD a día de hoy
          22/07/2023 presionando aquí.
        </p>

        <p className="text_4">
          IMPORTANTE: El PRECIO FINAL está sujeto a cambios por la tasa
          representativa del mercado del día T.R.M.
        </p>

        <div className="exchange_container">
          <div className="usd_container">
            <p> 1 USD </p>
            <img
              src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691893376/Wuuju/zbougwrbffwkjozan5nw.svg"
              alt=""
            />
          </div>
          <img
            className="change_icon"
            src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691893389/Wuuju/hcytedwia8ojbjcwxajm.svg"
            alt=""
          />
          <div className="cop_container">
            <img
              src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691893373/Wuuju/hq8h5yyrjpqbq5lm8zxj.svg"
              alt=""
            />
            <p> {data.calculateData.dolar_today} cop </p>
          </div>
        </div>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="first_tr">
                <td>COSTO DEL PRODUCTO</td>
                <td>${data.calculateData.cop_product}</td>
                <td>COP</td>
              </tr>
              <tr>
                <td>
                  <p>
                    TARIFA
                    <br /> APLICADA
                  </p>
                </td>
                <td>${data.calculateData.cop_ship_shopper_slow}</td>
                <td>COP/LB</td>
              </tr>
              <tr>
                <td>SEGURO</td>
                <td>${data.calculateData.cop_insurance_shopper_slow}</td>
                <td>COP</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer_modal">
          <img
            className="title_image"
            src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691686892/Wuuju/ekh3pa6dkmhxqhlb6wmy.png"
            alt=""
          />
          <div className="price_container">
            <div className="container_sec">
              <p className="price">${data.calculateData.total_shopper_slow}</p>
              <p className="valid">*válido por 24 horas</p>
            </div>
            <p className="cop_text">COP</p>
          </div>
        </div>
      </QuotationInfo>
    </div>
  )
}

export default Quotation
