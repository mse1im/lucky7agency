import Container from "../container/Container";
import "./Form.scss";

const Form: React.FC<IFormProps> = () => {
  return (
    <section className="form" id="form">
      <Container>
        <div className="title">
          <span>Lucky 7 Agency</span>
          <h2>Yayıncı Başvurusu Yapın</h2>
        </div>
      </Container>
    </section>
  );
};
export default Form;
