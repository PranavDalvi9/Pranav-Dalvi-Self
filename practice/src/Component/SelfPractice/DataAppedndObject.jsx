import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DataAppedndObject() {

    const [data, setData] = useState([])

    useEffect(() => {
axios.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=392&date=02-06-2022").then((res) => console.log(res.data))
    },[])

  return (
    <div>
      <h1>Data append and in object</h1>
    </div>
  )
}
