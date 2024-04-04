
import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
function Vehicile() {

    let counter = 0
    const show = () => {
        counter += 1
        let drop = document.getElementById('drop')
        if (counter === 1) {
            drop.style.visibility = "visible"
            counter -= 2
        }
        else {
            drop.style.visibility = "hidden"
        }
    }
    // Temporary delete
    const delx = () => {
        let del = document.getElementById("mainbox")
       
        if (del) {
            del.style.display = "none"
        }
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
                    <Navbar/>
                    
                </div>
                <div className="col-xl-9 mx-auto" style={{ display: 'flex', justifyContent: 'end' }}>
                    <div className="add">
                        <NavLink to="/Add">

                            <img src="add.png" alt="" />
                        </NavLink>
                    </div>
                </div>

                <div className="col-xl-9 mx-auto cars mb-3">
                    <div className='box' id="mainbox">
                        <h6>Toyota Axio</h6>
                        <div className="carbox">
                            <div className="c1">
                                <img src="https://s3-alpha-sig.figma.com/img/fa7d/a5e0/96504a0eafa7cd9f339dcaeb94d9ad5a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z3CDuoJBBzGl3zc8TrmYwRujRZZbrqpCg0EFoHNf7w2fHTe6vlIAwvgf7toRNyqsLnukdORrIE9NBLdj-VRKVuP3PBy3Z~z8OeugazWk71CN8J5EiMl2S6C7RkFUnkwtyIKsQEwm70QG1Diaa43GCNI20EqmSazQO50-L0ygtag7fEwvzcMA4LJ~LKss-fb9g9kQ-k13W5uzW30h72KXgF2t0Q0pDvSSMlqMQfRdgAKWWtBgNdcJ4OqGxcEGLLLjiVXnyqeALqel9LD7lXyVcMz8Gz3ek~kgAJD0pDWAWRHDimHZtQvPn10GzI~5snCkhfzeaJWnX1f8RLEQtxPAaA__" alt="" />

                            </div>
                            <div className="c2">

                                <span onClick={show}></span>
                                <span onClick={show}></span>
                                <span onClick={show}></span>
                                <div className="dropbox" id="drop">
                                    <NavLink to="/Add">View</NavLink>
                                    <NavLink to="/Add">Edit</NavLink>
                                    <NavLink onClick={delx}>delete</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Vehicile
