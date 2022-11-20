import Question from "./Question";
import styles from "./Faq.module.scss";

const Faq = () => {
  const questions = [
    {
      question: "Os locais são de confiança?",
      answer:
        "Todos nossos colaboradores são confiáveis, você pode deixar seu pet tranquilamente e aproveitar sua viagem. Todos possuem excelência em seus serviços",
    },
    {
      question: "Quais serviços a Auular oferece?",
      answer:
        "Nossos colaboradores oferecem diversos serviços, dentre eles os principais são os Hotéis e as Creches para você deixar seu pet em qualquer situação necessária.",
    },
    {
      question: "Posso conhecer o lugar antes de hospedar meu pet?",
      answer:
        "Em nosso site, temos todas as imagens disponíveis dos ambientes de nossos colaboradores.",
    },
  ];

  return (
    <div className={styles.faq}>
      <h3>Perguntas Frequentes</h3>
      <div>
        {questions.map(({ question, answer }, number) => (
          <Question number={number + 1} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
