import React, { useEffect, useState } from 'react';
import Loader from './loader';
import Card from "./card";

function Games(){

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('dev-email-address', '21fernandinhow@gmail.com');

            try {
                const response = await fetchTimeout('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/', 5000, headers);
                if(response.ok){
                    const responseData = await response.json();
                    setData(responseData);
                } else {
                    throw new Error(response.status);
                };
            } catch (error) {
                console.error(error);
                const classicErrors = ['500', '502', '503', '504', '507', '508', '509'];

                if(error.message === 'A requisição excedeu o tempo limite.'){
                    setError('O servidor demorou para responder, tente novamente mais tarde');
                } else if(classicErrors.includes(error.message)){
                    setError('O servidor falhou em responder, tente recarregar a página');
                } else {
                    setError('O servidor não conseguirá responder por agora, tente voltar novamente mais tarde ');
                };
            };
        };

        const fetchTimeout = (url, timeout, headers) => {
            return Promise.race([
              fetch(url, {
                method: 'GET',
                headers: headers
            }),
              new Promise((_, reject) => {
                setTimeout(() => {
                  reject(new Error('A requisição excedeu o tempo limite.'));
                }, timeout);
              })
            ]);
        }
          

        getData();
    }, []);

    return(
        <main id='games'>
            <div className='intro'>
                <h2>Bem-vindo(a) ao Game Masters</h2>
                <p>Aqui você encontra os nossos jogos favoritos!</p>
            </div>
        {error ? (
            <p className='error-msg'>Ocorreu um erro: {error}</p>
        ) : data.length > 0 ? (
            <div className='game-list'>
            {data.map((item) => (
                <Card 
                    key={item.id} 
                    img={item.thumbnail} 
                    title={item.title}
                    genre={item.genre}
                    text={item.short_description}
                />
            ))}
            </div>
        ) : (
        <Loader/>
      )}
        </main>
    );
};

export default Games;