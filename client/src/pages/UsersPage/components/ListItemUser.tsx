import { useOpen } from '../../../app/hooks';
import {
    Button,
    ConfirmDeleteModal,
    ErrorMessage,
    formatDateYYYYMMDD,
    Loader,
} from '../../../shared';
import type { ListItemProps } from './type';
import { useListItemUser } from './useListItemUser';

export const ListItemUser = ({
    user,
    roles,
}: ListItemProps): React.JSX.Element => {
    const { login, registeredAt } = user;
    const {
        roleSelected,
        stateRemove: [errorRemove, isRemoving, onRemove],
        stateUpdate: [errorUpdate, isUpdating, onSave],
        onChangeRoleSelected,
    } = useListItemUser(user);
    const { isOpen, onOpen, onClose } = useOpen();

    return (
        <li
            className="grid grid-cols-2 gap-list sm:grid-cols-4
            border-t-2 border-brand-border py-2"
        >
            <span className="col-end-2">{login}</span>

            <span className="col-end-2 row-start-2 sm:col-auto sm:row-auto">
                {formatDateYYYYMMDD(registeredAt)}
            </span>

            <select
                defaultValue={roleSelected}
                onChange={onChangeRoleSelected}
                className="col-end-2 row-start-3 sm:col-auto sm:row-auto"
            >
                <option key="default" disabled>
                    Выбрать
                </option>

                {roles.map((role) => {
                    return (
                        <option key={role.id} value={role.id}>
                            {role.title}
                        </option>
                    );
                })}
            </select>

            <div
                className="col-start-2 row-start-1 row-end-4 sm:col-auto sm:row-auto
                flex-column sm:flex-row gap-list"
            >
                <Button disabled={isUpdating} onClick={onSave}>
                    {isUpdating ? <Loader /> : 'C'}
                </Button>

                <Button disabled={isOpen} onClick={onOpen}>
                    {isOpen ? <Loader /> : 'D'}
                </Button>
            </div>

            {isOpen && (
                <ConfirmDeleteModal
                    message="Подтвердите удаление пользователя?"
                    onConfirm={() => {
                        onRemove();

                        if (!errorRemove) {
                            onClose();
                        }
                    }}
                    onCancel={onClose}
                    isConfirm={isRemoving}
                    error={errorRemove}
                />
            )}

            {errorUpdate && <ErrorMessage>{errorUpdate}</ErrorMessage>}
        </li>
    );
};
