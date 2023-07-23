import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GradientBar from "./components/GradientBar";
import { useAccount, useSigner } from "wagmi";
import { useModal } from "connectkit";
import {
  baseURL,
  CUSTOM_SCHEMAS,
  EASContractAddress,
  getAddressForENS,
  getAttestation,
} from "./utils/utils";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import invariant from "tiny-invariant";
import { ethers } from "ethers";
import { Link, useSearchParams } from "react-router-dom";
import { Outlet, useNavigate } from "react-router";
import axios from "axios";
import ButtonDashboard from "./components/atoms/ButtonDashboard";
import SelectSocials from "./components/atoms/SelectSocials";
import TabsMenu from "./components/molecules/TabsMenu";
import ButtonAttest from "./components/atoms/ButtonAttest";



const Container = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 80px);  }
`;

const SubText = styled(Link)`
  display: block;
  cursor: pointer;
  text-decoration: underline;
  color: #ababab;
  margin-top: 20px;
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




const eas = new EAS(EASContractAddress);

function Home() {
  const { status } = useAccount();
  const modal = useModal();
  const [address, setAddress] = useState("");
  const { data: signer } = useSigner();
  const [attesting, setAttesting] = useState(false);
  const [ensResolvedAddress, setEnsResolvedAddress] = useState("Dakh.eth");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const addressParam = searchParams.get("address");
    if (addressParam) {
      setAddress(addressParam);
    }
  }, []);

  useEffect(() => {
    async function checkENS() {
      if (address.includes(".eth")) {
        const tmpAddress = await getAddressForENS(address);
        if (tmpAddress) {
          setEnsResolvedAddress(tmpAddress);
        } else {
          setEnsResolvedAddress("");
        }
      } else {
        setEnsResolvedAddress("");
      }
    }

    checkENS();
  }, [address]);

  return (
    <Container>
      <GradientBar />
      <WhiteBox>
        <div>
          <ButtonDashboard></ButtonDashboard>
          <TabsMenu></TabsMenu>
        </div>
      

        <Outlet />

        <ButtonAttest></ButtonAttest>

    
{/* 
        {status === "connected" && (
          <>
            <SubText to={"/qr"}>Show my QR code</SubText>
          </>
        )
        }
 */}


      </WhiteBox>
    </Container>
  );
}

export default Home;
