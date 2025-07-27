import { useState } from "react";
import { MovieItemBody } from "./MovieItemStyles";
import imgtest from "../../assets/images/testImage.jpg";
// import { Dialog } from "primereact/dialog";
// import PreviewModal from "../PreviewModal/PreviewModal";

const MovieItem = ({ movie }) => {
  const [visible, setVisible] = useState(false);
  return (
    <MovieItemBody>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt="test-image"
        onClick={() => setVisible(true)}
      />
{/* 
      <Dialog
        className="ModalPlayMovie"
        visible={visible}
        onHide={() => setVisible(false)}
        icon="icono"
      >
        <div className="ModalPlayMovie-Box">
          <div className="ModalPlayMovie-Box__VideoPreview">
            <img src={imgtest} alt="" />
          </div>
          <div className="ModalPlayMovie-Box__Description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus a quis at, accusantium nostrum pariatur aperiam sequi
            amet eum minima saepe, corrupti perferendis reprehenderit! Beatae.
          </div>
        </div>
      </Dialog> */}
      {/* <PreviewModal /> */}
    </MovieItemBody>
  );
};

export default MovieItem;
