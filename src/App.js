import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import SideBarCompo from './component/SideBarCompo'
import AppBarComponent from './component/AppBar'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Home/Dashboard'
import Team from './Pages/Team/Team'
import Contacts from './Pages/ContactsPage/Contacts'
import Invoices from './Pages/InvoicesPage/Invoices'
import Form from './Pages/FormPage/Form'
import Calendar from './Pages/CalendarPage/Calendar'
import FAQ from './Pages/FAQPage/FAQ'
import BarChart from './Pages/BarChartPage/BarChart'
import PieChart from './Pages/PieChartPage/PieChart'
import LineChart from './Pages/LineChartPage/LineChart'
import Geography from './Pages/GeographyPage/Geography'
import NotFound from './Pages/NotFound/NotFound'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}))

export default function App() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [mode, setMode] = React.useState(
    localStorage.getItem('mode') ? localStorage.getItem('mode') : 'dark',
  )

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const Apptheme = createTheme({
    palette: {
      mode,
    },
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={Apptheme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <AppBarComponent
            setMode={setMode}
            handleDrawerOpen={handleDrawerOpen}
            open={open}
          />
          <SideBarCompo
            handleDrawerClose={handleDrawerClose}
            open={open}
            DrawerHeader={DrawerHeader}
          />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="team" element={<Team />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="form" element={<Form />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="bar" element={<BarChart />} />
              <Route path="pie" element={<PieChart />} />
              <Route path="line" element={<LineChart />} />
              <Route path="geography" element={<Geography />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}
