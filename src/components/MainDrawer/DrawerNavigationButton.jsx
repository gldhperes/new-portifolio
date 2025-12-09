import { Button } from '@mui/material'

const DrawerNavigationButton = ({ icon, label, onClick, isSelected, isOpen }) => {
    return (
        <Button
            variant='drawerButton'
            startIcon={icon}
            onClick={onClick}
            // fullWidth={true}
            aria-selected={isSelected}
            data-drawer-open={isOpen}
        >
            <span>{label}</span>

        </Button >
    )
}

export default DrawerNavigationButton