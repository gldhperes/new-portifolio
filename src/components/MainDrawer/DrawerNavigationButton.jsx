import { Button } from '@mui/material'

const DrawerNavigationButton = ({ icon, label, onClick }) => {
    return (
        <Button
            variant='drawerButton'
            startIcon={icon}
            onClick={onClick}
            fullWidth={true}
        >
            <span>{label}</span>
            
        </Button >
    )
}

export default DrawerNavigationButton