import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: 345,
  height: 400,  // Set a fixed height for all cards
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));

export default function Movie(props) {
  const movie = props.movie;
  const { id, overview, title , vote_average ,release_date } = movie;
  const url = 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;
  const navigate = useNavigate();

  const handleShowMore = (event) => {
    navigate(`/movies/${id}`);
  };

  return (
    <StyledCard className='m-3 p-3'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={url}
          alt={title}
        />
        <StyledCardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <samp>release date: </samp>{release_date}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <samp>vote: </samp>{vote_average}
          </Typography>
        </StyledCardContent>
      </CardActionArea>
      <CardActions sx={{ mt: 'auto' }}>
        <Button onClick={handleShowMore} size="small" color="primary">
          Show More
        </Button>
      </CardActions>
    </StyledCard>
  );
}
