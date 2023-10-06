import { currentYearDisplay } from "../../../utils/helpers";
import { ReactComponent as GithubIcon } from "./gitHub.svg";
import { ReactComponent as LinkedInIcon } from "./linkedIn.svg";
import {
  Copywrite,
  LinkEmail,
  SocialIcon,
  StyledFooter,
  Wrapper,
} from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <LinkEmail
          title="nataliamazur1988@gmail.com"
          href="mailto:nataliamazur1988@gmail.com"
        >
          nataliamazur1988@gmail.com
        </LinkEmail>
        <div>
          <SocialIcon
            target="_blank"
            href="https://github.com/maxnatalia"
            title="Github"
          >
            <GithubIcon />
          </SocialIcon>
          <SocialIcon
            target="_blank"
            href="https://www.linkedin.com/in/natalia-mazur-%C5%BCurek-136a35254/"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </SocialIcon>
        </div>
      </Wrapper>
      <Copywrite>Natalia Mazur-Żurek &copy; {currentYearDisplay()}</Copywrite>
    </StyledFooter>
  );
};

export default Footer;
