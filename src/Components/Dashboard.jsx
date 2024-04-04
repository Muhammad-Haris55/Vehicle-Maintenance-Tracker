import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCog } from 'react-icons/fa';
import Navbar from './Navbar';
function Dashboard() {
    const user = (
        <img src=
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdG690MSVD3174A5oyDnwT49s0_nr-seUkwoAvj1iKOQ&s"
            alt="React Bootstrap logo" style={{ width: "45px", height: '45px', marginRight: '5px' }} />
    )
    const icon = (
        <FaCog size={24} />
    )



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
                    <Navbar/>
                    
                </div>
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
                <div className="col-xl-8 mx-auto spinners">
                    <div className="sppinerz">
                        <div className='sppiner'>
                            <div className="spin">
                                {/* Is div m spinner dalna */}
                            </div>
                            <p>reminder setup</p>
                        </div>
                        <div className='sppiner'>
                            <div className="spin">
                                {/* Is div m spinner dalna */}
                            </div>
                            <p>vehicle setup</p>
                        </div>
                        <div className='sppiner'>
                            <div className="spin">
                                {/* Is div m spinner dalna */}
                            </div>
                            <p>upcoming reminders</p>
                        </div>

                    </div>

                </div>
                <div className="col-xl-9 mx-auto mt-3 details">
                    <h5 className='text-center pt-2' id='color'>recent month logs</h5>
                    <div className="dhead">
                        <div className='dhead2'>

                            <h5>total distance</h5>
                            <h6 id='color2'>lkr 15,000</h6>
                        </div>
                        <div className='dhead2'>

                            <h5>service cost</h5>
                            <h6 id='color2'>100,005km</h6>
                        </div>
                        <div className='dhead2'>

                            <h5>documentation reminder</h5>
                            <h6 id='color2'>vehicle insurance expire</h6>
                        </div>
                        <div className='dhead2'>

                            <h5>date</h5>
                            <h6 id='color2'>nov 05,2024</h6>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Dashboard
