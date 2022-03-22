import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Divider, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser, onAlertHandler } from '../../modules/dashboard/dashboard-slice'
import { Link } from 'react-router-dom'

function UserTable() {
    const usersData = useSelector((state) => state.dashboard.usersData)
    const dispatch = useDispatch()

    return (
        <>
            <TableContainer component={Paper} elevation={5}>
                <Grid container padding={2} display='flex' justifyContent='space-between' >
                    <Typography variant='h5'>User list</Typography>
                    <Button variant='contained' color='primary'
                        component={Link} to={'/user-form'} >
                        Add new
                    </Button>
                </Grid>
                <Divider />
                <Table sx={{ minWidth: 650 }}>
                    <TableHead >
                        <TableRow >
                            <TableCell align='left'>Id</TableCell>
                            <TableCell align='left'>Name</TableCell>
                            <TableCell align='left'>Username</TableCell>
                            <TableCell align='left'>Email</TableCell>
                            <TableCell align='left'>City</TableCell>
                            <TableCell align='center'>Edit</TableCell>
                            <TableCell align='center'>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(usersData.length > 0) ? (usersData.map((user) => (
                            <TableRow key={user.id} >
                                <TableCell component='th' scope='row'>
                                    {user.id}
                                </TableCell>
                                <TableCell align='left'>{user.name}</TableCell>
                                <TableCell align='left'>{user.username}</TableCell>
                                <TableCell align='left'>{user.email}</TableCell>
                                <TableCell align='left'>{user.address.city}</TableCell>
                                <TableCell align='center'>
                                    <Button variant='contained' color='warning'
                                        component={Link} to={'/user-form'}
                                        onClick={() => dispatch(setSelectedUser(user.id))} >
                                        Edit
                                    </Button>
                                </TableCell>
                                <TableCell align='center'>
                                    <Button variant='contained' color='error'
                                        onClick={() => dispatch(onAlertHandler({ open: true, id: user.id, name: user.name }))} >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))) : (
                            <TableRow key={0} >
                                <TableCell align='center'>There is no user to display.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default UserTable