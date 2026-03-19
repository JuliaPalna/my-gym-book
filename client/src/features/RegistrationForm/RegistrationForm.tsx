import { Button, ErrorMessage, FieldWrapper, Input } from '../../shared';
import { useRegistrationForm } from './useRegistrationForm';

export const RegistrationForm = () => {
    const {
        formState,
        register,
        errorServer,
        handleSubmit,
        onSubmit,
        onResetErrorServer,
    } = useRegistrationForm();

    return (
        <>
            <h1>Регистрация</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
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

                <FieldWrapper
                    htmlFor="passwordConfirm"
                    title="Пароль повторно"
                    error={formState.errors.passwordConfirm?.message}
                >
                    <Input
                        {...register('passwordConfirm', {
                            onChange: onResetErrorServer,
                        })}
                        type="password"
                        autoComplete="passwordConfirm"
                    />
                </FieldWrapper>

                <Button type="submit" disabled={!formState.isValid}>
                    Зарегистрироваться
                </Button>

                {errorServer && <ErrorMessage>{errorServer}</ErrorMessage>}
            </form>
        </>
    );
};
