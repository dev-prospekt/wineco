

export default function Datee({ dateString }) {
  const date = new Date(dateString);

  return <span dateTime={dateString}>{date.toLocaleDateString('hr-HR')}</span>;
}