import { Avatar, Button } from '@mui/material'
import { FaUserAlt } from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { useEffect } from 'react';
import { useFormStore } from '../store/Form.store';
import Form_Dialog from './Form';

const Details = () => {
    const GlobalFormData = useFormStore((state) => state.GlobalFormData);
    const setOpenForm = useFormStore((state) => state.setOpenForm);
    const openForm = useFormStore((state) => state.openForm);

    useEffect(() => {
        console.log(GlobalFormData);
    }, [GlobalFormData])
    
    return (
        <main className='w-full h-full flex items-start'>
            <section className='w-1/2 h-full p-10 flex flex-col gap-4'>
                <div className='flex flex-col items-center gap-4 rounded-md border-[1px] border-gray-400 py-4'>
                    <div className='flex flex-col items-center gap-2'>
                        <Avatar className='relative' sx={{ width: 150, height: 150 }}>
                            <FaUserAlt className="relative" size={100} />
                        </Avatar>
                        <p className='text-2xl font-bold'>{`${GlobalFormData.Profile_Data.first_name || 'First'} ${GlobalFormData.Profile_Data.last_name || 'Name'}`}</p>
                    </div>
                    <p className='flex gap-4'>
                        <a href='#'><span><FaFacebook size={25} /></span></a>
                        <a href='#'><span><IoLogoSkype size={25} /></span></a>
                        <a href='#'><span><FaLinkedin size={25} /></span></a>
                        <a href='#'><span><IoMail size={25} /></span></a>
                    </p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-0'>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>
                            <IoMail size={20} /> Mail
                        </p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>
                            <FaPhone size={20} /> Phone
                        </p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>
                            <FaGraduationCap size={20} /> Academic Level
                        </p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>
                            role
                        </p>
                    </div>
                    <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>
                        Direct Manager:
                    </p>
                </div>
            </section>
            <section className='w-1/2 h-full p-10 flex flex-col gap-4'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold'>General Information</h1>
                    <div className='flex flex-col'>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Staff Code</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Staff Name</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Gender</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Birthday</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Phone</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Workplace</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Status</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Job Position</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Academic Level</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Hourly Rate</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Religion</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Nation</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Marital Status</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-5'>
                    <h1 className='text-2xl font-bold'>Related Information</h1>
                    <div className='flex flex-col'>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Citizen Identification</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Date of Issue</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Place of Birth</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Current Address</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Bank Account Number</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Bank Account Name</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Bank Name</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Personal Tax Code</p>
                    </div>
                </div>
                <Button variant='outlined' color='success' onClick={() => setOpenForm(true)}>
                    Edit
                </Button>
            </section>
            { openForm && <Form_Dialog /> }
        </main>
    )
}

export default Details
