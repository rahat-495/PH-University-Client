
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
    onSubmit : SubmitHandler<FieldValues> ;
    children : ReactNode ;
    className : string ;
}

const PHForm = ({ onSubmit , children , className } : TFormProps) => {

    const methods = useForm() ;

    return (
        <FormProvider { ...methods} >
            <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
};

export default PHForm;
