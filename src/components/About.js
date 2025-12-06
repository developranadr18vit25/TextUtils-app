import React, { useState } from 'react'

export default function About({myStyle,toggleabout}) {

    return (
        <div className="container" style={myStyle}>
            <h1 className="my-2">About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is TextUtils ? 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils is a simple and lightweight web application designed for quick text editing.</strong> It loads instantly and gives you a clean space to work with your text, without distractions or unnecessary elements. The interface focuses on clarity and ease of use, making it suitable for small tasks, learning projects, or experimenting with text formatting. This website was created as part of practicing React concepts like components, routing, and state updates. You can customize or extend any part of it depending on how you want to grow the project, and it serves as a great base for building more advanced utilities in the future.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Features 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils provides a collection of fast and useful text-processing tools.</strong> These tools help you quickly modify your text without needing any additional software or complex steps. Each feature is designed to work instantly inside the browser, giving a smooth and responsive experience during editing. The utilities focus on improving readability, cleaning up formatting, and making small text transformations easier and more efficient. All actions are handled through simple interactions, and the output updates in real time as you work, ensuring a clear and consistent workflow..
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Behind the Project
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils was developed as a learning project built during the exploration of React and modern web development.</strong> It began as a simple idea to understand how components, state, and props work together, and gradually grew into a small but functional text-editing tool. The project focuses on practicing real-time updates, UI behavior, routing, and clean code structure. It also serves as a personal experiment to see how a basic concept can be shaped into a useful utility through incremental improvements. You can continue extending or modifying it as you learn more, since the entire structure is designed to be easy to understand.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
