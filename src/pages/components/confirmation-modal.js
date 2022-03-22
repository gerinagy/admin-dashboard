import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { onAlertHandler, onDeleteUser } from '../../modules/dashboard/dashboard-slice'

export default function AlertDialog() {
    const dispatch = useDispatch()
    const alertProps = useSelector((state) => state.dashboard.alertProps)

    const handleYes = () => {
        dispatch(onDeleteUser(alertProps.id))
        dispatch(onAlertHandler({ open: false, id: alertProps.id, name: alertProps.name }))
    }

    const handleNo = () => {
        dispatch(onAlertHandler({ open: false, id: alertProps.id, name: alertProps.name }))
    }

    return (
        <Dialog
            open={alertProps.open}
            onClose={handleNo}
            aria-labelledby="remove-alert"
        >
            <DialogTitle id="remove-title">
                {"Do you want to remove this user?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="remove-text">
                    You will remove {alertProps.name} from the database.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleNo}>Cancel</Button>
                <Button onClick={handleYes} autoFocus>
                    Yes, remove
                </Button>
            </DialogActions>
        </Dialog>
    )
}