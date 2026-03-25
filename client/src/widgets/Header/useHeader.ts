import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authorizedUserSelector } from '../../entities';

export const useHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authorizedUser = useSelector(authorizedUserSelector);

    const onLogout = () => {
        navigate('/');
    };

    return {
        authorizedUser,
        onLogout,
    };
};
