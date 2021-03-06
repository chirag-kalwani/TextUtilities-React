import React, {useState} from 'react';

function About(props) {
    const [myStyle, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const [btnName, NewBtnName] = useState('Dark Mode');
    const [oldBG, NewBG] = useState({
        color: 'white',
        backgroundColor: 'Black'
    })
    const enableDarkMode = () => {
        if (myStyle.color === 'black') {
            setStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            NewBtnName('Light Mode');
            NewBG({
                color: 'Black',
                backgroundColor: 'white'
            });
        } else {
            setStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            NewBtnName('Dark Mode');
            NewBG({
                color: 'white',
                backgroundColor: 'Black'
            });
        }
    }
    const changeTextColor = () => {
        if (props.mode === 'dark')
            return 'light'
        return 'dark'
    }
    return (
        <div className={`text-${changeTextColor()} bg-${props.mode}`}>
            <h1 className='my-3'>About Us:</h1>
            <div className={`bg-${props.mode} accordion accordion-flush`} id="accordionFlushExample">
                <div className={`accordion-item`}>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className={`text-${changeTextColor()} bg-${props.mode} accordion-button collapsed"`} type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false"
                                aria-controls="flush-collapseOne" style={myStyle}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                         aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={myStyle}>
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion
                            body.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className={`text-${changeTextColor()} bg-${props.mode} accordion-button collapsed"`} type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                aria-controls="flush-collapseTwo" style={myStyle}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                         aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is
                            intended to
                            demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion
                            body. Let's imagine this being filled with some actual content.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className={`text-${changeTextColor()} bg-${props.mode} accordion-button collapsed"`} type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false"
                                aria-controls="flush-collapseThree" style={myStyle}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                         aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is
                            intended to
                            demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion
                            body. Nothing more exciting happening here in terms of content, but just filling up the
                            space to make it look, at least at first glance, a bit more representative of how this would
                            look in a real-world application.
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className='container'>*/}
            {/*    <button type="button" className="btn btn-dark" style={oldBG} onClick={enableDarkMode}>{btnName}</button>*/}
            {/*</div>*/}
        </div>
    );
}

export default About;