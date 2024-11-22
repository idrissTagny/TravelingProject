import React from 'react'

export default function MainContent() {
  return (
    <div>
      <main>
    <h1>Analytics</h1>
    <div className="analyse">
      {[
        { label: "Total Sales", value: "$65,024", percentage: "+81%" },
        { label: "Site Visit", value: "24,981", percentage: "-48%" },
        { label: "Searches", value: "14,147", percentage: "+21%" },
      ].map((item, index) => (
        <div className={item.label.toLowerCase().replace(" ", "-")} key={index}>
          <div className="status">
            <div className="info">
              <h3>{item.label}</h3>
              <h1>{item.value}</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>{item.percentage}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="new-users">
      <h2>New Users</h2>
      <div className="user-list">
        {[
          { name: "Jack", time: "54 Min Ago", img: "images/profile-2.jpg" },
          { name: "Amir", time: "3 Hours Ago", img: "images/profile-3.jpg" },
          { name: "Ember", time: "6 Hours Ago", img: "images/profile-4.jpg" },
          { name: "More", time: "New User", img: "images/plus.png" },
        ].map((user, index) => (
          <div className="user" key={index}>
            <img src={user.img} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.time}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Number</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <a href="#">Show All</a>
    </div>
  </main>
    </div>
  )
}
