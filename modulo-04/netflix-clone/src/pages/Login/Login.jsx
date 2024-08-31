import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { HeaderLogin, Logo } from "../Login/HeaderLogin";
import bg from "../../assets/bg.jpg";
import logo from "../../assets/logo.png";

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    padding: 48px 68px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
`

const Title = styled.h2`
    color: #fff;
    margin-bottom: 28px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Input = styled.input`
    line-height: 1.5;
    padding: 1.5rem 1rem 0.5rem 1rem;
    background: rgba(22, 22, 22, 0.7);
    border-radius: 0.25rem;
    border: solid 1px;
    border-color: rgba(128, 128, 128, 0.7);
    color: #fff;
`

const Button = styled.button`
    color: #fff;
    background-color: #ff0000;
    padding: 0.375rem 1rem;
    min-height: 2.5rem;
    border-style: solid;
    border-width: .0625rem;
    border-radius: calc(0.25rem - 0.0625rem);
    border-color: rgba(0, 0, 0, 0);

    &:hover{
        background-color: #b11b1b;
    }
`
const ButtonSignIn = styled(Button)`
    background: rgba(128, 128, 128, 0.4);
    font-weight: 500;

    &:hover{
        background-color: rgba(128, 128, 128, 0.2);
    }
`

const Text = styled.p`
    font-size: 1rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
`

const TextLink = styled.p`
    color: #fff;
    cursor: pointer;
    text-align: center;

    &:hover{
        text-decoration: underline;
        color: #fff;
    }
`

const ContainerCheckbox = styled.div`
    display: inline-block;
    margin-top: 16px;
`

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    border-radius: 0.125rem;
    height: 1.125rem;
    width: 1.125rem;
    border-width: 0.0625rem;
    border-color: rgba(128, 128, 128, 0.7);

    &:before{
        background: #000;
    }
`;

const Label = styled.label`
    color: #fff;
    padding-left: 0.75rem;
    margin-top: 16px;
`

const TextSubscribreNow = styled(Text)`
    color: #fff;
    text-align: start;
    margin-top: 16px;
`

const SpanLink = styled.span`
    color: #fff;
    cursor: pointer;
    text-align: start;

    &:hover{
        text-decoration: underline;
        color: #fff;
    }
`

const TextProtect = styled(Text)`
    text-align: start;
    margin-top: 16px;
    font-size: 13px;
`

const TextHidden = styled(TextProtect)`
    opacity: 0;
    visibility: hidden;

    a{
        color: #0071eb;
    }

    &a:hover{
        text-decoration: underline;
        color: #0071eb;
    }
`

const SpanMore = styled(SpanLink)`
    color: #0071eb;

    &:hover{
        text-decoration: underline;
        color: #0071eb;
    }
`

const AppContainer = styled.div`
    background-color: #000;
    background: url(${bg});
    width: 100%;
`

const BackgroundOpacity = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    padding-top: 4.5rem;
`

const Footer = styled.footer`
    border-top: none;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgb(0, 0, 0) 20%);
    color: rgba(255, 255, 255, 0.7);
`

const ContainerFooter = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 4.5rem;
`

const FooterWrapper = styled.div`
    padding: 4.5rem 3rem 4.5rem 3rem;
    max-width: calc(83.33333333333334% -(3rem* 2));
`

const NavFooter = styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: calc(100% + 0.75rem);
    font-size: 0.875rem;
`

const NavLi = styled.li`
    flex: 0 0 calc(25% - 0.75rem);
    margin-top: 1rem;
    margin-left: 0.75rem;
`

const NavFooterLink = styled.a`
    text-decoration: underline;
    color: rgba(255, 255, 255, 0.7);
`
const SelectLanguage = styled.select`
    line-height: 1.25rem;
    padding-top: 0.375rem;
    padding-right: calc(2.25rem + 0rem);
    padding-bottom: 0.375rem;
    padding-left: calc(0.625rem + 1rem + 0.5rem);
    background-color: #000;
    color: #fff
`

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (e.target.checkValidity()) {
        navigate('/home');
      }
    };

    return (
        <AppContainer>
            <BackgroundOpacity>
                <HeaderLogin>
                    <Logo src={logo} />
                </HeaderLogin>
                <Container>
                    <Title>Entrar</Title>
                    <Form onSubmit={handleSubmit}>
                        <Input type="email" placeholder="Email ou número de celular" required/>
                        <Input type="password" placeholder="Senha"/>
                        <Button type="submit">Entrar</Button>
                        <Text>OU</Text>
                        <ButtonSignIn>Usar um código de acesso</ButtonSignIn>
                        <TextLink to="#">Esqueceu a senha?</TextLink>
                    </Form>
                    <ContainerCheckbox>
                        <Checkbox/>
                        <Label>Lembre-se de mim</Label>
                    </ContainerCheckbox>
                    <TextSubscribreNow>Novo por aqui? <SpanLink><b>Assine agora.</b></SpanLink></TextSubscribreNow>
                    <TextProtect>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <SpanMore>Saiba mais</SpanMore>.</TextProtect>
                    <TextHidden>The information collected by Google reCAPTCHA is subject to the <a href="https://policies.google.com/privacy" target="_blank">Google Privacy</a> Policy and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</TextHidden>
                </Container>
            </BackgroundOpacity>
            <ContainerFooter>
                <Footer>
                    <FooterWrapper>
                        <p>Dúvidas? Ligue 0800 591 2876</p>
                        <NavFooter>
                            <NavLi><NavFooterLink href="#">Perguntas Frequentes</NavFooterLink></NavLi>
                            <NavLi><NavFooterLink href="#">Central de Ajuda</NavFooterLink></NavLi>
                            <NavLi><NavFooterLink href="#">Termos de Uso</NavFooterLink></NavLi>
                            <NavLi><NavFooterLink href="#">Privacidade</NavFooterLink></NavLi>
                            <NavLi><NavFooterLink href="#">Preferência de cookies</NavFooterLink></NavLi>
                            <NavLi><NavFooterLink href="#">Perguntas Frequentes</NavFooterLink></NavLi>
                            <NavLi><NavFooterLink href="#">Informações corporativas</NavFooterLink></NavLi>
                        </NavFooter>
                        <SelectLanguage>
                            <option>Português</option>
                            <option>Inglês</option>
                        </SelectLanguage>
                    </FooterWrapper>
                </Footer>
            </ContainerFooter>
        </AppContainer>
    );
}

export default Login
