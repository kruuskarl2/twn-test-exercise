import { useMemo, useContext } from 'react';

import ListContext from 'context/listContext';
import ListItemInfo from './listItemInfo';

import styles from './listItem.module.css';

function ListItem(props) {
    const { person } = props;

    const { listOptions, setListOptions } = useContext(ListContext);

    const cells = useMemo(() => {
        let sex;
        let date;
        let phone;

        if (person.sex === 'f') sex = 'Naine';
        else sex = 'Mees';

        // Multiplied by 1000 so that the argument is in milliseconds, not seconds.
        const birthDate = new Date(person.date * 1000);
        date = `${birthDate.getDate()}.${birthDate.getMonth()}.${birthDate.getFullYear()}`;

        const areaCode = person.phone.substring(0, 4);
        const number = person.phone.substring(4);
        phone = `${areaCode} ${number}`;

        const formattedPerson = {
            firstName: person.firstname,
            lastName: person.surname,
            sex,
            date,
            phone,
        };

        return Object.values(formattedPerson).map((property, index) => {
            return (
                <td className={styles.cell} key={index}>
                    {property}
                </td>
            );
        });
    }, [person]);

    const toggleSelectedPerson = (selectedPersonId) => {
        if (listOptions.selectedPersonId === selectedPersonId) {
            setListOptions({ ...listOptions, selectedPersonId: null });
            return;
        }
        setListOptions({ ...listOptions, selectedPersonId });
    };

    const isInfoOpen = listOptions.selectedPersonId === person.id;
    const listItemClass = isInfoOpen ? styles.listItem_open : styles.listItem;

    return (
        <>
            <tr
                className={listItemClass}
                onClick={() => toggleSelectedPerson(person.id)}
            >
                {cells}
            </tr>
            <tr>
                <td colSpan={5} className={styles.itemInfoCell}>
                    {isInfoOpen ? <ListItemInfo person={person} /> : null}
                </td>
            </tr>
        </>
    );
}

export default ListItem;
