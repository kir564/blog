import { useEffect, useState } from 'react';
import styled from 'styled-components';

const weatherUrl = new URL('https://api.openweathermap.org/data/2.5/weather');
weatherUrl.searchParams.set('appid', '69ba8e50caf496bcd8d83b60bca0a70b');
weatherUrl.searchParams.set('q', 'Tomsk');
weatherUrl.searchParams.set('units', 'metric');
weatherUrl.searchParams.set('lang', 'ru');

const Weather = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const FooterContainer = ({ className }) => {
  const [city, setCity] = useState('Томск');
  const [temperature, setTemperature] = useState('23');
  const [icon, setIcon] = useState('03d');

  // useEffect(() => {
  //   fetch(weatherUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('data: ', data);
  //       const { main, name, weather } = data;
  //       setCity(name);
  //       setTemperature(Math.round(main.temp));
  //       setIcon(weather[0].icon);
  //     });
  // }, []);

  return (
    <div className={className}>
      <MailInfo>
        <div>Блог веб-разработчика</div>
        <div>web@developer.ru</div>
      </MailInfo>
      <LocationInfo>
        <div>{city}</div>
        <Weather>
          <img
            src={` https://openweathermap.org/img/wn/${icon}.png`}
            width="35px"
            height="35px"
          />
          {temperature} &#8451;
        </Weather>
        <div>{new Date().toLocaleDateString()}</div>
      </LocationInfo>
    </div>
  );
};

export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 1px 1px 12px #000;
  background-color: #fff;
`;
