import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  height: 100vh; /* Set height to 100% of viewport height */
`;

const SliderContainer = styled.div`
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(to right, #AED6F1 , #1B4F72); 
  height: 100%; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;


const FormContainer = styled.div`
  position: relative;
  width: 50%;
  padding: 50px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  width: 80%;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  margin-top: 90px; 
  border-radius: 13px;
`;


const Button = styled.button`
  width: 40%;
  padding: 12px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
    border-radius: 10px;
    border: 2px solid #4caf50;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [slideIndex, setSlideIndex] = useState(0); // Define setSlideIndex state variable
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock login logic - yeh sirf example ke liye hai
    if (email === 'student@example.com' && password === 'student123') {
      setMessage('Login successful!');
      navigate('/main');
    } else if (email === 'teacher@example.com' && password === 'teacher123') {
      setMessage('Login successful!');
      navigate('/teacher');
    } else if (email === 'admin@example.com' && password === 'admin123') {
      setMessage('Login successful!');
      navigate('/admin');
    } else {
      setMessage('Invalid credentials!');
    }
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 2); // Change '2' to the number of slides you have
    }, 5000); // Change '5000' to the interval time in milliseconds
    return () => clearInterval(interval);
  }, []);

  return (
    <LoginContainer>
      <SliderContainer>
        <Slider {...sliderSettings}>
          <div>
            <StyledImg src="360.png" alt="Slide 1" />
          </div>
          <div>
            <StyledImg src="retail.jpg" alt="Slide 2" />
          </div>
          <div>
            <StyledImg src="scm.jpg" alt="Slide 3" />
          </div>
        </Slider>
      </SliderContainer>
      <FormContainer>
        <div>
          <h2>Welcome!</h2>
        </div>
        <header>
          <h2>Login To Your Account</h2>
          <Form onSubmit={handleSubmit}>
          <label>Email:</label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
             <label>Password:</label>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Login</Button>
          </Form>
          {message && <Message>{message}</Message>}
        </header>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
