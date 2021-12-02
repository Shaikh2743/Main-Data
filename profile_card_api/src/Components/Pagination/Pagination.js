import React, { useState, useEffect } from 'react'
import pre from '../files/left.svg';
import nex from '../files/right.svg';
import '../scss/page.scss'



export default function Pagination({ setstate,state }) {
    // state = { pages: [], records: [], currentpage: 1 };
    const [page, setPage] = useState([]);
    //     const [record, setRecord] = useState([]);
    //     const [currentpage, setCurrentpage] = useState(1);
    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(
                data => {
                    const arry = [];
                    for (let index = 1; index <= data.total_pages; index++) {
                        arry.push(index);
                    }
                    // this.setState({ pages: arry })
                    setPage(arry);
                })
            .catch(error => {
                console.error('Error:', error);
            });

    })
    const prev = () =>{
        if(state===2)
        {
         setstate(parseInt(state)-1); 
        }
         
     }
     const next = () =>{
         if(state===1)
        {
         setstate(parseInt(state)+1); 
        }
     }

    const changeContent = (evt) => {
        let val = evt.target.value;
        // console.log(val);
        setstate(parseInt(val));

    }

    return (
        <>
            <div className='pages'>
                <button className='btnl' onClick={prev}>
                    <img src={pre}  alt='im'/>
                </button>
                {page.map((id) =>
                    <button className='pagecount' key={id} value={id} onClick={changeContent} >{id}</button>
                    // <button key={id} value={id} >{id}</button>
                )}
                <button className='btnr'onClick={next}>
                    <img src={nex}  alt='im' />
                </button>
            </div>
        </>
    )
}




