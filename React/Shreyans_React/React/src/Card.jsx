export default function Card(){
    let data = [
        {
          image: "https://images.unsplash.com/photo-1522780550166-284a0288c8df?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww",
          head: "Amazon",
          p: "This is an Amazon card",
          instock:true
        },
        {
          image: "https://images.unsplash.com/photo-1549924231-f129b911e442?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
          head: "Google",
          p: "This is a Google card",
          instock:false
        },
        {
          image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
          head: "Tesla",
          p: "This is a Tesla card",
          instock:false

        }
      ];
      
    return (
        <>
       
        <div className="w-full flex justify-center items-center gap-10 h-screen " >

         { data.map((d,index)=>(  <div key={index} className="w-52 rounded-lg  overflow-hidden   " >
            <div className="w-full h-32 bg-green-400" > 
                <img className="w-full h-full object-cover " src={d.image} ></img>
            </div>
            <div className="w-full px-3 py-4 bg-zinc-200" >
            <h2 className="font-semibold">{d.head}</h2>
            <p className="text-sm mt-4" > {d.p}</p>

            <button className={`px-4 py-1  ${d.instock?"bg-blue-600":" bg-red-600"} text-xs rounded text-zinc-100 mt-3`} >
            {d.instock?"In Stock":"Out of Stock"}
            </button>
            </div>
            </div>))}
              
        </div>
        </>
    )
}

