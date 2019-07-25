import React from 'react';
import { Menu, Dropdown, Container, Image } from 'semantic-ui-react';
import BoostLogo from '../../assets/images/BoostLogo.jpg';

const Header = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src={BoostLogo} style={{ marginRight: '1.5em' }} />
          Boost
        </Menu.Item>
        <Menu.Item as='a'>Menu Item 1</Menu.Item>
        <Menu.Item as='a'>Menu Item 2</Menu.Item>
        <Menu.Item as='a'>Menu Item 3</Menu.Item>

        <Dropdown item simple text='Menu Item 4'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
};

export default Header;
