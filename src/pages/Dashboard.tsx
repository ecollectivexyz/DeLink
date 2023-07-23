import * as React from 'react';
import Button from '@mui/material/Button';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';
import styled from "styled-components";



const Container = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 80px);  }
`;



const WhiteBox = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
  box-shadow: 0 4px 33px rgba(168, 198, 207, 0.15);
  background-color: #fff;
  padding:  0 36px;
  max-width: 590px;
  border-radius: 10px;
  margin: 40px auto 0;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

function Dashboard(){
    const navigate = useNavigate();

    return (
        <Container>
        <WhiteBox>
            <Button variant="contained" color="primary" startIcon={<ArrowBackIcon/> }   onClick={() => {
                navigate("/")
            }}  >
                    Back
            </Button> 
            
            <div>
                <p>Dashboard</p>
                <p>Review all your pending attestations</p>
            </div>

           
        </WhiteBox>
        </Container>
    );
    
};

export default Dashboard;