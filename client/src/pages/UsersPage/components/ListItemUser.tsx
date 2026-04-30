import { useOpen } from '../../../app/hooks';
import { Button, ConfirmDeleteModal, ErrorMessage } from '../../../shared';
import { timestampToInputValue } from '../../../utils';
import type { ListItemProps } from './type';
import { useListItemUser } from './useListItemUser';

export const ListItemUser: React.FC<ListItemProps> = ({ user, roles }) => {
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
            className="grid grid-cols-2 gap-1 sm:grid-cols-4
            border-t-2 border-neutral-400 py-2"
        >
            <span className="col-end-2">{login}</span>

            <span className="col-end-2 row-start-2 sm:col-auto sm:row-auto">
                {timestampToInputValue(registeredAt)}
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
                flex flex-col sm:flex-row gap-1"
            >
                <Button disabled={isUpdating} onClick={onSave}>
                    С
                </Button>
                <Button disabled={isOpen} onClick={onOpen}>
                    Y
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
