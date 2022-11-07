import React,{useState} from "react";
import Axios from "axios";
import Card from "./Card";
import Spinner from 'react-bootstrap/Spinner';

function App(){
    const [apiData, setapiData] = useState([])
    const [apiData2, setapiData2] = useState([])
    const [buffer, setbuffer] = useState(true)

    function data1() {
        // setbuffer(false)
        Axios.get("https://reqres.in/api/users?page=1").then(
            (respond) => {
                setapiData(respond.data.data)
                Axios.get("https://reqres.in/api/users?page=2").then(
                    (respond) => {
                        setapiData2(respond.data.data)
                    }
                )
                setbuffer(true)
            }
        )
    }

    return (
        <div class="navbar">
            <div className="upper">
                    <h3 className="BrandName">Get User Details</h3>
                    <button className="button button2" onClick={data1}>Get Users</button>
                    {buffer ? apiData.map(datas => <Card key={datas.id} fName={datas.first_name} lName={datas.last_name} email={datas.email} avatar={datas.avatar} />) : <Spinner style={{ marginLeft: "150%" }} animation="border" />}
                    {apiData2.map(datas => <Card key={datas.id} fName={datas.first_name} lName={datas.last_name} email={datas.email} avatar={datas.avatar} />)}
            </div>
        </div>
    )
}

export default App