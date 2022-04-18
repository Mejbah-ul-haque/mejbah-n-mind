import React from 'react';

const Blogs = () => {
    return (
        <div style={{ minHeight: '100vh' }} className='container'>
            <h2 className='text-center mt-5 mb-3'><span style={{ backgroundColor: 'lightgreen' }} className='py-2 px-5'>This is Blogs</span></h2>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card bg-light mt-4">
                        <div style={{ backgroundColor: 'lightcyan' }} className="card-body">
                            <h5 style={{ color: 'coral' }} className="card-title"><span className='fs-3 fw-bold me-2 text-primary'>Q.1</span>Difference between authorization and authentication?</h5>
                            <p className="card-text ms-5"><span className='fs-4 me-2'>Ans.</span> Authentication and authorization are two separate steps of login. Although the two words look or sound alike, they are quite different.
                                Authentication are verifies credentials, it is visible to the user.
                                On the other hand, authorization grant or denies to access, it is totally unvisible to the user. Both steps are powerful for login system.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card bg-light mt-4">
                        <div style={{ backgroundColor: 'lightcyan' }} className="card-body">
                            <h5 style={{ color: 'coral' }} className="card-title"><span className='fs-3 fw-bold me-2 text-primary'>Q.2</span>Why are you using firebase? What other options do you have to implement authentication?</h5>
                            <p className="card-text ms-5"><span className='fs-4 me-2'>Ans.</span> Firebase is a great platform for creating web and mobile applications. Login authentication system can be easily created here. In addition to Firebase, there are several other authentication platforms.
                                Such as Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript, RxDB, Flutter etc.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card bg-light mt-4">
                        <div style={{ backgroundColor: 'lightcyan' }} className="card-body">
                            <h5 style={{ color: 'coral' }} className="card-title"><span className='fs-3 fw-bold me-2 text-primary'>Q.3</span>What other services does firebase provide other authentication?</h5>
                            <p className="card-text ms-5"><span className='fs-4 me-2'>Ans.</span> In addition to creating authentication systems, Firebase also provides many other services. This is a platform for creating web and mobile applications. It has made developer's life easier. Firebase is a Backend-as-a-Service. It provides developers with a variety of tools and services to help them develop quality apps.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;