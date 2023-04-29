import { useDispatch } from 'react-redux';
import { clearControls } from './controls-slice';

export const useCleanup = () => {
    const dispatch = useDispatch();

    const handleTitleClick = () => {
        dispatch(clearControls());
    };

    return handleTitleClick;
};
