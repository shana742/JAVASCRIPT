// 43)  Write a JavaScript program to convert an array of objects into CSV string ?
    
    function convertArrayToCSV(data) {
        const headers = Object.keys(data[0]);

        const csvRows = [];
        csvRows.push(headers.join(','));

        for (const row of data) {
            const values = headers.map(header => {
                const value = row[header];
                return typeof value === 'undefined' ? '' : value;
            });
            csvRows.push(values.join(','));
        }

        return csvRows.join('\n');
    }

// Example usage
const arrayOfObjects = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Alice', age: 25, city: 'San Francisco' },
    { name: 'Bob', age: 35, city: 'Seattle' }
];

const csvString = convertArrayToCSV(arrayOfObjects);
console.log(csvString);