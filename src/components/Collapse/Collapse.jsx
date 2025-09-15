import { useState } from "react"
import "./Collapse.scss"
import { FaChevronDown } from "react-icons/fa"

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <FaChevronDown className={`icon ${isOpen ? "rotate" : ""}`} />
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  )
}

export default Collapse