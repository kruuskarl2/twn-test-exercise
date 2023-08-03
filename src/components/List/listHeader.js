import HeaderItem from './headerItem';

import styles from './listHeader.module.css';

function ListHeader() {
    const sortableProperties = [
        { name: 'Eesnimi ', property: 'firstname' },
        { name: 'Perekonnanimi ', property: 'surname' },
        { name: 'Sugu ', property: 'sex' },
        { name: 'Sünnikuupäev ', property: 'date' },
    ];

    const headers = sortableProperties.map((property, index) => {
        return (
            <HeaderItem
                propertyName={property.name}
                sortingIndex={property.property}
                key={index}
            />
        );
    });

    return (
        <tr className={styles.root}>
            {headers}
            <HeaderItem propertyName={'Telefon '} />
        </tr>
    );
}

export default ListHeader;
