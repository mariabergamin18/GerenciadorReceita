import React, { useState } from "react";
import Home from "../../pages/home";
import Sobre from "../../pages/sobre";
import Login from "../../pages/login";
import Dashboard from "../../pages/dashboard";

enum RouterPages {
    'home' = 'home',
    'login' = 'login',
    'sobre' = 'sobre',
    'dashboard' = 'dashboard'
}

const Router = () => {
    const [getPaginaAtual, setPaginaAtual] = 
        useState<RouterPages>(RouterPages.home)
    
    const renderizarBotoes = () => (
        <div>
            <button onClick={() => setPaginaAtual(RouterPages.home)}>Inicio</button>
            <button onClick={() => setPaginaAtual(RouterPages.login)}>Login</button>
            <button onClick={() => setPaginaAtual(RouterPages.sobre)}>Sobre</button>
            <button onClick={() => setPaginaAtual(RouterPages.dashboard)}>Dashboard</button>
        </div>
    )

    const renderizarPagina = () => {
        switch (getPaginaAtual) {
            case RouterPages.home: return <Home />
            case RouterPages.login: return <Login />
            case RouterPages.sobre: return <Sobre />
            case RouterPages.dashboard: return <Dashboard />
            default: return <Home />
        }
    }

    return (
        <div>
            {renderizarBotoes()}
            {renderizarPagina()}
        </div>
    )
}

export default Router;