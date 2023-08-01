import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const getFriendlyDate = (dateStr) => {
  dayjs.extend(relativeTime);

  const formatted = dayjs(dateStr).fromNow();

  return formatted;
};

export default getFriendlyDate;
