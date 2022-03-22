import React from 'react'
import { Grid, Typography } from '@mui/material'
import UserForm from './user-form'

function UserFormPage() {
    return (
        <Grid container spacing={4} padding={5} display='flex' flexDirection='column' >
            <Grid item >
                <Typography variant='h4'>
                    Dashboard
                </Typography>
            </Grid>
            <Grid item >
                <UserForm />
            </Grid>
        </Grid>
    )
}

export default UserFormPage