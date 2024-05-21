function ContactItem({ data: { name, id, lastName, email, phone } }) {
  return (
    <li key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📧</span>
        {email}
      </p>
      <p>
        <span>☎️</span>
        {phone}
      </p>
      <button>🗑️</button>
    </li>
  );
}

export default ContactItem;
