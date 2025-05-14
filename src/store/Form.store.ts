import { create } from 'zustand';

interface FormDialog {
    openForm: boolean;
    setOpenForm: (openForm: boolean) => void;
}

export const useFormStore = create<FormDialog>((set) => ({
    openForm: false,
    setOpenForm: (openForm) => set({ openForm }),
}));