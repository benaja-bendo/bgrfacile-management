import React from 'react';
import {Link} from "react-router-dom";
import {
    Box,
    Divider,
    Drawer,
    Stack,
    Typography,
    useMediaQuery,
    Theme
} from '@mui/material';
import {Logo} from '@/components/svg/logo';
import {Scrollbar} from '@/layouts/partials/scrollbar';
import {items, NavItem} from '@/layouts/partials/config';
import {SideNavItem} from '@/layouts/partials/side-nav-item';

interface SideNavProps {
    onClose?: () => void;
    open?: boolean;
    auth?: {
        user: {
            data: {
                fullName: string;
            };
        };
    };
}

export const SideNav: React.FC<SideNavProps> = ({onClose, open}) => {
    const lgUp = useMediaQuery<Theme>((theme: Theme) => theme.breakpoints.up('lg'));

    const content = (
        <Scrollbar
            sx={{
                height: '100%',
                '& .simplebar-content': {
                    height: '100%'
                },
                '& .simplebar-scrollbar:before': {
                    background: 'neutral.400'
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <Box sx={{p: 3}}>
                    <Box
                        component={Link}
                        sx={{
                            display: 'inline-flex',
                            height: 32,
                            width: 32
                        }}
                    >
                        <Logo/>

                    </Box>
                    <Typography variant={lgUp ? 'h5' : 'h6'}>
                        HabitAfrica
                    </Typography>
                    {/*<Box
                        sx={{
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            borderRadius: 1,
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 2,
                            p: '12px'
                        }}
                    >
                        <div>
                            <Typography color="inherit" variant="subtitle1">
                                 {auth?.user?.data?.fullName}
                            </Typography>
                            <Typography color="neutral.400" variant="body2">
                                role
                            </Typography>
                        </div>
                        <SvgIcon fontSize="small" sx={{color: 'neutral.500'}}>
                            <ChevronUpDownIcon/>
                        </SvgIcon>
                    </Box>*/}
                </Box>
                <Divider sx={{borderColor: 'neutral.700'}}/>
                <Box
                    component="nav"
                    sx={{
                        flexGrow: 1,
                        px: 2,
                        py: 3
                    }}
                >
                    <Stack
                        component="ul"
                        spacing={0.5}
                        sx={{
                            listStyle: 'none',
                            p: 0,
                            m: 0
                        }}
                    >
                        {items.map((item: NavItem) => {
                            // const active = route(route().current()) === item.path;
                            const active = false;
                            return (
                                <SideNavItem
                                    active={active}
                                    disabled={item.disabled}
                                    external={item.external}
                                    icon={item.icon}
                                    key={item.title}
                                    path={item.path}
                                    title={item.title}
                                />
                            );
                        })}
                    </Stack>
                </Box>
                <Divider sx={{borderColor: 'neutral.700'}}/>
            </Box>
        </Scrollbar>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'neutral.800',
                        color: 'common.white',
                        width: 280
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.800',
                    color: 'common.white',
                    width: 280
                }
            }}
            sx={{zIndex: (theme) => theme.zIndex.appBar + 100}}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};
