import { Grid, Typography } from '@mui/material'
import * as React from 'react'
import { useSelector } from 'react-redux'
import AlertDialog from './confirmation-modal'
import UserForm from './user-form'
import UserTable from './table'

function HomePage() {
    const isUserFormOpen = useSelector((state) => state.dashboard.isUserFormOpen)
    return (
        <>
            <AlertDialog />
            <Grid container spacing={4} padding={5} display='flex' flexDirection='column' >
                <Grid item >
                    <Typography variant='h4'>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item >
                    {isUserFormOpen ? <UserForm /> : <UserTable />}
                </Grid>
            </Grid>
        </>
    )
}

export default HomePage