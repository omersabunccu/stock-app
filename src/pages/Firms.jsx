import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFirm, getFirms } from "../store/firms";
import StyledCard from "../components/StyledCard";
import FirmModal from "../components/Modals/FirmModal";
import { uiActions } from "../store/ui";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import MapIcon from "@mui/icons-material/Map";
import MapView from "../components/MapView";

const Firms = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState("card");

  const closeModal = () => {
    setOpen(false);
    setEdit(false);
  };
  const openModal = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  const firms = useSelector((state) => state.firms.data);

  useEffect(() => {
    dispatch(getFirms());
    // eslint-disable-next-line
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteFirm(id));
  };

  const handleEdit = (firm) => {
    setEdit(true);
    setOpen(true);
    dispatch(uiActions.setModalData(firm));
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" p={5}>
        <Typography variant="h5" component="h1" color="inherit" noWrap>
          
          Firms
        </Typography>
        <Button variant="contained" onClick={() => openModal()}>
          
          New Firm
        </Button>
      </Stack>

      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="space-between" pb={2}>
          <Box flexGrow={1} />
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={(e, newView)=> setView(newView)}
            sx={{bgcolor:'white'}}
            size="small"
          >
            <ToggleButton value="card">
              <ViewCarouselIcon />
            </ToggleButton>
            <ToggleButton value="map">
              <MapIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        {view == 'card'&& (
            <Grid container spacing={2}>
            {firms.map((firm) => (
              <Grid item xs={12} md={6} lg={4} xl={3} key={firm.id}>
                <StyledCard
                  item={firm}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </Grid>
            ))}
          </Grid>
        )}

        {view=="map"&&(
          <MapView />
        )}
      </Container>

      <FirmModal open={open} edit={edit} closeModal={closeModal} />
    </Box>
  );
};
export default Firms;
