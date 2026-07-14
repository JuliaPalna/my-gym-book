import { Suspense, lazy, type JSX } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoaderPage from '../../pages/LoaderPage';

const AuthorizationPage = lazy(() => import('../../pages/AuthorizationPage'));
const MainPage = lazy(() => import('../../pages/MainPage'));
const NewWorkoutPage = lazy(() => import('../../pages/NewWorkoutPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));
const UsersPage = lazy(() => import('../../pages/UsersPage'));
const WorkoutPage = lazy(() => import('../../pages/WorkoutPage'));
const WorkoutsPage = lazy(() => import('../../pages/WorkoutsPage'));

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

export const RoutesContainer = (): JSX.Element => {
    return (
        <Suspense fallback={<LoaderPage />}>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};
