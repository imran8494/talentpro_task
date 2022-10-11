import React, { useState } from 'react'
import img from './images/img.jpg'

export default function ServicesCard() {


    const [servicesMap, setservicesMap] = useState([
        { id: 1, image: img, title: "Door to Door Storage", description: "We pick up, store & deliver" },
        { id: 2, image: img, title: "Self Access Storage", description: "24/7 Access Secured Storage Unit" },
        { id: 3, image: img, title: "Document Storage", description: "Store offsite and manage online" },
        { id: 4, image: img, title: "Marketing Merchandise", description: "Sends swags to us and click for returns" },
        { id: 5, image: img, title: "Retail and e-Commerce", description: "We will receive, store, pick pack and ship" },
        { id: 6, image: img, title: "Co-Working and Co-Warehousing", description: "Work, Store, Operate and Ship all in one place" },
        { id: 7, image: img, title: "Office With Storage", description: "Office space with storage space" },
    ])

  return (
    <div>
        <div className="row">

        {
            servicesMap.length > 0 && servicesMap.map((item, id) => {
                return (
                    <div key={id} className="col-md-3 service_card p-5">
                        
                                <img src={item.image} className="img-fluid" alt="image" />
                                <h4>{item.title}</h4>
                                <h6>{item.description}</h6>
                                <a href="#">Learn More <i class="fas fa-long-arrow-right"></i></a>

                    </div>
                )
            })
        }

        </div>
    </div>
  )
}
