import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css";

function NavBar() {
  return (
    <Navbar>
      <Container className="bg-body-tertiary">
      <img src="/fitsphere.png" class="rounded-float-left" alt="..."/>
        <Navbar.Brand className="logo" href="#home">FITSPHERE</Navbar.Brand>
        <NavDropdown className="workouts" title="Workouts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#gymWorkouts">Gym Workouts</NavDropdown.Item>
              <NavDropdown.Item href="#homeWorkouts">Home Workouts (No Equipment)</NavDropdown.Item>
            </NavDropdown>
        <Nav.Link href="#progress">Progress</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Grace Wang</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;