import type { JSX } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    AuthorizationPage,
    MainPage,
    NotFoundPage,
    RegistrationPage,
    UsersPage,
    WorkoutPage,
    WorkoutsPage,
    NewWorkoutPage,
} from '../../../pages';

const routes: { path: string; element: JSX.Element }[] = [
    { path: '/', element: <MainPage /> },
    { path: '/login', element: <AuthorizationPage /> },
    { path: '/register', element: <RegistrationPage /> },
    { path: '/workout', element: <NewWorkoutPage /> },
    { path: '/workouts/:id', element: <WorkoutPage /> },
    { path: '/workouts', element: <WorkoutsPage /> },
    { path: '/users', element: <UsersPage /> },
    { path: '*', element: <NotFoundPage /> },
];

export const RoutesContainer: React.FC = () => {
    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route path={path} element={element} />
            ))}
        </Routes>
    );
};
