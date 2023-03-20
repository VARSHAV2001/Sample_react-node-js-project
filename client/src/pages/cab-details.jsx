import React, { useState, useEffect } from "react";
import CabCard from "../components/cab-card";
import HomeNavBar from "../components/homenavbar";
import Axios from "../service/axios";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CabDetails (params, props) {
    const [details, setDetails] = useState([])
    const [error, setError] = useState('')

    console.log(error)

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    console.log(id);

    useEffect(() => { (
        async function fetchDetails() {
            try {
                const eachDetails = await Axios.get(`/cabdetails/${id}`);
                setDetails(eachDetails.data);
                console.log(eachDetails)
            } catch (err){
                const error = err.response;
                if (!error) {
                    setError('No details found')
                }
                if(error.errors.Error) {
                    setError(error.errors.Error)
                }
            }
        }) ()
    });

    function displayDetails(detailslist) {
        const result = [];
        detailslist.forEach((i, index) => {
            result.push(
                <Col key={index} md={6} lg={4} className='mb-4'>
          {(params.page === 'cabdetails') ?
            <Link to={`/cabdetails/?c=${i.id}`} className='text-decoration-none text-dark'>
              <CabCard {...i} page={params.page} />
            </Link>
            :
            <Link to={`/cabdetails/?c=${i.id}`} className='text-decoration-none text-dark'>
              <CabCard {...i} page={params.page} />
            </Link>
          }
        </Col>            
            )
        })  
        return result;          
    }
    const cabDetails = displayDetails(details)
  
    return(
        <div>
            <div className="home-nav">
            <HomeNavBar/>
            </div>
            <div className="cab-content">
                <div className="cab-subdiv">

                </div>
                <div className="cab-main-div">
                <div className="cab-main-sub">

                </div>
                <div className="cab-div">
                    <CabCard/>  
                </div>
                </div>
                <Container>
          <Row className='justify-content-between'>{cabDetails}</Row>
        </Container>
            </div>
        </div>
    )
}

export default CabDetails;