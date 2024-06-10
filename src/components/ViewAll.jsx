import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {

    const [data,changedata]=useState(
        {"data":{"regional":[]}}
    )
    
    const fetchdata=()=>{
        axios.get("https://api.rootnet.in/covid19-in/stats/latest").then(
            (response)=>{
                changedata(response.data)
            }
        )
    }
    
    useEffect(()=>{fetchdata()},[])

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">discharged</th>
      <th scope="col">deaths</th>
      
    </tr>
  </thead>
  <tbody class="table-group-divider">
    {data.data.regional.map((value,index)=>{
        return <tr>
        <th scope="row">{value.discharged}</th>
        <td>{value.deaths}</td>
        
      </tr>
    })}
   
  </tbody>
</table>

        </div>
    </div>
</div>


    </div>
  )
}

export default ViewAll