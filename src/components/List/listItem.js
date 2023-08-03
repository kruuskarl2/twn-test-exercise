import { useMemo } from 'react';

import styles from './listItem.module.css';

function ListItem(props) {
    const { person } = props;

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
            lastName: person.lastname,
            sex,
            date,
            phone,
        };

        return Object.values(formattedPerson).map((property) => {
            return <td className={styles.cell}>{property}</td>;
        });
    }, [person]);

    return <>{cells}</>;
}

export default ListItem;
