import { useNavigate } from "react-router-dom";

const ArtistCard = ({ song }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col w-[250px] p-4 animate-slideup cursor-pointer items-center"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img
        src={song?.images?.background}
        alt="name"
        className="rounded-full w-full object-cover"></img>
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {song?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
