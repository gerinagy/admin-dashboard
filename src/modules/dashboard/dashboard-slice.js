import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  usersData: [],
  isUserFormOpen: false,
  alertProps: {
    open: false,
    id: undefined,
    name: ''
  },
  selectedUser: {
    id: NaN || undefined,
    name: '',
    username: '',
    email: '',
    address: {
      city: ''
    }
  }
}

export const onGetUserData = createAsyncThunk('dashboard/get-users', () => {
  return axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
      return []
    })
})

export const onUserCreate = createAsyncThunk('dashboard/create-user', (user) => {
  return axios.post('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data', { user: user })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
      return []
    })
})

export const onUserUpdate = createAsyncThunk('dashboard/update-user', (user) => {
  return axios.put('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data', { user: user })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
      return []
    })
})

export const onUserRemove = createAsyncThunk('dashboard/remove-user', (id) => {
  return axios.delete('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data', { id: id })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
      return []
    })
})

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      const id = action.payload
      state.isUserFormOpen = true
      state.selectedUser = state.usersData.find(user => user.id === id)
    },
    onAddUser: (state, action) => {
      const user = action.payload
      const users = state.usersData
      state.usersData = [user, ...users]
      state.isUserFormOpen = false
      state.selectedUser = initialState.selectedUser
    },
    onEditUser: (state, action) => {
      const updatedUser = action.payload
      //Check if this works
      state.selectedUser.id = updatedUser.id
      state.selectedUser.name = updatedUser.name
      state.selectedUser.username = updatedUser.username
      state.selectedUser.email = updatedUser.email
      state.selectedUser.city = updatedUser.address.city
    },
    onUpdateUser: (state, action) => {
      const updatedUser = action.payload
      state.usersData = state.usersData.filter(user => user.id !== updatedUser.id)
      state.usersData = [updatedUser, ...state.usersData]
      state.selectedUser = initialState.selectedUser
      state.isUserFormOpen = false
    },
    onDeleteUser: (state, action) => {
      const id = action.payload
      state.usersData = state.usersData.filter(user => user.id !== id)
    },
    onCancelForm: (state) => {
      state.isUserFormOpen = false
      state.selectedUser = initialState.selectedUser
    },
    onUserFormOpenHandler: (state, action) => {
      state.isUserFormOpen = action.payload
    },
    onAlertHandler: (state, action) => {
      const { open, id, name } = action.payload
      state.alertProps.open = open
      state.alertProps.id = id
      state.alertProps.name = name
    },
    onNameChanged: (state, action) => {
      state.selectedUser.name = action.payload
    },
    onUsernameChanged: (state, action) => {
      state.selectedUser.username = action.payload
    },
    onEmailChanged: (state, action) => {
      state.selectedUser.email = action.payload
    },
    onCityChanged: (state, action) => {
      state.selectedUser.address.city = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(onGetUserData.pending, () => {
    }).addCase(onGetUserData.rejected, () => {
    }).addCase(onGetUserData.fulfilled, (state, action) => {
      state.usersData = action.payload
    })

    builder.addCase(onUserCreate.pending, () => {
    }).addCase(onUserCreate.rejected, () => {
    }).addCase(onUserCreate.fulfilled, (state, action) => {
      state.usersData = action.payload
    })
    builder.addCase(onUserUpdate.pending, () => {
    }).addCase(onUserUpdate.rejected, () => {
    }).addCase(onUserUpdate.fulfilled, (state, action) => {
      state.usersData = action.payload
    })
    builder.addCase(onUserRemove.pending, () => {
    }).addCase(onUserRemove.rejected, () => {
    }).addCase(onUserRemove.fulfilled, (state, action) => {
      state.usersData = action.payload
    })

  }
})

export const { onAddUser, onEditUser, onUpdateUser, onDeleteUser, setSelectedUser, onCancelForm, onUserFormOpenHandler, onNameChanged, onUsernameChanged, onEmailChanged, onCityChanged, onAlertHandler } = dashboardSlice.actions
export default dashboardSlice.reducer