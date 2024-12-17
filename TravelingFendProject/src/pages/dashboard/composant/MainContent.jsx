import React from 'react'



export default function MainContent() {
  return (
    <div>
      <div className='Mlanding' >
        <div className='content'>
          <h1>
            <b>
              <p>Vous avez vos plans, on a vos bons plans</p>
            </b>
          </h1>
        </div>
      </div>
      <main>

      <h1>Rechercher un voyage</h1>

      <div className="analyse">
        <form >
              <div className="input-group mb-3">
                <span className="input-group-text material-icons-sharp" id="basic-addon1">trip_origin</span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Username" 
                  aria-label="Username" 
                  aria-describedby="basic-addon1" 
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text material-icons-sharp" id="basic-addon1">trip_origin</span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Username" 
                  aria-label="Username" 
                  aria-describedby="basic-addon1" 
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text material-icons-sharp" id="basic-addon1">calendar_month</span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Username" 
                  aria-label="Username" 
                  aria-describedby="basic-addon1" 
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text material-icons-sharp" id="basic-addon1">person_add</span>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Username" 
                  aria-label="Username" 
                  aria-describedby="basic-addon1" 
                />
              </div>

              <div className="input-group">
                <input type="submit"  value="Rechercher" className="btn btn-primary form-control" />
              </div>
        </form>
      </div>

      <div className="new-users">
        <h2>New voyage

        </h2>
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
