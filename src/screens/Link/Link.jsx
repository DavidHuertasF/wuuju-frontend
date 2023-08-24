import './Link.scss'
import { useState } from 'react'

const Link = ({ setData, setError }) => {
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)

  function isValidUrl (url) {
    // Regular expression to match valid URLs
    const amazonPattern = /^(https?:\/\/)?(www\.)?amazon\.com\/.*$/
    const shortAmazonPattern = /^(https?:\/\/)?(www\.)?a\.co\/.*$/

    // Use the test() method of the regular expressions to check if the link matches the patterns
    const isvalid = amazonPattern.test(url) || shortAmazonPattern.test(url)
    console.log(`${url} is ${isvalid}`)
    return isvalid
  }

  // Test the URLs
  // const urls = [
  //   'https://www.amazon.com/-/es/PlayStation-PS5-Console-Ragnar...',
  //   'https://www.amazon.com/-/es/OtterBox-Apple-pulgadas-modelo...',
  //   'www.amazon.com/-/es/dp/B09C2MQVK3/ref=emc_b_5_i',
  //   'https://a.co/d/e1oJViT',
  //   'a.co/d/e1oJViT',
  //   'am.co/d/e1oJViT',

  //   'www.eltiempo.com',
  //   'amazon.com',
  //   'https://www.amz.com/-/es/PlayStation-PS5-Console-Ragnar...'
  // ]

  // urls.forEach(url => {
  //   console.log(`${url} is ${isValidUrl(url) ? 'valid' : 'invalid'}`)
  // })

  const getData = async (url) => {
    // Define the API endpoint URL

    if (isValidUrl(url) === false) return setError('Upssss. Al parecer el enlace que has ingresado NO pertenece a un link de Amazon.')
    const api =
      'http://ec2-18-216-251-47.us-east-2.compute.amazonaws.com:8000/api/amazon_scraper/?url='
    const apiUrl = api + url

    const apiData =
      'http://ec2-18-216-251-47.us-east-2.compute.amazonaws.com:8000/update_shipping_rates/?'
    // Function to make the API call
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(apiUrl)
        const responseData = await response.json()
        if (responseData.error) {
          setError(responseData.error)
        } else {
          const apiDataUrl = `${apiData}product_id=${responseData.id}&count=1`
          console.log(apiDataUrl)
          const responseAditional = await fetch(apiDataUrl)
          const responseAditionalData = await responseAditional.json()

          const data = {
            ...responseData,
            calculateData: responseAditionalData
          }

          console.log(data)

          setData(data)
        }
      } catch (err) {
        setError('Link inválido o no disponible')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted with value:', inputValue)
    getData(inputValue)
  }

  return (
    <>
      <div className="link_container">
        <h1>Ingresa el link</h1>
        <p className="message">{`Eyyyy!!! Gran elección. Ahora por fa, ingresa el link del producto que quieres
traer con nosotros. Fíjate bien que sea un link de la tienda que elejiste.`}</p>

        <form onSubmit={handleSubmit}>
          <div className="input_container">
            <input
              placeholder="https://www.amazon.com/dp/..."
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <p>{'?'}</p>
          </div>
          <div className="footer_container_link">
            <img
              src="https://res.cloudinary.com/davidhuertas26/image/upload/v1691686190/Wuuju/ah8i5ojwlsalurd67p6x.svg"
              alt=""
            />
            <button disabled={loading} className={loading ? 'button-list' : ''} type="submit">

              {loading ? 'CALCULANDO ..' : 'CALCULAR'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Link
