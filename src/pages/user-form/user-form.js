import React from 'react'
import { Button, TextField, Grid, Box, Typography, Container, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { onAddUser, onCancelForm, onCityChanged, onEmailChanged, onNameChanged, onUpdateUser, onUsernameChanged } from '../../modules/dashboard/dashboard-slice'
import { Link, useNavigate } from 'react-router-dom'

function UserForm() {
    const usersIds = useSelector((state) => state.dashboard.usersData).map(user => user.id)
    const selectedUser = useSelector((state) => state.dashboard.selectedUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const toHomeHandle = () => (navigate('/', { replace: true }))

    function handleSubmit(e) {
        e.preventDefault()
        if (selectedUser.id) {
            dispatch(onUpdateUser(selectedUser))
        } else {
            const id = usersIds.reduce((a, b) => a + b, 0) + 1
            const user = {
                id: id,
                name: selectedUser.name,
                username: selectedUser.username,
                email: selectedUser.email,
                address: {
                    city: selectedUser.address.city
                }
            }
            dispatch(onAddUser(user))
            toHomeHandle()
        }
    }

    return (
        <>
            <Container component={Paper} elevation={5} maxWidth='md' >
                <Box padding={5}>
                    <Typography component='h1' variant='h5'>
                        Form
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    id='name'
                                    label='Name'
                                    value={selectedUser.name}
                                    onChange={(e) => dispatch(onNameChanged(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id='username'
                                    label='Username'
                                    value={selectedUser.username}
                                    onChange={(e) => dispatch(onUsernameChanged(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id='email'
                                    label='Email address'
                                    type='email'
                                    value={selectedUser.email}
                                    onChange={(e) => dispatch(onEmailChanged(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id='city'
                                    label='City'
                                    value={selectedUser.address.city}
                                    onChange={(e) => dispatch(onCityChanged(e.target.value))}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} marginTop={2} justifyContent='flex-end' >
                            <Grid item xs={6} sm={3}>
                                <Button
                                    color='error'
                                    fullWidth
                                    variant='outlined'
                                    component={Link} to={'/'}
                                    onClick={() => dispatch(onCancelForm())}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item xs={6} sm={3} >
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    color='success'
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default UserForm
