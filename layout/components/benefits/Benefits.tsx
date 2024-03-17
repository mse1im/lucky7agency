import Container from "../container/Container";
import "./Benefits.scss";
import Counter from "./Counter";

const Benefits: React.FC<IBenefitsProps> = () => {
  return (
    <section className="benefits">
      <Container>
        <div className="benefits-wrapper">
          <ul>
            <Counter start={0} end={850} duration={5000} subtitle="Yayıncı" />
            <Counter
              start={0}
              end={250}
              duration={5000}
              subtitle="İçerik / Video"
            />
            <li className="counter">
              <div className="counter-value">1M +</div>
              <div className="counter-subtitle">Beğeni</div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
export default Benefits;
