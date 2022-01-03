import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
import { useForm } from "react-hook-form";

const FormInput = ( { name, label} ) => { 

    const { control } = useFormContext();
    const isError = false;
    const { register, handleSubmit } = useForm();

    return (
        <Grid item xs={12} sm={6}>

<>
         <Controller
            
            as={TextField}
            control={control}
            defaultValue=''
            name={name}
       
            render = {({field:{onChange}})=> (

                
                <TextField

                    onChange={onChange} 
                    fullWidth
                    label={label}
                    required
                />
            )}
            error={isError}
         />

        

         
   </>
     
        </Grid>
    );
}

export default FormInput
