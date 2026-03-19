import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { Button, ErrorMessage, FieldWrapper, Input } from '../../shared';
import { useAuthorizationForm } from './useAuthorizationForm';

export const AuthorizationForm = (): JSX.Element => {
    const {
        formState,
        register,
        errorServer,
        handleSubmit,
        onSubmit,
        onResetErrorServer,
    } = useAuthorizationForm();

    return (
        <>
            <h1>Вход</h1>

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

                <Button type="submit" disabled={!formState.isValid}>
                    Войти
                </Button>

                <Link to="/register">Регистрация</Link>

                {errorServer && <ErrorMessage>{errorServer}</ErrorMessage>}
            </form>
        </>
    );
};
