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
                        <p className='text-2xl font-bold'>
                            {(GlobalFormData?.Profile_Data?.first_name || GlobalFormData?.Profile_Data?.last_name)
                                ? `${GlobalFormData?.Profile_Data?.first_name || ''} ${GlobalFormData?.Profile_Data?.last_name || ''}`
                                : 'John Doe'
                            }
                        </p>

                    </div>
                    <p className='flex gap-4'>
                        <a href={GlobalFormData?.Related_Info_Data?.facebook || '#'}><span><FaFacebook size={25} /></span></a>
                        <a href={GlobalFormData?.Related_Info_Data?.skype || '#'}><span><IoLogoSkype size={25} /></span></a>
                        <a href={GlobalFormData?.Related_Info_Data?.linkedin || '#'}><span><FaLinkedin size={25} /></span></a>
                        <a href={GlobalFormData?.Profile_Data?.email || '#'}><span><IoMail size={25} /></span></a>
                    </p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-0'>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>
                            <IoMail size={20} /> {GlobalFormData?.Profile_Data?.email || 'Email'}
                        </p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>
                            <FaPhone size={20} /> {GlobalFormData?.Profile_Data?.phone_number || 'Phone Number'}
                        </p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>
                            <FaGraduationCap size={20} /> {GlobalFormData?.Profile_Data?.academic_level || 'Academic Level'}
                        </p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>
                            {GlobalFormData?.Profile_Data?.role || 'Role'}
                        </p>
                    </div>
                    <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>
                        Direct Manager: {GlobalFormData?.Profile_Data?.direct_manager || 'John Doe'}
                    </p>
                </div>
            </section>
            <section className='w-1/2 h-full p-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold'>General Information</h1>
                    <div className='flex flex-col'>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Staff Code : {GlobalFormData?.Profile_Data?.staff_code || '123456789'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Staff Name : {GlobalFormData?.Profile_Data?.first_name || 'John'} {GlobalFormData?.Profile_Data?.last_name || 'Doe'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Gender : {GlobalFormData?.Profile_Data?.gender || 'Male'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Birthday : {GlobalFormData?.Profile_Data?.date_of_birth || '01/01/2000'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Phone : {GlobalFormData?.Profile_Data?.phone_number || '1234567890'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Workplace : {GlobalFormData?.Profile_Data?.workplace || 'Workplace'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Status : {GlobalFormData?.Profile_Data?.status || 'Active'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Job Position : {GlobalFormData?.Profile_Data?.job_position || 'Job Position'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Academic Level : {GlobalFormData?.Profile_Data?.academic_level || 'Academic Level'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Hourly Rate : {GlobalFormData?.Profile_Data?.hourly_rate || 'Hourly Rate'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Religion : {GlobalFormData?.Related_Info_Data?.religion || 'Religion'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Nation : {GlobalFormData?.Related_Info_Data?.country || 'Nation'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Marital Status : {GlobalFormData?.Related_Info_Data?.maritalStatus || 'Marital Status'}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-5'>
                    <h1 className='text-2xl font-bold'>Related Information</h1>
                    <div className='flex flex-col'>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Citizen Identification : {GlobalFormData?.Related_Info_Data?.citizenIdentification || 'Citizen Identification'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Date of Issue : {GlobalFormData?.Related_Info_Data?.dateOfIssue || 'Date of Issue'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Place of Birth : {GlobalFormData?.Related_Info_Data?.placeOfBirth || 'Place of Birth'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Current Address : {GlobalFormData?.Related_Info_Data?.currentAddress || 'Current Address'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Bank Account Number : {GlobalFormData?.Related_Info_Data?.bankAccountNumber || 'Bank Account Number'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Bank Account Name : {GlobalFormData?.Related_Info_Data?.bankAccountName || 'Bank Account Name'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Bank Name : {GlobalFormData?.Related_Info_Data?.bankName || 'Bank Name'}</p>
                        <p className='flex items-center gap-2 border-[1px] border-gray-400 rounded-md p-2'>Personal Tax Code : {GlobalFormData?.Related_Info_Data?.personalTaxCode || 'Personal Tax Code'}</p>
                    </div>
                </div>
                <Button variant='contained' color='success' onClick={() => setOpenForm(true)}>
                    Edit
                </Button>
            </section>
            {openForm && <Form_Dialog />}
        </main>
    )
}

export default Details
