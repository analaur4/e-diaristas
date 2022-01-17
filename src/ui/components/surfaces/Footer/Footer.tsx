import { AppList, FooterContainer, FooterGrid, FooterListItem, FooterSocialList, FooterTitle, SocialButton, SocialContainer } from './Footer.style';
import { Box, List, Typography } from '@mui/material';
import Link from 'ui/components/navigation/Link/Link';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterGrid>
                <div>
                    <FooterTitle>Menu</FooterTitle>
                    <List>
                        <FooterListItem>
                            <Link href={'/encontrar-diarista'} mui={{color: 'inherit', variant: 'body2'}}>
                                Encontrar um(a) diarista
                            </Link>
                        </FooterListItem>
                        <FooterListItem>
                            <Link href={'/cadastro-diarista'} mui={{color: 'inherit', variant: 'body2'}}>
                                Seja um(a) diarista
                            </Link>
                        </FooterListItem>
                        <FooterListItem>
                            <Link href={'/'} mui={{color: 'inherit', variant: 'body2'}}>
                                Por que usar o E-Diaristas?
                            </Link>
                        </FooterListItem>
                        <FooterListItem>
                            <Link href={'/'} mui={{color: 'inherit', variant: 'body2'}}>
                                Principais dúvidas
                            </Link>
                        </FooterListItem>
                    </List>
                </div>

                <Box sx={{maxWidth: '400px'}}>
                    <FooterTitle>Quem somos</FooterTitle>
                    <Typography variant={'body2'} sx={{mt: 2}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa accusantium minus perferendis quaerat dicta maiores inventore dolorum animi suscipit quos sequi molestiae in, incidunt quae vel eos aliquid alias quidem!
                    </Typography>
                </Box>

                <SocialContainer>
                    <Box>
                        <FooterTitle>Baixe nossos aplicativos</FooterTitle>
                        <AppList>
                            <li>
                                <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                                    <img src={'/img/logos/app-store.png'} alt={'AppStore'} />
                                </a>
                            </li>
                            <li>
                                <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                                    <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
                                </a>
                            </li>
                        </AppList>
                    </Box>

                    <div>
                        <FooterTitle>Redes Sociais</FooterTitle>
                        <FooterSocialList>
                            <FooterListItem>
                                <SocialButton href={'/'}>
                                    <i className={'twf-facebook-f'} />
                                </SocialButton>
                            </FooterListItem>
                            <FooterListItem>
                                <SocialButton href={'/'}>
                                    <i className={'twf-instagram'} />
                                </SocialButton>
                            </FooterListItem>
                            <FooterListItem>
                                <SocialButton href={'/'}>
                                    <i className={'twf-youtube'} />
                                </SocialButton>
                            </FooterListItem>
                        </FooterSocialList>
                    </div>
                </SocialContainer>
            </FooterGrid>
        </FooterContainer>
    )
}

export default Footer;
