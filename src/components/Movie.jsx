import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { red, grey } from '@mui/material/colors';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { AddMovieToFav, DeleteMovieFromFav } from '../redux/store/slices/favMoviesSlice';
import { decrementCouter, incrementCounter } from '../redux/store/slices/counterSlice';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: 345,
  height: 400,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));

export default function Movie(props) {
  const { movie, fromFavourite } = props;
  const { id, title, vote_average, release_date } = movie;
  const url = 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favMovies = useSelector((state) => state.favMovies.favMovies);

  const [isFavorite, setIsFavorite] = useState(movie.isFavourit);
  const [iconColor, setIconColor] = useState(movie.isFavourit ? red[500] : grey[500]);

  useEffect(() => {
    const isFav = favMovies.some(favMovie => favMovie.id === movie.id);
    setIsFavorite(isFav);
    setIconColor(isFav ? red[500] : grey[500]);
  }, [favMovies, movie.id]);

  const handleShowMore = () => {
    navigate(`/movies/${id}`);
  };

  const handleAddToFav = () => {
    if (!isFavorite) {
      setIsFavorite(true);
      dispatch(AddMovieToFav({ ...movie, isFavourit: true }));
      dispatch(incrementCounter());
      setIconColor(red[500]); // Change icon color to red
    }
  };

  const handleDeleteFromFav = () => {
    setIsFavorite(false);
    dispatch(DeleteMovieFromFav(movie));
    dispatch(decrementCouter());
    setIconColor(grey[500]); // Change icon color to grey
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
      <CardActions className='d-flex justify-content-between' sx={{ mt: 'auto' }}>
        <Button onClick={handleShowMore} size="small" color="primary">
          Show More
        </Button>

        {isFavorite && fromFavourite ?
          <IconButton onClick={handleDeleteFromFav} edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
          :
          <IconButton onClick={handleAddToFav} aria-label="add to favorites">
            <FavoriteIcon sx={{ color: iconColor }}/>
          </IconButton>
        }
      </CardActions>
    </StyledCard>
  );
}
