import React from 'react'
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            
Indeed, React development is often driven by passionate developers who are enthusiastic about building user interfaces and web applications using the React library. React has gained immense popularity in the developer community due to its simplicity, efficiency, and performance.
                        </p>
                        <p className="mt-4 text-gray-600">
                        React's declarative syntax allows developers to describe how the UI should look based on the current application state. This makes it easier to understand and maintain code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
