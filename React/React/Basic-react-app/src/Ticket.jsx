import TicketNum from "./Ticketnum.jsx";
import "./Ticket.css"
export default function Ticket({ticket}){
 return (
    <div className="Ticket" >
        {ticket.map((num ,idx)=>(
            <TicketNum num={num} key={idx} />
        ))}
    </div>
 )
}


////////////////  Imp    ///////////////

//// in map the first argument is the current element and the second argument is the index of that element . 

