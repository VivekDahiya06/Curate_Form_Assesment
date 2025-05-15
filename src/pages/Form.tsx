import { Dialog, DialogTitle } from '@mui/material'
import { useState } from 'react'
import Profile from '../components/form/Profile_Page';
import Related_Info from '../components/form/Related_Info_Page';
import { useFormStore } from '../store/Form.store';

const Form_Dialog = () => {

    // Constants
    const Form_Tabs = [
        {
            name: "Profile",
            component: <Profile />
        },
        {
            name: "Related Information",
            component: <Related_Info />
        }
    ]


    // States & Hooks
    const { openForm, setOpenForm } = useFormStore((state) => state);
    const [selectedTab, setSelectedTab] = useState<number>(0);

    return (
        <>
            <Dialog
                open={openForm}
                onClose={() => setOpenForm(false)}
                fullWidth
                maxWidth={"sm"}
            >
                <DialogTitle fontWeight={"bold"}>
                    Staff Profile Create
                </DialogTitle>
                <main className='w-full h-full'>
                    <header className="px-4 flex items-center justify-start">
                        {
                            Form_Tabs.map((tab, index) => (
                                <span
                                    key={index + 1}
                                    className='flex items-center justify-center text-black px-4 py-2 border-b-2  cursor-pointer'
                                    style={{
                                        borderColor: selectedTab === index ? "blue" : "transparent",
                                    }}
                                    onClick={() => setSelectedTab(index)}
                                >
                                    {tab.name}
                                </span>
                            ))
                        }
                    </header>
                    <section className='px-8'>
                        {
                            Form_Tabs[selectedTab].component
                        }
                    </section>
                </main>
            </Dialog>
        </>
    )
}

export default Form_Dialog;
