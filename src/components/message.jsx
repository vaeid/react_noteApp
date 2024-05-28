export default function Message({ icon, children }) {
  return (
    <div>
      <p>
        {icon} - {children}
      </p>
    </div>
  );
}
