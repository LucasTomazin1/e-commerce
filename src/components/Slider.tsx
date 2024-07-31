import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styled from "styled-components";

interface SliderProps {
  pictures: { url: string }[];
}

export const Slider: React.FC<SliderProps> = ({ pictures }) => {
  console.log(pictures);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  //aqui quando o prevIndex for 0 ele vai pro final do array com pictures.length - 1

  console.log(currentIndex);
  return (
    <SliderContainer>
      <SliderWrapper>
        <Slide>
          <Image
            src={pictures[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
          />
        </Slide>
      </SliderWrapper>
      <NavButton onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </NavButton>
      <NavButton onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </NavButton>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;
  width: 50rem;
  height: 50rem;

  @media (max-width: 768px) {
    width: 40rem;
    height: 40rem;
  }

  @media (max-width: 480px) {
    width: 30rem;
    height: 30rem;
  }

  @media (max-width: 320px) {
    width: 20rem;
    height: 20rem;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  flex: 1 0 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  background-color: transparent;
  transform: translateY(-50%);
  font-size: 4rem;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:first-of-type {
    left: -5rem;
  }

  &:last-of-type {
    right: -5rem;
  }
`;
