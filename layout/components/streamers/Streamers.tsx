import Container from "../container/Container";
import "./Streamers.scss";

const Streamers: React.FC<IStreamersProps> = () => {
  return (
    <section className="streamers" id="streamers">
      <Container>
        <div className="title">
          <span>Lucky 7 Agency</span>
          <h2>Yayıncılarımız</h2>
        </div>
      </Container>
    </section>
  );
};
export default Streamers;
