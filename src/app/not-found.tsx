import { Link } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function NotFound() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: '50vh',
        mx: 'auto',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center', 
        py: 6,
      }}
    >
      <Stack spacing={3}>
        <Stack spacing={1} sx={{ fontWeight: 600 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '3rem', md: '4rem' } }}>
            404
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Oops! Page Not Found
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            But if you don&apos;t change your direction<br />
            and if you keep looking, you may end<br />
            up where you are heading.
          </Typography>

          <Link
            href="/"
            underline="none"
            sx={{
              display: 'inline-block',
              color: '#000',
              border: '2px solid #163832',
              padding: '8px 16px',
              borderRadius: '20px',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#163832',
                color: '#fff',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Take Me Home
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
