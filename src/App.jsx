import './App.css'
import Home from './screens/Home/Home'
import Stores from './screens/Stores/Stores'
import Link from './screens/Link/Link'
import Quotation from './screens/Quotation/Quotation'
import QuotationInfo from './screens/QuotationInfo/QuotationInfo'
import Header from './components/Header/Header'
import { useState } from 'react'
import Footer from './components/Footer_calculator/FooterCalculator'
import ErrorModal from './components/errorModal/errorModal'

function App () {
  const [activeTab, setActiveTab] = useState('home')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab = {setActiveTab}/>
      case 'stores':
        return <Stores setActiveTab = {setActiveTab}/>
      case 'link':
        return <Link setData = {handleSetData} setError={handleSetError}/>
      case 'quoatation':
        return <Quotation data = {data} setActiveTab={setActiveTab} setData = {handleSetData} />
      case 'quoatationInfo':
        return <QuotationInfo data = {data} setActiveTab={setActiveTab} setData = {handleSetData} />
      default:
        return <Home />
    }
  }

  const handleSetData = (data) => {
    setData(data)
    setActiveTab('quoatation')
    console.log('asdasdasdad')
  }

  const handleSetError = (error) => {
    setError(error)
    if (error) openModal()
  }

  return (
    <div className="principal_container">
      <Header />
      <div className="app_container">
      {renderTabContent()}
      </div>
      {activeTab === 'home' ? null : <Footer />}
      <ErrorModal isOpen={isModalOpen} onClose={closeModal}>
      <p>{error}</p>
</ErrorModal>
    </div>
  )
}

export default App
