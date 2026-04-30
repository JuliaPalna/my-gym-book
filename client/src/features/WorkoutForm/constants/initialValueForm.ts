export const initialValueForm = {
    date: Date.now().toString(),
    description: '',
    durationMinutes: 0,
    types: [],
};

export type InitialValueForm = typeof initialValueForm;
