import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCog } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Remindes() {
    const [value, setValue] = React.useState('female');
    const [startDate, setStartDate] = useState(new Date());
    const [title,setTitle]=useState("Batttery")
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
    const getval=(event)=>{
        setTitle(event.target.innerHTML)
    }
    return (
        <>
            <div className="dashboard">
                <div className="nav">
                    <img src="https://s3-alpha-sig.figma.com/img/faba/2752/6538bec34335abcad69571793b99bc1f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GMEBYavZ26OzLiBgiZb-Z-qsIFQ6MyNbCqqTlQphlc4ih796FWdO6rGmCgZ~FNNfOB6BpRvhpmAMrOWOdKDYf8GeRqhNH8OwhYyyCnWVxobaFs4I3G2jjwDMa6IUV6OltQhDBfDkdzSgifAX2H458m1miUCWm~xEWyLzE4T95I2c2tMCwV0jBe~QgqBko6V~RtFftiUXHrjUHO2zsHhcdfF3KH4AkIVs~BB-3cIVGVcANyzSQB0tX25kLPXmZw~1oMzAK9Ec7yAmwIlpMPE94MlCByod2DkG24xq96GMPA2tG4vkGuPJqeYdJ6jiYaEq-4gxzVf0Z7SRqGcEuvpoWQ__" id='carimg' alt="" />
                    <h4 id='color'>VEHICLE MAINTAINENCE TRACkER</h4>
                    <div className='navchild'>
                        <h4>LOGOUT</h4>
                        <img src="sign.png" alt="" />
                    </div>
                </div>
                <div className="col-xl-9 mx-auto mt-3 title ">
                    {/* <Navbar/> */}
                    
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
                        <button id="subbtn3" style={{ width: '220px', fontSize: '18px', color: '#CFCD95' }}>M A I N T E N A C E</button>
                    </NavLink>
                    <NavLink to="/Documentation">
                        <button id="subbtn3" style={{ width: '220px', fontSize: '18px' }}>D O C U M E N T A T I O N</button>
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
                    <div className="maincols">

                        <div className="sidecol" >
                            <NavLink to="/Reminders"  onClick={getval}>
                                <h5 className='mt-2' >battery</h5>
                            </NavLink>
                            <NavLink to="/Engine_oil"  onClick={getval}>
                                <h5 >Engine oil</h5>
                            </NavLink>

                            <NavLink to="/Spark_plugs"  onClick={getval}>
                                <h5 id="sp" >Spark plugs</h5>

                            </NavLink>
                            <NavLink to="/Timing_belt" onClick={getval}>
                                <h5>timing belt</h5>

                            </NavLink>
                            <NavLink to="/Tire_rotation" onClick={getval}>
                                <h5>tire rotation</h5>

                            </NavLink>
                            <NavLink to="/Wheel_alignment" onClick={getval}>
                                <h5>wheel alignment</h5>

                            </NavLink>
                            <NavLink to="/Fuel_filter" onClick={getval}>
                                <h5>Fuel filter</h5>

                            </NavLink>
                            <NavLink to="/Air_filter" onClick={getval}>
                                <h5>air filter</h5>

                            </NavLink>
                            <NavLink to="/Cabin_filter" onClick={getval}>

                                <h5>cabin filter</h5>
                            </NavLink>

                        </div>
                        <div className="sidecol2">
                            <div className="bform">
                                <div className="formname">
                                    <div className="z1 col-md-4"></div>
                                    <div className="z2 col-md-8">

                                        <h5 className="mt-2" id='stitle'>{title}</h5>
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
                                        <div style={{ display: 'flex', gap: '5px' }}>

                                            <TextField id="standard-basic" label="Kilometers" variant="standard" style={{ width: '250px' }} /> <p className='pt-3'>KM</p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '5px' }}>

                                            <TextField id="standard-basic" label="Days" variant="standard" style={{ width: '250px' }} /><p className='pt-3'>days</p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '5px' }}>


                                            <TextField id="standard-basic" style={{ color: '#1C85D0', width: '250px' }} label="Amount" variant="standard" /><p className='pt-3'>amount</p>
                                        </div>
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
                                    <h5>Last service</h5>
                                    <div style={{ display: 'flex', gap: '73px' }}>

                                        <div style={{ display: 'flex', gap: '5px' }}>
                                            <TextField id="standard-basic" style={{ color: '#1C85D0', width: '100px' }} label="odometer" variant="standard" /><p className='pt-3'>KM</p>
                                        </div>
                                        <DatePicker className='mt-3' selected={startDate} onChange={(date) => setStartDate(date)} />

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

export default Remindes
