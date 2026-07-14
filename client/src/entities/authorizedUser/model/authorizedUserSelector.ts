import type { RootState } from '../../../app/store';

export const authorizedUserSelector = (state: RootState) =>
    state.authorizedUser;
