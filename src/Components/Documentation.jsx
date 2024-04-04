import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCog } from 'react-icons/fa';

import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import DatePicker from "react-datepicker";
import Navbar from './Navbar';
import "react-datepicker/dist/react-datepicker.css";

import Modal from '../Modal';
import { Receiver } from 'react-file-uploader';
import { UploadManager } from 'react-file-uploader';

function Documentation() {
    const [value, setValue] = React.useState('female');
    const [startDate, setStartDate] = useState(new Date());
    
    const [title,setTitle]=useState("VEHICLE REVENUE LISCENE")
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const user = (
        <img src=
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdG690MSVD3174A5oyDnwT49s0_nr-seUkwoAvj1iKOQ&s"
            alt="React Bootstrap logo" style={{ width: "45px", height: '45px', marginRight: '5px' }} />
    )
    const icon = (
        <FaCog size={24} />
    )
    const [file, setFile] = useState()
    const handlefile = (event) => {
        setFile(event.target.files[0])
    }
    const getval=(event)=>{
        setTitle(event.target.innerHTML)
    }
    return (
        <>
            <div className="dashboard">
                <div className="nav">
                    <img src="https://s3-alpha-sig.figma.com/img/faba/2752/6538bec34335abcad69571793b99bc1f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GMEBYavZ26OzLiBgiZb-Z-qsIFQ6MyNbCqqTlQphlc4ih796FWdO6rGmCgZ~FNNfOB6BpRvhpmAMrOWOdKDYf8GeRqhNH8OwhYyyCnWVxobaFs4I3G2jjwDMa6IUV6OltQhDBfDkdzSgifAX2H458m1miUCWm~xEWyLzE4T95I2c2tMCwV0jBe~QgqBko6V~RtFftiUXHrjUHO2zsHhcdfF3KH4AkIVs~BB-3cIVGVcANyzSQB0tX25kLPXmZw~1oMzAK9Ec7yAmwIlpMPE94MlCByod2DkG24xq96GMPA2tG4vkGuPJqeYdJ6jiYaEq-4gxzVf0Z7SRqGcEuvpoWQ__" id='carimg' alt="" />
                    <h4 id='color'>VEHICLE MAINTAINENCE TRAckER</h4>
                    <div className='navchild'>
                        <h4>LOGOUT</h4>
                        <img src="sign.png" alt="" />
                    </div>
                </div>
                <div className="col-xl-9 mx-auto mt-3 title ">
                   
                   <NavLink to="/Dashboard" >
                        Dashboard
                    </NavLink>
                    <NavLink to="/Vehiclepage"  >
                        vehicle
                    </NavLink>
                    <NavLink to="/Reminders" style={{color:'#2A0970'}}>
                        reminders
                    </NavLink>
                    <NavLink to="/User_Info" >
                        User info
                    </NavLink>
                </div>
                <div className="col-xl-9 mx-auto btnholder">
                    <NavLink to="/Reminders">
                        <button id="subbtn3" style={{ width: '220px', fontSize: '18px' }}>M A I N T E N A C E</button>
                    </NavLink>
                    <NavLink to="/Documentaion">
                        <button id="subbtn3" style={{ width: '220px', fontSize: '18px', color: '#CFCD95' }}>D O C U M E N T A T I O N</button>
                    </NavLink>
                </div>
                <div className="col-xl-10 mx-auto mt-2 remainder py-2">
                    <div className="side mt-1">
                        <img src="https://s3-alpha-sig.figma.com/img/fa7d/a5e0/96504a0eafa7cd9f339dcaeb94d9ad5a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z3CDuoJBBzGl3zc8TrmYwRujRZZbrqpCg0EFoHNf7w2fHTe6vlIAwvgf7toRNyqsLnukdORrIE9NBLdj-VRKVuP3PBy3Z~z8OeugazWk71CN8J5EiMl2S6C7RkFUnkwtyIKsQEwm70QG1Diaa43GCNI20EqmSazQO50-L0ygtag7fEwvzcMA4LJ~LKss-fb9g9kQ-k13W5uzW30h72KXgF2t0Q0pDvSSMlqMQfRdgAKWWtBgNdcJ4OqGxcEGLLLjiVXnyqeALqel9LD7lXyVcMz8Gz3ek~kgAJD0pDWAWRHDimHZtQvPn10GzI~5snCkhfzeaJWnX1f8RLEQtxPAaA__" alt="" />
                        <NavDropdown title='Toyota Axio'

                            id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                {user}
                                Toyota Supra
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    <div className="maincols ">

                        <div className="sidecol ">
                            <NavLink to="/Documentation" onClick={getval}> 
                                <h5 className='mt-2'>VEHICLE REVENUE LISCENE</h5>
                            </NavLink>
                            <NavLink to="/VEHICLE_INSURANCE" onClick={getval}>
                                <h5 >VEHICLE INSURANCE</h5>
                            </NavLink>
                            <NavLink to="/ECO_TEST" onClick={getval}>
                                <h5>ECO TEST</h5>
                            </NavLink>
                            <NavLink to="/VEHICLE_BOOK" onClick={getval}>
                                <h5>VEHICLE BOOK</h5>
                            </NavLink>
                            <NavLink to="/DRIVEN_LISCENE" onClick={getval}>
                                <h5>DRIVEN LISCENE</h5>
                            </NavLink>

                        </div>
                        <div className="sidecol2">
                            <div className="bform">
                                <div className="formname">
                                    <div className="z1 col-md-3"></div>
                                    <div className="z2 col-md-9">

                                        <h5 className="mt-2 text-center" id='stitle' style={{ marginLeft: '5px' }}>{title}</h5>
                                        <img src="fd.png" alt="" />
                                    </div>
                                </div>
                                <div className="ffields">

                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '95%' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        {/* <div style={{ display: 'flex', gap: '5px' }}> */}

                                        <TextField id="standard-basic" label="VEHICLE NO" variant="standard" style={{ width: '270px' }} />
                                        {/* </div> */}
                                        {/* <div style={{ display: 'flex', gap: '5px' }}> */}

                                        <TextField id="standard-basic" label="VEHICLE/ DOCUMENT OWNER NAME" variant="standard" style={{ width: '270px' }} />
                                        {/* </div> */}
                                        {/* <div style={{ display: 'flex', gap: '5px' }}> */}


                                        <TextField id="standard-basic" style={{ color: '#1C85D0', width: '270px' }} label="DOC REGISTERED NO" variant="standard" />
                                        {/* </div> */}
                                    </Box>
                                    <FormControl className='rgs'>
                                        {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={value}
                                            onChange={handleChange}
                                            id='rg'
                                        >
                                            <FormControlLabel id="rad" value="female" control={<Radio />} label="whichever comes first" />
                                            <FormControlLabel value="male" control={<Radio />} label="no reminders" />
                                        </RadioGroup>
                                    </FormControl>
                                    {/* <h5>Last service</h5> */}
                                    <div style={{ display: 'flex', gap: '73px' }}>

                                        {/* <div style={{ display: 'flex', gap: '5px' }}>
                                            <TextField id="standard-basic" style={{ color: '#1C85D0', width: '100px' }} label="odometer" variant="standard" /><p className='pt-3'>KM</p>
                                        </div> */}
                                        <div className='datediv'>
                                            <p className='dat'>Issued date</p>

                                            <DatePicker className='' selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                        <div className='datediv'>
                                            <p className='dat'>Expired date</p>

                                            <DatePicker className='' selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>

                                    </div>
                                    <div className='datediv'>
                                        <p className='dat'>Reminder Before</p>
                                        <div style={{ display: 'flex', gap: '5px', marginTop: '-15px' }}>
                                            <TextField id="standard-basic" style={{ color: '#1C85D0', width: '100px', marginTop: '17px' }} variant="standard" /><p className='pt-3'>Days</p>
                                        </div>

                                        {/* <DatePicker className='' selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                                    </div>
                                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Upload Your document</button> */}
                                    <div className='uploadhead' style={{}}>
                                        <h5 className='pt-3'>Document upload</h5>
                                        <img src="upload.png" alt="" />
                                        <p className='pt-4'>File size:500kb</p>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'end' }}>

                                        <input type="file" name="file" onChange={handlefile} />
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="btnparent">

                        <button id="subbtn">submit</button>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Documentation
