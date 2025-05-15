'use client'
import { Avatar, Box, Button, FormControl, FormLabel, InputAdornment, MenuItem, Select, Switch, TextField, type SelectChangeEvent } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Textarea } from '@mui/joy';
import { useFormStore } from '../../store/Form.store';
import type { Area_Event_Type, Form_Data_Types, Input_Event_Type } from '../../types/Profile.types';

const Profile = () => {


    // Type Definitions
    type Select_Event_Type = SelectChangeEvent


    // Constant styles for Form Labels
    const Form_Label_Styles = {
        fontSize: { xs: "0.78rem", sm: "0.87rem" },
        color: "black",
        fontWeight: "bold"
    }


    // States & Hooks
    const setOpenForm = useFormStore((state) => state.setOpenForm);
    const setGlobalFormData = useFormStore((state) => state.setGlobalFormData);
    const GlobalFormData = useFormStore((state) => state.GlobalFormData);
    const [profileHovered, setProfileHovered] = useState<boolean>(false);
    const [form_Data, setForm_Data] = useState<Form_Data_Types>({
        staff_code: '',
        first_name: '',
        last_name: '',
        gender: '',
        date_of_birth: '',
        email: '',
        phone_number: '',
        workplace: '',
        status: '',
        job_position: '',
        direct_manager: '',
        role: '',
        academic_level: '',
        hourly_rate: '',
        default_language: '',
        direction: '',
        email_signature: '',
        other_info: '',
        twilo_phone_number: '',
        is_twilo_phone_number_whatsapp_enabled: '',
        password: ''
    });



    //Functions
    const handle_Change = (e: Input_Event_Type | Select_Event_Type | Area_Event_Type) => {
        const { name, value } = e.target;
        if (name)
            setForm_Data({ ...form_Data, [name]: value });
    }

    const handle_Form_Submit = (e: React.FormEvent) => {
        e.preventDefault();
        setGlobalFormData({...GlobalFormData,Profile_Data:form_Data});
    }


    return (
        <main className="flex flex-col sm:flex-row py-4 px-2 gap-20 sm:gap-0">
            <section className="Profile_Section w-full flex flex-col items-center sm:items-start justify-between">
                <div className="Avatar_Form_Container w-full h-full p-2 flex flex-col items-center justify-evenly">
                    <div className='Avatar_And_Switch_Container w-full h-full p-2 flex flex-col items-center justify-start gap-5'>
                        <div className='Avatar_Container flex flex-col items-center justify-center gap-3'>
                            <Avatar className='relative' sx={{ width: 150, height: 150 }} onMouseEnter={() => setProfileHovered(true)} onMouseLeave={() => setProfileHovered(false)}>
                                <FaUserAlt className="relative" size={100} />
                                {
                                    profileHovered && (
                                        <div className="absolute z-5 w-full h-full flex items-center justify-center bg-slate-700 opacity-80">
                                            <IoCamera size={60} />
                                        </div>
                                    )
                                }
                                <input type='file' className="absolute z-40 opacity-0 w-full h-full items-center justify-center cursor-pointer" />

                            </Avatar>
                            <span className="text-[0.7rem] text-center">
                                Recommended dimensions: 200x200
                            </span>
                        </div>
                        <span className="">
                            Help Videos <Switch />
                        </span>
                    </div>
                    <form onSubmit={(e: React.FormEvent) => handle_Form_Submit(e)} className="Form_Container w-full h-full">
                        <FormControl fullWidth className="flex flex-col gap-[4rem]">
                            <Box className="w-full grid-cols-1 max-sm:gap-8 sm:gap-4" sx={{ display: 'grid' }}>
                                <Box className="flex flex-col gap-2">
                                    <FormLabel sx={Form_Label_Styles}>Staff Code<span className='text-red-600'>*</span></FormLabel>
                                    <TextField fullWidth required size="small" name="staff_code" value={form_Data.staff_code} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                </Box>
                                <Box className="flex justify-between gap-8">
                                    <Box className="flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>First Name<span className='text-red-600'>*</span></FormLabel>
                                        <TextField fullWidth required size="small" name="first_name" value={form_Data.first_name} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                    </Box>
                                    <Box className="flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Last Name<span className='text-red-600'>*</span></FormLabel>
                                        <TextField fullWidth required size="small" name="last_name" value={form_Data.last_name} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                    </Box>
                                </Box>
                                <Box className="flex items-center justify-between gap-8">
                                    <FormControl fullWidth>
                                        <FormLabel sx={{
                                            ...Form_Label_Styles, '&.Mui-focused': {
                                                color: 'inherit',
                                            }
                                        }}>Gender<span className='text-red-600'>*</span></FormLabel>
                                        <Select
                                            value={form_Data.gender}
                                            size="small"
                                            name="gender"
                                            displayEmpty
                                            fullWidth
                                            required
                                            onChange={(e: Select_Event_Type) => handle_Change(e)}
                                        >
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                            <MenuItem value="Other">Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <FormLabel
                                            sx={{
                                                ...Form_Label_Styles,
                                                '&.Mui-focused': {
                                                    color: 'black',
                                                }
                                            }}
                                        >
                                            Date of Birth
                                        </FormLabel>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                slotProps={{ textField: { error: false, size: "small", fullWidth: true } }}
                                                value={form_Data.date_of_birth ? dayjs(form_Data.date_of_birth) : null}
                                                onChange={(date) => {
                                                    const formatted_Date = date ? date.toDate().toLocaleDateString() : '';
                                                    return setForm_Data({ ...form_Data, date_of_birth: formatted_Date });
                                                }}
                                            />
                                        </LocalizationProvider>
                                    </FormControl>
                                </Box>
                                <Box className="flex justify-between gap-8">
                                    <Box className="flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Email<span className='text-red-600'>*</span></FormLabel>
                                        <TextField fullWidth required size="small" name="email" value={form_Data.email} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                    </Box>
                                    <Box className="flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Phone<span className='text-red-600'>*</span></FormLabel>
                                        <TextField fullWidth required size="small" name="phone_number" value={form_Data.phone_number} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                    </Box>
                                </Box>
                                <Box className="flex justify-between gap-8">
                                    <Box className="flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Workplace</FormLabel>
                                        <TextField fullWidth size="small" name="workplace" value={form_Data.workplace} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                    </Box>
                                    <Box className="flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Status<span className='text-red-600'>*</span></FormLabel>
                                        <TextField fullWidth required size="small" name="status" value={form_Data.status} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                    </Box>
                                </Box>
                                <Box className="flex justify-between gap-8">
                                    <Box className="flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Job Position</FormLabel>
                                        <TextField fullWidth size="small" name="job_position" value={form_Data.job_position} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                    </Box>
                                    <Box className="flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Direct Manager</FormLabel>
                                        <TextField fullWidth size="small" name="direct_manager" value={form_Data.direct_manager} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                    </Box>
                                </Box>
                                <Box className="flex flex-col gap-1.5">
                                    <FormLabel sx={Form_Label_Styles}>Role</FormLabel>
                                    <TextField fullWidth size="small" name="role" value={form_Data.role} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                </Box>
                                <Box className="flex justify-between gap-8">
                                    <Box className="flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Academic Level</FormLabel>
                                        <TextField fullWidth size="small" name="academic_level" value={form_Data.academic_level} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                    </Box>
                                    <Box className="flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Hourly Rate<span className='text-red-600'>*</span></FormLabel>
                                        <TextField required size="small" name="hourly_rate" slotProps={{
                                            input: {
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Box className='h-full pl-2 border-l-2'>
                                                            <FaIndianRupeeSign size={18} color={'#000'} />
                                                        </Box>
                                                    </InputAdornment>
                                                ),
                                            },
                                        }} value={form_Data.hourly_rate} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                    </Box>
                                </Box>
                                <Box className="flex justify-between gap-8">
                                    <Box className="flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Default Language</FormLabel>
                                        <TextField fullWidth size="small" name="default_language" value={form_Data.default_language} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                    </Box>
                                    <Box className="flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Direction</FormLabel>
                                        <TextField fullWidth size="small" name="direction" value={form_Data.direction} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                    </Box>
                                </Box>
                                <Box className="flex justify-between gap-8">
                                    <Box className="w-full flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Email Signature<span className='text-red-600'>*</span></FormLabel>
                                        <Textarea sx={{ width: '100%' }} required minRows={4} name='email_signature' value={form_Data.email_signature} onChange={(e: Area_Event_Type) => handle_Change(e)} />
                                    </Box>
                                    <Box className="w-full flex flex-col gap-1.5">
                                        <FormLabel sx={Form_Label_Styles}>Other Information</FormLabel>
                                        <Textarea className='w-full' minRows={4} name="other_info" value={form_Data.other_info} onChange={(e: Area_Event_Type) => handle_Change(e)} />
                                    </Box>
                                </Box>
                                <Box>
                                    <FormLabel sx={{ display:'flex',alignItems:'center', gap:1 ,...Form_Label_Styles }}><FaEdit size={18} color={'#4d81fa'} /> Twilo Phone Number</FormLabel>
                                    <TextField fullWidth size="small" name='twilo_phone_number' value={form_Data.twilo_phone_number} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                </Box>
                                <Box>
                                    <FormLabel sx={{ display:'flex',alignItems:'center', gap:1 ,...Form_Label_Styles }}><FaEdit size={18} color={'#4d81fa'} />Is Twilo Phone Number Whatsapp Enabled ?</FormLabel>
                                    <TextField fullWidth size="small" name='is_twilo_phone_number_whatsapp_enabled' value={form_Data.is_twilo_phone_number_whatsapp_enabled} onChange={(e: Input_Event_Type) => handle_Change(e)} />
                                </Box>
                                <Box>
                                    <FormLabel sx={Form_Label_Styles}>Password<span className='text-red-600'>*</span></FormLabel>
                                    <TextField fullWidth size="small" required name='password' value={form_Data.password} onChange={(e: Input_Event_Type) => handle_Change(e)} />
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
                </div>
            </section>
        </main>
    )
}

export default Profile;