import Typography from '@mui/material/Typography';

const AppTextBlock: React.FC<{children: string}> = ({children}) => {
    return <Typography paragraph
        padding={0}
        component="p"
        sx={{
            mr: 2,
            fontFamily: 'sans-serif',
            fontSize: 16,
            textAlign: 'justify',
            fontWeight: 200,
            letterSpacing: '',
            color: 'inherit',
            textDecoration: 'none',
            whiteSpace: 'normal',
        }}>
            <p>{children}</p>
    </Typography>
}

export default AppTextBlock;