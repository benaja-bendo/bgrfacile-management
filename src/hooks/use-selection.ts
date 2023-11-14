import { useCallback, useEffect, useState } from 'react';

type ItemType = any; // Remplacez 'any' par le type réel de vos éléments

export const useSelection = (items: ItemType[] = []) => {
    const [selected, setSelected] = useState<ItemType[]>([]);

    useEffect(() => {
        setSelected([]);
    }, [items]);

    const handleSelectAll = useCallback(() => {
        setSelected([...items]);
    }, [items]);

    const handleSelectOne = useCallback((item: ItemType) => {
        setSelected((prevState) => [...prevState, item]);
    }, []);

    const handleDeselectAll = useCallback(() => {
        setSelected([]);
    }, []);

    const handleDeselectOne = useCallback((item: ItemType) => {
        setSelected((prevState) => {
            return prevState.filter((_item) => _item !== item);
        });
    }, []);

    return {
        handleDeselectAll,
        handleDeselectOne,
        handleSelectAll,
        handleSelectOne,
        selected
    };
};
