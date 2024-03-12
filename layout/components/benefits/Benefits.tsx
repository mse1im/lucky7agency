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
            <Counter
              start={0}
              end={1000000}
              duration={5000}
              subtitle="Beğeni"
            />
          </ul>
        </div>
      </Container>
    </section>
  );
};
export default Benefits;
