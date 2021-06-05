import React from 'react';
import logo from '../../images/header/logo.png';
import Ellipse from '../../images/header/Ellipse.png';
import Like from '../../images/header/Like.png';
import people from '../../images/header/people.png';
import Vector from '../../images/header/Vector.png';

export default function Header() {
    return (
        <React.Fragment>
            <section className="w-5/6 flex items-center">
                <div className="w-1/3">
                    <img src={logo} alt={logo} />
                </div>
                <div className="w-2/3 relative">
                    <svg className="w-6 h-6 absolute top-4 left-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>

                    <input
                        placeholder="cari makan bang?"
                        className="w-5/6 text-lg pl-16 px-2 py-3 rounded-3xl bg-gray-100"
                        type="text"
                    />
                </div>
            </section>
            <section style={{ background: 'rgba(252, 252, 252, 0.9)' }} className="w-1/6 h-full pl-10 pr-3 flex items-center justify-between ">
                <div><img
                    src={Vector}
                    style={{ width: '50%', height: '50%' }}
                />
                </div>
                <div><img
                    src={Like}
                    style={{ width: '50%', height: '50%' }}

                />    </div>
                <div><img
                    src={Ellipse}
                    style={{ width: '50%', height: '50%' }}
                    
                />  
                  </div>
                <div><img
                    src={people}
                    style={{ width: '50%', height: '50%' }}
                />    </div>
            </section>
        </React.Fragment>
    );
}