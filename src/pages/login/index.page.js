import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { BlueButton } from "../../components/BlueButton";
import { Header } from "../../components/Header";
import Input from "../../components/Input";
import styles from "./Login.module.scss";

export default function Login() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const router = useRouter();

  const checkboxContent = {
    content: "Manter conectado neste dispositivo",
    slug: "stay_connected",
  };

  const onSubmit = async ({ email, password }) => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      return router.back();
    }

    const responseErrors = {
      401: "Verifique se suas informações estão corretas",
      404: "Email não encontrado",
    };

    setError("password", {
      type: "custom",
      message: responseErrors[res.status],
    });
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.login}>
          <div className={styles.login__form}>
            <div className={styles.login__form__content}>
              <h2>Login</h2>
              <Input.Email
                label="Email"
                name="email"
                control={control}
                rules={{ required: true }}
                errors={errors.email}
              />
              <Input.Password
                label="Senha"
                name="password"
                control={control}
                rules={{ required: true }}
                errors={errors.password}
              />
              <Input.Checkbox
                label={checkboxContent["content"]}
                name={checkboxContent["slug"]}
                control={control}
                rules={{ required: false }}
                isBold={true}
              />
              <Input.Error
                isActive={errors?.login}
                message={errors.login?.message}
              />
              <BlueButton value="Fazer login" margin="10px 0" type="submit" />
              <Link href="/">
                <a className={styles.login__form__content__forgot_password}>
                  Esqueceu sua senha?
                </a>
              </Link>
              <p className={styles.login__form__content__create_account}>
                Não tem uma conta?
                <Link href="/register">
                  <span> Crie uma</span>
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.login__background}>
            <img src="/images/dog-playing.svg" />
          </div>
        </div>
      </form>
    </>
  );
}
