import { type JSX } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    AuthorizationPage,
    ErrorPage,
    MainPage,
    RegistrationPage,
    WorkoutPage,
} from '../../../pages';

export const RoutesContainer = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="/login" element={<AuthorizationPage />} />
            <Route path="/register" element={<RegistrationPage />} />

            <Route path="/workouts/:id" element={<WorkoutPage />} />

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};
