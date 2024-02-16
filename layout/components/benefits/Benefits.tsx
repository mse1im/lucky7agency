import Container from "../container/Container";
import "./Benefits.scss";
import Counter from "./Counter";

const Benefits: React.FC<IBenefitsProps> = () => {
  return (
    <section className="benefits">
      <Container>
        <div className="benefits-wrapper">
          <ul>
            <Counter start={0} end={100} duration={5000} subtitle="Yayıncı" />
            <Counter
              start={0}
              end={50000}
              duration={5000}
              subtitle="İçerik / Video"
            />
            <Counter
              start={0}
              end={10000000}
              duration={5000}
              subtitle="Beğeni"
            />
            <Counter
              start={0}
              end={100000}
              duration={5000}
              subtitle="Yayıncılarımızın Kazancı"
            />
            <Counter
              start={50}
              end={350}
              duration={5000}
              subtitle="X"
            />
          </ul>
        </div>
      </Container>
    </section>
  );
};
export default Benefits;
