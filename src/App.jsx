import { Bounce, toast, ToastContainer } from "react-toastify"
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Tickets from "./components/CustomerTickets/Tickets"
import Tasks from "./components/Task/Tasks"
import { Suspense, useState } from "react"

const fetchPromise = async() => {
    const res = await fetch("/tickets.json");
    return res.json();
}
const ticketsPromise = fetchPromise();

function App() {
    const [customerTicket, setCustomerTicket] = useState([]);
    const [resolved, setResolved] = useState([])

    const handleCustomerTicket = (ticket) => {
        toast.info('Ticket added!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        setCustomerTicket([...customerTicket, ticket]);

    }

    const handleRemoveTask = (taskTicket) => {
        const remainingTickets = customerTicket.filter(task => task.id !== taskTicket.id);
        setCustomerTicket(remainingTickets)
        setResolved(remainingTickets);
        toast.success('Task Resolved!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }
  return (
    <>
      <div>
            <Navbar></Navbar>
            <div className="bg-[#F5F5F5]">
                <Banner customerTicket={customerTicket} resolved={resolved}></Banner>
                <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
                    <Suspense fallback={<p className="font-bold text-3xl">Loading...</p>}>
                        <Tickets ticketsPromise={ticketsPromise}  handleCustomerTicket={handleCustomerTicket}></Tickets>
                    </Suspense>
                    <Tasks customerTicket={customerTicket} setCustomerTicket={setCustomerTicket} handleRemoveTask={handleRemoveTask}></Tasks>
                </div>
            </div>
      </div>


      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
