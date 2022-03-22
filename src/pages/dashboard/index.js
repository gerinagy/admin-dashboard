import { Grid, Typography } from '@mui/material'
import React from 'react'
import AlertDialog from '../components/confirmation-modal'
import UserTable from './table'

function DashboardPage() {

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
                    <UserTable />
                </Grid>
            </Grid>
        </>
    )
}

export default DashboardPage