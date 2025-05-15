import { Box, Button, FormControl, FormLabel, TextField } from '@mui/material';
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { useFormStore } from '../../store/Form.store';
import type { Input_Event_Type, Related_Info_Form_Types } from '../../types/Related_Info.types';

const Related_Info = () => {

    
    // Constant styles for Form Labels
    const Form_Label_Styles = {
        fontSize: { xs: "0.78rem", sm: "0.87rem" },
        color: "black",
        fontWeight: "bold"
    }

    
    //States
    const setOpenForm = useFormStore((state) => state.setOpenForm);
    const openForm = useFormStore((state) => state.openForm);
    const setGlobalFormData = useFormStore((state) => state.setGlobalFormData);
    const GlobalFormData = useFormStore((state) => state.GlobalFormData);
    const [form_Data, setForm_Data] = useState<Related_Info_Form_Types>({
        domicile: '',
        maritalStatus: '',
        currentAddress: '',
        country: '',
        placeOfBirth: '',
        religion: '',
        citizenIdentification: '',
        dateOfIssue: '',
        placeOfIssue: '',
        resident: '',
        bankAccountNumber: '',
        bankAccountName: '',
        bankName: '',
        personalTaxCode: '',
        epfNo: '',
        socialSecurityNo: '',
        facebook: '',
        linkedin: '',
        skype: ''
    });


    // Functions
    const handle_Form_Submit = (e: React.FormEvent) => {
        e.preventDefault();
        setGlobalFormData({ ...GlobalFormData, Related_Info_Data: form_Data });
        setOpenForm(!openForm);
    }

    const handle_Change = (e: Input_Event_Type) => {
        const { name, value } = e.target;
        setForm_Data({ ...form_Data, [name]: value });
    }


    return (
        <main className="py-4 px-2 w-full flex flex-col sm:flex-row sm:justify-between gap-10">
            <section className="Left_Section px-4 w-full">
                <form onSubmit={(e: React.FormEvent) => handle_Form_Submit(e)} className="Form_Container w-full h-full">
                    <FormControl fullWidth className="flex flex-col gap-[4rem]">
                        <Box className="w-full flex flex-wrap justify-between gap-4">
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Domicile</FormLabel>
                                <TextField fullWidth size="small" name="domicile" value={form_Data.domicile} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Marital Status</FormLabel>
                                <TextField fullWidth size="small" name="maritalStatus" value={form_Data.maritalStatus} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Current Address</FormLabel>
                                <TextField fullWidth size="small" name="currentAddress" value={form_Data.currentAddress} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Nation</FormLabel>
                                <TextField fullWidth size="small" name="country" value={form_Data.country} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Place of Birth</FormLabel>
                                <TextField fullWidth size="small" name="placeOfBirth" value={form_Data.placeOfBirth} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Religion</FormLabel>
                                <TextField fullWidth size="small" name="religion" value={form_Data.religion} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Citizen Identification</FormLabel>
                                <TextField fullWidth size="small" name="citizenIdentification" value={form_Data.citizenIdentification} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Date of Issue</FormLabel>
                                <TextField fullWidth size="small" name="dateOfIssue" value={form_Data.dateOfIssue} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Place of Issue</FormLabel>
                                <TextField fullWidth size="small" name="placeOfIssue" value={form_Data.placeOfIssue} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Resident</FormLabel>
                                <TextField fullWidth size="small" name="resident" value={form_Data.resident} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Bank Account Number</FormLabel>
                                <TextField fullWidth size="small" name="bankAccountNumber" value={form_Data.bankAccountNumber} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Bank Name</FormLabel>
                                <TextField fullWidth size="small" name="bankName" value={form_Data.bankName} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Personal Tax Code</FormLabel>
                                <TextField fullWidth size="small" name="personalTaxCode" value={form_Data.personalTaxCode} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>EPF No.</FormLabel>
                                <TextField fullWidth size="small" name="epfNo" value={form_Data.epfNo} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={Form_Label_Styles}>Social Security No.</FormLabel>
                                <TextField fullWidth size="small" name="socialSecurityNo" value={form_Data.socialSecurityNo} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={{ display:'flex',alignItems:'center', gap:1 ,...Form_Label_Styles }}><FaFacebook size={16} /> Facebook</FormLabel>
                                <TextField fullWidth size="small" name="facebook" value={form_Data.facebook} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={{ display:'flex',alignItems:'center', gap:1 ,...Form_Label_Styles }}><FaLinkedin size={16} />LinkedIn</FormLabel>
                                <TextField fullWidth size="small" name="linkedin" value={form_Data.linkedin} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                            <Box className="flex flex-col">
                                <FormLabel sx={{ display:'flex',alignItems:'center', gap:1 ,...Form_Label_Styles }}><IoLogoSkype size={16} />Skype</FormLabel>
                                <TextField fullWidth size="small" name="skype" value={form_Data.skype} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                            </Box>
                        </Box>

                        <Box className="Buttons_Container flex flex-row justify-end gap-3 sm:gap-5">
                            <Button variant="outlined" color="inherit" sx={{ textTransform: 'none' }} onClick={() => setOpenForm(false)}>
                                Close
                            </Button>
                            <Button variant="contained" type='submit' color="success" sx={{ textTransform: 'none' }}>
                                Save
                            </Button>
                        </Box>
                    </FormControl>
                </form>
            </section>
        </main>
    )
}

export default Related_Info;
