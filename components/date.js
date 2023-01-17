

export default function Datee({ dateString }) {
  const date = new Date(dateString);

  return <span className="max-[600px]:text-sm" dateTime={dateString}>{date.toLocaleDateString('hr-HR')}</span>;
}