import { Link } from 'react-router-dom';
import {
    Button,
    ErrorMessage,
    FieldWrapper,
    Form,
    Input,
    Loader,
    Title,
} from '../../shared';
import { useAuthorizationPage } from './useAuthorizationPage';

const AuthorizationPage = (): React.JSX.Element => {
    const {
        formState,
        register,
        errorAuthorization,
        isAuthorization,
        handleSubmit,
        onSubmitAuthorization,
    } = useAuthorizationPage();

    return (
        <>
            <Title>Вход</Title>

            <Form onSubmit={handleSubmit(onSubmitAuthorization)}>
                <>
                    <FieldWrapper
                        htmlFor="login"
                        title="Логин"
                        error={formState.errors.login?.message}
                    >
                        <Input
                            {...register('login', {})}
                            autoComplete="username"
                        />
                    </FieldWrapper>

                    <FieldWrapper
                        htmlFor="password"
                        title="Пароль"
                        error={formState.errors.password?.message}
                    >
                        <Input
                            {...register('password', {})}
                            type="password"
                            autoComplete="current-password"
                        />
                    </FieldWrapper>

                    <Button
                        type="submit"
                        disabled={!formState.isValid || isAuthorization}
                    >
                        {isAuthorization ? <Loader /> : 'Войти'}
                    </Button>

                    <Link
                        to="/register"
                        className="font-semibold max-w-25
                        hover:text-brand-primary-hover transition-colors"
                    >
                        Регистрация
                    </Link>

                    {errorAuthorization && (
                        <ErrorMessage>{errorAuthorization}</ErrorMessage>
                    )}
                </>
            </Form>
        </>
    );
};

export default AuthorizationPage;
