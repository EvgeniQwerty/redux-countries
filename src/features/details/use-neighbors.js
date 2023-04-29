import { useDispatch, useSelector } from 'react-redux';
import { selectNeighbors } from './details-slice';
import { useEffect } from 'react';
import { loadNeighbors } from './details-slice';

export const useNeighbors = (borders = []) => {
    const dispatch = useDispatch();
    const neighbors = useSelector(selectNeighbors);

    useEffect(() => {
        if (borders.length) dispatch(loadNeighbors(borders));
    }, [dispatch, borders]);

    return neighbors;
};
