import type { RootState } from '../../typeStore';

export const authorizedUserSelector = (state: RootState) =>
    state.authorizedUser;
