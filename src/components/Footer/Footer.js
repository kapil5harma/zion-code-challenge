import React from 'react';
import { Segment, Grid, Container, Header, List, Divider, Image } from 'semantic-ui-react';
import BoostLogo from '../../assets/images/BoostLogo.jpg';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='Footer'>
      <Segment inverted vertical>
        <Container textAlign='center'>
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 1' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 2' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 3' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4' content='Social Links' />
              <p>Extra space for social icons that could help spread the word on social media.</p>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <Image centered size='mini' src={BoostLogo} />
          <List horizontal inverted divided link size='small'>
            <List.Item as='a' href='#'>
              Site Map
            </List.Item>
            <List.Item as='a' href='#'>
              Contact Us
            </List.Item>
            <List.Item as='a' href='#'>
              Terms and Conditions
            </List.Item>
            <List.Item as='a' href='#'>
              Privacy Policy
            </List.Item>
          </List>
          <List>
            <List.Item>&copy;{new Date().getFullYear()} Kapil Sharma, All rights reserved</List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
