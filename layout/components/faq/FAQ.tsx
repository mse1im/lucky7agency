import Container from "../container/Container";
import "./FAQ.scss";

const Faq: React.FC<IFaqProps> = () => {
  return (
    <section className="faq">
      <Container>
        <div className="title">
          <span>Lucky 7 Agency</span>
          <h2>Sıkça Sorulan Sorular</h2>
        </div>
      </Container>
    </section>
  );
};
export default Faq;
