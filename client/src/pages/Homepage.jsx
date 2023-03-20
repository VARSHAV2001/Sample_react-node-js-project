import React, { useState, useEffect } from "react";
import HomeCard from "../components/card";
import HomeNavBar from "../components/homenavbar";
import { BsSearch } from "react-icons/bs";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Axios from "../service/axios";
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';


const HomePages = (params) => {

    const [details, setDetails] = useState([])
    const [error, setError] = useState('')
    
    console.log(error)

    useEffect(() => { (
        async function fetchDetails() {
            try {
                const allDetails = await Axios.get('/homepage');
                setDetails(allDetails.data);
            } catch (err){
                const error = err.response;
                if (!error) {
                    setError('No details found')
                }
                if (error.errors.Error) {
                    setError(error.errors.Error)
                }
            }
        }) ()
    }, []);

    function displayDetails(detailslist) {
        const result = [];
        detailslist.forEach((i, index) => {
            result.push(
                <Col key={index} md={6} lg={4} className='mb-4'>
          {(params.page === 'cabdetails') ?
            <Link to={`/cabdetails/?c=${i.id}`} className='text-decoration-none text-dark'>
              <HomeCard {...i} page={params.page} />
            </Link>
            :
            <Link to={`/cabdetails/?c=${i.id}`} className='text-decoration-none text-dark'>
              <HomeCard {...i} page={params.page} />
            </Link>
          }
        </Col>            
            )
        })  
        return result;          
    }

    let navigate = useNavigate();

    function searchBar(data) {
        if(params.page === 'homepage') {
            let path = `/search/?key=${data.searchKey}`;
      navigate(path);
        } else{
            let path = `/homepage/?key=${data.searchKey}`;
            navigate(path);
        }
    }

    const schema = yup.object().shape({
        searchKey: yup.string().required('Input course name to search!')
      });
   

    const latestDetails = displayDetails(details);
    const {
        handleSubmit,
        register,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(schema)
      });
    
      console.log(errors)
    return (
        <div className="home-main">
            <HomeNavBar/>
            <div className="home-content">
            <div className="d-flex justify-content-center align-items-center" id="search-box">
            <form onSubmit={handleSubmit(searchBar)}>
            <input  type='search'
              className='form-input p-3 mt-4'
              placeholder='Search For...'
              {...register('searchKey')}/>
            <button type="submit" className="btn btn-primary p-3">
                <BsSearch/>
            </button>
            </form>
        </div>
            <p className='fs-3 text-center pt-3 text-light'>Latest Cab Details</p>
        <Container>
          <Row className='justify-content-between'>{latestDetails}</Row>
        </Container>
            </div> 
        </div>
    )
}

export default HomePages;