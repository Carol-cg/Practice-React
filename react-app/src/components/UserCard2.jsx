function UserCard2({ name, role, email, location }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Email: {email}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserCard2;