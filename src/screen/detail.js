import { useEffect, useState } from "react";
import axios from "axios";
function Detail() {

    const [listdata, setData] = useState([])
    let api = "https://jsonplaceholder.typicode.com/photos"
    let GetapiData = () => {
        axios.get(api).then((res) => {
            console.log(res)
            setData([...res.data])
        }).catch((err) => {
            console.log(err)
        });

    }
    useEffect(() => {
        GetapiData();
    }, [])

    return (
        <>
            <h1>
                detail
            </h1>

            {
                listdata.map((x, i) => (
                    <div key={i}>
                        <p className="text-dark">
                            {x.title}
                            <img src={x.thumbnailUrl} width="200px" alt="" />

                        </p>
                    </div>
                ))
            }
        </>
    )
}
export default Detail;