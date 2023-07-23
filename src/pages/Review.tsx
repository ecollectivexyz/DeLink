import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';

import styled from "styled-components";
import GradientBar from "../components/GradientBar";
import { useAccount, useSigner } from "wagmi";
import { useModal } from "connectkit";
import {
  baseURL,
  CUSTOM_SCHEMAS,
  EASContractAddress,
  getAddressForENS,
  getAttestation,
} from "../utils/utils";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import invariant from "tiny-invariant";
import { ethers } from "ethers";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";


const Title = styled.div`
  color: #163a54;
  font-size: 22px;
  font-family: Montserrat, sans-serif;
`;

const MetButton = styled.div`
  border-radius: 10px;
  border: 1px solid #cfb9ff;
  background: #333342;
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
  color: #fff;
  font-size: 18px;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  cursor: pointer;
`;


const InputContainer = styled.div`
  position: relative;
  height: 90px;
`;

const EnsLogo = styled.img`
  position: absolute;
  left: 14px;
  top: 28px;
  width: 30px;
`;

const InputBlock = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  border: 1px solid rgba(19, 30, 38, 0.33);
  background: rgba(255, 255, 255, 0.5);
  color: #131e26;
  font-size: 18px;
  font-family: Chalkboard, sans-serif;
  padding: 20px 10px;
  text-align: center;
  margin-top: 12px;
  box-sizing: border-box;
  width: 100%;
`;


const eas = new EAS(EASContractAddress);



function Review(){
    const navigate = useNavigate();
    const { status } = useAccount();
    const modal = useModal();
    const [address, setAddress] = useState("");
    const { data: signer } = useSigner();
    const [attesting, setAttesting] = useState(false);
    const [ensResolvedAddress, setEnsResolvedAddress] = useState("Dakh.eth");
    const [searchParams] = useSearchParams();
  
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
        <>
            <Button variant="contained" color="primary" startIcon={<ArrowBackIcon/> }   onClick={() => {
                navigate("/")
            }}  >
                    Back
            </Button> 
            <p>Review</p>

            
        <InputContainer>
          <InputBlock
            autoCorrect={"off"}
            autoComplete={"off"}
            autoCapitalize={"off"}
            placeholder={"Address/ENS"}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {ensResolvedAddress && <EnsLogo src={"/ens-logo.png"} />}
        </InputContainer>
        <MetButton
          onClick={async () => {
            if (status !== "connected") {
              modal.setOpen(true);
            } else {
              setAttesting(true);
              try {
                const schemaEncoder = new SchemaEncoder("bool metIRL");
                const encoded = schemaEncoder.encodeData([
                  { name: "metIRL", type: "bool", value: true },
                ]);

                invariant(signer, "signer must be defined");
                eas.connect(signer);

                const recipient = ensResolvedAddress
                  ? ensResolvedAddress
                  : address;

                  // eas.m

                const tx = await eas.attest({
                  data: {
                    recipient: recipient,
                    data: encoded,
                    refUID: ethers.constants.HashZero,
                    revocable: true,
                    expirationTime: 0,
                  },
                  schema: CUSTOM_SCHEMAS.MET_IRL_SCHEMA,
                });

                const uid = await tx.wait();

                const attestation = await getAttestation(uid);

                // Update ENS names
                await Promise.all([
                  axios.get(`${baseURL}/api/getENS/${address}`),
                  axios.get(`${baseURL}/api/getENS/${recipient}`),
                ]);

                navigate(`/connections`);
              } catch (e) {}

              setAttesting(false);
            }
          }}
        >
          {attesting
            ? "Attesting..."
            : status === "connected"
            ? "Sign"
            : "Connect wallet"}
        </MetButton> */
        </>
    );
};

export default Review;