import './Header.scss'

const Header = () => {
  function refreshPage () {
    window.location.reload(false)
  }
  return (
    <header>
      <img src="https://wuuju.co/wp-content/uploads/2021/04/logo_w_blanco.png" alt="d" />
      <div onClick={() => { refreshPage() }} className='title_container'>
        <p className="title-underline">Personal </p>

        <p className="title">&nbsp;&nbsp;Shopper</p>
      </div>

      <div></div>
    </header>
  )
}

export default Header
