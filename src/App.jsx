import { Bounce, toast, ToastContainer } from "react-toastify"
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Tickets from "./components/CustomerTickets/Tickets"
import Tasks from "./components/Task/Tasks"
import { Suspense, useEffect, useState } from "react"
import Footer from "./components/Footer/Footer"

// const fetchPromise = async() => {
//     const res = await fetch("/tickets.json");
//     return res.json();
// }
// const ticketsPromise = fetchPromise();

function App() {
    // to store allTickets in a state with "use" Hook
    // const initialTickets = use(ticketsPromise);
    // const [allTickets, setAllTickets] = useState(initialTickets);

    const [allTickets, setAllTickets] = useState([]);
    const [customerTicket, setCustomerTicket] = useState([]);
    const [resolvedTask, setResolvedTask] = useState([]);

    // useEffect
    useEffect(() => {
        // fetch("/tickets.json")
        // .then(res => res.json())
        // .then(data => setAllTickets(data))

        // Asynchronous Promise
        const fetchAPI = async() => {
            const res = await fetch("/tickets.json");
            const data = await res.json();
            setAllTickets(data);
        };
        fetchAPI();
    }, [])

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
        const remainingTasks = customerTicket.filter(task => task.id !== taskTicket.id);
        setCustomerTicket(remainingTasks);
        removeFromTickets(taskTicket.id)
        setResolvedTask([...resolvedTask, taskTicket]);
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

    const removeFromTickets = (id) => {
        const remainingTickets = allTickets.filter(tickets => tickets.id !== id);
        setAllTickets(remainingTickets);
    }
  return (
    <>
      <div>
        {/* Navbar */}
            <Navbar></Navbar>

        {/* Main */}
            <div className="bg-[#F5F5F5] pb-16">
                <Banner customerTicket={customerTicket} resolvedTask={resolvedTask}></Banner>
                <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
                    <Suspense fallback={<p className="font-bold text-xl md:text-3xl text-center md:h-200 md:w-200 ">Loading...</p>}>
                        {/* Customer Tickets */}
                        <Tickets allTickets={allTickets}  handleCustomerTicket={handleCustomerTicket}></Tickets>
                        
                        {/* Tasks Status */}
                        <Tasks customerTicket={customerTicket} setCustomerTicket={setCustomerTicket} handleRemoveTask={handleRemoveTask} resolvedTask={resolvedTask}></Tasks>
                    </Suspense>
                </div>
            </div>

        {/* Footer */}
            <Footer></Footer>
      </div>


      <ToastContainer position="top-right" toastClassName="!w-[200px] "></ToastContainer>
    </>
  )
}

export default App
