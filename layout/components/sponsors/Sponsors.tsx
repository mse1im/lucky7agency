import Container from "../container/Container";
import "./Sponsors.scss";

const Sponsors: React.FC<ISponsorsProps> = () => {
  return (
    <section className="sponsors">
      <Container>
        <div className="title">
          <span>Lucky 7 Agency</span>
          <h2>Sponsorlarımız</h2>
        </div>
      </Container>
    </section>
  );
};
export default Sponsors;
