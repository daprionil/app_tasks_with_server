import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';
dayjs.extend(relativeTime);
dayjs.locale('es');

const getDate = (date) => {
    return dayjs(new Date(date)).fromNow();
};

export {
    getDate
}