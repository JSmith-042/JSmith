import { createTheme } from '@mui/system';

export default function Theme()
{
    return createTheme({
        palette: {
            background: {
                paper: '#fff',
            },
            text: {
                primary: '#173A5E',
                secondary: '#46505A',
            },
            action: {
                active: '#001E3C',
            },
            success: {
                dark: '#009688',
            },
        },
    });
}