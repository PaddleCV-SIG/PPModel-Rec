import "../App.css"
import logo from '../images/logo.png'

export default function Header() {
  return (
    <div className="paddle-header">
      <div className="img-wrap">
        <img
          src={logo}
          alt="logo"
          width="96"
          height="30"
        />
      </div>
    </div>
  )
}
