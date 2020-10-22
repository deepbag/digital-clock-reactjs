import React, {useState} from 'react';

const App = () => {
    
    {/* Date */}
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    {/* Time */}
    const time = new Date().toLocaleTimeString();

    const [currtime, setcurrtime] = useState(time);

    const updatetime = () => {
        const time = new Date().toLocaleTimeString();
        setcurrtime(time);
    }

    setInterval(updatetime, 1000);

    return(
        <>
          <div className="conatiner text-center d-flex justify-content-center">
            <div className="row my-5 py-5 ">
                <div className="col-lg-4">
                    <strong style={{fontSize: "70px"}} className="border-con p-4 text-white">{date}</strong>
                </div>
                <div className="col-lg-4">
                    <strong style={{fontSize: "70px"}} className="border-con p-4 text-white">0{month}</strong>
                </div>
                <div className="col-lg-4">
                    <strong style={{fontSize: "70px"}} className="border-con p-4 text-white">{year}</strong>
                </div>
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="row my-5 py-5">
                <div className="col-lg-12">
                    <strong style={{fontSize: "70px"}} className="border-con p-4 text-white">{currtime}</strong>
                </div>
            </div>
          </div>
        </>
    )
}

export default App;