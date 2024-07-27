import React from 'react'
export default function About(props) {

    let myStyle = {
        color: props.mode==='dark'? 'white' : 'black',
        backgroundColor:props.mode==='dark'? 'black' : 'white',
    }

    return (
        <div className='container' style={myStyle}>
            <h1  >About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={myStyle}  >
                            Textutils give you a way to analyze your text quickly and efficiently. Be it word count or character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            TextUtils is a free character counter tool that provide instant character count and word count statistics for a given text. TextUtils reports the number of words and character. Thus it is suitable for writing words/characher limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compitable</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            This word counter software works in any webrowser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characeters in facebook, blog, books, excel documnets, pdf documnets, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
