import React from "react";
import Header from "../header/header";
import Content from "../content";
import { Switch, Route } from 'react-router-dom'
function Layout() {
    return (
        <React.Fragment>
            {/* Header */}
            <div className="h-screen w-screen pl-8 font-pooppins">
                <header className=" h-1/10 w-full flex items-center">
                    <Header />
                </header>
                <main className="h-9/10 w-full flex mt-10">
                    <section className="w-5/6 h-full">
                        <Content />
                    </section>
                    {/* ini bagian pesanan */}
                    <section className="w-1/6 bg-white h-full">
                        <Switch>
                            <h1 className="font-bold text-2xl">Pesanan Saya
                                <div style={{ background: "#6455C2" }} className="flex items-right px-26 py-4 rounded-xl">
                                    <div style={{ color: '#FFFFFF' }} className="ml-8 h-full font-Poppins ">
                                    <p className="name">Mr. Dhafin</p>
                                        <h1>Rp. 1.000.000,-</h1>
                                        <br />
                                        <p className="text-xs 30-px">3 7 5 8 * * * * * * * * * * 8 9 1 3</p>
                                    </div>
                                </div>
                            </h1>
                            <Route path="/category/:id"></Route>
                        </Switch>
                    </section>
                </main>
            </div>
        </React.Fragment>
    );
}

export default Layout;