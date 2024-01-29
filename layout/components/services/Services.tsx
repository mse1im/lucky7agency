import Container from "../container/Container";
import "./Services.scss";

const Services: React.FC<IServicesProps> = () => {
  return (
    <section className="services" id="services">
      <Container>
      <div className="title">
          <span>Lucky 7 Agency</span>
          <h2>Hizmetlerimiz</h2>
        </div>
      </Container>
    </section>
  );
};
export default Services;
