import React from 'react';
import maria from '../../assets/images/maria.jpg';
import logofag from '../../assets/images/logofag.jpg';

const Sobre: React.FC = () => {
    return (
        <div style={{
            padding: '40px', 
            textAlign: 'left', 
            backgroundColor: '#ffffff', 
            color: '#1d1d1f',  
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            maxWidth: '800px',  
            margin: '0 auto'  
        }}>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '40px'
            }}>
                <img src={maria} alt="Maria" style={{
                    borderRadius: '50%',  
                    width: '150px', 
                    marginRight: '20px'
                }} />
                <img src={logofag} alt="Logofag" style={{
                    borderRadius: '12px', 
                    width: '150px'
                }} />
            </div>
            <h1 style={{
                color: '#1d1d1f',  
                fontSize: '36px',  
                fontWeight: '600', 
                marginBottom: '20px'
            }}>Uma aplicação da matéria de Programação Web</h1>
            <h2 style={{
                color: '#1d1d1f',
                fontSize: '28px',  
                fontWeight: '500',  
                marginBottom: '32px'
            }}>Por Maria Eduarda</h2>
            <p style={{
                fontSize: '18px',  
                lineHeight: '1.6',  
                marginBottom: '32px'
            }}>
                Maria Eduarda Bergamin Jorge, 21 anos<br />
                Estudante de Engenharia de Software na FAG em Cascavel, PR<br />
            </p>
            <p style={{
                fontSize: '18px',  
                marginBottom: '16px'
            }}>
                <a href="https://github.com/mariabergamin18" target="_blank" rel="noopener noreferrer" style={{
                    color: '#007bff',  
                    textDecoration: 'none',  
                    fontWeight: '500' 
                }}>Github</a>
            </p>
        </div>
    );
};

export default Sobre;
