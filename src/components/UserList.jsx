import React from "react";

const indianUsers = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul.sharma@gmail.com"
  },
  {
    id: 2,
    name: "Priya Verma",
    phone: "+91 91234 56789",
    email: "priya.verma@gmail.com"
  },
  {
    id: 3,
    name: "Amit Patel",
    phone: "+91 99887 66554",
    email: "amit.patel@gmail.com"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    phone: "+91 93456 78123",
    email: "sneha.reddy@gmail.com"
  },
  {
    id: 5,
    name: "Arjun Singh",
    phone: "+91 98712 34567",
    email: "arjun.singh@gmail.com"
  },
  {
    id: 6,
    name: "Neha Gupta",
    phone: "+91 97654 32109",
    email: "neha.gupta@gmail.com"
  }
];

const UserList = () => {
  return (
    <div className="user-grid">
      {indianUsers.map((user) => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>📧 {user.email}</p>
          <p>📞 {user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;