import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';

import {Router} from '@/routes';
import {createTheme} from '@/theme';

import '@/styles/variables.css';
import '@/styles/index.css';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={Router}/>
        </ThemeProvider>
    </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({payload: 'removeLoading'}, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
})
