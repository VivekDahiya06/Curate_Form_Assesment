import { create } from 'zustand';
import type { Form_Data_Types } from '../types/Profile.types';
import type { Related_Info_Form_Types } from '../types/Related_Info.types';

interface Global_Form_Data_Type {
    Profile_Data: Form_Data_Types;
    Related_Info_Data: Related_Info_Form_Types;
}

interface FormDialog {
    openForm: boolean;
    setOpenForm: (openForm: boolean) => void;
    GlobalFormData: Global_Form_Data_Type;
    setGlobalFormData: (GlobalFormData: Global_Form_Data_Type) => void;
}

export const useFormStore = create<FormDialog>((set) => ({
    openForm: false,
    setOpenForm: (openForm) => set({ openForm }),
    GlobalFormData: {} as Global_Form_Data_Type,
    setGlobalFormData: (GlobalFormData) => set({ GlobalFormData }),
}));