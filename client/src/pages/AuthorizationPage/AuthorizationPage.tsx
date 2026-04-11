import { Link } from 'react-router-dom';
import { Button, ErrorMessage, FieldWrapper, Input, Title } from '../../shared';
import { useAuthorizationPage } from './useAuthorizationPage';

export const AuthorizationPage: React.FC = () => {
    const {
        formState,
        register,
        errorState,
        isLoading,
        handleSubmit,
        onSubmitAuthorization,
        onResetErrorServer,
    } = useAuthorizationPage();

    return (
        <>
            <Title>Вход</Title>

            <form
                onSubmit={handleSubmit(onSubmitAuthorization)}
                className="flex flex-col justify-center gap-5
                min-h-full max-w-xl m-auto  px-1 py-12 lg:px-8"
            >
                <FieldWrapper
                    htmlFor="login"
                    title="Логин"
                    error={formState.errors.login?.message}
                >
                    <Input
                        {...register('login', {
                            onChange: onResetErrorServer,
                        })}
                        autoComplete="username"
                    />
                </FieldWrapper>

                <FieldWrapper
                    htmlFor="password"
                    title="Пароль"
                    error={formState.errors.password?.message}
                >
                    <Input
                        {...register('password', {
                            onChange: onResetErrorServer,
                        })}
                        type="password"
                        autoComplete="current-password"
                    />
                </FieldWrapper>

                <Button
                    type="submit"
                    disabled={!formState.isValid || isLoading}
                >
                    'Войти'
                </Button>

                <Link
                    to="/register"
                    className=" font-semibold text-taupe-700
                    hover:text-teal-500 transition-colors max-w-25"
                >
                    Регистрация
                </Link>

                {errorState && <ErrorMessage>{errorState}</ErrorMessage>}
            </form>
        </>
    );
};
