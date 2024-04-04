import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

import ImageUploading from 'react-images-uploading';

function Addcar() {
    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
    };
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
                    <NavLink to="/" >
                        Dashboard
                    </NavLink>
                    <NavLink to="/Vehiclepage" style={{color:'#2A0970'}} >
                        vehicle
                    </NavLink>
                    <NavLink to="/Reminders" >
                        reminders
                    </NavLink>
                    <NavLink to="/Setup" >
                        User info
                    </NavLink>
                </div>
                <div className="col-xl-10 mx-auto mt-2 parent">
                    <div className="col-xl-5 p1">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '95%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="standard-basic" label="Make" variant="standard" />
                            <TextField id="standard-basic" label="Model" variant="standard" />
                            <div style={{ width: '95%', display: 'flex', gap: '5%', color: '#1C85D0' }}>
                                <TextField id="standard-basic" label="Year" variant="standard" style={{width:'200px'}}/>
                                <TextField id="standard-basic" label="Vehicle No" variant="standard" style={{width:'200px'}} />
                            </div>
                            <TextField id="standard-basic" style={{ color: '#1C85D0' }} label="chasis No" variant="standard" />
                        </Box>
                        <FormControl className='mt-1 radios' style={{ padding: '5px' }}>
                            <FormLabel id="demo-row-radio-buttons-group-label" >Fuel Type</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel id="lightblue" value="female" control={<Radio />} label="Petrol" />
                                <FormControlLabel id="lightblue" value="male" control={<Radio />} label="diesel" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="btnparent">

                        <button id="subbtn">submit</button>
                    </div>
                    <div className="col-xl-5 p2">
                        <div className='uploadhead'>
                            <h5 className='pt-3'>image upload</h5>
                            <img src="upload.png" alt="" />
                            <p className='pt-4'>File size:500kb</p>
                        </div>
                        <div className="imgsquare mt-1">
                            {/* Yha image show hogy in this div */}
                            <ImageUploading
                                multiple
                                value={images}
                                onChange={onChange}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                            >
                                {({
                                    imageList,
                                    onImageRemove,

                                }) => (
                                    // write your building UI
                                    <div className="imgcont"  >
                                        {imageList.map((image, index) => (
                                            <div key={index} className="image-item" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <img src={image['data_url']} id='carpic' alt="" />
                                                
                                            </div>
                                        ))}
                                    </div>
                                )}


                            </ImageUploading>



                        </div>
                        {/* Yh wo 2 buttons hain browse remove k */}
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                            }) => (
                                <div className="upload__image-wrapper mt-2">
                                    <button type="button" id="borwsebtn" onClick={onImageUpload}
                                        {...dragProps} style={isDragging ? { color: 'red' } : null}>Browse</button>
                                    &nbsp;
                                    <button onClick={onImageRemoveAll} id='subbtn2' style={{ width: '155px', whiteSpace: 'nowrap', padding: '5px' }} >Remove</button>
                                </div>
                            )}
                        </ImageUploading>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Addcar
