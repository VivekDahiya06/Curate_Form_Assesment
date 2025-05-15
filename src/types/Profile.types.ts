export interface Form_Data_Types {
        staff_code: string;
        first_name: string;
        last_name: string;
        gender: string;
        date_of_birth: string;
        email: string;
        phone_number: string;
        workplace: string;
        status: string;
        job_position: string;
        direct_manager: string;
        role: string;
        academic_level: string;
        hourly_rate: string;
        default_language: string;
        direction: string;
        email_signature: string;
        other_info: string;
        twilo_phone_number: string;
        is_twilo_phone_number_whatsapp_enabled: string;
        password: string;
    }
    export type Input_Event_Type = React.ChangeEvent<HTMLInputElement>
    export type Area_Event_Type = React.ChangeEvent<HTMLTextAreaElement>