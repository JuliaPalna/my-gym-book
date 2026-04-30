import { Button, ErrorMessage, FieldWrapper, Input, Title } from '../../shared';
import { useRegistrationPage } from './useRegistrationPage';

export const RegistrationPage: React.FC = () => {
    const {
        formState,
        register,
        errorRegistration,
        isLoading,
        handleSubmit,
        onSubmitRegistration,
    } = useRegistrationPage();

    return (
        <>
            <Title>Регистрация</Title>

            <form
                onSubmit={handleSubmit(onSubmitRegistration)}
                className="flex flex-col justify-center gap-5
                min-h-full max-w-xl m-auto  px-1 py-12 lg:px-8"
            >
                <FieldWrapper
                    htmlFor="login"
                    title="Логин"
                    error={formState.errors.login?.message}
                >
                    <Input {...register('login', {})} autoComplete="username" />
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

                <FieldWrapper
                    htmlFor="passwordConfirm"
                    title="Пароль повторно"
                    error={formState.errors.passwordConfirm?.message}
                >
                    <Input
                        {...register('passwordConfirm', {})}
                        type="password"
                        autoComplete="passwordConfirm"
                    />
                </FieldWrapper>

                <Button
                    type="submit"
                    disabled={!formState.isValid || isLoading}
                >
                    Зарегистрироваться
                </Button>

                {errorRegistration && (
                    <ErrorMessage>{errorRegistration}</ErrorMessage>
                )}
            </form>
        </>
    );
};
