import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  const handleredirect = () => {
    console.log("redirecting");
    window.location.replace("http://localhost:3001/login");
  };
  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Frontend One</h1>
          <p className="text-center mb-4">
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library
          </p>
          <div className="d-flex">
            <Button variant="primary" className="me-3" onClick={handleredirect}>
              Redirect to Frontend Two
            </Button>
            {/* <LinkContainer to="/register">
              <Button variant="secondary" href="/register">
                Register
              </Button>
            </LinkContainer> */}
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
