import { FaBars } from "react-icons/fa"
import { useGlobalContext } from "./context"

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()
  console.log(openSidebar)

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        Show Modal
      </button>
    </main>
  )
}
export default Home
