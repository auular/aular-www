import styles from "./OurServices.module.scss";

const OurServices = () => {
  return (
    <div className={styles.our_services}>
      <h2>Entenda sobre os nossos serviços</h2>
      <div className={styles.our_services__content}>
        <div className={styles.our_services__card}>
          <img src="/images/hotel-key.svg" />
          <p>A segurança e o conforto de seu pet vem em primeiro lugar</p>
        </div>
        <div className={styles.our_services__card}>
          <img src="/images/dog-asking.svg" />
          <p>
            Os melhores cuidados e recreações para o seu pet, você só encontra
            aqui
          </p>
        </div>
      </div>
      <h3>
        Quer entender melhor sobre nossos serviços? <span>Acesse</span>
      </h3>
    </div>
  );
};

export default OurServices;
