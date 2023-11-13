import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './CertificatesStyle'
import CertificateCard from '../Cards/CertificateCards'
import { certificates } from '../../data/constants'


const Certificates = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certificates</Title>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && certificates
            .map((certificate) => (
              <CertificateCard certificate={certificate} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {certificates
            .filter((item) => item.category == toggle)
            .map((certificate) => (
              <CertificateCard certificate={certificate} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Certificates