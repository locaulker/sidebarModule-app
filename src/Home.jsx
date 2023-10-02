// import { FaBars } from "react-icons/fa"
import { LiaBarsSolid } from "react-icons/lia"
import { useGlobalContext } from "./context"

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        {/* <FaBars /> */}
        <LiaBarsSolid />
      </button>
      <button onClick={openModal} className="btn">
        Show Modal
      </button>
    </main>
  )
}
export default Home

LiaBarsSolid
