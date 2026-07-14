import {
    Button,
    ErrorMessage,
    FieldWrapper,
    Form,
    Input,
    Loader,
    Title,
} from '../../shared';
import { useRegistrationPage } from './useRegistrationPage';

const RegistrationPage = (): React.JSX.Element => {
    const {
        formState,
        register,
        errorRegistration,
        isRegistration,
        handleSubmit,
        onSubmitRegistration,
    } = useRegistrationPage();

    return (
        <>
            <Title>Регистрация</Title>

            <Form onSubmit={handleSubmit(onSubmitRegistration)}>
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
                        disabled={!formState.isValid || isRegistration}
                    >
                        {isRegistration ? <Loader /> : 'Зарегистрироваться'}
                    </Button>

                    {errorRegistration && (
                        <ErrorMessage>{errorRegistration}</ErrorMessage>
                    )}
                </>
            </Form>
        </>
    );
};

export default RegistrationPage;
