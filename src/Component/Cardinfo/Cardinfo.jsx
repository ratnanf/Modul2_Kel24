import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: #f2d300; //warna bg card
border-radius: 20px;
box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.5);
color: #fff;
position: relative;
width: 50%;
margin: auto;
margin-top: 150px;
@media screen and (max-width: 500px) {
       margin: auto;
}
`
const Image = styled.img`

  border: 10px solid #fff;
  border-radius: 50%;
  padding: 10px;
  width: 60%;
  height: auto;
  margin: 20px;
  
`
const Title = styled.h5`
  margin: auto;
  color:black;
  font-size: 16px;
	font-family: poppins;
	font-weight: 700;
`

const SelectKelas = styled.select`
	font-size: 12px;
	font-family: poppins;
	font-weight: 500;
	color: #000;
	line-height: 1.5;
	padding: .2em 1em;
	width: 70%;
	margin: 0;
	border: 1px solid #fff;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .7em;
	appearance: none;
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    margin: 30px
`

const Rowcard = styled.div
`
    display: table;
    width: 100%;
    table-layout: fixed;
    border-spacing: 0px;
    text-align: center;
`

const ColumnCard = styled.div
`
    display: table-cell;
    text-align: center;

`

function CardInfo(props){
    return(
        <div>
            <Image src={props.src}/><br/>
            <a>{props.nama}</a><br/>
            <a>{props.nim}</a>
        </div>

    )
}


export default function index() {
  return (

      <Rowcard>
          <ColumnCard>
          <Container>
            <Title>
                <CardInfo nama="Ratna Nurul Fajriya" nim="21120117120027" src="https://user-images.githubusercontent.com/38358167/99902420-4832e400-2cf0-11eb-8a37-8acbdcf785ff.jpg"/>
            </Title>
            <SelectKelas>
                <option value="0">Kelas</option>
                <option value="1">A</option>
                <option value="2">B</option>
            </SelectKelas>
            </Container>
          </ColumnCard>
          <ColumnCard>
          <Container>
            <Title>
                <CardInfo nama="Ayu Novita Mei" nim="21120117120032" src="https://user-images.githubusercontent.com/38358167/99903129-09ebf380-2cf5-11eb-8af5-9f826e8f72e9.jpg"/>
            </Title>
            <SelectKelas>
                <option value="0">Kelas</option>
                <option value="1">A</option>
                <option value="2">B</option>
            </SelectKelas>
            </Container>
          </ColumnCard>
      </Rowcard>
    
  );
}
