import dayjs from 'dayjs';

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDate(date: string | Date) {
    return dayjs(date).format('D MMMM YYYY');
}