import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    padding: 2rem;
    height: 4rem;
`

const Footer = () => (
    <FooterContainer>
        <p>Website source code - <a href="https://github.com/KERIST/rsschool-cv" target="_blank" rel="noreferrer">github</a></p>
    </FooterContainer>
)

export default Footer;