import React, { FC } from 'react';
import {
  JumbotronContainer,
  Subtext,
  Button,
  Highligt,
  ButtonContainer,
  SecondaryButton,
  HeadlineImage,
  BigLogo,
  Content,
  BottomFadeLine,
  PairLogo,
  SmallText,
} from './Styles';
import { Link } from '@reach/router';

const Jumbotron: FC = () => {
  return (
    <JumbotronContainer>
      <BigLogo />
      <PairLogo />

      <BottomFadeLine />

      <Content>
        <HeadlineImage />
        <Subtext>
          Use the best of two worlds.
          <br />
          Create fast, performant, native <Highligt>Web Components</Highligt> using{' '}
          <Highligt>React</Highligt>.
        </Subtext>
        <ButtonContainer>
          <Link to='/get-started'>
            <Button>→ Get Started</Button>
          </Link>
          <a href='https://github.com/Silind-Software/direflow' target='_blank'>
            <SecondaryButton>View on Github</SecondaryButton>
          </a>
        </ButtonContainer>
        <SmallText>
          Open-Source{' '}
          <Highligt>
            <a href='https://github.com/Silind-Software/direflow/blob/master/LICENSE'>MIT</a>
          </Highligt>{' '}
          License.{' '}
          <a href='https://github.com/Silind-Software/direflow' target='_blank'>
            GitHub (v. 3.3.0)
          </a>
        </SmallText>
      </Content>
    </JumbotronContainer>
  );
};

export default Jumbotron;
