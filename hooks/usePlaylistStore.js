import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/actions/playlist";

export const usePlaylistStore = () => {


    const dispatch = useDispatch();
    const playlist = useSelector(({ playlist }) => playlist);


    const handleAddToPlaylist = (movie) => {
        dispatch(addItem(movie));
    }


    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };


    return { playlist, handleAddToPlaylist, handleRemoveItem }
}
