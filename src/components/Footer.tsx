import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer: React.FC = () => {
 
  return (
    <Container>
      <SocialLinks>
        <li>
          <a
            href="https://github.com/LucasTomazin1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lucas-tomazini-82042a301/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
      </SocialLinks>
      <span>Designed and coded by Lucas Tomazini</span>
      </Container>
  );
};

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  height: 12rem;
  border-top: 2px solid #202020;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  gap: 1rem;


  span {
    font-size: 2rem;
    font-weight: 700;
  }
  @media (max-width: 1024px) {
    height: 8rem;
    span {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    span {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    span {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 320px) {
    span {
      font-size: 1.2rem;
    }
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 5rem;

  li {
    transition: all 0.3s ease-in-out;
  }
  li:hover {
    transform: scale(1.1);
  }

  a {
    color: inherit;
    font-size: 2rem;
    transition: transform 0.2s ease-in-out;
  }

  @media (max-width: 1024px) {
    gap: 4rem;
    a {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    gap: 3rem;
    a {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 320px) {
    a {
      font-size: 1.2rem;
    }
  }
`;
